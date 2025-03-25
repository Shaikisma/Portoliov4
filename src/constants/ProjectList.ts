import jobify from "@/assets/projects/jobify.png";
import buzzbuy from "@/assets/projects/buzzbuy.png";
import discord from "@/assets/projects/discord.png";
import bytebrainhub from "@/assets/projects/bytebrainhub.png";
import whisper from "@/assets/projects/whisper.png";
import notion from "@/assets/projects/notion.png";
import forkify from "@/assets/projects/forkify.png";
import bankist from "@/assets/projects/bankist.png";

export const ProjectList = [
  {
    id: 1,
    name: "CheatGuard",
    description: [
      "An AI-powered system that detects and prevents cheating during online and offline exams using computer vision and machine.",
      "Monitors eye movements, gestures, multiple faces, and unauthorized device usage to identify suspicious behavior in real-time.",
      "Sends instant alerts to proctors, ensuring a fair examination environment with automated surveillance and data logging.",
    ],
    img: jobify,
    //max 6 tech stack
    tech: ["Python", "OpenCV", "TensorFlow" , "Keras", "MySQL/PostgreSQL"],
    source: "https://github.com/Shaikisma/Cheating-Surveillance-System.git",
    demo: null,
  },
  {
    id: 2,
    name: "Student Attendance System",
    description: [
      "A web-based attendance management system built using Next.js for seamless user experience.",
      "Allows students and faculty to mark and track attendance in real time.",
      "Features secure authentication, database storage, and automated attendance tracking for better efficiency.",
    ],
    img: buzzbuy,
    //max 6 tech stack
    tech: ["Next.js", "React", "Tailwind CSS", "Next.js API Routes", "MongoDB", "Firebase/Auth.js"],
    source: "https://github.com/Shaikisma/Student-attendance.git",
    demo: "https://student-attendance-sandy.vercel.app/",
  },
  {
    id: 3,
    name: "3D T-Shirt Designer",
    description: [
      "A web-based 3D T-shirt customization tool that allows users to design and preview T-shirts in real time.",
      "Utilizes Three.js for interactive 3D rendering, enabling users to change colors, add text, and upload custom designs.",
      "Integrates a responsive UI with smooth animations, ensuring a seamless user experience.",
    ],
    img: bytebrainhub,
    //max 6 tech stack
    tech: ["React", "Three.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    source: "https://github.com/Shaikisma/3d-shirt-designer.git",
    demo: "https://3d-shirt-designer-xi.vercel.app/",
  },
  {
    id: 4,
    name: "Real Estate",
    description: [
      "A fully functional real estate web application that lists properties for both rent and sale with real-time updates.",
      "Uses the Bayut API to fetch property listings, providing detailed information with images and pricing.",
      "Features a responsive UI built with Chakra UI, enabling smooth navigation and an intuitive user experience.",
      
    ],
    img: notion,
    //max 6 tech stack
    tech: ["Next.js", "React.js", "Chakra UI", "Bayut API",],
    source: "https://github.com/Shaikisma/real-estate-next-js-.git",
    demo: "https://real-estate-next-js-amber.vercel.app/",
  },
  {
    id: 5,
    name: "Medius",
    description: [
      "Medius React is a content management platform that allows users to efficiently manage and publish digital content.",
      "It provides a seamless and responsive user interface, making content creation and organization easy.",
      "The application supports real-time updates, user authentication, and database management for smooth operation.",
    ],
    img: discord,
    //max 6 tech stack
    tech:["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB",],
    source: "https://github.com/Shaikisma/Medius-React.git",
    demo: "https://medius-react.vercel.app/",
  },
  {
    id: 6,
    name: "Ecommerce",
    description: [
      "Ecommerce React is a fully functional e-commerce platform that allows users to browse, search, and purchase products online.",
      "It features a modern UI with Tailwind CSS, secure authentication, and seamless product filtering for an enhanced shopping experience.",
      "Integrated with Stripe API for secure payments and a MongoDB backend to manage products, users, and orders efficiently.",
    ],
    img: whisper,
    //max 6 tech stack
    tech:["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    source: "https://github.com/Shaikisma/EcommerceReact.git",
    demo: "https://ecommerce-react-tau-five.vercel.app/",
  },
  {
    id: 7,
    name: "Register and Login",
    description: [
      "A news-based web platform where users can register, log in, and view news articles dynamically.",
      "Utilizes PHP and MySQL for user authentication and news content management, ensuring secure access",
      "Built with XAMPP for local hosting, offering a smooth and efficient login system for users.",
      "The platform allows admins to manage news articles, ensuring real-time updates and content delivery.",
    ],
    img: forkify,
    //max 6 tech stack
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    source: "https://github.com/Shaikisma/Register-and-login-news.git",
    demo: null,
  },
  {
    id: 8,
    name: "iPhone-14-Pro-Landing-Page",
    description: [
      "A visually stunning and interactive website inspired by the Apple iPhone 14 landing page.",
      "Built with React.js, WebGi, and Three.js to create 3D product visualization and smooth animations",
      "Uses GSAP ScrollTrigger for immersive scroll-based animations and transitions.",
      "Fully responsive and optimized, delivering a seamless user experience across devices",
    ],
    img: bankist,
    //max 6 tech stack
    tech: ["React.js", "WebGi", "Three.js", "GSAP ScrollTrigger", "CSS",],
    source: "https://github.com/Shaikisma/iphonelandingpage.git",
    demo: "https://iphonelanding-ten.vercel.app/",
  },
];
