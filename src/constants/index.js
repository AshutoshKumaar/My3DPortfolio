import {
  mobile,
  backend,
  creator,
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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";


import WebLinkIcon from '../assets/web-link.png'
import WordpressDevIcon from '../assets/wordpress.png'
import FourthBrotherLogo from '../assets/company/FourthBrother.jpg'
import webXposeLogo from '../assets/company/webXpose.jpg'
import ContentWriteer from '../assets/Content-writer.png'
import ReactnativeICon from '../assets/React-native.png'
import VegetableWale from '../assets/firstWeb.png'
import Suvatripuser from '../assets/SuvaTrip.jpg'
import SuvatripAdmin from '../assets/SuvatripAdmin.jpg'
import Medservicesnew from '../assets/medservicesnew.png'
import UnxplredNation from '../assets/Unexplored.png'
import Shoplane from '../assets/Shoplane.png'
import AdminPanel from '../assets/Admin.png'
import WebQuizApp from '../assets/QuizApp.png'
import CodepenClone from '../assets/Code-pen.jpg'
import SuvatripVendor from '../assets/SuvatripVendor.jpg'
import SinglePage from '../assets/SinglePage.jpg'
import BluePage from '../assets/BluePage.jpg'

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
    title: "Web Developer",
    icon: WebLinkIcon,
  },
  {
    title: "Wordpress Developer",
    icon: WordpressDevIcon,
  },
  {
    title: "React Native Developer",
    icon: ReactnativeICon,
  },
  {
    title: "Content Creator",
    icon: ContentWriteer,
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
    name: "TypeScript",
    icon: typescript,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Fourth Brother",
    icon: FourthBrotherLogo,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      `Developed and designed a comprehensive travel website, ”Suvatrip,” utilizing React.js, Tailwind CSS, Bootstrap,
      and custom CSS for enhanced functionality and aesthetics.
      `,
       `Took charge of front-end development for both user and vendor interfaces of ”Suvatrip,” ensuring seamless
      navigation and user experience.`,
      `Developed Implemented responsive design principles to optimize website performance across various devices and
      screen sizes, enhancing accessibility for users.`,
      `Collaborated with cross-functional teams to gather requirements, iterate on designs, and implement user feed-back, resulting in a user-centric website interface`,
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "WebXpose",
    icon: webXposeLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Sep 2023",
    points: [
      `Developed multiple WordPress websites, gaining hands-on experience in WordPress fundamentals, including
      theme customization, plugin integration, and content management`,
      `Demonstrated proficiency in HTML, CSS, and JavaScript while working on a project outside of WordPress,
      showcasing a strong understanding of front end development principles`,
      `Leveraged HTML, CSS, and JavaScript to create a standalone project, deepening knowledge and skills in front
      end technologies and web development`,
      `Collaborated with team members to deliver high-quality WordPress websites, ensuring adherence to client requirements and industry best practices`,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I never thought we could make a website as beautiful as our product, but Ashutosh's skills proved me wrong. He made it happen!",
    name: "Khushi Singh",
    designation: "CEO",
    company: "WebXpose",
    image: "https://scontent.fpat1-2.fna.fbcdn.net/v/t39.30808-1/432744308_1536656396906906_6659202421177268046_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=O8uz35N54G4AX_HS61l&_nc_ht=scontent.fpat1-2.fna&oh=00_AfCnW7IbHWNbpBL-na2uZK0v3Twmq54X-JFzrc5t6fwPOg&oe=660C5193",
  },
  {
    testimonial:
      "I've never encountered a web developer as devoted to their clients' success as Ashutosh. He goes above and beyond to ensure our satisfaction!",
    name: "Ishaan Walecha",
    designation: "CEO",
    company: "Fourth Brother",
    image: "https://media.licdn.com/dms/image/D4D03AQEQ4GnVLK8ZWA/profile-displayphoto-shrink_400_400/0/1684141244627?e=1717027200&v=beta&t=DJllYXd5iVaUZBD-ZRydTik4UUGBIFeFqQ0AoyAWc6s",
  },
  {
    testimonial:
      "After Ashutosh optimized our website, our traffic skyrocketed by 50%! We're incredibly grateful for his expertise and dedication!",
    name: "Emily Jason",
    designation: "APM",
    company: "Pharmaceutical",
    image: "https://scontent-ccu1-1.xx.fbcdn.net/v/t1.6435-1/152012438_887326998756510_5557607651489694037_n.jpg?stp=dst-jpg_s320x320&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dQhSRUIdRyUAX8zbGP0&_nc_ht=scontent-ccu1-1.xx&oh=00_AfBOO1wI6CBKwbmn599wxtsVhN18TdpMvf0ZsrE2k8VeZQ&oe=662DEC0D",
  },
];

