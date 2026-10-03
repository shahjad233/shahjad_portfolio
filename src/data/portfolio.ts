// Only facts taken from the supplied images. Edit freely; items marked TODO are placeholders.
export const profile = {
  name: 'Shahjad',
  title: 'Software Developer',
  tagline: 'Clean code runs smoother.',
  intro: 'B.Tech Computer Science graduate building backend and full-stack applications, from secure messaging to streaming platforms.',
  availability: 'Backend developer, 6 months experience',
  email: 'shahjadra233@gmail.com', // TODO: replace
  phone: '+91 6268673508',        // TODO: replace
  github: 'https://github.com/shahjad233',    // TODO: https://github.com/username
  linkedin: 'https://www.linkedin.com/in/shahjad-rain-developer/',  // TODO: https://linkedin.com/in/username
  instagram: 'https://www.instagram.com/_shahjad_19/', // TODO: https://instagram.com/username
}
export const nav = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'universe', label: 'Skills' }, { id: 'journey', label: 'Journey' },
  { id: 'work', label: 'Work' }, { id: 'certs', label: 'Certifications' }, { id: 'contact', label: 'Contact' },
]
export const skillGroups = [
  { name: 'Languages', items: ['Python', 'Java', 'JavaScript'] },
  { name: 'Frontend', items: ['React', 'HTML5', 'CSS3'] },
  { name: 'Data and cloud', items: ['PostgreSQL', 'MySQL', 'Redis', 'AWS'] },
  { name: 'AI tools', items: ['Claude', 'ChatGPT'] },
]
export const timeline = [
  { year: '2019', title: 'Beginnings', text: 'Enrolled in a Diploma in Computer Science. Introduction to programming.' },
  { year: '2020', title: 'Foundations', text: 'Data structures, algorithms and operating systems.' },
  { year: '2022', title: 'Diploma complete', text: 'Diploma in CS awarded (2019–2022). Joined B.Tech, first semester.' },
  { year: '2023', title: 'B.Tech core', text: 'Advanced algorithms, computer networks and cloud computing.' },
  { year: '2024', title: 'Specialization', text: 'Artificial intelligence, data science, internship placement.' },
  { year: '2025', title: 'Innovation', text: 'Machine learning, cybersecurity, major project start.' },
  { year: '2026', title: 'The next chapter', text: 'Final B.Tech project, engineering degree awarded, career commenced as Backend Developer.' },
]
export const projects = [
  { title: 'Whisper App', category: 'Secure messaging', stack: ['Python', 'Django', 'PostgreSQL', 'AWS', 'Redis'], text: 'Secure, real-time communication platform optimized for cloud scalability.', demo: '', code: '', size: 'lg' },
  { title: 'Online Book Store', category: 'E-commerce', stack: ['MERN'], text: 'A marketplace for books with reviews and carts.', demo: '', code: '', size: 'md' },
  { title: 'Netflix Clone', category: 'Streaming platform', stack: ['TODO: stack'], text: 'Streaming interface with multiple user profiles.', demo: '', code: '', size: 'md' },
  { title: 'Education Website', category: 'Learning management', stack: ['TODO: stack'], text: 'Interactive course platform with progress tracking.', demo: '', code: '', size: 'md' },
  { title: 'Hotel Management', category: 'Management system', stack: ['TODO: stack'], text: 'Bookings, guest records and inventory management.', demo: '', code: '', size: 'md' },
]
export const certs = [
  { issuer: 'Oracle', name: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional', year: '2025' },
  { issuer: 'J.P. Morgan (Forage)', name: 'Software Engineering Job Simulation', year: '2024' },
  { issuer: 'One Roadmap', name: 'Full Stack Developer', year: '2024' },
  { issuer: 'One Roadmap', name: 'Python Developer', year: '2024' },
  { issuer: 'crio.do', name: 'Java Programming', year: '2024' },
]

// About copy is built only from your artwork. Edit to add more personal detail.
export const about = {
  heading: 'Clean code runs smoother.',
  paragraphs: [
    'I am Shahjad, a software developer with a B.Tech in Computer Science, building backend and full-stack applications. I am looking for a role as a Backend Developer.',
    'My path started with a Diploma in Computer Science in 2019 and moved through algorithms, networks, cloud computing, AI and cybersecurity, ending with a final-year engineering project.',
  ],
  focus: [
    { title: 'What I do', text: 'Backend and full-stack development with Python, Java, JavaScript and React, backed by PostgreSQL, MySQL, Redis and AWS.' },
    { title: 'How I work', text: 'Develop, deploy, debug, scale. Then iterate, keeping the codebase simple and smart.' },
    { title: 'What I am learning', text: 'Machine learning, data science and cybersecurity, with Oracle, J.P. Morgan and Crio certifications along the way.' },
  ],
}
