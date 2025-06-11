import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

const certifications = [
  {
    title: "Masters in Data Science",
    issuer: "GUVI",
    date: "May 2024 - September 2024",
    link: "https://www.guvi.in/certificate?id=43AO8h407uU8763Y19"
  },
  
];

export function Certifications({ setActiveSection }) {
  return (
    <motion.section
      id="certifications"
      className="certifications-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setActiveSection("certifications")}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="certifications-container">
        <motion.h2
          className="certifications-heading"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="certification-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-issuer">{cert.issuer}</p>
              <p className="certification-date">{cert.date}</p>
              <a 
                href={cert.link} 
                className="certification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}