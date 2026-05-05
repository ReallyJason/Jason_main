import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, X, Hexagon } from 'lucide-react';
import './HiveShowcase.css';

const HiveShowcase: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const features = [
    {
      title: "Creator-Friendly",
      desc: "Designed to empower creators with tools to succeed without aggressive cuts.",
      video: "/Mary Posting Onlypans.mp4",
      posterText: "Post A Service"
    },
    {
      title: "Lower Fees",
      desc: "Significantly lower service fees than competitors like Fiverr.",
      video: "/marys-dashboard-flooding-with-money.mp4",
      posterText: "Dashboard Revenue"
    },
    {
      title: "Seamless Reviews",
      desc: "A powerful review system building trust between buyers and sellers.",
      video: "/marys-profile-flooding-with-reviews.mp4",
      posterText: "Profile Reviews"
    },
    {
      title: "Direct Messaging",
      desc: "Real-time, integrated messaging connecting clients directly to creators.",
      video: "/people-sliding-into-marys-dms.mp4",
      posterText: "Real-time DMs"
    }
  ];

  return (
    <section id="hive" className="section hive-section">
      <Hexagon className="hexagon-accent hex-1" size={120} />
      <Hexagon className="hexagon-accent hex-2" size={180} />
      <div className="container">
        <motion.div 
          className="hive-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="hive-badge">
            <Hexagon size={16} fill="#f59e0b" /> Featured Project
          </div>
          <h2 className="section-title" style={{ color: '#fff' }}>Hive</h2>
          <p className="section-subtitle">
            A next-generation marketplace platform. Like Fiverr, but built specifically to be more creator-friendly with significantly lower service fees.
          </p>
          <a href="http://hive.jasonhusoftware.com" target="_blank" rel="noopener noreferrer" className="btn hive-btn hive-link">
            Visit hive.jasonhusoftware.com <ExternalLink className="btn-icon" size={18} />
          </a>
        </motion.div>

        <div className="hive-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="hive-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="hive-video-container"
                onClick={() => setActiveVideo(feature.video)}
              >
                <video 
                  src={feature.video} 
                  className="hive-video-preview" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
                <div className="hive-video-overlay">
                  <div className="play-button">
                    <Play fill="white" size={24} />
                  </div>
                  <span className="poster-text">{feature.posterText}</span>
                </div>
              </div>
              <div className="hive-card-content">
                <h3 className="hive-card-title">{feature.title}</h3>
                <p className="hive-card-desc">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setActiveVideo(null)}>
                <X size={24} />
              </button>
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                className="modal-video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HiveShowcase;
