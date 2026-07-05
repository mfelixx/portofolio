import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toogleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div
      className={`${darkMode ? "bg-linear-to-b from-[#0D182E] to-[#312E81] min-h-screen" : "bg-linear-to-b from-[#F8FAFC] to-[#FFFFFF] min-h-screen"}`}
    >
      <Navbar darkMode={darkMode} toogleMode={toogleMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
