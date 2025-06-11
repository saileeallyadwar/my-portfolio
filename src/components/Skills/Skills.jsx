import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "Python", level: 90 },
  { name: "C++", level: 85 },
  { name: "Java", level: 95 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 75 },
  { name: "MongoDB", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Flask", level: 80 },
  { name: "Streamlit", level: 75 },
  { name: "R", level: 65 },
  { name: "Power BI", level: 80 },
  { name: "Tableau", level: 75 }
];

export function Skills({ setActiveSection }) {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setActiveSection("skills")}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="skills-container">
        <motion.h2 
          className="skills-heading"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}