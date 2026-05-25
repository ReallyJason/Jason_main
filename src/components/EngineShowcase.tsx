import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Zap, 
  Globe, 
  MessageSquare, 
  Edit3, 
  Video, 
  Play
} from 'lucide-react';
import './EngineShowcase.css';

const EngineShowcase: React.FC = () => {
  const features = [
    {
      title: "Real-time Messaging & DMs",
      desc: "Robust, live direct messaging and multi-user chatrooms powered by a custom-engineered WebSocket connection manager.",
      image: "/websocket_chat.png",
      badgeText: "WebSockets",
      icon: <MessageSquare size={18} className="text-cyan-400" />
    },
    {
      title: "Collaborative Whiteboard",
      desc: "Multi-user drawing canvas with instant stroke synchronization and persistent stroke history stored in MongoDB.",
      image: "/drawing_canvas.png",
      badgeText: "HTML5 Canvas",
      icon: <Edit3 size={18} className="text-purple-400" />
    },
    {
      title: "WebRTC Peer-to-Peer Calling",
      desc: "Instant audio and video calling established directly between browsers using a custom WebSocket signaling broker.",
      image: "/webrtc_call.png",
      badgeText: "WebRTC",
      icon: <Video size={18} className="text-pink-400" />
    },
    {
      title: "Adaptive Video Streaming",
      desc: "YouTube-style media catalog serving multi-bitrate HLS configurations (.m3u8 index maps & .ts segments) transcoded by ffmpeg.",
      image: "/video_stream.png",
      badgeText: "HLS / FFmpeg",
      icon: <Play size={18} className="text-yellow-400" />
    }
  ];

  return (
    <section id="engine" className="section engine-section">
      <div className="engine-glow-blob engine-blob-cyan"></div>
      <div className="engine-glow-blob engine-blob-purple"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div 
          className="engine-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="engine-badge cyberpunk-border">
            <Zap size={14} className="engine-badge-icon" /> Featured Project
          </div>
          <h2 className="section-title text-gradient" style={{ color: 'var(--text-primary)', fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
            Custom Socket Engine
          </h2>
          <p className="section-subtitle">
            A high-performance real-time media portal. Built completely from the socket layer up in Python to support collaborative whiteboard synchronization, instant messaging, peer-to-peer video calling, and adaptive-bitrate video streaming.
          </p>
          <a href="https://cse312.jasonhusoftware.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary engine-link" style={{ fontFamily: 'var(--font-mono)' }}>
            Visit the Engine <ExternalLink className="btn-icon" size={18} style={{ marginLeft: '8px' }} />
          </a>
        </motion.div>

        {/* Feature Grid */}
        <div className="engine-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="engine-card glass border-beam-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="border-beam" />
              <div className="engine-image-container">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="engine-image-preview" 
                  loading="lazy"
                />
                <div className="engine-image-overlay">
                  <span className="poster-text">{feature.badgeText}</span>
                </div>
              </div>
              <div className="engine-card-content">
                <div className="flex items-center gap-2 mb-2">
                  {feature.icon}
                  <h3 className="engine-card-title" style={{ margin: 0 }}>{feature.title}</h3>
                </div>
                <p className="engine-card-desc">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineShowcase;
