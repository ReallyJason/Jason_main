import Hero from './components/Hero';
import HiveShowcase from './components/HiveShowcase';
import RoboGooseShowcase from './components/RoboGooseShowcase';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="app-container">
      <main>
        <Hero />
        <HiveShowcase />
        <RoboGooseShowcase />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
