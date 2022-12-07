import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

// SKILLS

import CSS3 from "../assets/SKILLS/CSS3.png";
import HTML5 from "../assets/SKILLS/HTML5.png";
import Javascript from "../assets/SKILLS/Javascript.png";
import Typescript from "../assets/SKILLS/Typescript.png";
import SASS from "../assets/SKILLS/SASS.png";
import Firebase from "../assets/SKILLS/Firebase.png";
import FramerMotion from "../assets/SKILLS/FramerMotion.png";
import Jenkins from "../assets/SKILLS/Jenkins.png";
import GIT from "../assets/SKILLS/GIT.png";
import GitHub from "../assets/SKILLS/GitHub.png";
import ReactJS from "../assets/SKILLS/ReactJS.png";
import Redux from "../assets/SKILLS/Redux.png";

// Profile Icons

import { SlUser } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import { FaPassport } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export const SKILLS__TAB = [
  { name: "HTML5", img: HTML5, id: "2", category: 'frontend' },
  { name: "SASS", img: SASS, id: "3", category: 'frontend' },
  { name: "CSS3", img: CSS3, id: "4", category: 'frontend' },
  { name: "Redux", img: Redux, id: "5", category: 'frontend' },
  { name: "React JS", img: ReactJS, id: "6", category: 'frontend' },
  { name: "GIT", img: GIT, id: "7", category: 'others' },
  { name: "GitHub", img: GitHub, id: "8", category: 'others' },
  { name: "Firebase", img: Firebase, id: "1", category: 'backend' },
  { name: "Javascript", img: Javascript, id: "9", category: 'frontend' },
  { name: "Typescript", img: Typescript, id: "10", category: 'frontend' },
  { name: "Framer Motion", img: FramerMotion, id: "11", category: 'frontend' },
  { name: "Jenkins", img: Jenkins, id: "12", category: 'others' },
];

export const PROFILE_CONTENT = [
  { img: img1, content: "I am a", content2: "Developer" },
  { img: img2, content: "I am a", content2: "Designer" },
  { img: img3, content: "I am a", content2: "Programmer" },
];

export const NAV_TITLE = [
  { title: "Home", links: "/", offset: -100 },
  { title: "Profile", links: "/", offset: -135 },
  { title: "Skills", links: "/", offset: -130 },
  { title: "Contact", links: "/", offset: -100 },
];

export const ABOUT__CONTENT = [
  [
    "Who am i",
    "ABOUT ME",
    "Hello, I'm a UI/UX Designer & Frontend Developer from Amsterdam,Netherlands. I hold a master degree of Web Design from the World University.",
  ],
];

export const ABOUT__PROFILE = [
  { placeholder: "Name: ", name: "Jan Vincent Claudio", Icon: <SlUser /> },
  {
    placeholder: "Email: ",
    name: "janvincent.claudio@gmail.com",
    Icon: <MdAlternateEmail />,
  },
  { placeholder: "Phone: ", name: "+63 956 0536265", Icon: <GiSmartphone /> },
  { placeholder: "Nationality: ", name: "Filipino", Icon: <FaPassport /> },
  {
    placeholder: "Address: ",
    name: "2745 Pilapil Pasay City, Manila",
    Icon: <IoLocationOutline />,
  },
];

export const SKILLS__BUTTON = [
  { btn: "All", id: "0" },
  { btn: "FRONT-END", id: "1" },
  { btn: "BACK-END", id: "2" },
  { btn: "OTHERS", id: "3" },
];