const projects = [
  {
    name: "SuvaTrip User",
    description:
      `Constructed a cutting-edge hotel search platform, Suvatrip, engineered with React.js, powered by
      the robust matrix of Tailwind CSS, Bootstrap, and multiple JavaScript libraries. Users enjoy an immersive experience
      reminiscent of Agoda.com, ensuring effortless hotel exploration and reservation`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "talwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Suvatripuser,
    source_code_link: "https://suvatrip.com/",
  },
  {
    name: "SuvaTrip Admin",
    description:
      `Designed an intuitive admin panel for Suvatrip, enabling seamless property management for vendors. Leveraging React.js, Tailwind CSS, Bootstrap, and advanced JavaScript libraries, the platform ensures effortless integration and streamlined property administration.`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "talwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: SuvatripAdmin,
    source_code_link: "https://admin.suvatrip.com/",
  },
  {
    name: "SuvaTrip Vendor",
    description:
        `Crafted a sleek vendor portal for Suvatrip, empowering vendors to effortlessly list their properties. Utilizing React.js, Tailwind CSS, Bootstrap, and advanced JavaScript libraries, the platform ensures seamless
        integration and streamlined property management`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "talwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: SuvatripVendor,
    source_code_link: "https://join.suvatrip.com/",
  },
  {
    name: "Vegetable Wale",
    description:
      `Vegetable Wale, a WordPress-powered website, lets users effortlessly order fresh produce online. With a simple interface and secure checkout, enjoy convenient doorstep delivery for a hassle-free shopping experience.`,
    tags: [
      {
        name: "wordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Woo Commerce",
        color: "green-text-gradient",
      },
     
    ],
    image: VegetableWale,
    source_code_link: "https://vegetablewale.in/",
  },
  {
    name: "Med Services",
    description:
      `MedServices, A WordPress-powered networking hub connecting healthcare professionals and service providers, fostering seamless collaboration within the industry.`,
    tags: [
      {
        name: "wordPress",
        color: "blue-text-gradient",
      },
      {
        name: "tutor-LMS",
        color: "green-text-gradient",
      },
      {
        name: "Woo Commerce",
        color: "pink-text-gradient",
      },
    ],
    image: Medservicesnew,
    source_code_link: "https://medservices.in/",
  },
  {
    name: "Unexplored Nation",
    description:
      `Unexplored Nation, a WordPress-driven platform, offers captivating tour packages to adventurous explorers. Discover hidden gems and embark on unforgettable journeys with ease through this user-friendly website.`,
    tags: [
      {
        name: "wordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Woo Commerce",
        color: "green-text-gradient",
      },
      {
        name: "Additional Css",
        color: "pink-text-gradient",
      },
    ],
    image: UnxplredNation,
    source_code_link: "https://unexplorednation.com/",
  },
  {
    name: "ShopLane Cloning",
    description:
      `Introducing Shoplane Website, an impressive project assigned by
      Edyoda, where the developer shines with an outstanding score of 80
      out of 100! This website is a testament to the developer's
      dedication and skill, showcasing their ability to create a
      user-friendly and visually appealing digital shopping platform.`,
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: Shoplane,
    source_code_link: "https://newshopsomething.netlify.app/",
  },
  {
    name: "Admin Panel",
    description:
      `The username and password will be same. welcome to the Admin Panel - the nucleus of control, insight, and efficiency. Your platform's journey is now marked by empowered management, data-driven decisions, customization, collaboration, security, and evolution.`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Chart.js",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: AdminPanel,
    source_code_link: "https://luminous-syrniki-c24261.netlify.app/",
  },
  {
    name: "Web Quiz App",
    description:
      "Welcome to QuizWeb, the brainchild of Ashutosh Sinha, a dedicated math teacher with a passion for empowering students! Designed with love and expertise, this interactive platform is tailored to ignite the spark of learning in young minds. As a teacher, Ashutosh created QuizWeb to make math fun, engaging, and rewarding for students",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: WebQuizApp,
    source_code_link: "https://gkquizofmanipal.netlify.app/",
  },
  {
    name: "CodePen Cloning",
    description:
      `Built a Code-pen-inspired website for personal practice, employing React.js and the Monaco
      Editor to create a dynamic code editing environment, fostering experimentation and learning in front end development`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Monaco editor",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: CodepenClone,
    source_code_link: "https://tangerine-narwhal-f0805d.netlify.app/",
  },
  {
    name: "Single Page Design",
    description:
      `Created a stunning landing page within just 8 hours for a coding round interview. Leveraging Tailwind CSS and React, this project showcases my ability to deliver polished and professional web designs efficiently.`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TalwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: SinglePage,
    source_code_link: "https://fluffy-frangollo-85add2.netlify.app/",
  },
  {
    name: "Dictionary WebApp",
    description:
      `Introducing my latest project: a sleek and efficient dictionary web app! Utilizing a free API, this app offers quick access to word definitions and enhances vocabulary exploration. With a clean interface and seamless functionality, users can effortlessly broaden their linguistic horizons.`,
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: BluePage,
    source_code_link: "https://frolicking-muffin-afa1c1.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects }; 
