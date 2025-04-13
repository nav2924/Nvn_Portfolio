const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 42, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Pixel-Perfect Precision",
    desc: "Every line of code crafted with care to deliver flawless, high-quality results you can rely on.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Crystal-Clear Communication",
    desc: "Stay in the loop at every step—no confusion, no guesswork. Just smooth, transparent updates.",
  },
  {
    imgPath: "/images/time.png",
    title: "Deadlines? Always Met.",
    desc: "Your time matters. Expect timely delivery without compromising quality or attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Naveen was instrumental in enhancing our backend systems at DentalHifi. His leadership and coordination of the backend team helped us scale quickly and maintain quality under tight deadlines.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logos/Dentalhifi.png",
    title: "Backend Developer & Team Coordinator",
    date: "March 2024 – June 2024",
    responsibilities: [
      "Developed RESTful APIs using Node.js, Express, and MongoDB.",
      "Led the backend development team, assigning tasks and overseeing progress.",
      "Optimized data handling and improved backend performance for user-heavy scenarios.",
    ],
  },
  {
    review:
      "Naveen's freelance work reflects both versatility and reliability. He approaches each project with a strong full-stack mindset, delivering clean, scalable solutions that exceed expectations.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Freelance Full Stack Developer",
    date: "September 2024 – Present",
    responsibilities: [
      "Developed full-stack solutions using the MERN stack for various clients.",
      "Worked directly with clients to understand requirements and deliver custom features.",
      "Handled deployment, version control, and performance optimization.",
    ],
  },
  {
    review:
      "Naveen has been a key contributor at Spaceify, where his backend expertise and DevOps skills have greatly improved our development workflow and deployment processes.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Backend Developer & DevOps Engineer",
    date: "April 2025 – Present",
    responsibilities: [
      "Built robust backend services with Node.js and Express.",
      "Implemented CI/CD pipelines and containerized applications using Docker.",
      "Collaborated with teams to maintain server health and monitor production environments.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/naveen_2924/",
  },
  {
    name: "x",
    imgPath: "/images/logos/github.png",
    link: "https://github.com/nav2924",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/naveen-v-a03390287/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
