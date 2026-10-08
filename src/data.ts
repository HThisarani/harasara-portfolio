// Edit this file to update the site. Add github, demo and video links to a project when you have them.

export const profile = {
  name: 'Harasara Thisarani Kuruppu',
  role: 'Full-stack and frontend developer, software engineer, QA associate',
  looking: 'Open to junior, associate and entry-level roles',
  tagline: 'I build web apps that are easy to use, and I test them until they are reliable.',
  about:
    'I am a fresh IT graduate from SLIIT with a year of industry experience across the full software development lifecycle, plus four years of university project work. I like the part of software people actually touch: clear screens, fast pages and features that work the first time. I have built websites, mobile apps and IoT and machine learning projects, and I enjoy working in agile teams where I can design, build, test and improve a product together.',
  email: 'htkharasara@gmail.com',
  github: 'https://github.com/HThisarani',
  linkedin: 'https://linkedin.com/in/harasara-thisarani-79098a2b4',
  cv: './Harasara%20Thisarani%20Resume.pdf',
  photo: './Profile.jpeg',
}

export const stats = [
  { n: '1 year', t: 'of industry experience' },
  { n: '18+', t: 'projects across web, mobile and design' },
  { n: '2024', t: 'Dean\u2019s List at SLIIT' },
  { n: '10+', t: 'cloud and platform certifications' },
]

export const experience = [
  {
    title: 'Software Engineer Intern',
    org: 'Pina Vida SL PVT LTD (Brunelly)',
    period: 'Apr 2026 to Oct 2026',
    color: 'pink',
       points: [
      'Built and maintained frontend features for Brunelly, a project management platform, in Angular, TypeScript, HTML and SCSS.',
      'Upgraded the codebase from Angular 18 to 20 and documented the findings on Signals, the new control flow syntax and standalone components.',
      'Built responsive, mobile-first UI from Figma designs: mobile navigation, Kanban boards and responsive breakpoints.',
      'Delivered user onboarding flows, a project settings dashboard with 8 configurable sub-pages, and a reusable component library.',
      'Integrated the Tawk.to support platform, fixed frontend bugs, wrote test cases and reported defects before release.',
      'Worked in a full Scrum cycle with designers, backend developers, QA and a business analyst, using Azure DevOps and code reviews.',
    ],
  },
  {
    title: 'Research Assistant, IoT and Machine Learning',
    org: 'SLIIT',
    period: '2025 to Jul 2026',
    color: 'sky',
    points: [
      'Researched and built IoT integrations and machine learning applications for real-world use.',
      'Built backend systems and machine learning models in Python.',
      'Developed cross-platform mobile apps in React Native, using Expo Go for testing and deployment.',
    ],
  },
  {
    title: 'Full Stack Development Intern',
    org: 'Regional Development Bank (Head Office IT Department)',
    period: 'Dec 2024 to Jun 2025',
    color: 'mint',
    points: [
      'Built frontend and backend modules in CodeIgniter (PHP) and improved internal systems.',
      'Wrote requirements documents (SRS), designed test cases, and ran manual testing and user acceptance testing.',
      'Contributed to UI/UX design improvements.',
      'Supported ISO 27001 information security documentation, helping the bank keep its systems and data protected.',
    ],
  },
]

// github, demo (live site) and video are optional. Add them as you get the links.
export type Project = { name: string; kind: string; color: string; text: string; stack: string[]; link?: string; github?: string; demo?: string; video?: string }

