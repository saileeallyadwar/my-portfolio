import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import saileePhoto from "../../assets/sailee.jpg";
import "./Hero.css";

const TEXTS = [
  "Data Science",
  "Full Stack Developer",
];

export function Hero({ setActiveSection }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const nextTextIndex = currentTextIndex % TEXTS.length;
    const fullText = TEXTS[nextTextIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex(currentTextIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting]);

  return (
    <motion.section
      id="home"
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onViewportEnter={() => setActiveSection("home")}
    >
      {/* Animated background elements */}
      <motion.div
        className="bg-circle-1"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-circle-2"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-circle-3"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-content-wrapper">
        {/* Photo on the left */}
        <motion.div
          className="hero-photo-container"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={saileePhoto}
            alt="Sailee Allyadwar"
            className="hero-photo"
          />
        </motion.div>

        {/* Text content on the right */}
        <motion.div
          className="hero-text-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Hi, Everyone <br/> My name is 
            <h1 style={{color:'#8bb7fa'}}>Sailee Allyadwar</h1>
          </motion.h1>

          <div className="hero-subtitle">
            <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Currently @ VIT Chennai & IIT Madras | Interned @ IIT Hyderabad
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}