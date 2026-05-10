import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Crosshair, Zap, Wind, Map, Gamepad2 } from 'lucide-react';
import { playQuack } from '../utils/audio';
import './RoboGooseShowcase.css';

const RoboGooseShowcase: React.FC = () => {
  const handleQuack = () => {
    playQuack();
  };

  return (
    <section id="robogoose" className="section robogoose-section">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="robogoose-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="robogoose-header-text">
            <div className="robogoose-badge glitch-badge" data-text="Game Dev Project">
              <Gamepad2 size={16} className="badge-icon" /> Game Dev Project
            </div>
            <h2 className="section-title glitch-title" data-text="RoboGoose">RoboGoose</h2>
            <p className="section-subtitle">
              An action-oriented, third-person physics-sandbox where you play as a cybernetically enhanced terminator goose.
            </p>
            <a href="https://reallyjason.itch.io/robogoose" target="_blank" rel="noopener noreferrer" className="btn robogoose-btn">
              Play on Itch.io <ExternalLink className="btn-icon" size={18} />
            </a>
          </div>
          
          <div className="robogoose-logo-wrapper" onMouseEnter={handleQuack}>
            <img src="/RoboGoose_Logo.webp" alt="RoboGoose Wanted Poster" className="robogoose-logo" />
          </div>
        </motion.div>

        <div className="robogoose-content">
          <motion.div 
            className="robogoose-images"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="robogoose-image-wrapper primary-image image-tilt-left">
              <img src="/RoboGoose1.webp" alt="RoboGoose Gameplay 1" className="robogoose-img" loading="lazy" />
              <div className="image-overlay noise-overlay"></div>
            </div>
            <div className="robogoose-image-wrapper secondary-image image-tilt-right">
              <img src="/RoboGoose2.webp" alt="RoboGoose Gameplay 2" className="robogoose-img" loading="lazy" />
              <div className="image-overlay noise-overlay"></div>
            </div>
          </motion.div>

          <motion.div 
            className="robogoose-details"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="robogoose-lore glass">
              <h3>The Mission</h3>
              <p>
                Set in a dystopian future where civilization has been decimated by bread-based nuclear weaponry, your primary objective is to dismantle a corporate monopoly over the world's remaining "nuclear bread" supply.
              </p>
              <div className="environments">
                <span className="env-tag">Downtown Streets</span>
                <span className="env-tag">Subway Tunnels</span>
              </div>
            </div>

            <div className="robogoose-mechanics">
              <h3>Specialized Arsenal</h3>
              <div className="mechanic-grid">
                <div className="mechanic-card glass border-beam-container">
                  <div className="border-beam" />
                  <Crosshair className="mechanic-icon" size={24} />
                  <h4>Pistol</h4>
                  <p>A primary projectile weapon for long-range engagements.</p>
                </div>
                <div className="mechanic-card glass border-beam-container">
                  <div className="border-beam" />
                  <Wind className="mechanic-icon" size={24} />
                  <h4>Sonic Honk</h4>
                  <p>A short-range acoustic blast that ragdolls enemies and manipulates objects.</p>
                </div>
                <div className="mechanic-card glass border-beam-container">
                  <div className="border-beam" />
                  <Zap className="mechanic-icon" size={24} />
                  <h4>Tactical Dash</h4>
                  <p>A high-velocity burst to dodge, close the distance, or clear massive gaps.</p>
                </div>
                <div className="mechanic-card glass border-beam-container">
                  <div className="border-beam" />
                  <Map className="mechanic-icon" size={24} />
                  <h4>WASD Navigation</h4>
                  <p>Precise, 360-degree ground movement for tight maneuvering.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoboGooseShowcase;
