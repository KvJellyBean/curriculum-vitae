import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiVisualstudio,
  DiUnitySmall,
  DiJava,
  DiPython,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiPhp,
  SiLaravel,
  SiExpress,
  SiJest,
  SiVitest,
  SiVite,
  SiDart,
  SiFlutter,
  SiAngular,
  SiGit,
  SiFigma,
  SiWebpack,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { ImLab } from "react-icons/im";
import { TbBrandCpp } from "react-icons/tb";
import sd from "./src/assets/sd.png";
import smp from "./src/assets/smp.png";
import sma from "./src/assets/sma.png";
import univ from "./src/assets/univ.png";
import project1 from "./src/assets/project1.jpg";
import project2 from "./src/assets/project2.jpeg";
import project3 from "./src/assets/project3.jpeg";
import project4 from "./src/assets/project4.jpeg";
import project5 from "./src/assets/project5.jpeg";
import project6 from "./src/assets/project6.jpeg";
import project7 from "./src/assets/project7.jpeg";
import project8 from "./src/assets/project8.jpeg";

export const skills = [
  {
    category: "Web Development",
    theSkills: [
      { name: "HTML", icon: <DiHtml5 /> },
      { name: "CSS", icon: <DiCss3 /> },
      { name: "JavaScript", icon: <DiJavascript1 /> },
      { name: "Bootstrap", icon: <DiBootstrap /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "React", icon: <DiReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Node Js", icon: <DiNodejsSmall /> },
      { name: "Express Js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <DiMongodb /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { name: "Jest", icon: <SiJest /> },
      { name: "Vitest", icon: <SiVitest /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Webpack", icon: <SiWebpack /> },
    ],
  },
  {
    category: "Other Programming Languages",
    theSkills: [
      { name: "C++", icon: <TbBrandCpp /> },
      { name: "Java", icon: <DiJava /> },
      { name: "Python", icon: <DiPython /> },
      { name: "React Native", icon: <DiReact /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Matlab", icon: <ImLab /> },
    ],
  },
  {
    category: "Tools",
    theSkills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <DiGithubBadge /> },
      { name: "VS Code", icon: <DiVisualstudio /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Unity", icon: <DiUnitySmall /> },
    ],
  },
];

export const educations = [
  {
    id: 1,
    institution: "Tarumanagara University",
    period: "2022 - Present",
    description:
      "Pursuing a Bachelor's degree in Computer Engineering at Tarumanagara University.",
    image: univ,
    video: "https://www.youtube.com/embed/MMdMMDQgfjE?si=SoQCbdCf405tX9oE",
    achievements: [],
    skills: [
      "C++",
      "Java",
      "Python",
      "Matlab",
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "Bootstrap",
      "Node Js",
      "Express Js",
      "PHP",
      "Laravel",
      "MongoDB",
      "PostgreSQL",
      "Dart",
      "Flutter",
      "Unity",
    ],
    link: "https://www.untar.ac.id/",
  },
  {
    id: 2,
    institution: "SMA Fransiskus Bandar Lampung",
    period: "2019 - 2022",
    description:
      "Completed Senior High School education with a focus on science and technology.",
    image: sma,
    video: "https://www.youtube.com/embed/KsMSCzWZ6HM?si=DST0CwqK7vlmE3D2",
    achievements: [
      "The Most Inspiring Male Student of The Year",
      "2nd Rank from The Students in the School",
      "Qualified for City Level Science Chemistry Competition",
    ],
    skills: [
      "Analytical Thinking",
      "Time Management",
      "Leadership",
      "Public Speaking",
      "Research",
      "Organization",
      "Teamwork",
      "Pascal Programming",
    ],
    link: "https://smafransiskusbalam.sch.id/",
  },
  {
    id: 3,
    institution: "SMP Xaverius 1 Bandar Lampung",
    period: "2016 - 2019",
    description:
      "Completed Junior High School education with a strong foundation in various subjects.",
    image: smp,
    video: "https://www.youtube.com/embed/FUM4aAYtlWc?si=BWuwwvi7LY_lAyP2",
    achievements: ["Top 20 of Best Students in the School"],
    skills: [
      "Low Level Programming",
      "Critical Thinking",
      "Problem Solving",
      "Culture",
      "Basic Research",
      "Basic Technology",
    ],
    link: "https://smpxaverius1bl.com/",
  },
  {
    id: 4,
    institution: "SD Xaverius 1 Bandar Lampung",
    period: "2010 - 2016",
    description:
      "Graduated from Elementary School with fundamental education and early skills development.",
    image: sd,
    video: "https://www.youtube.com/embed/1trNSuOH4aE?si=JuSTgc2HEkMjKe3o",
    achievements: [],
    skills: [
      "Social",
      "Communication",
      "Creativity",
      "Basic Computer",
      "Basic English",
      "Basic Mandarin",
    ],
    link: "https://www.sdxaverius1bandarlampung.sch.id/",
  },
];

export const projects = [
  {
    img: project1,
    title: "Laundry App",
    description:
      "A fullstack Laravel, PHP, and Filament app with PostgreSQL for efficient laundry operations.",
    links: {
      github: "https://github.com/KvJellyBean/laundry-app",
    },
  },
  {
    img: project2,
    title: "Shoe Store",
    description:
      "A fullstack e-commerce application built with Express.js, Bootstrap, and MongoDB.",
    links: {
      github: "https://github.com/KvJellyBean/e-commerce-js",
    },
  },
  {
    img: project3,
    title: "CV Creator App",
    description:
      "A responsive React app for effortlessly creating professional CVs with customizable templates.",
    links: {
      site: "https://cv-application-kvjellybean.vercel.app/",
      github: "https://github.com/KvJellyBean/cv-app",
    },
  },
  {
    img: project4,
    title: "Weather App",
    description:
      "A responsive weather app with HTML, CSS, and JavaScript for real-time conditions and forecasts.",
    links: {
      site: "https://kvjellybean.github.io/weather-app/",
      github: "https://github.com/KvJellyBean/weather-app",
    },
  },
  {
    img: project5,
    title: "Restaurant App",
    description:
      "A responsive restaurant web app built with HTML, CSS, and JavaScript.",
    links: {
      site: "https://kvjellybean.github.io/restaurant/",
      github: "https://github.com/KvJellyBean/restaurant",
    },
  },
  {
    img: project6,
    title: "To Do App",
    description:
      "A responsive to-do list app built with HTML, CSS, and JavaScript.",
    links: {
      site: "https://kvjellybean.github.io/todo-app/",
      github: "https://github.com/KvJellyBean/todo-app",
    },
  },
  {
    img: project7,
    title: "Homepage",
    description:
      "A minimalist and responsive homepage built with HTML, CSS, and JavaScript to showcase some of my projects.",
    links: {
      site: "https://kvjellybean.github.io/homepage/",
      github: "https://github.com/KvJellyBean/homepage",
    },
  },
  {
    img: project8,
    title: "Tic-Tac-Toe Game",
    description:
      "A responsive web-based Tic-Tac-Toe game with dual player and AI modes, built with HTML, CSS, and JavaScript.",
    links: {
      site: "https://kvjellybean.github.io/tic-tac-toe/",
      github: "https://github.com/KvJellyBean/tic-tac-toe",
    },
  },
];
