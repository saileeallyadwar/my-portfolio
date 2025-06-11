import React, { useState, useEffect } from "react";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Certifications } from "./components/Certifications/Certifications";
import { Blogs } from "./components/Blogs/Blogs";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "./components/Navigation/Navigation";
import { Education } from "./components/Education/Education";
import "./App.css";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 }
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="app-container">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />      
      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Hero setActiveSection={setActiveSection} />
          <About setActiveSection={setActiveSection} />
          {/*
          <Education setActiveSection={setActiveSection} />
          */}
          <Skills setActiveSection={setActiveSection} />
          <Projects setActiveSection={setActiveSection} />
          <Certifications setActiveSection={setActiveSection} />
          <Blogs setActiveSection={setActiveSection} />
          <Contact setActiveSection={setActiveSection} />
          <Footer />
        </motion.div>
      </AnimatePresence>
      
    </div>
  );
}

export default App;