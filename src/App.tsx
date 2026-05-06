import Hero from './components/Hero';
import Experience from './components/Experience';
import HiveShowcase from './components/HiveShowcase';
import RoboGooseShowcase from './components/RoboGooseShowcase';
import About from './components/About';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import InteractiveBackground from './components/InteractiveBackground';
import CursorLight from './components/CursorLight';

function App() {
  return (
    <div className="app-container">
      <InteractiveBackground />
      <CursorLight />
      <main>
        <Hero />
        <About />
        <Experience />
        <HiveShowcase />
        <RoboGooseShowcase />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
