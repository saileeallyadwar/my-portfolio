import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

export function Education({ setActiveSection }) {
  const educationData = [
    {
      institution: "SRI SATHYA SAI PRIMARY SCHOOL PUTTAPARTHI",
      degree: "High School ",
      period: "2015-2021",
      description: "Board - CBSE",
      highlights: [
        "Percentage - 90.4%",
        "Secured a full 100% in Mathematics during the 10th-grade board exams, demonstrating exceptional quantitative skills."
      ]
    },
    {
      institution: "SPRINGDALES CHILDREN’S SCHOOL, KOTA",
      degree: "Pre University",
      period: "2021 - 2022",
      description: "Board – CBSE",
      highlights: [
        "Percentage - 85%"
      ]
    },
    {
      institution: "VELLORE INSTITUTE OF TECHNOLOGY, CHENNAI",
      degree: "Bachelor of Technology ",
      period: "2022 – 2026",
      description: "Computer Science And Engineering",
      highlights: [
        "CGPA – 8.60 [till current]"
      ]
    }
  ];

  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setActiveSection("education")}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="education-container">
        <motion.h2
          className="education-heading"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Academic Journey
        </motion.h2>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="education-header">
                <div>
                  <h3 className="education-institution">{edu.institution}</h3>
                  <p className="education-degree">{edu.degree}</p>
                </div>
                <span className="education-period">
                  {edu.period}
                </span>
              </div>
              
              <p className="education-description">{edu.description}</p>
              
              <ul className="education-highlights">
                {edu.highlights.map((item, i) => (
                  <li key={i} className="highlight-item">
                    <span className="highlight-icon">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}