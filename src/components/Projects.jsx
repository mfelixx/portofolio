import { useMemo, useState } from "react";
import { projects } from "../projects";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import github from "../assets/github2.png";

const Projects = ({ darkMode }) => {
  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    bgCard:
      "bg-linear-to-b from-[#0D182E] to-[#1F1F4D] shadow-lg hover:shadow-xl shadow-purple-500/20 backdrop-blur-2xl border border-violet-500/40",
    bgCategory: "text-white border-2 border-[#A78BFA] hover:bg-[#8B5CFA]",
    textTech: "text-gray-800",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    bgCard:
      "bg-white/50 shadow-lg hover:shadow-xl shadow-purple-500/20 border border-violet-500/40",
    bgCategory: "text-gray-800 border-2 border-[#A78BFA]",
    textTech: "text-gray-600",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  const categories = ["All", "Web", "Mobile"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const displayedProjects = useMemo(() => {
    return showAll ? filteredProjects : filteredProjects.slice(0, 3);
  }, [filteredProjects, showAll]);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            once: false,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-violet-500 font-bold">
            My Work
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 ${theme.textPrimary}`}
          >
            Featured Projects
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto leading-8 ${theme.textSecondary}`}
          >
            Here are some projects that showcase my experience in developing
            modern web and mobile applications.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center flex-wrap gap-12 mt-14">
        {categories.map((category) => (
          <motion.button
            whileTap={{
              scale: 0.95,
            }}
            whileHover={{
              y: -2,
            }}
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-2xl transition-all font-medium ${selectedCategory === category ? "bg-linear-to-r from-violet-600 to-purple-500 text-white shadow-md shadow-violet-500/30" : `${theme.bgCategory}`}`}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 px-6 lg:px-18"
        >
          {displayedProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -10 }}
              className={`group overflow-hidden rounded-2xl transition-all ${theme.bgCard}`}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/2" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="p-4 w-full h-full object-cover rounded-3xl duration-500 group-hover:scale-102"
                />
                <div className="absolute rounded-xl inset-0 duration-300 hidden lg:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 ">
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    href={project.github}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                  >
                    <img src={github} alt="" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    href={project.demo}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className={`text-xl font-bold ${theme.textPrimary}`}>
                    {project.title}
                  </h3>
                </div>
                <p className={`leading-7 ${theme.textSecondary}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-lg text-xs font-medium bg-violet-200 ${theme.textTech}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="lg:hidden flex justify-between gap-2 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 font-medium hover:text-violet-500 border border-white/40 rounded-full p-2"
                  >
                    <GitBranch size={18} color="white">
                      Github
                    </GitBranch>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 font-medium text-violet-500"
                  >
                    Detail
                    <ExternalLink size={18}></ExternalLink>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
      {filteredProjects.length > 3 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => setShowAll(!showAll)}
            className={`group flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-violet-600 to-purple-500 hover:bg-violet-700 text-white font-semibold transition-all shadow-lg shadow-violet-500/30`}
          >
            {showAll ? "Show Less" : "View All Projects"}

            <motion.span
              animate={{
                x: showAll ? 0 : [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
