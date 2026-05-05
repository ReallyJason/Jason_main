import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  const techStack = [
    { category: "Languages", items: ["TypeScript", "JavaScript", "C++", "C", "Java", "Python", "OCaml", "HTML/CSS"] },
    { category: "Frameworks & Libs", items: ["React", "Node.js", "Express", "Vite", "Framer Motion"] },
    { category: "Tools & DBs", items: ["Git", "SQL", "MongoDB", "PostgreSQL", "Docker", "Figma"] }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="glow-blob glow-purple"></div>
      <div className="container">
        <motion.div 
          className="about-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <div className="about-text">
              <p>
                I'm a computer science student, builder, and aspiring software engineer with a deep passion for 
                crafting elegant solutions to complex problems. 
              </p>
              <p>
                My journey in tech is driven by the desire to build products that matter. Whether it's 
                engineering a high-performance backend, designing a pixel-perfect frontend, or experimenting 
                with game physics in C++, I thrive at the intersection of logic and creativity.
              </p>
              <p>
                Currently, I'm focused on growing <strong>HiveFive</strong>, a creator-centric marketplace, while 
                continuously expanding my skill set in scalable architectures and interactive media.
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div className="tech-stack-container">
              <h3 className="tech-stack-title">Technical Arsenal</h3>
              <div className="tech-stack-grid">
                {techStack.map((stack, idx) => (
                  <div key={idx} className="tech-category glass">
                    <h4>{stack.category}</h4>
                    <div className="tech-items">
                      {stack.items.map((item, i) => (
                        <span key={i} className="tech-item-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
