import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
  const otherProjects = [
    {
      title: "TaskMaster Pro",
      description: "A collaborative project management tool built with React, Node.js, and WebSockets for real-time updates.",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Nebula Engine",
      description: "A lightweight 2D game engine tailored for rapid prototyping, written entirely in C++ with OpenGL.",
      techStack: ["C++", "OpenGL", "CMake"],
      githubUrl: "#"
    },
    {
      title: "FinTech Dashboard",
      description: "A modern, responsive financial dashboard visualizing crypto and stock data using D3.js and TailwindCSS.",
      techStack: ["TypeScript", "D3.js", "TailwindCSS"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Other Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work across web development, software engineering, and game development.
          </p>
        </motion.div>

        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-card-header">
                <Code className="project-icon" size={32} />
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-tech">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
