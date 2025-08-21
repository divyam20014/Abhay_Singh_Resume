import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import BackgroundAnimation from './components/BackgroundAnimation';
import AnimatedBorder from './components/AnimatedBorder';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <div className="bg-gray-100 dark:bg-primary-dark min-h-screen transition-colors duration-500 relative">
      <BackgroundAnimation />
      <AnimatedBorder />
      <CustomCursor />
      <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="text-center py-8 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-secondary-dark mt-12 relative z-20">
        <p>&copy; {new Date().getFullYear()} Abhay Manish Singh. All rights reserved.</p>
        <p className="text-sm">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;