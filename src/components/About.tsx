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
      <motion.div 
        className="mesh-gradient"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(0, 242, 255, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(188, 19, 254, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(0, 242, 255, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(0, 242, 255, 0.05) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
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
                I pride myself on being an open-minded and collaborative developer.
                I enjoy bridging the gap between complex technical logic and great user experiences.
                I'm currently looking for a dynamic team where I can contribute my skills in full-stack and
                game development to build something impactful.
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
