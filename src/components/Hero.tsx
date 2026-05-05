import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="glow-blob glow-blue"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="pulse-dot"></span>
            Available for new opportunities
          </motion.div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient-accent">Jason Hu</span>.<br />
            <span className="text-gradient">Software Developer.</span>
          </h1>

          <p className="hero-subtitle">
            I have a passion for turning complex ideas into reality.
            Whether I'm architecting modern web platforms or engineering engaging game mechanics,
            I bring an easygoing, solution-oriented mindset to the table.
            I love building tools that work well and games that people love to play.
          </p>

          <div className="hero-actions">
            <a href="#hive" className="btn btn-primary">
              View Featured Project <ArrowRight className="btn-icon" size={20} />
            </a>
            <a href="#projects" className="btn btn-secondary">
              Explore Work
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ReallyJason" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jason-hu12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:jhu0039@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img src="/Jason.png" alt="Jason Hu" className="hero-profile-pic" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
