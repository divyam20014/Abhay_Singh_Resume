import React from 'react';
import { SunIcon, MoonIcon } from './icons';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: () => void;
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.querySelector(targetId);
  if (element) {
    const headerOffset = 80; // Approximate height of the sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
    window.scrollTo({
       top: offsetPosition,
       behavior: 'smooth'
    });
  }
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    onClick={(e) => handleNavClick(e, href)}
    className="text-gray-600 dark:text-gray-300 hover:text-accent-pink dark:hover:text-accent-pink transition duration-300 font-medium px-4 py-2 rounded-md cursor-pointer relative after:content-[''] after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-accent-pink after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]"
  >
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-primary-dark/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-xl md:text-2xl font-bold font-rajdhani text-gray-800 dark:text-white cursor-pointer"
        >
          Abhay<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-violet">.</span>Singh
        </a>
        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button
          onClick={setDarkMode}
          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary-dark transition duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-800" />}
        </button>
      </nav>
    </header>
  );
};

export default Header;