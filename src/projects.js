import rioBangunan from "./assets/projects/mockupRioBangunan.png";
import spdin from "./assets/projects/mockupSPDIN.png";
import angsah from "./assets/projects/mockupAngsah.png";
import kpusiaga from "./assets/projects/mockupKPUSIAGA.png";
import pkqunja from "./assets/projects/mockupPKQ.png";

export const projects = [
  {
    id: 1,
    title: "Rio Bangunan",
    description:
      "Modern ecommerce platform built using MERN Stack with authentication, payment gateway and responsive UI.",
    image: rioBangunan,
    category: "Web",
    tech: ["React", "NodeJS", "MongoDB", "Midtrans"],
    github: "https://github.com/mfelixx/rio_bangunan.git",
    demo: "#",
    featured: true,
  },

  {
    id: 2,
    title: "SPDin App",
    description: "Responsive SPDin App with Framer Motion animation.",
    image: spdin,
    category: "Mobile",
    tech: ["Flutter", "Firebase", "NodeJS"],
    github: "https://github.com/mfelixx/spdin.git",
    demo: "#",
    featured: false,
  },

  {
    id: 3,
    title: "Angsah",
    description: "Realtime chatting application using Flutter & Firebase.",
    image: angsah,
    category: "Web",
    tech: ["HTML", "CSS"],
    github: "https://github.com/mfelixx/angsah.git",
    demo: "https://mfelixx.github.io/angsah/index.html",
    featured: false,
  },

  {
    id: 4,
    title: "PKQ Unja",
    description: "Responsive portfolio website with Framer Motion animation.",
    image: pkqunja,
    category: "Web",
    tech: ["PHP", "Tailwind", "FrontEnd"],
    github: "https://github.com/mfelixx/pkqUnja.git",
    demo: "#",
    featured: false,
  },

  {
    id: 5,
    title: "KPU SIAGA",
    description: "Realtime chatting application using Flutter & Firebase.",
    image: kpusiaga,
    category: "Mobile",
    tech: ["Figma", "UI/UX", "Material UI"],
    github: "#",
    demo: "#",
    featured: false,
  },
];
