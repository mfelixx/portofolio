import linkedind from "../assets/linkedin.png";
import github from "../assets/github.png";
import wa from "../assets/wa.png";
import hero from "../assets/hero1.png";
import { motion } from "framer-motion";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    {
      icon: linkedind,
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/mikhael-felix/",
    },
    {
      icon: github,
      alt: "Github",
      href: "https://github.com/mfelixx",
    },
    {
      icon: wa,
      alt: "WhatsApp",
      href: "https://wa.me/6283826141178",
    },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary: `text-white border-2 border-[#A78BFA] hover:bg-[#8B5CFA]`,
    decorativeCircle: "bg-[#8B5CFA] opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary: `text-gray-800 border-2 border-[#A78BFA] hover:bg-[#8B5CFA] hover:text-white`,
    decorativeCircle: "bg-[#8B5CFA] opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10 pt-20 lg:pt-20"
      >
        <div
          className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row  items-center justify-between lg:mt-6 mt-14
        "
        >
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 md:mt-8">
            <h1
              className={`title-font text-2xl sm:text-3xl lg:text-4xl mb-6 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                Mikhael Felix
              </span>
            </h1>
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Developing modern web and mobile applications with a focus on
              performance, ease of use, and clean architecture.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mx-1 mb-6 sm:mb-8 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  data-aos-delay={`${400 + index * 100}`}
                  className={`transform hover:scale-110 transition-transform duration-300`}
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`  w-6 h-6 sm:w-8 sm:h-8 object-contain ${darkMode ? "" : "filter brightness-75"}`}
                  />
                </a>
              ))}
            </div>
            <div className="w-full mb-6 sm:mb-8">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href="#projects" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center bg-linear-to-r from-violet-600 to-purple-500 text-white border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(139,92,250,0.7)] rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform">
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-4 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(139,92,250,0.7)] rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-center px-2 lg:justify-start gap-8 sm:gap-10 lg:gap-12 my-6 sm:my-6">
              <div
                className="text-center lg:text-start"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div
                  className={`mb-2 text-xl sm:text-1xl lg:text-2xl font-bold ${theme.textPrimary}`}
                >
                  8+
                </div>
                <div
                  className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Projects
                </div>
              </div>
              <div
                className="text-center lg:text-start"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div
                  className={` mb-2 text-xl sm:text-1xl lg:text-2xl font-bold ${theme.textPrimary}`}
                >
                  4+
                </div>
                <div
                  className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Years Learning
                </div>
              </div>

              <div
                className="text-center lg:text-start"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div
                  className={`mb-2 text-xl sm:text-1xl lg:text-2xl font-bold ${theme.textPrimary}`}
                >
                  100%
                </div>
                <div
                  className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  Commitment
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-90 h-100">
              <div className="absolute border w-60 h-60 rounded-full bg-violet-500/25 blur-[120px] top-10 left-20" />
              <div className="absolute inset-0 rounded-[38px] bg-white/10 backdrop-blur-xl border border-white/15" />
              <div className="absolute top-10 left-10 grid grid-cols-4 gap-3 opacity-40">
                {[...Array(16)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-violet-400"
                  />
                ))}
              </div>
              <motion.img
                src={hero}
                alt="hero"
                className="absolute top-3 left-1/2 -translate-x-1/2 object-cover w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,.45)]"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-40 -left-10 px-3 py-2 rounded-2xl bg-white/60 shadow-xl"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
              >
                <p className="font-semibold">💻 Web & Mobile</p>

                <p className="text-sm text-gray-500">Developer</p>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64  ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block `}
        >
          {" "}
          0
        </div>
      </section>
    </div>
  );
};

export default Hero;
