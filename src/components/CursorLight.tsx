import React, { useEffect, useState, useRef } from 'react';
import './CursorLight.css';

const CursorLight: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile && cursorRef.current) {
        // Use transform for better performance than top/left
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div 
      ref={cursorRef}
      className="cursor-light"
      style={{ 
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform'
      }}
    />
  );
};

export default CursorLight;
