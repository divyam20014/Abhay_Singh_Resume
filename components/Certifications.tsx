import React from 'react';
import Section from './Section';
import { CERTIFICATIONS } from '../constants';
import type { Certification } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CertificationCard: React.FC<{ cert: Certification; isVisible: boolean; index: number }> = ({ cert, isVisible, index }) => (
  <div 
    className={`bg-white dark:bg-secondary-dark p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 relative overflow-hidden transition-all duration-700 hover:shadow-lg hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
    style={{ animationDelay: `${index * 100}ms` }}
    >
     <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-accent-pink to-accent-violet"></div>
     <div className="pl-4">
        <h3 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.date}</p>
     </div>
  </div>
);

const Certifications: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <Section title="Certifications" id="certifications">
      <div ref={ref} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <CertificationCard key={index} cert={cert} isVisible={isVisible} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;