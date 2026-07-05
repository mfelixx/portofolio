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
    description:
      "A mobile application designed to simplify official travel administration for KPU employees, enabling efficient trip management, document handling, and status tracking.",
    image: spdin,
    category: "Mobile",
    tech: ["Flutter", "Firebase", "NodeJS", "GetX"],
    github: "https://github.com/mfelixx/spdin.git",
    demo: "#",
    featured: false,
  },

  {
    id: 3,
    title: "Angsah",
    description:
      "A web-based waste subscription platform that connects households with waste collection services, making waste management more organized, convenient, and environmentally friendly.",
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
    description:
      "A web-based Quran memorization management system for Universitas Jambi, enabling students to submit memorization progress, monitor completion, and obtain certificates upon successfully completing the program.",
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
    description:
      "An Android-based employee attendance application developed for KPU, featuring location-based check-in to ensure attendance can only be recorded within the designated office area.",
    image: kpusiaga,
    category: "Mobile",
    tech: ["Figma", "UI/UX", "Material UI"],
    github: "#",
    demo: "#",
    featured: false,
  },
];
