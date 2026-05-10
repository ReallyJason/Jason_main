import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'hive', label: 'HiveFive' },
  { id: 'robogoose', label: 'RoboGoose' },
  { id: 'contact', label: 'Contact' }
];

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-track">
        <motion.div className="scroll-bar" style={{ scaleY, transformOrigin: 'top' }} />
      </div>
      
      <div className="section-dots">
        {sections.map((section) => (
          <a 
            key={section.id} 
            href={`#${section.id}`}
            className={`section-dot-wrapper ${activeSection === section.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="section-label">{section.label}</span>
            <div className="section-dot" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgress;
