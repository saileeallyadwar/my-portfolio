import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import "./Contact.css";

export function Contact({ setActiveSection }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    emailjs.send(
      'service_cr3wq8w',
      'template_2wnsmmo',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'saileeallyadwar51@gmail.com',
        reply_to: formData.email
      },
      'MQRxvWVTL5s7iadIm'
    )
    .then((response) => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, (err) => {
      setIsSubmitting(false);
      setError("Failed to send message. Please try again later.");
      console.error('EmailJS Error:', err);
    });
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setActiveSection("contact")}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="contact-container">
        <motion.h2
          className="contact-heading"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="form-group" whileHover={{ scale: 1.01 }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="form-input"
              required
            />
          </motion.div>
          
          <motion.div className="form-group" whileHover={{ scale: 1.01 }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="form-input"
              required
            />
          </motion.div>
          
          <motion.div className="form-group" whileHover={{ scale: 1.01 }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="form-textarea"
              required
            />
          </motion.div>
          
          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="submit-loading"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="submit-spinner"
                />
                Sending...
              </motion.span>
            ) : (
              <motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
                Send Message
              </motion.span>
            )}
          </motion.button>
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="error-message"
            >
              {error}
            </motion.div>
          )}
          
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="success-message"
            >
              Message sent successfully! I'll get back to you soon at saileeallyadwar51@gmail.com
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}