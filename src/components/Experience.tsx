import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "JC Broderick & Associates",
      location: "Hauppauge, NY",
      role: "Air Technician",
      period: "June 2025 – August 2025",
      overview: "Managed environmental safety and air quality monitoring for asbestos abatement projects in public school facilities. Responsible for the calibration, deployment, and logistics of high-precision sampling equipment.",
      contributions: [
        {
          title: "Regulatory Compliance",
          desc: "Operated under a state-issued license to ensure all air sampling met strict NYS Department of Labor and EPA safety standards."
        },
        {
          title: "Technical Monitoring",
          desc: "Built and maintained multiple sampling stations using high-volume pumps. Conducted rigorous flow-rate calibrations to ensure 100% data accuracy."
        },
        {
          title: "Final Clearance Operations",
          desc: "Led \"Final\" air quality testing in school corridors and classrooms to certify environments as safe for student and faculty re-occupancy."
        },
        {
          title: "Logistics & Data Integrity",
          desc: "Managed the chain of custody for hazardous samples, transporting materials to laboratories and maintaining exhaustive daily technical logs."
        },
        {
          title: "Safety Engineering",
          desc: "Executed safety protocols in high-risk zones, including the use of PPE (respirators) and managing site-specific hazards such as electrical grounding for industrial fans."
        }
      ],
      toolkit: {
        equipment: ["High-volume air pumps", "Rotameters", "Air scrubbers"],
        safety: ["Asbestos Handling License", "OSHA Compliance", "Respiratory Protection"],
        docs: ["Chain of Custody (CoC)", "Daily Field Reports", "Technical Logbooks"]
      },
      images: [
        { src: "/experience/Setting_up_pumps.webp", alt: "Setting up high-volume air pumps" },
        { src: "/experience/More_pumps.webp", alt: "Air sampling station array" },
        { src: "/experience/work_area.webp", alt: "Environmental monitoring work area" },
        { src: "/experience/Chain_of_Custody.webp", alt: "Documentation and Chain of Custody" }
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">A record of field operations and technical execution.</p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              className="experience-item glass"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="experience-header">
                <div className="experience-main-info">
                  <div className="company-info">
                    <Briefcase className="exp-icon" size={24} />
                    <h3>{exp.company}</h3>
                  </div>
                  <h4 className="role-title text-gradient-accent">{exp.role}</h4>
                </div>
                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="experience-overview">{exp.overview}</p>

              <div className="experience-details-grid">
                <div className="contributions-list">
                  <h5 className="details-label"><Zap size={16} /> Key Contributions</h5>
                  {exp.contributions.map((item, i) => (
                    <div key={i} className="contribution-item">
                      <CheckCircle2 size={18} className="check-icon" />
                      <div>
                        <strong>{item.title}:</strong> {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="toolkit-sidebar">
                  <h5 className="details-label"><ShieldCheck size={16} /> Technical Toolkit</h5>
                  <div className="toolkit-section">
                    <h6>Equipment</h6>
                    <div className="toolkit-tags">
                      {exp.toolkit.equipment.map((t, i) => <span key={i} className="tech-item-badge">{t}</span>)}
                    </div>
                  </div>
                  <div className="toolkit-section">
                    <h6>Safety & Compliance</h6>
                    <div className="toolkit-tags">
                      {exp.toolkit.safety.map((t, i) => <span key={i} className="tech-item-badge">{t}</span>)}
                    </div>
                  </div>
                  <div className="toolkit-section">
                    <h6>Documentation</h6>
                    <div className="toolkit-tags">
                      {exp.toolkit.docs.map((t, i) => <span key={i} className="tech-item-badge">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>

              {/* PHOTO GALLERY SECTION */}
              {exp.images && (
                <div className="experience-gallery">
                  {exp.images.map((img, i) => (
                    <motion.div 
                      key={i} 
                      className="gallery-item glass"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img src={img.src} alt={img.alt} loading="lazy" />
                      <div className="gallery-caption">{img.alt}</div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
