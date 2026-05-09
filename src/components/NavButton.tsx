import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import './NavButton.css';

interface NavButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ onClick, isOpen }) => {
  return (
    <div className="nav-btn-container">
      <motion.button 
        className={`nav-toggle-btn ${isOpen ? 'active' : ''}`} 
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Navigation"
      >
        <Compass size={20} />
        <span className="btn-text">Quick Navigation</span>
      </motion.button>
    </div>
  );
};

export default NavButton;
