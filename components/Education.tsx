import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import type { EducationInfo } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const EducationCard: React.FC<{ item: EducationInfo; isVisible: boolean; index: number }> = ({ item, isVisible, index }) => (
  <div 
    className={`bg-white dark:bg-secondary-dark p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-700 ${isVisible ? 'animate-flip-in' : 'opacity-0'}`}
    style={{
      transformStyle: 'preserve-3d',
      transformOrigin: 'top center',
      animationDelay: `${index * 150}ms`
    }}
  >
    <div className="transform transition-transform duration-500 hover:[transform:rotateX(5deg)_rotateY(-5deg)]">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.degree}</h3>
      <p className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-violet mt-1">{item.institution}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.period}</p>
    </div>
  </div>
);

const Education: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <Section title="Education" id="education">
      <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
        {EDUCATION.map((edu, index) => (
          <EducationCard key={index} item={edu} isVisible={isVisible} index={index}/>
        ))}
      </div>
    </Section>
  );
};

export default Education;