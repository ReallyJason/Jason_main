import { Suspense, lazy, useState } from 'react';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';
import InteractiveBackground from './components/InteractiveBackground';
import CursorLight from './components/CursorLight';
import Footer from './components/Footer';
import NavButton from './components/NavButton';
import CommandPalette from './components/CommandPalette';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const HiveShowcase = lazy(() => import('./components/HiveShowcase'));
const RoboGooseShowcase = lazy(() => import('./components/RoboGooseShowcase'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="app-container">
      <InteractiveBackground />
      <CursorLight />
      <CommandPalette isExternalOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <main>
        <Hero />
        <div className="section-divider" />
        <Suspense fallback={<div className="section-loader" />}>
          <About />
          <div className="section-divider" />
          <Experience />
          <HiveShowcase />
          <RoboGooseShowcase />
          <div className="section-divider" />
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
