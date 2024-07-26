
import {ecommerce, resume} from "../assets";


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "resume",
    title: "Resume",
    link: resume,
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    "title": "SWE Fellow",
    "company_name": "Headstarter",
    "date": "July 2024 - Present",
    "location": "Remote",
    "details": [
      "Spearheaded the development of 5+ AI applications and APIs, leveraging <span style='color: white;'>NextJS, OpenAI, Pinecone, and StripeAPI</span> to achieve 98% accuracy and deliver solutions to over 1000 users.",
      "Adopted advanced Agile methodologies, CI/CD processes, and microservice architecture under the guidance of senior engineers from <span style='color: white;'>Amazon, Bloomberg, and Capital One.</span>",
      "Partnered with a team to oversee the full project lifecycle, from design to deployment, leveraging MVC design patterns for optimal results."
    ]
  },
  {
    "title": "Computer Science Degree",
    "company_name": "Rochester Institute of Technology",
    "date": "2020 - Present",
    "details": [
      "Engaged in a comprehensive curriculum that emphasizes both theoretical knowledge and practical skills in computer science.",
      "Developed a strong foundation in programming, algorithms, data structures, and software engineering principles.",
      "Participated in hands-on projects and collaborative team-based assignments to solve real-world problems.",
      "Enhanced technical expertise through advanced coursework in areas such as <span style='color: white;'>Algorithms, Artificial Itelligence, Physics, Linear Algebra, Computer Science Theory & Mechanics of Programming. </span>"
    ]
  },
];


const portfolio = [
  {
    name: "E-commerce Website",
    description:
      "Architected and implemented a robust full-stack e-commerce platform, leveraging Spring Boot for backend services and ReactJS for the frontend.",
    image: ecommerce,
  },
];

export { experiences, portfolio };

