import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Developer",
    icon: web,
  },
  {
    title: "Electronics Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Project & Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Gen-AI Intern",
    company_name: "G5-Infotech, Texas, United States",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - Aug 2024",
    points: [
      "The development of an intelligent recommendation system for personalized content delivery",
      "Project will leverage advanced technologies such as Python, Snowflake, Vector Databases (like FAISS and Pinecone), and Large Language Models (LLMs) – both open-source and closed-source.",
      "Enhancement of technical skills, problem-solving abilities.",
      ,
    ],
  },
  {
    title: "Project Intern",
    company_name: "ISRO SDSC-SHAR, India",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - July 2024",
    points: [
      "Internship at SHAR provides the opportunity to brush up the core electronics concepts",
      "Working on a confidential Project.",
      ,
      ,
    ],
  },
  {
    title: "Team Garuda",
    company_name: "VIT, Vellore",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Working here in the automation part of the UAV agricultural drones.",
      "Mostly the work is associated with the path planning and the path coverage of the drones.",
      
      ,
      ,
    ],
  },
  {
    title: "Research Paper",
    company_name: "VIT, Vellore",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Currently working on the research paper on piezoresitive sensors.",
      "Understanding the diaphragm structure and the sensor design which provides the best results.",


    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nirved",
    description:"Nirved delivers fetal health predictions and tailored measures throughout pregnancy.It offers personalized nutrition advice and Ayurvedic alternatives",
      
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      
      {
        name: "Strealit",
        color: "blue-text-gradient",
      },
      {
        name: "Pinecone",
        color: "pink-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "MedGuru Advisor",
    description:
    "It provides you with the ingredients of the medicine by using the image to text conversion. It also suggest the dosage of the medicine through a chatbot.",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/JOHRIVASU/Medguru",
  },
  {
    name: "LawMate",
    description:
        "It is a one stop solution where people can get the penal codes and the possible solution for their cases depending on the case story feeded into it.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "LLM",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "Pinecone",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/JOHRIVASU/LawMate",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
