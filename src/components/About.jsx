import { motion } from "framer-motion";
import { CodeXml, Download, GraduationCap, Smartphone } from "lucide-react";
import fotoDiri from "../assets/pasFotoKu.png";

const About = ({ darkMode }) => {
  const cards = [
    {
      icon: GraduationCap,
      title: "Education",
      value: "Universitas Jambi",
    },
    {
      icon: CodeXml,
      title: "Web",
      value: "Membangun aplikasi web modern dan responsif.",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      value: "Membangun aplikasi mobile menggunakan Flutter.",
    },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary: `text-white border-2 border-[#A78BFA] hover:bg-[#8B5CFA]`,
    circleImg: "bg-slate-900/60",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary: `text-gray-800 border-2 border-[#A78BFA] hover:bg-[#8B5CFA] hover:text-white`,
    circleImg: "bg-linear-to-r from-violet-600 to-purple-500",
  };

  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <section
      id="about"
      className={`min-h-screen relative overflow-hidden pt-20 px-6 lg:px-18`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className=" justify-center lg:col-span-1 flex"
          >
            <div className="relative w-90 h-117.5">
              <div className="flex items-center justify-center min-h-100 w-full max-w-md mx-auto">
                <motion.div
                  className="relative p-1 rounded-full dark:bg-linear-to-b dark:from-purple-500/60 dark:to-blue-500/30 shadow-[0_0_60px_rgba(168,85,247,0.15)]"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className={`p-1.5 rounded-full ${theme.circleImg} backdrop-blur-sm border border-white/10`}
                  >
                    <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-purple-500/40 group">
                      <img
                        src={fotoDiri}
                        alt="Foto Profil"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-purple-600/10 rounded-full blur-xl -z-10 animate-pulse" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 lg:py-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-start"
            >
              <h2
                className={`text-4xl md:text-5xl font-bold ${theme.textPrimary}`}
              >
                About{" "}
                <span className="bg-linear-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
            </motion.div>
            <p className={`mt-6 leading-8 ${theme.textSecondary}`}>
              Saya merupakan lulusan Sistem Informasi Universitas Jambi yang
              memiliki ketertarikan pada pengembangan aplikasi web dan mobile.
              Terbiasa menggunakan React, Flutter, Firebase, MERN Stack, serta
              berbagai teknologi modern untuk membangun aplikasi yang responsif,
              mudah digunakan, dan memiliki performa yang optimal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              {cards.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="rounded-2xl flex gap-3 items-center border p-2 border-slate-200 dark:border-slate-700 bg-white/80 backdrop-blur-xl shadow-lg"
                  >
                    <Icon
                      size={32}
                      strokeWidth={2}
                      className="text-violet-500 row-span-3 px-1 gap-1 items-center"
                    />

                    <div className="col-span-2 row-span-3 content-center">
                      <h4 className={`font-semibold`}>{item.title}</h4>
                      <p className={`text-sm justify-between text-slate-500`}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-5 mt-10">
              <motion.a
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="https://drive.google.com/file/d/18vMoV29R0-fiGh6fXLHKAFq9tTNmwSl0/view?usp=sharing"
                download
                className={`flex items-center gap-2 bg-linear-to-r from-violet-600 to-purple-500 text-white px-7 py-3 rounded-xl transition text-base`}
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
