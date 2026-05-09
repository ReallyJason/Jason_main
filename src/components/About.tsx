import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Database, Layout, Box } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
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
            <div className="bento-grid">
              {/* Large Core Tech Card */}
              <motion.div 
                className="bento-card bento-large glass"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bento-icon-wrapper">
                  <Code2 className="bento-icon" size={32} />
                </div>
                <h3>Core Languages</h3>
                <div className="bento-tags">
                  <span className="tech-item-badge">C++</span>
                  <span className="tech-item-badge">TypeScript</span>
                  <span className="tech-item-badge">JavaScript</span>
                  <span className="tech-item-badge">Python</span>
                  <span className="tech-item-badge">Java</span>
                </div>
                <div className="bento-card-glow" />
              </motion.div>

              {/* Frontend Card */}
              <motion.div 
                className="bento-card bento-medium glass"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bento-icon-wrapper">
                  <Layout className="bento-icon" size={24} />
                </div>
                <h3>Frontend</h3>
                <div className="bento-tags">
                  <span className="tech-item-badge">React</span>
                  <span className="tech-item-badge">Framer Motion</span>
                  <span className="tech-item-badge">HTML/CSS</span>
                </div>
              </motion.div>

              {/* Backend Card */}
              <motion.div 
                className="bento-card bento-small glass"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bento-icon-wrapper">
                  <Database className="bento-icon" size={20} />
                </div>
                <h3>Backend</h3>
                <div className="bento-tags">
                  <span className="tech-item-badge">Node.js</span>
                  <span className="tech-item-badge">Express</span>
                </div>
              </motion.div>

              {/* Infrastructure Card */}
              <motion.div 
                className="bento-card bento-small glass"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bento-icon-wrapper">
                  <Box className="bento-icon" size={20} />
                </div>
                <h3>Infrastructure</h3>
                <div className="bento-tags">
                  <span className="tech-item-badge">Docker</span>
                  <span className="tech-item-badge">Git</span>
                </div>
              </motion.div>

              {/* Data Card */}
              <motion.div 
                className="bento-card bento-medium glass"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bento-icon-wrapper">
                  <Terminal className="bento-icon" size={24} />
                </div>
                <h3>Data & Systems</h3>
                <div className="bento-tags">
                  <span className="tech-item-badge">SQL</span>
                  <span className="tech-item-badge">PostgreSQL</span>
                  <span className="tech-item-badge">MongoDB</span>
                  <span className="tech-item-badge">Linux</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
