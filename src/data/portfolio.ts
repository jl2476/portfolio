export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  emoji: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
}

export const personalInfo = {
  name: "John Li",
  title: "Software Engineer",
  email: "j.li022623@gmail.com",
  github: "https://github.com/Jl2476",
  linkedin: "https://linkedin.com/in/J0hnL1",
  phone: "(347) 863-6351",
  resumeUrl: "/data/resume.pdf",
  bio: [
    "hey there! i'm a CS student at RIT who loves building things — from AI training pipelines to full-stack web apps 🚀",
    "i've worked on real-time inference engines in C++ with DirectX, built Salesforce solutions for Fortune 500 clients, and shipped AI apps with NextJS and OpenAI",
    "when i'm not coding, you can find me exploring quantum computing, tinkering with neural networks, or enjoying a good cup of tea ☕✨",
  ],
  whoami:
    "a curious CS student at RIT who loves pixel art, starry nights, and building cool things — from AI pipelines to full-stack web apps. currently crafting software and sipping way too much matcha ☕✨",
  education: {
    school: "Rochester Institute of Technology",
    location: "Rochester, NY",
    degree: "Bachelor of Science in Computer Science",
    minors: "Minors in Quantum Information Science, Computer Engineering",
    gpa: "3.5",
    graduation: "Expected May 2027",
  },
};

export const projects: Project[] = [
  {
    title: "BATTLEBYTE",
    description:
      "BattleByte — a fun, timed LeetCode-based competitive coding platform where friends and peers battle head-to-head, competing for the best code efficiency and fastest solve times. Features real-time matchmaking, live leaderboards, and interactive code duels.",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "WebSocket", "TailwindCSS", "Prisma", "PostgreSQL"],
    emoji: "⚔️",
  },
  {
    title: "CHATOT",
    description:
      "Chat Hub with Avatars and Themed Online Transmission — a real-time chat application with pixel art avatars and retro-themed UI, built with WebSockets for instant messaging.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    emoji: "💬",
  },
  {
    title: "RAICHU",
    description:
      "Restaurant and Inventory Coordination Hub Utility — a full-stack app for inventory management and recipe tracking, with real-time ingredient tracking and an LLM-powered recipe recommendation engine.",
    techStack: ["JavaScript", "React", "TailwindCSS", "Next.js", "Firebase", "Docker"],
    emoji: "🍳",
  },
  {
    title: "GENGAR",
    description:
      "Generalized Efficient Neural Guide for AI Recognition — a facial recognition system using TensorFlow CNNs, achieving 85% accuracy with precision/recall/F1 metrics for identity verification.",
    techStack: ["Python", "TensorFlow", "CNN", "OpenCV"],
    emoji: "👻",
  },
  {
    title: "JOTTQL",
    description:
      "Jotting Organized Tabular Transactions with Query Language — a custom-built relational database engine with an interactive SQL prompt, supporting CREATE, INSERT, SELECT, ALTER, and DROP with page-based storage and buffer management.",
    techStack: ["Java"],
    emoji: "⚡",
  },
  {
    title: "MEW",
    description:
      "Marketplace for Efficient Webcommerce — a full-stack e-commerce platform with Stripe-powered PCI-compliant payments (2.0s → 1.3s processing), optimized PostgreSQL schema via Spring Data JPA (40% query boost), and p95 latency reduced from 450ms → 300ms.",
    techStack: ["Java", "JavaScript", "React", "Spring Boot", "PostgreSQL", "SonarQube"],
    emoji: "🛒",
  },
  {
    title: "ROTOM",
    description:
      "Relay for Optimized Transmission of Messages — a high-performance MQTT 3.1.1-compliant broker built from scratch in C, featuring trie-based topic routing and Knuth's multiplicative CRC32 hashing, achieving 30% throughput improvement and 25% faster message lookup.",
    techStack: ["C"],
    emoji: "🔌",
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  // AI / Data / Cloud
  { name: "Hugging Face", category: "AI / Data / Cloud" },
  { name: "LangChain", category: "AI / Data / Cloud" },
  { name: "LangGraph", category: "AI / Data / Cloud" },
  { name: "Pandas", category: "AI / Data / Cloud" },
  { name: "MongoDB", category: "AI / Data / Cloud" },
  { name: "AWS Lambda", category: "AI / Data / Cloud" },
  { name: "DynamoDB", category: "AI / Data / Cloud" },
  { name: "Terraform", category: "AI / Data / Cloud" },
  // Tools / Systems
  { name: "Linux", category: "Tools / Systems" },
  { name: "GitHub Actions", category: "Tools / Systems" },
  { name: "FastAPI", category: "Tools / Systems" },
  { name: "Node.js", category: "Tools / Systems" },
  { name: "Express.js", category: "Tools / Systems" },
  { name: "Postman", category: "Tools / Systems" },
  { name: "Jest", category: "Tools / Systems" },
  { name: "DirectX", category: "Tools / Systems" },
];

