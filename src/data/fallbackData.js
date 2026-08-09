export const fallbackData = {
  about: {
    name: "Janmejaya Nanda",
    title: "Java Full-Stack Developer | Spring Boot | JWT Security | React | MySQL",
    bio: "Results-driven Java Full-Stack Developer (MCA 2026, CGPA: 8.31/10) with proven experience designing and building efficient, reusable Spring REST APIs using Spring Boot, JWT Security, and MySQL. Skilled in architecting modular backend systems with 13-domain package structure, role-based access control, global exception handling, and cloud deployments on Render & Netlify.",
    location: "Bhubaneswar, Odisha, India",
    email: "janmejayananda326@gmail.com",
    phone: "+91-8260674792",
    cgpa: "8.31 / 10",
    degree: "MCA (Master of Computer Applications)",
    availableForWork: true,
    resumeUrl: "/Janmejaya_Resume_Final.pdf",
    stats: [
      { label: "MCA CGPA", value: "8.31" },
      { label: "REST APIs Built", value: "15+" },
      { label: "Domain Packages", value: "13" },
      { label: "Backend Projects", value: "4+" }
    ]
  },

  projects: [
    {
      id: "project-1",
      title: "Placement Automation System",
      category: "Java Full-Stack & Spring Boot",
      period: "April 2026 – May 2026",
      featured: true,
      isBackend: true,
      description: "Production-grade modular monolith architecture with 13 domain packages, JWT stateless authentication, role-based access control (Student & Recruiter), and 10+ REST APIs.",
      techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "Spring REST", "React", "MySQL", "JPA/Hibernate", "Render", "Netlify"],
      liveUrl: "https://janmejaya-placement-automation-system.netlify.app",
      githubUrl: "https://github.com/janmejayananda955/Placement_Automation_and_Student_Requirement_System",
      architectureDetails: {
        packages: ["student", "company", "job", "auth", "security", "notification", "admin", "role", "config", "exception", "util"],
        highlights: [
          "13 Domain Packages enterprise separation of concerns",
          "JWT-based stateless authentication & Filter chain validation",
          "Strict 3-Layer Architecture (Controller → Service → Repository)",
          "Global Exception Handling via @ControllerAdvice & Error DTOs",
          "Deployed Stack: Render (Spring Boot) + Netlify (React)"
        ]
      }
    },
    {
      id: "project-2",
      title: "Task Management System",
      category: "Java Backend & Spring REST",
      period: "Jan 2026 – Feb 2026",
      featured: true,
      isBackend: true,
      description: "Full-featured task management backend API and interactive React dashboard to create, assign, prioritize, and track tasks with server-side validation and MySQL stored procedures.",
      techStack: ["Java", "Spring Boot", "Spring REST", "React", "MySQL", "JPA/Hibernate", "Maven", "Axios"],
      liveUrl: "https://youtu.be/fZK57PxKC-0",
      githubUrl: "https://github.com/janmejayananda955",
      architectureDetails: {
        packages: ["controller", "service", "repository", "model", "dto", "exception"],
        highlights: [
          "JPA Entity Relationships (@ManyToOne, @JoinColumn) with MySQL joins",
          "Server-side input validation & meaningful error DTO feedback",
          "Postman API documented endpoints with full JSON communication",
          "Real-time task tracking with React & Axios integration"
        ]
      }
    },
    {
      id: "project-3",
      title: "Blog App with AI Post Generator",
      category: "Full Stack Web App",
      period: "2025",
      featured: true,
      isBackend: false,
      description: "A full-stack blog application with Markdown support, dynamic tagging, and AI-powered blog post generation tools for creators.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://youtu.be/tUnGudIBBjQ",
      githubUrl: "https://github.com/janmejayananda955",
      architectureDetails: {
        packages: ["client", "server", "routes", "controllers", "models"],
        highlights: [
          "AI content prompt generation",
          "Markdown previewer and editor",
          "MongoDB aggregation queries for tag indexing"
        ]
      }
    },
    {
      id: "project-4",
      title: "E-Commerce Platform",
      category: "Full Stack Web App",
      period: "2025",
      featured: false,
      isBackend: false,
      description: "Full-stack e-commerce solution with advanced multi-faceted filtering, product search, cart state management, and checkout UI.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express", "Framer Motion"],
      liveUrl: "https://github.com/janmejayananda955",
      githubUrl: "https://github.com/janmejayananda955"
    }
  ],

  skills: {
    Backend: [
      { name: "Java", level: "90%", category: "Backend" },
      { name: "Spring Boot", level: "85%", category: "Backend" },
      { name: "Spring Security & JWT", level: "85%", category: "Backend" },
      { name: "Spring REST APIs", level: "90%", category: "Backend" },
      { name: "JPA / Hibernate", level: "80%", category: "Backend" },
      { name: "Redis & Kafka", level: "50%", category: "Backend" },
      { name: "Microservices Architecture", level: "60%", category: "Backend" },
      { name: "C Programming", level: "65%", category: "Backend" },
      { name: "Python Basics", level: "50%", category: "Backend" }
    ],
    Frontend: [
      { name: "React", level: "80%", category: "Frontend" },
      { name: "JavaScript (ES6+)", level: "80%", category: "Frontend" },
      { name: "HTML5 & CSS3", level: "90%", category: "Frontend" },
      { name: "Tailwind CSS", level: "85%", category: "Frontend" },
      { name: "Bootstrap", level: "70%", category: "Frontend" },
      { name: "Axios & JSON API Integration", level: "85%", category: "Frontend" }
    ],
    Databases: [
      { name: "MySQL (Stored Procedures, Joins, Triggers)", level: "85%", category: "Databases" },
      { name: "PostgreSQL", level: "70%", category: "Databases" },
      { name: "MongoDB", level: "65%", category: "Databases" }
    ],
    Tools: [
      { name: "Git & GitHub", level: "85%", category: "Tools" },
      { name: "Maven Build System", level: "80%", category: "Tools" },
      { name: "Postman API Testing", level: "85%", category: "Tools" },
      { name: "IntelliJ IDEA & VS Code", level: "90%", category: "Tools" },
      { name: "Netlify & Render Deployment", level: "85%", category: "Tools" }
    ]
  },

  education: [
    {
      id: "edu-1",
      degree: "MCA (Master of Computer Applications)",
      institution: "Nalanda Institute of Technology, Odisha",
      period: "2024 – 2026",
      score: "CGPA: 8.31 / 10",
      details: "Specialized in Advanced Java Enterprise Systems, Distributed Systems, Software Engineering, and Cloud Architecture."
    },
    {
      id: "edu-2",
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "MITS School of Biotechnology, Odisha",
      period: "2021 – 2024",
      score: "CGPA: 7.0 / 10",
      details: "Core foundation in Data Structures, Java Programming, Object Oriented Systems, DBMS, and Web Fundamentals."
    },
    {
      id: "edu-3",
      degree: "+2 Science",
      institution: "Sriram Higher Secondary School, Odisha",
      period: "2019 – 2021",
      score: "74%",
      details: "Mathematics, Physics, Chemistry, and Information Technology."
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Web Development Certification",
      issuer: "Cognifyz Technologies",
      year: "2024",
      skills: ["Java", "HTML5", "CSS3", "JavaScript", "MySQL"]
    },
    {
      id: "cert-2",
      title: "Web Dev Training",
      issuer: "TechoHacks EduTech",
      year: "2024",
      skills: ["Frontend & Backend Fundamentals", "Web Applications"]
    }
  ],

  socialLinks: [
    {
      id: "soc-1",
      platform: "GitHub",
      url: "https://github.com/janmejayananda955",
      handle: "@janmejayananda955"
    },
    {
      id: "soc-2",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/janmejayananda955",
      handle: "janmejayananda955"
    },
    {
      id: "soc-3",
      platform: "Twitter",
      url: "https://x.com/Janmejaya_955?t=08mD9OBmjYggM5jB2v6BvA&s=08",
      handle: "@Janmejaya_955"
    },
    {
      id: "soc-4",
      platform: "Email",
      url: "mailto:janmejayananda326@gmail.com",
      handle: "janmejayananda326@gmail.com"
    }
  ]
};
