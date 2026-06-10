import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import HoloBackground from './components/motion/HoloBackground';
import { CursorGlow } from './components/motion/Reveal3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PassionStrip from './components/PassionStrip';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Featured from './components/Featured';
import Education from './components/Education';
import Articles from './components/Articles';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <HoloBackground />
      <CursorGlow />
      <ParticleBackground />
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider mx-auto max-w-4xl" />
          <PassionStrip />
          <div className="section-divider mx-auto max-w-4xl" />
          <Stats />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Featured />
          <Education />
          <Articles />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