export const experience: Experience[] = [
  {
    title: "Software Engineer Co-op",
    company: "Waygate Technologies, a Baker Hughes business",
    period: "Jul 2026 — Dec 2026",
    description:
      "Built automated QA frameworks, end-to-end AI training pipelines with NVIDIA TAO & PyTorch, and a native C++ real-time inference engine with Direct3D 12 and ONNX Runtime.",
    bullets: [
      "Designed an automated camera capture quality testing framework to detect hitching, frame skips, and visual artifacts, reducing QA time by over 70%.",
      "Engineered an end-to-end training pipeline with NVIDIA TAO and PyTorch, improving model accuracy by 15%.",
      "Refactored model preprocessing into modular, reusable components, reducing preprocessing time by 30%.",
      "Architected a native C++ app using Direct3D 12, ONNX Runtime, and DirectML, reducing latency overhead by 20%.",
      "Developed Bash scripts for automated model-training workflows and configured OpenSSL certificate handling.",
    ],
  },
  {
    title: "Quality Assurance Engineer Co-op",
    company: "Red Argyle",
    period: "May 2025 — Dec 2025",
    description:
      "Delivered Salesforce solutions for FAANG and Fortune 500 clients using Lightning Web Components, Apex, and JavaScript. Streamlined DevOps with Git Actions and Salesforce DX.",
    bullets: [
      "Delivered high-quality software solutions to FAANG and Fortune 500 clients, enhancing operational efficiency.",
      "Devised Salesforce solutions using LWC, Apex, and JavaScript, increasing stakeholder adoption by 40%.",
      "Executed comprehensive testing across Salesforce Sales, Service, and Experience Cloud, projecting a 30% reduction in overhead costs.",
      "Streamlined DevOps automation with Git Actions and Salesforce DX, achieving a 25% reduction in deployment time.",
    ],
  },
  {
    title: "Software Engineer Fellow",
    company: "Headstarter",
    period: "Jul 2024 — Sep 2024",
    description:
      "Built 5+ AI applications with NextJS, OpenAI, Pinecone, and Stripe. Applied RAG methodology and Agile practices with mentorship from senior engineers at Amazon, Bloomberg, and Capital One.",
    bullets: [
      "Spearheaded development of 5+ AI applications using NextJS, OpenAI, Pinecone, and StripeAPI.",
      "Applied Retrieval Augmented Generation (RAG) to increase model accuracy by 15%.",
      "Adopted Agile methodologies and CI/CD with guidance from senior engineers at Amazon, Bloomberg, and Capital One, cutting sprint time by 40%.",
    ],
  },
];

export const consoleCommands: Record<
  string,
  { description: string; output: string }
> = {
  help: {
    description: "Show available commands",
    output: `Available commands:
  whoami      - Who am I?
  ls projects - List all projects
  cat resume  - View resume summary
  skills      - Show my skills
  contact     - Get my contact info
  education   - View education info
  clear       - Clear the console
  sudo hire-me - ???
  neofetch    - System info
  echo <msg>  - Echo a message
  date        - Show current date
  help        - Show this help message`,
  },
  whoami: {
    description: "Display user info",
    output: `> ${personalInfo.whoami}`,
  },
  "ls projects": {
    description: "List projects",
    output: projects.map((p) => `  ${p.emoji} ${p.title}`).join("\n"),
  },
  "cat resume": {
    description: "View resume",
    output: experience
      .map((e) => `  ⭐ ${e.title} @ ${e.company} (${e.period})`)
      .join("\n"),
  },
  skills: {
    description: "Show skills",
    output: Array.from(new Set(skills.map((s) => s.category)))
      .map((cat) => {
        const items = skills
          .filter((s) => s.category === cat)
          .map((s) => s.name)
          .join(", ");
        return `  ▸ ${cat}\n    ${items}`;
      })
      .join("\n"),
  },
  contact: {
    description: "Show contact info",
    output: `  📧 ${personalInfo.email}
  📱 ${personalInfo.phone}
  🐙 ${personalInfo.github}
  💼 ${personalInfo.linkedin}`,
  },
  education: {
    description: "View education info",
    output: `  🎓 ${personalInfo.education.school}
  📚 ${personalInfo.education.degree}
  📖 ${personalInfo.education.minors}
  📊 GPA: ${personalInfo.education.gpa}
  🗓️ ${personalInfo.education.graduation}`,
  },
  "sudo hire-me": {
    description: "???",
    output: `  ✨ Achievement unlocked: You found the secret command!
  📧 Send me a message at ${personalInfo.email}
  Let's build something together! `,
  },
  neofetch: {
    description: "System info",
    output: `  ╔══════════════════════════════════╗
  ║  ${personalInfo.name}'s Portfolio         ║
  ╠══════════════════════════════════╣
  ║  OS:     PixelOS 2.0            ║
  ║  Shell:  portfolio-sh           ║
  ║  Theme:  Starry Night 🌙         ║
  ║  School: RIT '27                ║
  ║  Tea:    ██████████ 100%        ║
  ╚══════════════════════════════════╝`,
  },
  date: {
    description: "Show date",
    output: `  📅 ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`,
  },
};
