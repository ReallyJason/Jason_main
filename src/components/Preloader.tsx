import React, { useEffect, useState, useCallback } from 'react';
import './Preloader.css';

const TEXT_LINE_1 = "EXPLORING";
const TEXT_LINE_2 = "JASON HU";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

// Deterministic pseudo-random indices for pure rendering
const RESOLVE_ORDER_1 = [4, 1, 7, 3, 8, 0, 5, 2, 6];
const RESOLVE_ORDER_2 = [2, 6, 0, 4, 7, 1, 5, 3];

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'blackout' | 'incision' | 'peephole' | 'expansion' | 'finished'>('intro');
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);

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

  // Refactored Phase Management
  useEffect(() => {
    const phaseTimings: Record<string, { next: typeof phase; delay: number }> = {
      blackout: { next: 'incision', delay: 400 },
      incision: { next: 'peephole', delay: 600 },
      peephole: { next: 'expansion', delay: 500 },
      expansion: { next: 'finished', delay: 1000 },
    };

    if (phase === 'peephole') {
      document.body.classList.add('phase-peephole');
    }

    if (phase === 'expansion') {
      document.body.classList.add('page-loaded');
    }

    if (phaseTimings[phase]) {
      const { next, delay } = phaseTimings[phase];
      const timer = setTimeout(() => {
        if (phase === 'expansion') {
          document.body.classList.remove('phase-peephole');
        }
        setPhase(next);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Optimized Text resolution logic
  const getDisplayText = useCallback((original: string, order: number[], currentProgress: number) => {
    if (phase !== 'intro') return original;
    
    const jitter = Math.sin(currentProgress * 0.2) * 2;
    const resolvedCount = Math.max(0, Math.min(original.length, Math.floor(((currentProgress + jitter) / 100) * original.length)));
    const resolvedIndices = new Set(order.slice(0, resolvedCount));

    let result = '';
    for (let i = 0; i < original.length; i++) {
      if (original[i] === ' ') {
        result += ' ';
      } else if (resolvedIndices.has(i)) {
        result += original[i];
      } else {
        result += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    }
    return result;
  }, [phase]);

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
              {getDisplayText(TEXT_LINE_1, RESOLVE_ORDER_1, progress)}
            </div>
            <div className="text-line jason-text text-gradient-accent">
              {getDisplayText(TEXT_LINE_2, RESOLVE_ORDER_2, progress)}
            </div>
          </div>
        </div>
        <div className="implosion-pixel"></div>
      </div>
    </div>
  );
};

export default Preloader;
