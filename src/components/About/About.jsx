import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export function About({ setActiveSection }) {
  const text ="I'm a final-year Computer Science student at Vellore Institute of Technology, Chennai, currently pursuing a Master’s in Data Science from IIT Madras. With hands-on internship experience at IIT Hyderabad and a solid foundation in AI and machine learning model development, I combine academic excellence with real-world application. My skill set spans across artificial intelligence, machine learning, data science, and full-stack development, enabling me to build impactful, end-to-end tech solutions."
     return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onViewportEnter={() => setActiveSection("about")}
    >
      <motion.h2 
        className="about-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        👋 About Me
      </motion.h2>
      
      <motion.div
        className="about-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {text}
      </motion.div>
    </motion.section>
  );
}