import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

import type { Project, FileGroup } from './data'
import { details } from './details'
import { profile, stats, experience, projects, skills, education, certifications, achievements, usedAtWork, certificateFiles, achievementFiles } from './data'
const d = (i: number) => ({ '--i': i }) as CSSProperties
// Your best 4 to 6 projects. Change these names to feature different ones.
const featuredNames = [
  'Tea Factory Machine Alert System',
  'Inventory Management System (Laravel + Vue)',
  'Skill Sharing Platform',
  'PetPulse',
  'Salon Management System',
  'Research Documentation Website',
]
const tech = ['Angular', 'React', 'TypeScript', 'Vue 3', 'Python', 'Spring Boot', 'Laravel', 'React Native', 'Cypress', 'Azure DevOps', 'AWS', 'Figma']
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Shows ./projects/<slug>.png from the public folder, or a styled preview if the screenshot is missing.
function Shot({ p }: { p: Project }) {
  const [ok, setOk] = useState(true)
  return (
    <div className="shot sm">
      <div className="chrome"><i /><i /><i /></div>
      {ok ? (
        <img src={`./projects/${slug(p.name)}.png`} alt={`${p.name} screenshot`} loading="lazy" onError={() => setOk(false)} />
      ) : (
        <div className={`mock k-${p.kind}`} aria-hidden="true"><b>{p.name}</b><span /><span /><span /></div>
      )}
    </div>
  )
}

