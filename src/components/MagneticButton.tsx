import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './MagneticButton.css';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = "", 
  distance = 40 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Moderate interior movement
  const textX = useTransform(springX, (val) => val * 0.35);
  const textY = useTransform(springY, (val) => val * 0.35);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    // Limit the movement to the distance prop
    const limitedX = Math.max(Math.min(deltaX, distance), -distance);
    const limitedY = Math.max(Math.min(deltaY, distance), -distance);
    
    mouseX.set(limitedX);
    mouseY.set(limitedY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={ref}
      className={`magnetic-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="magnetic-content"
      >
        <motion.div
          style={{
            x: textX,
            y: textY,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
      
      {/* Subtle glow effect behind the button when hovered */}
      {isHovered && (
        <motion.div 
          layoutId="magnetic-glow"
          className="magnetic-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1.2 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
};

export default MagneticButton;
