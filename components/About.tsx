import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <Section title="About Me" id="about">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-blur-in' : 'opacity-0 blur-md'}`}
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>
      </div>
    </Section>
  );
};

export default About;