import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Smart Attendance App",
    desc: "Collaborated on a group project to develop an attendance app that prevents proxy attendance using face recognition and location-based verification.",
    tech: "Python, Firebase, OpenCV",
    link: "https://smart-attendance-app-seven.vercel.app"
  },
  {
    title: "DataSpark",
    desc: "Created DataSpark, a retail analytics solution for electronics, using Python for data processing, SQL for management, and Power BI/Tableau for interactive dashboards and insights.",
    tech: "Python, SQL, Power BI",
    link: "https://github.com/saileeallyadwar/dataspark"
  },
  {
    title: "Smart Automated Clothesline",
    desc: " Developed a smart automated clothesline using Arduino, integrating a rain sensor to detect precipitation and control a motorized pulley system that retracts clothes indoors. Programmed the microcontroller for efficient sensor and motor contro",
    tech: "C, Arduino, Sensors",
  },
  {
    title: "Waterfall Safety Monitor",
    desc: "Developed a prototype to monitor water levels in real-time at a waterfall, enhancing safety by detecting hazardous water fluctuations.",
    tech: "Arduino, IoT, Sensors",
  },
  {
    title: "Smart Medical Imaging",
    desc: "A full-stack medical imaging web app that denoises fibril TIFF images using deep learning and converts them into PNG format. Built to assist doctors in clearer diagnostics with easy upload, processing, and download features.",
    tech: "Flask, HTML/CSS, Python 3.9.13, TensorFlow 2.15, Keras 2.15, Matplotlib 3.9.0",
    link: "https://github.com/saileeallyadwar/fibril-app",
  },
];

export function Projects({ setActiveSection }) {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setActiveSection("projects")}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="projects-container">
        <motion.h2
          className="projects-heading"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="project-card-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-card">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <p className="project-tech">Tech Used: {proj.tech}</p>
                <motion.a
                  href={proj.link}
                  className="project-link"
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}