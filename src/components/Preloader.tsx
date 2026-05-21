import React, { useEffect, useState, useMemo } from 'react';
import './Preloader.css';

const TEXT_LINE_1 = "EXPLORING";
const TEXT_LINE_2 = "JASON HU";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'blackout' | 'incision' | 'peephole' | 'expansion' | 'finished'>('intro');
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);

  // Indices to resolve in random order for both lines
  const resolveOrder1 = useMemo(() => {
    return Array.from({ length: TEXT_LINE_1.length }, (_, i) => i).sort(() => Math.random() - 0.5);
  }, []);
  
  const resolveOrder2 = useMemo(() => {
    return Array.from({ length: TEXT_LINE_2.length }, (_, i) => i).sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    const assets = ['/Jason.webp'];
    let loadedCount = 0;

    const checkLoaded = () => {
      loadedCount++;
      if (loadedCount === assets.length) setIsAssetsLoaded(true);
    };

    assets.forEach(src => {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        checkLoaded();
      } else {
        img.onload = checkLoaded;
        img.onerror = checkLoaded; // Don't block forever on error
      }
    });

    // Final fallback
    const timeout = setTimeout(() => setIsAssetsLoaded(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (phase !== 'intro') return;

    const duration = 800; 
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          if (isAssetsLoaded) {
            clearInterval(timer);
            setTimeout(() => setPhase('blackout'), 300);
            return 100;
          }
          return 99; 
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [phase, isAssetsLoaded]);

  useEffect(() => {
    if (phase === 'blackout') {
      setTimeout(() => setPhase('incision'), 400);
    } else if (phase === 'incision') {
      setTimeout(() => setPhase('peephole'), 600);
    } else if (phase === 'peephole') {
      document.body.classList.add('phase-peephole');
      setTimeout(() => setPhase('expansion'), 500);
    } else if (phase === 'expansion') {
      document.body.classList.add('page-loaded');
      setTimeout(() => {
        setPhase('finished');
        document.body.classList.remove('phase-peephole');
      }, 1000);
    }
  }, [phase]);

  const getDisplayText = (original: string, order: number[], currentProgress: number) => {
    const jitter = Math.sin(currentProgress * 0.2) * 2;
    const resolvedCount = phase === 'intro' 
      ? Math.max(0, Math.min(original.length, Math.floor(((currentProgress + jitter) / 100) * original.length)))
      : original.length;
    
    const resolvedIndices = new Set(order.slice(0, resolvedCount));

    return original.split('').map((char, index) => {
      if (char === " ") return " ";
      if (resolvedIndices.has(index)) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join('');
  };

  if (phase === 'finished') return null;

  return (
    <div id="loader-wrapper" className={`phase-${phase}`}>
      <div className="loader-panel loader-top">
        <div className="panel-line-h"></div>
      </div>
      <div className="loader-panel loader-bottom">
        <div className="panel-line-h"></div>
      </div>
      <div className="loader-panel loader-left">
        <div className="panel-line-v"></div>
      </div>
      <div className="loader-panel loader-right">
        <div className="panel-line-v"></div>
      </div>
      
      <div className="loader-content-wrapper">
        <div className="loader-content">
          <div className="progress-line-container">
            <div 
              className="progress-line" 
              style={{ transform: phase === 'intro' ? `scaleX(${progress / 100})` : 'scaleX(1)' }}
            ></div>
          </div>
          
          <div className="intro-text-stack">
            <div className="text-line exploring-text">
              {getDisplayText(TEXT_LINE_1, resolveOrder1, progress)}
            </div>
            <div className="text-line jason-text text-gradient-accent">
              {getDisplayText(TEXT_LINE_2, resolveOrder2, progress)}
            </div>
          </div>
        </div>
        <div className="implosion-pixel"></div>
      </div>
    </div>
  );
};

export default Preloader;
