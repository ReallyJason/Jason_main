import { Suspense, lazy, useState } from 'react';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';
import InteractiveBackground from './components/InteractiveBackground';
import CursorLight from './components/CursorLight';
import Footer from './components/Footer';
import NavButton from './components/NavButton';
import CommandPalette from './components/CommandPalette';
import { useLenis } from './utils/lenis';
import ScrollProgress from './components/ScrollProgress';
import SkeletonLoader from './components/SkeletonLoader';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const HiveShowcase = lazy(() => import('./components/HiveShowcase'));
const RoboGooseShowcase = lazy(() => import('./components/RoboGooseShowcase'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useLenis();

  return (
    <div className="app-container">
      <InteractiveBackground />
      <CursorLight />
      <ScrollProgress />
      <CommandPalette isExternalOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div className="section-divider" />
        
        <Suspense fallback={<SkeletonLoader type="about" />}>
          <About />
        </Suspense>

        <div className="section-divider" />
        
        <Suspense fallback={<SkeletonLoader type="experience" />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SkeletonLoader type="project" />}>
          <HiveShowcase />
        </Suspense>

        <Suspense fallback={<SkeletonLoader type="project" />}>
          <RoboGooseShowcase />
        </Suspense>

        <div className="section-divider" />
        
        <Suspense fallback={<div className="section-loader" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ThemeToggle />
      <NavButton onClick={() => setIsNavOpen(true)} isOpen={isNavOpen} />
    </div>
  );
}

export default App;
