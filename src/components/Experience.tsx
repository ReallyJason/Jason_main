import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ClipboardCheck, 
  BarChart3, 
  BookOpen,
  Wind,
  Activity,
  Thermometer,
  BadgeCheck,
  ShieldAlert,
  HeartPulse,
  Users,
  Lightbulb,
  Shield,
  MessageSquare,
  Trophy
} from 'lucide-react';
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
        category1: {
          label: "Equipment",
          items: [
            { icon: <Wind size={14} />, label: "Pumps" },
            { icon: <Activity size={14} />, label: "Rotameters" },
            { icon: <Thermometer size={14} />, label: "Scrubbers" }
          ]
        },
        category2: {
          label: "Safety",
          items: [
            { icon: <BadgeCheck size={14} />, label: "License" },
            { icon: <ShieldAlert size={14} />, label: "OSHA" },
            { icon: <HeartPulse size={14} />, label: "PPE" }
          ]
        },
        category3: {
          label: "Documentation",
          items: [
            { icon: <ClipboardCheck size={14} />, label: "CoC Tracking" },
            { icon: <BarChart3 size={14} />, label: "Field Reports" },
            { icon: <BookOpen size={14} />, label: "Logbooks" }
          ]
        }
      },
      images: [
        { src: "/experience/Setting_up_pumps.webp", alt: "Setting up high-volume air pumps" },
        { src: "/experience/More_pumps.webp", alt: "Air sampling station array" },
        { src: "/experience/work_area.webp", alt: "Environmental monitoring work area" },
        { src: "/experience/Chain_of_Custody.webp", alt: "Documentation and Chain of Custody" }
      ]
    },
    {
      company: "Greater Ridgewood Youth Council",
      location: "Elmhurst, NY",
      role: "Group Leader",
      period: "July 2023 – August 2023",
      overview: "Orchestrated daily educational and recreational programming for large student groups, focusing on leadership, safety, and inclusive community building.",
      contributions: [
        {
          title: "Program Leadership",
          desc: "Planned, organized, and led daily recreational and educational activities for groups of 15–20 students."
        },
        {
          title: "Community Building",
          desc: "Fostered a positive, inclusive, and engaging environment that encouraged teamwork, sportsmanship, and healthy competition."
        },
        {
          title: "Student Supervision",
          desc: "Supervised students throughout activities, ensuring their safety, well-being, and adherence to program rules and schedules."
        },
        {
          title: "Conflict Resolution",
          desc: "Managed group behavior and resolved minor conflicts to maintain a respectful and collaborative atmosphere."
        },
        {
          title: "Stakeholder Communication",
          desc: "Communicated with staff and participants to coordinate activities and address student needs effectively."
        }
      ],
      toolkit: {
        category1: {
          label: "Management",
          items: [
            { icon: <Users size={14} />, label: "Group Dynamics" },
            { icon: <Zap size={14} />, label: "Event Planning" },
            { icon: <Trophy size={14} />, label: "Teamwork" }
          ]
        },
        category2: {
          label: "Safety",
          items: [
            { icon: <Shield size={14} />, label: "Supervision" },
            { icon: <HeartPulse size={14} />, label: "First Aid" },
            { icon: <ShieldAlert size={14} />, label: "Compliance" }
          ]
        },
        category3: {
          label: "Soft Skills",
          items: [
            { icon: <MessageSquare size={14} />, label: "Mediation" },
            { icon: <Lightbulb size={14} />, label: "Mentoring" },
            { icon: <Activity size={14} />, label: "Public Speaking" }
          ]
        }
      },
      images: [
        { src: "/experience/Build_your_racingcart.jpg", alt: "Students' cardboard racing cart project" },
        { src: "/experience/Super_hero_backstory.jpg", alt: "Superhero character design and backstory" },
        { src: "/experience/Short_story.jpg", alt: "Student-created comic strip" },
        { src: "/experience/paiting_of_superhero_in_galaxy.jpg", alt: "Art project: Superhero in the galaxy" }
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
          <p className="section-subtitle">A record of leadership, technical execution, and field operations.</p>
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

                <div className="toolkit-sidebar-modern glass border-beam-container">
                  <div className="border-beam" />
                  <h5 className="details-label"><ShieldCheck size={16} /> Technical Toolkit</h5>
                  
                  <div className="toolkit-mini-grid">
                    {/* Group 1 */}
                    <div className="mini-group">
                      <h6>{exp.toolkit.category1.label}</h6>
                      <div className="mini-items">
                        {exp.toolkit.category1.items.map((item, i) => (
                          <div key={i} className="mini-item">{item.icon} <span>{item.label}</span></div>
                        ))}
                      </div>
                    </div>

                    {/* Group 2 */}
                    <div className="mini-group">
                      <h6>{exp.toolkit.category2.label}</h6>
                      <div className="mini-items">
                        {exp.toolkit.category2.items.map((item, i) => (
                          <div key={i} className="mini-item">{item.icon} <span>{item.label}</span></div>
                        ))}
                      </div>
                    </div>

                    {/* Group 3 (Full Width at bottom) */}
                    <div className="mini-group wide">
                      <h6>{exp.toolkit.category3.label}</h6>
                      <div className="mini-items docs-row">
                        {exp.toolkit.category3.items.map((item, i) => (
                          <div key={i} className="mini-item">{item.icon} <span>{item.label}</span></div>
                        ))}
                      </div>
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
