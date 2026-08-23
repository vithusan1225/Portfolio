import profileImage from './Profile_pic.jpeg';
import resumeUrl from './Professional CV Resume.pdf';

export const personalInfo = {
  name: 'Vithusan S',
  title: 'Full Stack Developer',
  email: 'vithusan2909@gmail.com',
  phone: '+94772487639',
  location: 'Sri Lanka',
  bio: 'I am a passionate full-stack developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean, scalable digital experiences using React, Node.js, Java, Spring Boot, and modern UI engineering practices. I\'m always exploring new technologies, improving my skills, and building projects that solve real-world problems.',
  resumeUrl,
  profileImage,
  socials: {
    github: 'https://github.com/vithusan1225',
    linkedin: 'https://www.linkedin.com/in/vithusan-santhirakumar-203473232/',
    twitter: 'https://x.com/VithusanSa22965',
    instagram: 'https://www.instagram.com/vithusan1225/',
    facebook: 'https://www.facebook.com/vithusan.santhirakumar',
  }
};

export const skills = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 80, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Express.js', level: 85, category: 'Backend' },
  { name: 'MongoDB', level: 82, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Backend' },
  { name: 'Python', level: 70, category: 'Backend' },
  { name: 'Git', level: 88, category: 'Tools' },
  { name: 'Docker', level: 72, category: 'Tools' },
];

export const projects = [
  {
    id: 1,
    title: 'Portfolio',
    description: 'A personal portfolio website built to showcase my technical work, skills, and professional profile with a clean modern UI.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Portfolio'],
    category: 'Frontend',
    liveUrl: 'https://github.com/vithusan1225/Portfolio',
    githubUrl: 'https://github.com/vithusan1225/Portfolio',
  },
  {
    id: 2,
    title: 'MyMusic',
    description: 'A music-focused web project designed around listening experiences, modern UI design, and interactive front-end functionality.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600',
    tags: ['React', 'TypeScript', 'Music UI', 'Frontend'],
    category: 'Frontend',
    liveUrl: 'https://github.com/vithusan1225/MyMusic',
    githubUrl: 'https://github.com/vithusan1225/MyMusic',
  },
  {
    id: 3,
    title: 'uniFinder',
    description: 'A university discovery and information project designed to help users explore institutions and relevant academic details more easily.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    tags: ['PHP', 'Web App', 'University', 'Research'],
    category: 'Full Stack',
    liveUrl: 'https://github.com/vithusan1225/uniFinder',
    githubUrl: 'https://github.com/vithusan1225/uniFinder',
  },
  {
    id: 4,
    title: 'IT3003_A2_AI-Assisted-Programming',
    description: 'An AI-assisted programming assignment project focused on practical application of coding workflows, automation, and intelligent development support.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600',
    tags: ['Java', 'AI', 'Programming', 'Automation'],
    category: 'Full Stack',
    liveUrl: 'https://github.com/vithusan1225/IT3003_A2_AI-Assisted-Programming',
    githubUrl: 'https://github.com/vithusan1225/IT3003_A2_AI-Assisted-Programming',
  },
  {
    id: 5,
    title: 'react-app',
    description: 'A React application used for learning and practicing modern component-based front-end development and UI architecture.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
    tags: ['React', 'JavaScript', 'UI', 'Learning'],
    category: 'Frontend',
    liveUrl: 'https://github.com/vithusan1225/react-app',
    githubUrl: 'https://github.com/vithusan1225/react-app',
  },
  {
    id: 6,
    title: 'Check',
    description: 'A JavaScript-based project focused on practical coding exercises and understanding application behavior through small web implementations.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600',
    tags: ['JavaScript', 'Practice', 'Web App', 'Coding'],
    category: 'Frontend',
    liveUrl: 'https://github.com/vithusan1225/Check',
    githubUrl: 'https://github.com/vithusan1225/Check',
  },
];

export const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Independent / Freelance',
    duration: '2023 - Present',
    description: 'Developing modern web applications and user-focused digital products with a strong emphasis on frontend quality, performance, and maintainable architecture.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Digital Product Team',
    duration: '2021 - 2023',
    description: 'Built responsive interfaces and reusable UI components while collaborating on product design, API integration, and user experience improvements.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'Startup Projects',
    duration: '2019 - 2021',
    description: 'Created polished web experiences for startups and businesses, including landing pages, dashboards, and responsive interfaces tailored to client needs.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'Creative Studio',
    duration: '2018 - 2019',
    description: 'Learned the fundamentals of web development and collaborated with designers to translate concepts into functional, visually appealing websites.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Nimal Perera',
    role: 'Product Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    text: 'Vithusan brings a strong balance of technical skill and design thinking. He creates clean interfaces and turns ideas into practical, functional experiences.',
  },
  {
    id: 2,
    name: 'Kavinda Silva',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    text: 'Working with Vithusan was smooth and productive. He always listens carefully, communicates clearly, and delivers reliable results on time.',
  },
  {
    id: 3,
    name: 'Harini Fernando',
    role: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    text: 'His frontend implementation is polished and thoughtful. He understands user experience and builds interfaces that feel both modern and intuitive.',
  },
  {
    id: 4,
    name: 'Dulan Jayasekara',
    role: 'Engineering Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    text: 'Vithusan is dependable, adaptable, and very detail-oriented. He consistently delivers quality work and solves problems with a practical mindset.',
  },
];
