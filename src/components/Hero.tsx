import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Briefcase, User, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import MagneticButton from './MagneticButton';
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
            <div className="hero-main-actions">
              <MagneticButton>
                <a href="#about" className="btn btn-primary">
                  <User className="btn-icon-left" size={20} /> About Me <ArrowRight className="btn-icon" size={20} />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#experience" className="btn btn-primary">
                  <Briefcase className="btn-icon-left" size={20} /> Work Experience <ArrowRight className="btn-icon" size={20} />
                </a>
              </MagneticButton>
            </div>
            
            <div className="hero-secondary-actions">
              <MagneticButton>
                <a href="#hive" className="btn btn-primary">
                  <Zap className="btn-icon-left" size={20} /> Featured Project <ArrowRight className="btn-icon" size={20} />
                </a>
              </MagneticButton>
            </div>
          </div>

          <div className="hero-socials">
            <MagneticButton distance={20}>
              <a href="https://github.com/ReallyJason" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
            </MagneticButton>
            <MagneticButton distance={20}>
              <a href="https://www.linkedin.com/in/jason-hu12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </MagneticButton>
            <MagneticButton distance={20}>
              <a href="mailto:jhu0039@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img src="/Jason.webp" alt="Jason Hu" className="hero-profile-pic" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
