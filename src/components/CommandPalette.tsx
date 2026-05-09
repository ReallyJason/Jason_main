import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Command, User, Briefcase, Zap, 
  Gamepad2, Mail, Sun, Download 
} from 'lucide-react';
import { playBlip } from '../utils/audio';
import './CommandPalette.css';

interface CommandPaletteProps {
  isExternalOpen?: boolean;
  onClose?: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isExternalOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const actions = [
    { id: 'about', title: 'Go to About', icon: <User size={18} />, section: '#about' },
    { id: 'exp', title: 'Go to Experience', icon: <Briefcase size={18} />, section: '#experience' },
    { id: 'hive', title: 'Go to HiveFive', icon: <Zap size={18} />, section: '#hive' },
    { id: 'goose', title: 'Go to RoboGoose', icon: <Gamepad2 size={18} />, section: '#robogoose' },
    { id: 'contact', title: 'Go to Contact', icon: <Mail size={18} />, section: '#contact' },
    { id: 'theme', title: 'Toggle Theme', icon: <Sun size={18} />, action: 'theme' },
    { id: 'resume', title: 'View Resume', icon: <Download size={18} />, action: 'resume' },
  ];

  const filteredActions = actions.filter(action => 
    action.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleAction = useCallback((action: typeof actions[0]) => {
    playBlip();
    if (action.section) {
      document.querySelector(action.section)?.scrollIntoView({ behavior: 'smooth' });
    } else if (action.action === 'theme') {
      const btn = document.querySelector('.theme-toggle-btn') as HTMLButtonElement;
      btn?.click();
    } else if (action.action === 'resume') {
      window.open('https://drive.google.com/file/d/1ZJeEGTaYPUxbWY6yWjx7P-c1q3Tgrgl9/view?usp=sharing', '_blank');
    }
    setIsOpen(false);
    if (onClose) onClose();
    setQuery('');
  }, [onClose]);

  // Sync state from props during render phase
  if (isExternalOpen && !isOpen) {
    setIsOpen(true);
  }

  // Handle ESC key and Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        if (onClose) onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleManualClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="command-palette-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleManualClose}
          />
          <motion.div 
            className="command-palette-window glass"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
          >
            <div className="command-palette-search">
              <Search size={20} className="search-icon" />
              <input 
                autoFocus
                type="text" 
                placeholder="Type a command or search..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="command-palette-hint">
                <Command size={14} /> <span>K</span>
              </div>
            </div>

            <div className="command-palette-results">
              {filteredActions.length > 0 ? (
                filteredActions.map((action) => (
                  <button 
                    key={action.id} 
                    className="command-palette-item"
                    onClick={() => handleAction(action)}
                  >
                    <div className="item-icon">{action.icon}</div>
                    <span>{action.title}</span>
                  </button>
                ))
              ) : (
                <div className="command-palette-no-results">No commands found.</div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
