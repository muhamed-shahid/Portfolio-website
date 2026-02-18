import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "About me",
    href: "#about",
  },
  {
    id: 3,
    label: "Resume",
    href: "#resume",
  },
  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export const heroIcons = [
  {
    id: 1,
    icon: RiLinkedinFill,
    href: "https://www.linkedin.com/in/muhamed-shahid",
  },
  // {
  //   id: 2,
  //   icon: RiInstagramFill,
  // },
  {
    id: 3,
    icon: RiGithubFill,
    href: "https://github.com/muhamed-shahid",
  },
];

export const aboutItems = [
  {
    id: 1,
    label: "React.js & Frontend Development",
  },
  {
    id: 2,
    label: "Version Control (Git & GitHub)",
  },
  {
    id: 3,
    label: "Responsive design & CSS frameworks",
  },
  {
    id: 4,
    label: "API integration & state management",
  },
  {
    id: 5,
    label: "UI/UX Fundamentals & Problem Solving",
  },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Experience",
    list: [
            {
        role: "Frontend Developer",
        label: "Self-initiated",
        time: "2025-Present",
      },
            {
        role: "Academic Project",
        label: "Riss Technologies",
        time: "2024-2025",
      },
      
    ],
  },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "Kannur University",
        role: "Bachelor of Computer Application",
        time: "2025",
      },

      
      
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "Portfolio Website",
    src: "/images/portfolio.jpg",
    text: "A responsive portfolio website built with React to showcase projects, skills, and experience in a clean, modern UI. Features smooth navigation, reusable components, and dynamic content rendering. Designed to highlight personal branding and provide a seamless user experience.",
    github: "https://github.com/muhamed-shahid/Portfolio-website",
  },
  {
    id: 2,
    title: "To-do List App",
    src: "/images/todo.png",
    text: "A clean and interactive To-Do List app built using vanilla JavaScript. It allows users to add, edit, delete, and mark tasks as completed. Tasks are stored in localStorage so the list stays saved even after refreshing.",
    github: "https://github.com/muhamed-shahid/todo-list",
  },
  {
    id: 3,
    title: "Coffee Website",
    src: "/images/coffee.jpg",
    text: "A visually appealing coffee website created with HTML, CSS, and JavaScript. Includes a dynamic menu, animated elements, and interactive features like a mobile-friendly navigation bar. Focused on aesthetics and smooth user interaction.",
    github: "https://github.com/muhamed-shahid/coffee-website",
  },
  {
    id: 4,
    title: "Weather App",
    src: "/images/weatherapp.png",
    text: "A lightweight JavaScript weather app that provides instant weather information using fetch API. Includes error handling, city search, and a minimal, user-friendly interface. Optimized for fast performance and smooth experience.",
    github: "https://github.com/muhamed-shahid/weather-app",
  },
];

export const contactItems = [
  {
    id: 1,
    label: "Email:",
    link: "muhamedshahid7860@gmail.com",
  },
  {
    id: 2,
    label: "Phone:",
    link: "+919567108723",
  },
  {
    id: 3,
    label: "Location:",
    link: "Kannur, Kerala, India",
  },
];