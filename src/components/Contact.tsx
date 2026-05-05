import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, FileText, Coffee } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div 
          className="contact-container glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info">
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-desc">
              Whether you have a project in mind, want to discuss software engineering, or just want to say hi, my inbox is always open.
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
              <div className="contact-link">
                <div className="icon-wrapper">
                  <MapPin size={20} />
                </div>
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
          
          <div className="contact-availability">
            <div className="availability-card glass">
              <div className="status-header">
                <span className="pulse-dot green-pulse"></span>
                <h3 className="card-title">Current Status</h3>
              </div>
              <p className="status-text">
                I'm currently focused on growing <strong>HiveFive</strong>, but I'm always open to discussing new software opportunities, potential collaborations, or just grabbing a virtual coffee to talk about tech.
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
            </div>

            <div className="timezone-card glass">
              <div className="timezone-info">
                <Globe size={24} className="globe-icon" />
                <div>
                  <h3 className="card-title">Base of Operations</h3>
                  <p className="timezone-text">Based in NYC, but available to work anywhere.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
