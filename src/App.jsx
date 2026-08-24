import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-transparent text-light-text transition-colors duration-300 dark:bg-transparent dark:text-dark-text">
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Blog />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </ThemeProvider>
  );
}

export default App;