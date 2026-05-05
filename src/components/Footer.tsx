import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '40px 0',
      backgroundColor: 'var(--bg-secondary)',
      textAlign: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        <div style={{
          display: 'flex',
          gap: '24px'
        }}>
          <a href="https://github.com/ReallyJason" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jason-hu12" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:jhu0039@gmail.com" style={{ color: 'var(--text-secondary)' }}>
            <Mail size={24} />
          </a>
        </div>
        
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Jason Hu Software. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
