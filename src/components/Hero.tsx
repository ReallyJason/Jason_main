import React from 'react';
import { ArrowRight, Mail, Briefcase, Zap, Gamepad2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Magnetic from './Magnetic';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="glow-blob glow-blue"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge hero-anim-item hero-delay-1">
            <span className="pulse-dot"></span>
            Available for new opportunities
          </div>

          <h1 className="hero-title hero-anim-item hero-delay-2">
            Hi, I'm <span className="text-gradient-accent">Jason Hu</span>.<br />
            <span className="text-gradient">Software Developer.</span>
          </h1>

          <p className="hero-subtitle hero-anim-item hero-delay-3">
            I have a passion for turning complex ideas into reality.
            Whether I'm architecting modern web platforms or engineering engaging game mechanics,
            I bring an easygoing, solution-oriented mindset to the table.
            I love building tools that work well and games that people love to play.
          </p>

          <div className="hero-actions hero-anim-item hero-delay-4">
            <div className="hero-main-actions">
              <Magnetic>
                <a href="#experience" className="btn btn-primary">
                  <Briefcase className="btn-icon-left" size={20} /> Work Experience <ArrowRight className="btn-icon" size={20} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#hive" className="btn btn-primary">
                  <Zap className="btn-icon-left" size={20} /> Featured Project <ArrowRight className="btn-icon" size={20} />
                </a>
              </Magnetic>
            </div>
            
            <div className="hero-secondary-actions">
              <Magnetic>
                <a href="#robogoose" className="btn btn-primary">
                  <Gamepad2 className="btn-icon-left" size={20} /> Game Dev Project <ArrowRight className="btn-icon" size={20} />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="hero-socials hero-anim-item hero-delay-5">
            <Magnetic strength={0.5}>
              <a href="https://github.com/ReallyJason" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <a href="https://www.linkedin.com/in/jason-hu12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <a href="mailto:jhu0039@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="hero-image-container hero-anim-item hero-delay-6">
          <img 
            src="/Jason.webp" 
            alt="Jason Hu" 
            className="hero-profile-pic" 
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
