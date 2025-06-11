import React from "react";
import { motion } from "framer-motion";
import "./Navigation.css";

export function Navigation({ activeSection, setActiveSection }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.nav
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <span className="nav-logo">Sailee Allyadwar</span>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}