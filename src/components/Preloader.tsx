import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Initial delay to show the logo
    const timer = setTimeout(() => {
      document.body.classList.add('page-loaded');
      
      // Completely remove from DOM after animation finishes (1.2s + buffer)
      const removeTimer = setTimeout(() => {
        setIsHidden(true);
      }, 1500);
      
      return () => clearTimeout(removeTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isHidden) return null;

  return (
    <div id="loader-wrapper">
      <div className="loader-half loader-top">
        <div className="glow-edge-top"></div> 
      </div>
      
      <div className="loader-half loader-bottom">
        <div className="glow-edge-bottom"></div>
      </div>
      
      <div className="loader-logo">
        <span style={{ color: '#00f2ff' }}>&lt;</span> JH <span style={{ color: '#bc13fe' }}>/&gt;</span>
      </div>
    </div>
  );
};

export default Preloader;
