import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = ({ darkMode, toogleMode }) => {
  const [activeSeaction, setActiveSeaction] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const lightColor = {
    textPrimary: "text-[#374151]",
    textActive: "text-[#8B5CF6]",
    indicator: "text-[#8B5CF6]",
  };

  const darkColor = {
    textPrimary: "text-[#F8FAFC]",
    textActive: "text-[#8B5CF6]",
    indicator: "text-[#8B5CF6]",
  };

  const colors = darkMode ? darkColor : lightColor;

  const handleNavClick = (itemName) => {
    setActiveSeaction(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? "bg-[#0D182E]/40 backdrop-blur-lg shadow-lg"
            : "bg-white/40 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex w-full items-center justify-center px-4 py-3 lg:px-8 `}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="items-center space-x-2 max-md:w-1/2 w-1/4 flex"
          >
            <span
              className={`text-xl font-bold ${darkMode ? colors.textPrimary : colors.textPrimary}`}
            >
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="#8B5CF6"
                  className="size-7 mr-1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
                <span>Mikhael Felix</span>
              </span>
            </span>
          </motion.a>
          <div className="hidden lg:w-3/4 lg:flex items-center justify-end space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`relative ${colors.textPrimary}`}
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 ${activeSeaction === item.name.toLocaleLowerCase() ? colors.textActive : `${colors.textPrimary}`}`}
                  whileHover={{ scale: 1.1, color: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
                {activeSeaction === item.name.toLocaleLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`border absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}
                  ></motion.div>
                )}
              </a>
            ))}
          </div>
          <div className="max-lg:w-3/4 flex justify-end items-center space-x-4">
            <motion.button
              whiileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toogleMode}
              className={`p-2 rounded-full transition-colors`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              style={{
                background: "#885CF6",
              }}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-yellow-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-[#F8FAFC]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </motion.button>
          </div>
          <div className={`flex lg:hidden items-center space-x-4`}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${darkMode ? "bg-[#312E81]" : "bg-gray-200"} transition-colors`}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 ${darkMode ? "text-[#F8FAFC]" : "text-[#374151]"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-6 ${darkMode ? "text-[#F8FAFC]" : "text-[#374151]"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 mt-2 mx-2 lg:hidden ${darkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-lg rounded-xl shadow-lg border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <div className="px-4 py-3 space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={"block"}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`py-3 px-4 rounded-lg text-center 
                    ${activeSeaction === item.name.toLocaleLowerCase() ? (darkMode ? "bg-gray-800" : "bg-purple-50") : ""}`}
                  >
                    <span
                      className={`font-medium ${activeSeaction === item.name.toLocaleLowerCase() ? colors.textActive : colors.textPrimary}`}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
