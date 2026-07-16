// Edit everything here to personalize the site — components never need to change.

export const profile = {
  name: 'Tanishq Bose',
  firstName: 'tanishq',
  lastName: 'bose',
  role: 'Electronics & Communication Engineer — Web, AI & Embedded Systems',
  location: 'Kolkata, India',
  email: 'tanishqbose80@gmail.com',
  resumeUrl: '/resume.pdf',
  bio: [
    "I build at the seam between hardware and software — from IoT sensors reading the physical world to interfaces that make that data make sense.",
    'My background is electronics engineering, my practice is frontend development, and the throughline is a habit of shipping things that work end to end rather than staying comfortable in one layer.',
  ],
}

export const skills = [
  { group: 'Engineering', items: ['Java', 'JavaScript','html', 'CSS', 'React', 'Node.js', 'C++'] },
  { group: 'Systems', items: ['Arduino', 'ESP32', 'IoT Protocols', 'Embedded C'] },
  { group: 'Tools', items: ['Git', 'Vite', 'Tailwind CSS', 'Figma'] },
  { group: 'Practice', items: ['Data Structures', 'Network', 'OOP'] },
]

export const projects = [
  {
    number: '01',
    title: 'blog platform',
    description:
      'A full-stack publishing platform — authentication, drafts, comments — built to feel instant.',
    tech: ['React', 'Node.js', 'appwrite'],
    image: 'https://picsum.photos/id/180/1200/1500',
    demo: '',
    github: 'https://github.com/your-username/blog-website',
  },
  {
    number: '02',
    title: 'currency converter',
    description:
      'Real-time exchange rates with a minimal, distraction-free interface built for speed over decoration.',
    tech: ['JavaScript', 'REST API'],
    image: 'https://picsum.photos/id/48/1200/1500',
    demo: '',
    github: 'https://github.com/your-username/currency-converter',
  },
  
  {
    number: '03',
    title: 'Smart Autonomous Braking    System ',
    description:
      'Developed an Arduino-based Smart Autonomous Braking System that detects obstacles using an ultrasonic sensor and automatically stops the vehicle to prevent collisions.',
    tech: ['Arduino', 'IoT', 'C++'],
    image: 'https://picsum.photos/id/1076/1200/1500',
    demo: '',
    github: 'https://github.com/your-username/smart-parking',
  },
  {
    number: '05',
    title: 'smart irrigation system',
    description:
      'Soil-moisture-driven irrigation control that waters on demand instead of on a fixed schedule.',
    tech: ['ESP32', 'IoT'],
    image: 'https://picsum.photos/id/1073/1200/1500',
    demo: '',
    github: 'https://github.com/Tanishq3010/SmartAutonomousBrakingSystem',
  },
]

export const experience = [
  {
    year: '2023-2027',
    role: 'Electronics and Communication (B.Tech.)',
    org: 'B.P. Poddar Institute of Management & Technology',
    description: 'Applying engineering principles to design innovative hardware and software solutions with real-world impact.',
  },
  {
    year: '2022',
    role: 'Higher Secondary (10+2) ',
    org: 'New Barrackpore Colony Boys High School ',
    description: 'Built a multidisciplinary foundation in Physics, Chemistry, Mathematics, and Biology, fostering scientific curiosity and critical thinking.',
  },
  {
    year: '2020',
    role: 'Class X (Madhyamik) ',
    org: 'New Barrackpore Colony Boys High School ',
    description: 'Completed secondary education with a strong foundation in mathematics, science, and logical reasoning, fostering analytical and problem-solving skills.',
  },
]

export const socials = {
  github: 'https://github.com/Tanishq3010',
  linkedin: 'https://www.linkedin.com/in/tanishq-bose-1a31852ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  leetcode: 'https://leetcode.com/u/Tanishq_Bose/',
}
