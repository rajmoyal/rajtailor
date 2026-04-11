export const siteData = {
  name: "Raj Tailor",
  role: "Full-Stack Developer",
  tagline: "Building scalable and user-friendly digital experiences",
  email: "rajtailor9694@gmail.com",
  linkedin: "https://www.linkedin.com/in/raj-tailor-035730237",
  // github: "https://github.com/YOUR_GITHUB",
  // resume: "/resume.pdf", // place your resume PDF in /public/resume.pdf

  about: {
    bio: [
      "Hi, I'm Raj Tailor - a passionate Full-Stack Developer from Jaipur, India, with hands-on experience building modern web applications from the ground up.",
      "I specialize in two powerful stacks: the MERN ecosystem (MongoDB, Express, React, Node.js) for fast, scalable JavaScript applications, and Laravel + Vue.js for robust, PHP-driven platforms with reactive frontends.",
      "I'm driven by clean architecture, elegant UI, and performance. When I'm not coding, I'm exploring new technologies and contributing to meaningful projects.",
    ],
    highlights: [
      { label: "Experience",  value: "3+ Years" },
      { label: "Projects",    value: "15+"      },
      { label: "Tech Stacks", value: "2 Core"   },
      { label: "Commitment",  value: "100%"      },
    ],
  },

  skills: [
    {
      category: "Frontend",
      icon: "🎨",
      color: "blue",
      items: ["React.js", "Vue.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "purple",
      items: ["Node.js", "Nest.js", "Express.js", "Laravel", "PHP", "REST APIs", "JWT Auth", "WebSockets"],
    },
    {
      category: "Database",
      icon: "🗄️",
      color: "cyan",
      items: ["MongoDB", "MySQL", "Redis", "Eloquent ORM", "Mongoose"],
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      color: "blue",
      items: ["Git & GitHub", "Docker", "Postman", "VS Code", "Linux", "Vercel", "CI/CD"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "ShopEase",
      subtitle: "E-Commerce Platform",
      description: "A full-featured multi-vendor e-commerce platform with real-time inventory management, Stripe payment integration, and a powerful admin dashboard for order tracking and analytics.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
      live: "#",
      github: "#",
      gradient: "from-blue-500/20 to-cyan-500/10",
      accent: "#4F8EF7",
    },
    {
      id: 2,
      name: "TaskFlow",
      subtitle: "Project Management Tool",
      description: "Trello-inspired project management app with drag-and-drop Kanban boards, real-time collaboration via WebSockets, deadline tracking, and email notifications.",
      tech: ["Laravel", "Vue.js", "MySQL", "Pusher", "Vuex"],
      live: "#",
      github: "#",
      gradient: "from-purple-500/20 to-pink-500/10",
      accent: "#8B5CF6",
    },
    {
      id: 3,
      name: "MediBook",
      subtitle: "Doctor Appointment System",
      description: "Healthcare booking platform where patients search doctors by specialty, book appointments, and receive automated reminders. Doctors manage availability and patient records.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Nodemailer"],
      live: "#",
      github: "#",
      gradient: "from-cyan-500/20 to-teal-500/10",
      accent: "#22D3EE",
    },
    {
      id: 4,
      name: "StockPro",
      subtitle: "Inventory Management System",
      description: "Enterprise-grade inventory system with stock tracking, supplier management, automated low-stock alerts, purchase order generation, and detailed PDF reporting.",
      tech: ["Laravel", "Vue.js", "PostgreSQL", "DomPDF", "Docker"],
      live: "#",
      github: "#",
      gradient: "from-violet-500/20 to-indigo-500/10",
      accent: "#8B5CF6",
    },
  ],

  experience: [
    {
      year: "2024 – Present",
      role: "Full-Stack Developer",
      company: "Freelance / Remote",
      description: "Building custom web applications for clients using MERN stack and Laravel + Vue.js. Delivering end-to-end solutions from UI design to deployment.",
      tech: ["React", "Node.js", "Laravel", "Vue.js", "MongoDB"],
    },
    {
      year: "2023 – 2024",
      role: "Junior Full-Stack Developer",
      company: "Tech Startup - Jaipur",
      description: "Worked on multiple product features across frontend and backend. Built RESTful APIs, implemented JWT auth flows, and contributed to Laravel-based admin panels.",
      tech: ["Laravel", "Vue.js", "MySQL", "REST API"],
    },
    {
      year: "2022 – 2023",
      role: "Frontend Developer Intern",
      company: "Digital Agency - Jaipur",
      description: "Developed responsive UI components with React and Vue.js. Collaborated with designers and backend developers to ship client-facing web applications.",
      tech: ["React", "Vue.js", "Tailwind CSS", "JavaScript"],
    },
    {
      year: "2021 – 2022",
      role: "Self-Learning & Projects",
      company: "Personal Development",
      description: "Deep-dived into web development fundamentals - HTML, CSS, JS, then React and Laravel. Built 10+ personal projects to solidify full-stack skills.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ],
};