function Links({ p }: { p: Project }) {
  const gh = p.github || p.link
  if (!gh && !p.demo && !p.video) return null
  return (
    <div className="links">
      {gh && <a className="btn" href={gh} target="_blank" rel="noreferrer">GitHub</a>}
      {p.demo && <a className="btn primary" href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
      {p.video && <a className="btn" href={p.video} target="_blank" rel="noreferrer">Watch video</a>}
    </div>
  )
}

// Counts up to the number when it scrolls into view (years like 2024 are shown as they are).
function Stat({ n, t }: { n: string; t: string }) {
  const m = /^(\d+)(.*)$/.exec(n)
  const target = m ? Number(m[1]) : 0
  const animate = !!m && target < 1000
  const [val, setVal] = useState(animate ? 0 : target)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!animate || !ref.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(target); return }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (now: number) => {
        const k = Math.min(1, (now - t0) / 1200)
        setVal(Math.round(target * (1 - Math.pow(1 - k, 3))))
        if (k < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [animate, target])
  return <div ref={ref}><strong>{m ? (animate ? val : m[1]) + m[2] : n}</strong><span>{t}</span></div>
}

// One button that opens a list of files (used for certificates and achievements).
function FileList({ title, groups }: { title: string; groups: FileGroup[] }) {
  return (
    <details className="filebox reveal">
      <summary className="btn primary">{title}</summary>
      <div className="filegroups">
        {groups.map((g) => (
          <div key={g.group}>
            <h3>{g.group}</h3>
            <ul className="chips files">
              {g.files.map((f) => (
                <li key={f.url}><a href={f.url} target="_blank" rel="noreferrer">{f.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  )
}

function Section({ id, title, intro, children, tone = '' }: { id: string; title: string; intro: string; children: ReactNode; tone?: string }) {
  return (
    <section id={id} className={`section ${tone}`.trim()}>
      <div className="wrap">
        <h2 className="reveal">{title}</h2>
        {intro && <p className="lead reveal" style={d(1)}>{intro}</p>}
        {children}
      </div>
    </section>
  )
}

export default function App() {
  const featured = featuredNames.map((n) => projects.find((p) => p.name === n)!).filter(Boolean)
  const rest = projects.filter((p) => !featuredNames.includes(p.name))
  const kinds = ['All', ...Array.from(new Set(rest.map((p) => p.kind)))]
  const [kind, setKind] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [menu, setMenu] = useState(false)
  const [photo, setPhoto] = useState(true)
  const [active, setActive] = useState('')
  const filtered = rest.filter((p) => kind === 'All' || p.kind === kind)
  const shown = showAll || kind !== 'All' ? filtered : filtered.slice(0, 6)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.1 },
    )
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [kind, showAll])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--p', String(max > 0 ? window.scrollY / max : 0))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;['about', 'skills', 'projects', 'experience', 'certifications', 'achievements', 'contact'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Mouse glow on cards
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('.project, .skill-card, .job, .cert')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  const nav = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'], ['certifications', 'Certificates'], ['achievements', 'Achievements']]

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <header className="top">
        <div className="wrap bar">
          <a href="#top" className="brand">Harasara Kuruppu</a>
          <button className="burger" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? 'Close' : 'Menu'}</button>
          <nav aria-label="Main" className={menu ? 'open' : ''} onClick={() => setMenu(false)}>
            {nav.map(([id, label]) => (<a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>))}
            <a href="#contact" className="btn primary">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <p className="status">{profile.looking}</p>
                <h1>{profile.name}</h1>
                <p className="role">{profile.role}</p>
                <p className="tagline">{profile.tagline}</p>
                <p className="cta">
                  <a className="btn primary" href="#projects">See my projects</a>
                  <a className="btn" href={profile.cv} target="_blank" rel="noreferrer">See my CV</a>
                  <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
                </p>
              </div>
              <div className="photo-wrap">
                {photo ? (
                  <img className="photo" src={profile.photo} alt={profile.name} onError={() => setPhoto(false)} />
                ) : (
                  <div className="photo initials" aria-hidden="true">HTK</div>
                )}
              </div>
            </div>
            <div className="facts">
              {stats.map((s) => (<Stat key={s.t} n={s.n} t={s.t} />))}
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">{[...tech, ...tech].map((t, i) => <span key={i}>{t}</span>)}</div>
        </div>

        <Section id="about" title="About me" intro="">
          <div className="about">
            <div>
              <p className="reveal">{profile.about}</p>
              <div className="target reveal" style={d(1)}>
                <strong>Looking for</strong>
                <span>{profile.role}</span>
                <span>{profile.looking}</span>
              </div>
              <div className="cv-box reveal" style={d(2)}>
                <strong>My CV</strong>
                <div className="cta">
                  <a className="btn primary" href={profile.cv} target="_blank" rel="noreferrer">Click here to see my CV</a>
                  <a className="btn" href={profile.cv} download>Download</a>
                </div>
              </div>
            </div>
            <div className="reveal" style={d(1)}>
              <h3>Education</h3>
              <ul className="edulist">{education.map((e) => <li key={e}>{e}</li>)}</ul>
            </div>
          </div>
        </Section>

        <Section id="skills" tone="soft" title="Skills" intro="The languages, frameworks, databases and tools I work with.">
          <div className="work-skills reveal">
            <strong>Used in my internships and research</strong>
            <ul className="chips">{usedAtWork.map((item) => <li key={item} className="hot">{item}</li>)}</ul>
          </div>
          <div className="bento">
            {skills.map((s, i) => (
              <div key={s.group} className={`skill-card reveal span-${s.span}`} style={d(i % 3)}>
                <div className="skill-head">
                  <span className="seal">{s.icon}</span>
                  <h3>{s.group}</h3>
                  <span className="count">{s.items.length}</span>
                </div>
                <ul className="chips">{s.items.map((item) => <li key={item} className={usedAtWork.includes(item) ? 'hot' : ''}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <section id="projects" className="section">
          <div className="wrap">
            <h2 className="reveal">Projects</h2>
            <p className="lead reveal" style={d(1)}>My best work, with source code, screenshots and demos.</p>
            <div className="cards two">
              {featured.map((p, i) => (
                <article key={p.name} className="project reveal" style={d(i % 2)}>
                  <Shot p={p} />
                  <span className="tag">{p.kind}</span>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <ul className="pts">{(details[p.name] || []).slice(0, 3).map((f) => <li key={f}>{f}</li>)}</ul>
                  <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                  <Links p={p} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <Section id="more" title="More projects" intro="Web, mobile and design work. Filter by type, and open More details on any card.">
          <div className="filters" role="group" aria-label="Filter projects">
            {kinds.map((k) => (<button key={k} className={k === kind ? 'on' : ''} aria-pressed={k === kind} onClick={() => setKind(k)}>{k}</button>))}
          </div>
          <div className="cards">
            {shown.map((p, i) => (
              <article key={kind + p.name} className="project reveal" style={d(i % 3)}>
                <Shot p={p} />
                <span className="tag">{p.kind}</span>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                {details[p.name] && (
                  <details className="more">
                    <summary>More details</summary>
                    <ul>{details[p.name].map((f) => <li key={f}>{f}</li>)}</ul>
                  </details>
                )}
                <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <Links p={p} />
              </article>
            ))}
          </div>
          {kind === 'All' && !showAll && filtered.length > 6 && (
            <p className="showall"><button className="btn" onClick={() => setShowAll(true)}>Show all {rest.length} projects</button></p>
          )}
        </Section>

        <Section id="experience" tone="soft" title="Experience" intro="Where I have worked and what I did there.">
          <div className="jobs">
            {experience.map((j, i) => (
              <article key={j.title} className="job reveal" style={d(i)}>
                <p className="meta"><strong>{j.period}</strong></p>
                <h3>{j.title}</h3>
                <p className="meta">{j.org}</p>
                <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications" intro="Cloud and platform certifications from AWS and Microsoft.">
          <div className="certs">
            {certifications.map((c, i) => (
              <article key={c.name} className="cert reveal" style={d(i % 3)}>
                <span className="seal">{c.badge}</span>
                <h3>{c.name}</h3>
                <p className="meta">{c.issuer} | {c.year}</p>
              </article>
            ))}
          </div>
          <FileList title="Click here to see certificates" groups={certificateFiles} />
        </Section>

        <Section id="achievements" tone="soft" title="Achievements" intro="Academic and leadership recognition.">
          <div className="certs">
            {achievements.map((x, i) => (
              <article key={x.title} className="cert reveal" style={d(i % 3)}>
                <span className="seal">{x.badge}</span>
                <h3>{x.title}</h3>
                <p className="meta">{x.org} | {x.year}</p>
              </article>
            ))}
          </div>
          <FileList title="Click here to see achievements" groups={achievementFiles} />
        </Section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Let&rsquo;s build something together</h2>
            <p className="lead">I am looking for a junior, associate or entry-level role as a full-stack developer, frontend developer, software engineer or QA associate. Email is the quickest way to reach me.</p>
            <p className="cta">
              <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
              <a className="btn" href={profile.linkedin}>LinkedIn</a>
              <a className="btn" href={profile.github}>GitHub</a>
            </p>
          </div>
        </section>
      </main>
      <footer><div className="wrap">Harasara Thisarani Kuruppu, Sri Lanka</div></footer>
    </>
  )
}