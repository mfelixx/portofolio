import reactjs from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import nextjs from "../assets//skills/nextjs.png";
import flutter from "../assets//skills/flutter.png";
import vite from "../assets/skills/vite.png";
import firebase from "../assets/skills/firebase.png";
import mongo from "../assets/skills/mongodb.png";
import framer from "../assets/skills/framer.png";
import { motion } from "framer-motion";

const listSkills = [
  {
    id: 1,
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for building modern and responsive interfaces.",
    icon: tailwind,
    level: 85,
    color: "#8B5CF6",
    featured: true,
  },
  {
    id: 2,
    title: "Framer Motion",
    description:
      "Create smooth, interactive, and production-ready animations for React.",
    icon: framer,
    level: 75,
    color: "#38BDF8",
    featured: false,
  },
  {
    id: 3,
    title: "React.js",
    description:
      "Build reusable components and fast user interfaces for modern web apps.",
    icon: reactjs,
    level: 80,
    color: "#F97316",
    featured: false,
  },
  {
    id: 4,
    title: "Next.js",
    description:
      "React framework for building SEO-friendly and high-performance websites.",
    icon: nextjs,
    level: 80,
    color: "#38BDF8",
    featured: false,
  },
  {
    id: 5,
    title: "Flutter",
    description:
      "Develop beautiful cross-platform mobile applications from a single codebase.",
    icon: flutter,
    level: 80,
    color: "#06B6D4",
    featured: false,
  },
  {
    id: 6,
    title: "Vite",
    description:
      "Fast build tool and development server for modern frontend projects.",
    icon: vite,
    level: 80,
    color: "#F97316",
    featured: false,
  },
  {
    id: 7,
    title: "Firebase",
    description:
      "Backend-as-a-Service for authentication, realtime database, and cloud storage.",
    icon: firebase,
    level: 80,
    color: "#22C55E",
    featured: false,
  },
  {
    id: 8,
    title: "MongoDB",
    description:
      "NoSQL database designed for scalable and flexible applications.",
    icon: mongo,
    level: 75,
    color: "#8B5CF6",
    featured: false,
  },
];

const Skills = ({ darkMode }) => {
  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    opacity: "opacity-[0.03]",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    opacity: "opacity-[0.06]s",
  };

  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <section
      id="skills"
      className="py-20 min-h-screen relative overflow-hidden"
    >
      <div
        className={`absolute inset-0bg-[linear-gradient(rgba(139,92,246,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.5)_1px,transparent_1px)] bg-size-[40px_40px] ${theme.opacity}`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] font-bold bg-linear-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </p>

          <h2
            className={`mt-4 text-4xl lg:text-5xl font-bold ${theme.textPrimary}`}
          >
            Technologies I Use
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto leading-8 ${theme.textSecondary}`}
          >
            I enjoy building modern web and mobile applications using
            technologies that focus on performance, scalability, and great user
            experience.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {listSkills.map((skill, index) => (
            <div key={skill.id} className="h-full">
              <SkillCard skill={skill} index={index} darkMode={darkMode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillProgress = ({ level, color }) => {
  return (
    <div className="mt-7">
      {/* Percentage */}
      <div className="flex justify-end mb-2">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm font-semibold"
          style={{ color }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="relative h-2 w-full rounded-full bg-slate-700/60 overflow-hidden">
        {/* Glow */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="absolute left-0 top-0 h-full rounded-full blur-[7px]"
          style={{
            backgroundColor: color,
          }}
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative h-full rounded-full"
          style={{
            backgroundColor: color,
          }}
        />

        <motion.div
          initial={{
            x: "-100%",
          }}
          whileInView={{
            x: "220%",
          }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="absolute top-0 h-full w-10 bg-white/40 blur-md"
        />
      </div>
    </div>
  );
};

const SkillCard = ({ skill, index, darkMode }) => {
  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    borderCard:
      "backdrop-blur-2xl border border-white/60 shadow-lg hover:shadow-xl shadow-purple-500/20",
    bgCategory: "text-white border-2 border-[#A78BFA] hover:bg-[#8B5CFA]",
    textTech: "text-gray-800",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    borderCard:
      "shadow-lg hover:shadow-xl shadow-purple-500/20 border border-violet-500/40",
    bgCategory: "text-gray-800 border-2 border-[#A78BFA]",
    textTech: "text-gray-600",
  };

  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
      }}
      className={`group relative overflow-hidden rounded-3xl p-7 ${theme.borderCard} transition-all duration-200`}
    >
      <div
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          backgroundColor: skill.color,
        }}
      />
      <motion.div
        whileHover={{
          rotate: -8,
          scale: 1.08,
        }}
        className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
        style={{
          backgroundColor: `${skill.color}20`,
        }}
      >
        <img src={skill.icon} alt={skill.title} className="w-10 h-10" />
      </motion.div>
      <div className="relative z-10 mt-6">
        <h3 className={`text-xl font-bold ${theme.textPrimary}`}>
          {skill.title}
        </h3>

        <p className={`mt-3 text-sm leading-7 ${theme.textSecondary}`}>
          {skill.description}
        </p>
        <SkillProgress level={skill.level} color={skill.color} />
      </div>
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: `1px solid ${skill.color}50`,
        }}
      />
    </motion.div>
  );
};

export default Skills;
