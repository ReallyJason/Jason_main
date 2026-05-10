import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, FileText, Coffee } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <motion.div 
        className="mesh-gradient"
        animate={{
          background: [
            "radial-gradient(circle at 80% 20%, rgba(188, 19, 254, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(0, 242, 255, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(188, 19, 254, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(188, 19, 254, 0.05) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <div className="container">
        <motion.div 
          className="contact-container glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info">
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-desc">
              I’m currently exploring new professional chapters and am eager to connect regarding software engineering roles or innovative development projects. If you’re looking for a versatile developer to join your team, or just want to discuss potential opportunities, my inbox is always open.
            </p>
            
            <div className="contact-links">
              <a href="mailto:jhu0039@gmail.com" className="contact-link">
                <div className="icon-wrapper">
                  <Mail size={20} />
                </div>
                <span>jhu0039@gmail.com</span>
              </a>
              <a href="https://github.com/ReallyJason" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="icon-wrapper">
                  <FaGithub size={20} />
                </div>
                <span>github.com/ReallyJason</span>
              </a>
              <a href="https://www.linkedin.com/in/jason-hu12" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="icon-wrapper">
                  <FaLinkedin size={20} />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
          
          <div className="contact-availability">
            <motion.div 
              className="availability-card glass"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="status-header">
                <span className="pulse-dot green-pulse"></span>
                <h3 className="card-title">Current Status</h3>
              </div>
              <p className="status-text">
                I’m currently looking for my next challenge. Please take a moment to look over my resume and portfolio. I’m eager to bring my skills to a forward-thinking company that’s building the future of tech.
              </p>
              
              <div className="action-buttons">
                <a href="mailto:jhu0039@gmail.com" className="btn btn-primary action-btn">
                  <Coffee size={18} className="btn-icon-left" />
                  Let's Chat
                </a>
                <a href="/Jason_Hu_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary action-btn">
                  <FileText size={18} className="btn-icon-left" />
                  View Resume
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="timezone-card glass"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="timezone-info">
                <MapPin size={24} className="globe-icon" />
                <div>
                  <h3 className="card-title">Base of Operations</h3>
                  <p className="timezone-text">Based in NYC, but available to work anywhere.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
