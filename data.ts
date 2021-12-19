import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "./types";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: FaServer,
    title: "Backend",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: AiOutlineApi,
    title: "React.js",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: MdDeveloperMode,
    title: "Next.js",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "WordPress",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "WordPress",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwindcss",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Next",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "55",
  },
];

export const projects: IProject[] = [
  {
    name: "React Gmail",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image_path: "/images/project_image.png",
    deployed_url: "#",
    github_url: "#",
    category: ["react", "angular"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Next Gdocs",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image_path: "/images/project_image.png",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    key_techs: ["React", "firebase", "Framer Motion"],
  },
  {
    name: "Next Airbnb",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image_path: "/images/project_image.png",
    deployed_url: "#",
    github_url: "#",
    category: ["node", "express", "react"],
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
  {
    name: "Next Google",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image_path: "/images/project_image.png",
    deployed_url: "#",
    github_url: "#",
    category: ["node", "react"],
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },
  {
    name: "Portfolio",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image_path: "/images/project_image.png",
    deployed_url: "#",
    github_url: "#",
    category: ["django", "react"],
    key_techs: ["React", "Django", "Django REST API"],
  },
  {
    name: "Blog",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image_path: "/images/project_image.png",
    deployed_url: "#",
    github_url: "#",
    category: ["express"],
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "COVID Tracker",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image_path: "/images/project_image.png",
    deployed_url: "#",
    github_url: "#",
    category: ["express"],
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Slack",
    description: "Lorem ipsum is placeholder text commonly used in the graphic",
    image_path: "/images/project_image.png",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
