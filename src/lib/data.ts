
export type Experience = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export type SkillCategory = {
  category: string
  items: string[]
}


export const experiences: Experience[] = [
  {
    company: "CGI Inc.",
    role: "Software Developer Intern",
    period: "Jun 2025 – Aug 2025",
    location: "New Brunswick, NJ",
    bullets: [
      "Developed Python automation scripts using Beautiful Soup to crawl and parse websites, detecting target keywords from a master list to identify diverse partners for RFP bids",
      "Designed and implemented an AI-powered Meeting Intelligence Tool prototype, leading to approval for expansion into a full-stack enterprise application",
      "Researched and evaluated Azure AI, Google Vertex, OpenAI Whisper, and NLP/STT technologies to assess feasibility for enterprise integration",
      "Collaborated with cross-functional teams during Agile ceremonies, contributing to technical discussions and code reviews to refine deliverables",
    ],
  },
  {
    company: "Subaru of America",
    role: "I.T. Intern – Applications",
    period: "May 2024 – May 2025",
    location: "Camden, NJ",
    bullets: [
      "Developed a service to automatically execute unit tests daily, reducing bug identification time and accelerating QA workflows",
      "Designed and implemented interactive, responsive UI components using ReactJS, incorporating custom hooks for performance optimization",
      "Integrated RESTful APIs and third-party services to enhance application functionality, using asynchronous calls and dynamic data handling",
      "Conducted unit and integration testing with Jest and React Testing Library, ensuring high code quality and system reliability",
    ],
  },
]

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      "HTML/CSS",
      "Java",
      "JavaScript",
      "Python",
      "SQL",
      "Swift",
      "TypeScript",
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      "Beautiful Soup",
      "Bootstrap",
      "Material UI",
      "React.js",
      "React Native",
      "Spring / Spring Boot",
    ],
  },
  {
    category: "Technologies & Tools",
    items: [
      "Azure",
      "Bash/Zsh",
      "Datadog",
      "DBeaver",
      "Docker",
      "Git",
      "Jira",
      "MySQL",
      "PostgreSQL",
      "Postman",
      "Tailscale",
      "WSL",
    ],
  },
]