export const projects: Project[] = [
  { name: 'Tea Factory Machine Alert System', kind: 'Mobile', color: 'mint', text: 'A mobile app that gives real-time alerts about tea processing machines, so problems reach people quickly. Python services power it.', stack: ['React Native', 'Python'] },
  { name: 'Inventory Management System (Laravel + Vue)', kind: 'Web', color: 'violet', text: 'A secure system to manage products and stock, with a complete history of every transaction.', stack: ['Laravel 9', 'Vue 3', 'Inertia.js', 'Tailwind CSS', 'MySQL'] },
  { name: 'Skill Sharing Platform', kind: 'Web', color: 'pink', text: 'A full-stack web app where people share what they know and learn from others.', stack: ['Spring Boot', 'React', 'MongoDB'] },
  { name: 'PetPulse', kind: 'Web', color: 'yellow', text: 'A pet healthcare platform where owners can book veterinary appointments.', stack: ['MongoDB', 'Express', 'React', 'Node'] },
  { name: 'Salon Management System', kind: 'Web', color: 'sky', text: 'A salon system split into small services behind one API gateway, with the APIs documented in Swagger.', stack: ['Python', 'Flask', 'SQLite', 'Flasgger'] },
  { name: 'Exam Timetable System', kind: 'Web', color: 'mint', text: 'A web app that builds exam timetables automatically.', stack: ['Laravel', 'React', 'MySQL'] },
  { name: 'Research Documentation Website', kind: 'Web', color: 'violet', text: 'A project website that presents research documents and findings, deployed on Vercel.', stack: ['React', 'Vercel'] },
  { name: 'Medicine Reminder App', kind: 'Web', color: 'pink', text: 'A medicine schedule and reminder system where you can add, view, update and delete your medicines.', stack: ['PHP', 'MySQL'] },
  { name: 'Inventory Management System (PHP)', kind: 'Web', color: 'yellow', text: 'A system for managing products and stock levels.', stack: ['PHP', 'MySQL'] },
  { name: 'Novel Nest', kind: 'Mobile', color: 'sky', text: 'An Android app for organizing the books you read.', stack: ['Kotlin', 'SQLite'] },
  { name: 'Swiftspin Laundry System', kind: 'Other', color: 'mint', text: 'A platform for placing laundry orders and paying for them.', stack: ['Java', 'MySQL'] },
  { name: 'Business Plan Documentation', kind: 'Other', color: 'violet', text: 'A full business plan written for a university project.', stack: ['Documentation'] },
  { name: 'Zara Webpage Redesign', kind: 'Design', color: 'pink', text: 'A redesign of the Zara webpage with a better user experience and modernized visuals.', stack: ['Figma'] },
  { name: 'Melomix Music App', kind: 'Design', color: 'yellow', text: 'A music app interface built around simple, intuitive navigation.', stack: ['Figma'] },
  { name: 'Online Fashion Store App', kind: 'Design', color: 'sky', text: 'A user-friendly shopping flow and product screens for a fashion store.', stack: ['Figma'] },
  { name: 'Online Delivery App', kind: 'Design', color: 'mint', text: 'A clean, minimal interface for ordering and tracking food delivery.', stack: ['Figma'] },
  { name: 'Vet Appointment and Schedule System', kind: 'Design', color: 'violet', text: 'Screens for booking and managing veterinary sessions.', stack: ['Figma'] },
  { name: 'Event Management Dashboard', kind: 'Design', color: 'pink', text: 'A clear, intuitive dashboard for managing events.', stack: ['Figma'] },
]

// span is the card width on desktop (3 = half the row, 2 = a third). icon is the small badge on each card.
// Spans in each row add up to 6, so the cards line up. Order: 3+3, 2+2+2, 3+3, 2+2+2, 3+3, 3+3.
export const skills = [
  { group: 'Programming languages', icon: '</>', span: 3, items: ['Java', 'Kotlin', 'Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++'] },
  { group: 'Web frameworks', icon: '{ }', span: 3, items: ['Angular', 'React', 'Vue 3', 'Inertia.js', 'Laravel', 'Laravel Breeze', 'CodeIgniter', 'Spring Boot', 'Flask', 'MERN stack', 'React Native'] },
  { group: 'Web tools and libraries', icon: 'Web', span: 2, items: ['HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Vite', 'Postman', 'Responsive design', 'Mobile-first UI', 'API integration', 'Tawk.to'] },
  { group: 'Mobile development', icon: 'App', span: 2, items: ['React Native', 'React Native (Expo Go)', 'Android Studio', 'SQLite'] },
  { group: 'Databases', icon: 'DB', span: 2, items: ['MySQL', 'SQLite', 'MongoDB', 'PhpMyAdmin'] },
  { group: 'Testing and QA', icon: 'QA', span: 3, items: ['Selenium IDE', 'Cypress', 'QA Automation', 'Manual Testing', 'Test Case Design', 'UAT'] },
  { group: 'Machine learning and IoT', icon: 'ML', span: 3, items: ['Python ML applications', 'IoT integration', 'Data analysis'] },
  { group: 'Design and UI/UX', icon: 'UI', span: 2, items: ['Figma', 'Mockflow', 'Canva'] },
  { group: 'Business intelligence and analysis', icon: 'BI', span: 2, items: ['Power BI', 'Business Analysis', 'Business Plan Documentation'] },
  { group: 'Version control and deployment', icon: 'Git', span: 2, items: ['Git', 'GitHub', 'Azure', 'AWS', 'Vercel'] },
  { group: 'Project management', icon: 'PM', span: 3, items: ['Microsoft Planner', 'Azure DevOps', 'Scrum', 'Kanban boards', 'Code reviews'] },
  { group: 'Collaboration', icon: 'Team', span: 3, items: ['OneDrive', 'Google Drive', 'Google Forms', 'MS Teams', 'Zoom', 'Gmail'] },
  { group: 'Office and productivity', icon: 'Doc', span: 3, items: ['MS Word', 'Excel', 'PowerPoint'] },
  { group: 'Soft skills', icon: 'You', span: 3, items: ['Communication', 'Teamwork', 'Leadership', 'Problem-Solving', 'Critical Thinking'] },
]

// Skills used in my internships and research. Names must match the items above exactly.
export const usedAtWork = [
  'Angular', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'Responsive design', 'Mobile-first UI', 'API integration', 'Tawk.to',
  'PHP', 'CodeIgniter',
  'Python', 'Python ML applications', 'IoT integration', 'React Native', 'React Native (Expo Go)',
  'Manual Testing', 'Test Case Design', 'UAT',
  'Azure DevOps', 'Git', 'Scrum', 'Kanban boards', 'Code reviews', 'Figma',
]

