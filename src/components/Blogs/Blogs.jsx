import React from "react";
import { motion } from "framer-motion";
import "./Blogs.css";

const blogs = [
  {
    title: "Full Stack Developer",
    excerpt: "Worked as an intern in Physics department of Image processing as a full stack developer.",
    date: "10th June 2024 to 10th August 2024",
    link: "#"
  },
  {
    title: "SURE Intern – Physics Dept., IIT Hyderabad",
    excerpt: "Developing and training AI/ML models for medical applications using Python and deep learning frameworks as part of ongoing research.",
    date: "29th May 2025 to 29th June 2025",
    link: "#"
  }
];

export function Blogs({ setActiveSection }) {
  return (
    <motion.section
      id="blogs"
      className="blogs-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setActiveSection("blogs")}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="blogs-container">
        <motion.h2
          className="blogs-heading"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        
        <div className="blogs-grid">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-date">{blog.date}</span>
                <a 
                  href={blog.link}
                  className="blog-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}