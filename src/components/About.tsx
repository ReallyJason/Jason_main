import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiOpenjdk, 
  SiReact, 
  SiNodedotjs, 
  SiExpress,
  SiHtml5,
  SiCss,
  SiDocker, 
  SiGit, 
  SiPostgresql, 
  SiMongodb, 
  SiLinux,
  SiOcaml
} from 'react-icons/si';
import { Code2, Layout, Terminal, Cpu, Gamepad2, BookOpen, Utensils, Film, Map } from 'lucide-react';
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

            {/* HOBBIES & INTERESTS CARD */}
            <motion.div className="bento-card bento-large glass border-beam-container" style={{ marginTop: '40px' }}>
              <div className="border-beam" />
              <div className="bento-header">
                <div className="bento-icon-wrapper">
                  <Gamepad2 size={24} />
                </div>
                <h3>Beyond the Code</h3>
              </div>
              <div className="premium-skill-list">
                <div className="skill-item">
                  <Gamepad2 className="skill-brand-icon" style={{ color: '#ff4757' }} />
                  <div className="skill-details">
                    <span className="skill-name">Gaming</span>
                    <span className="skill-usage">FPS & Physics-Based Sandboxes</span>
                  </div>
                </div>
                <div className="skill-item">
                  <BookOpen className="skill-brand-icon" style={{ color: '#54a0ff' }} />
                  <div className="skill-details">
                    <span className="skill-name">Learning</span>
                    <span className="skill-usage">New Tech & Technical Books</span>
                  </div>
                </div>
                <div className="skill-item">
                  <Utensils className="skill-brand-icon" style={{ color: '#ff9f43' }} />
                  <div className="skill-details">
                    <span className="skill-name">Eating</span>
                    <span className="skill-usage">Exploring NYC's Food Scene</span>
                  </div>
                </div>
                <div className="skill-item">
                  <Film className="skill-brand-icon" style={{ color: '#ee5253' }} />
                  <div className="skill-details">
                    <span className="skill-name">Movies</span>
                    <span className="skill-usage">Sci-Fi & Psychological Thrillers</span>
                  </div>
                </div>
                <div className="skill-item">
                  <Map className="skill-brand-icon" style={{ color: '#2ed573' }} />
                  <div className="skill-details">
                    <span className="skill-name">Adventure</span>
                    <span className="skill-usage">NYC Explorer & Tech Enthusiast</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="about-visual">
            <div className="bento-grid">
              {/* LARGE CARD: CORE LANGUAGES */}
              <motion.div className="bento-card bento-large glass border-beam-container">
                <div className="border-beam" />
                <div className="bento-header">
                  <div className="bento-icon-wrapper">
                    <Code2 size={24} />
                  </div>
                  <h3>Core Languages</h3>
                </div>

                <div className="premium-skill-list">
                  <div className="skill-item">
                    <SiCplusplus className="skill-brand-icon cpp" />
                    <div className="skill-details">
                      <span className="skill-name">C++</span>
                      <span className="skill-usage">High-Performance Systems</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiTypescript className="skill-brand-icon ts" />
                    <div className="skill-details">
                      <span className="skill-name">TypeScript</span>
                      <span className="skill-usage">Scalable Web Apps</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiJavascript className="skill-brand-icon js" />
                    <div className="skill-details">
                      <span className="skill-name">JavaScript</span>
                      <span className="skill-usage">Interactive Experiences</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiPython className="skill-brand-icon python" />
                    <div className="skill-details">
                      <span className="skill-name">Python</span>
                      <span className="skill-usage">Scripts & Automation</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiOpenjdk className="skill-brand-icon java" />
                    <div className="skill-details">
                      <span className="skill-name">Java</span>
                      <span className="skill-usage">Enterprise Logic</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiOcaml className="skill-brand-icon ocaml" style={{ color: '#ec6847' }} />
                    <div className="skill-details">
                      <span className="skill-name">OCaml</span>
                      <span className="skill-usage">Functional Programming</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FULL STACK DEVELOPMENT CARD */}
              <motion.div className="bento-card bento-large glass border-beam-container">
                <div className="border-beam" />
                <div className="bento-header">
                  <div className="bento-icon-wrapper">
                    <Layout size={24} />
                  </div>
                  <h3>Full Stack Development</h3>
                </div>

                <div className="premium-skill-list">
                  <div className="skill-item">
                    <SiTypescript className="skill-brand-icon ts" />
                    <div className="skill-details">
                      <span className="skill-name">TypeScript</span>
                      <span className="skill-usage">Type-Safe Development</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiReact className="skill-brand-icon react" />
                    <div className="skill-details">
                      <span className="skill-name">React 19</span>
                      <span className="skill-usage">Modern UI & State</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiNodedotjs className="skill-brand-icon node" />
                    <div className="skill-details">
                      <span className="skill-name">Node.js</span>
                      <span className="skill-usage">Server-Side Runtime</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiExpress className="skill-brand-icon express" />
                    <div className="skill-details">
                      <span className="skill-name">Express</span>
                      <span className="skill-usage">RESTful API Design</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiHtml5 className="skill-brand-icon html" />
                    <div className="skill-details">
                      <span className="skill-name">HTML5</span>
                      <span className="skill-usage">Semantic Structure</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiCss className="skill-brand-icon css" />
                    <div className="skill-details">
                      <span className="skill-name">CSS3</span>
                      <span className="skill-usage">Responsive Styling</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* SYSTEMS & INFRASTRUCTURE CARD */}
              <motion.div className="bento-card bento-large glass border-beam-container">
                <div className="border-beam" />
                <div className="bento-header">
                  <div className="bento-icon-wrapper">
                    <Terminal size={24} />
                  </div>
                  <h3>Systems & Infrastructure</h3>
                </div>

                <div className="premium-skill-list">
                  <div className="skill-item">
                    <SiDocker className="skill-brand-icon docker" />
                    <div className="skill-details">
                      <span className="skill-name">Docker</span>
                      <span className="skill-usage">Containerization & Deployment</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiPostgresql className="skill-brand-icon postgres" />
                    <div className="skill-details">
                      <span className="skill-name">PostgreSQL</span>
                      <span className="skill-usage">Relational Data Systems</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiLinux className="skill-brand-icon linux" />
                    <div className="skill-details">
                      <span className="skill-name">Linux</span>
                      <span className="skill-usage">Kernel & Shell Scripting</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiMongodb className="skill-brand-icon mongodb" />
                    <div className="skill-details">
                      <span className="skill-name">MongoDB</span>
                      <span className="skill-usage">NoSQL & Document Storage</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <SiGit className="skill-brand-icon git" />
                    <div className="skill-details">
                      <span className="skill-name">Git</span>
                      <span className="skill-usage">Version Control & CI/CD</span>
                    </div>
                  </div>
                  <div className="skill-item">
                    <Cpu className="skill-brand-icon" style={{ color: 'var(--accent)' }} />
                    <div className="skill-details">
                      <span className="skill-name">Low-Level</span>
                      <span className="skill-usage">Embedded & Hardware Logic</span>
                    </div>
                  </div>
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