export const education = [
  'BSc (Hons) in Information Technology (specialized in IT), SLIIT, 2022 to 2026. Graduated.',
  'Higher Diploma in Information Technology, SLIIT, 2022 to 2024.',
  'G.C.E. Advanced Level, Physical Science stream, Bandarawela Central College, 2018 to 2020.',
]

export const certifications = [
  { name: 'AWS Academy Graduate: Cloud Web Application Builder', issuer: 'Amazon Web Services', year: '2025', badge: 'AWS' },
  { name: 'AWS Skill Builder: Auto-Healing and Scaling, Networking Fundamentals, Relational Databases', issuer: 'Amazon Web Services', year: '2025', badge: 'AWS' },
  { name: 'Azure: Blob Storage, Virtual Machines, Networking, Relational Databases', issuer: 'Microsoft Learn', year: '2025', badge: 'MS' },
  { name: 'Azure Physical Infrastructure', issuer: 'Microsoft Learn Student Ambassadors', year: 'Sep 2024', badge: 'MS' },
  { name: 'Microsoft Power Apps: Canvas App', issuer: 'Microsoft Power Platform', year: '2026', badge: 'MS' },
]

// Add more achievements here.
export const achievements = [
  { title: 'SLIIT Scholarship for superior academic performance', org: 'SLIIT', year: '2025', badge: 'SCH' },
  { title: 'Dean\u2019s List: Certificate for Academic Excellence', org: 'SLIIT', year: '2024', badge: 'DL' },
  { title: 'School Prefect: leadership, responsibility and commitment', org: 'Bandarawela Central College', year: '2017 to 2020', badge: 'P' },
]

// The files shown when you click "Click here to see certificates" / "achievements".
// File names must match the files in public/Certificates and public/Achievements exactly (capital letters count).
export type FileGroup = { group: string; files: { label: string; url: string }[] }
const file = (folder: string, name: string) => encodeURI(`./${folder}/${name}`)

export const certificateFiles: FileGroup[] = [
  {
    group: 'AWS Academy Graduate: Cloud Web Application Builder',
    files: [{ label: 'Training badge', url: file('Certificates', 'AWS_Academy_Graduate___Cloud_Web_Application_Builder___Training_Badge_Badge20251002-31-m3h6kh.pdf') }],
  },
  {
    group: 'AWS Skill Builder',
    files: [
      { label: 'AWS SimuLearn: Computing Solutions', url: file('Certificates', 'AWS Skill Builder  Certificate IT22105448.pdf') },
      { label: 'Auto-Healing and Scaling', url: file('Certificates', 'AWS SimuLearn Auto-Healing and Scaling Applications.pdf') },
      { label: 'Networking Concepts', url: file('Certificates', 'AWS Skill Builder - Networking Concepts.pdf') },
      { label: 'Relational Databases', url: file('Certificates', 'AWS Skill Builder - Relational Databases.pdf') },
      { label: 'Connecting VPCs', url: file('Certificates', 'AWS Skill Builder - Connecting VPCsURL.pdf') },
      { label: 'Highly Available Web Applications', url: file('Certificates', 'AWS Skill Builder - Highly Available Web Applications.pdf') },
      { label: 'Amazon S3', url: file('Certificates', 'AWS Skill Builder - Introduction to Amazon Simple Storage Service (S3).pdf') },
      { label: 'File Systems in the Cloud', url: file('Certificates', 'AWS SimuLearn File Systems in the Cloud.pdf') },
      { label: 'Core Security Concepts', url: file('Certificates', 'AWS SimuLearn-Core Security Concepts.pdf') },
    ],
  },
  {
    group: 'Microsoft Learn: Azure',
    files: [
      { label: 'Blob Storage', url: file('Certificates', 'Microsoft Learn - Configure Azure Blob Storage.pdf') },
      { label: 'VM Availability', url: file('Certificates', 'Microsoft Learn - Configure Virtual Machine Availability.pdf') },
      { label: 'VM Disks', url: file('Certificates', 'Microsoft Learn - Add and size disks in Azure virtual machines.pdf') },
      { label: 'Virtual Networks', url: file('Certificates', 'Microsoft Learn - Configure Virtual NetworksURL.pdf') },
      { label: 'Relational Databases', url: file('Certificates', 'Microsoft Learn - Relational Databases.pdf') },
      { label: 'Load Balancers', url: file('Certificates', 'Microsoft Learn - Load Balancers.pdf') },
      { label: 'Identity and Access Security', url: file('Certificates', 'Microsoft Learn - Describe Azure identity access security.pdf') },
    ],
  },
]

export const achievementFiles: FileGroup[] = [
  {
    group: 'SLIIT Scholarship and Dean\u2019s List',
    files: [
      { label: 'Scholarship', url: file('Achievements', 'Scholarship.pdf') },
      { label: 'Academic certificate (Dean\u2019s List)', url: file('Achievements', 'Academic_Certificate_Harasara_Thisarani.pdf') },
    ],
  },
]