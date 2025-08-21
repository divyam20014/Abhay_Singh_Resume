import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import type { WorkExperience } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BriefcaseIcon } from './icons';

const ExperienceCard: React.FC<{ experience: WorkExperience; isVisible: boolean; index: number }> = ({ experience, isVisible, index }) => {
  return (
    <div 
      className={`pl-12 relative border-l-2 border-accent-pink/30 dark:border-accent-violet/30 transition-all duration-700 ease-out transform group ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute -left-5 top-0 flex items-center justify-center w-10 h-10 bg-white dark:bg-primary-dark rounded-full border-2 border-accent-pink dark:border-accent-violet group-hover:scale-110 transition-transform duration-300">
        <BriefcaseIcon className="w-5 h-5 text-accent-pink dark:text-accent-violet" />
      </div>
      <div className="bg-white dark:bg-secondary-dark p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mb-10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent-violet/20">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2 gap-2">
            <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.role}</h3>
                <p className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-violet mt-1">{experience.company}</p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-right flex-shrink-0">{experience.period}</p>
        </div>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mt-4 marker:text-accent-pink">
          {experience.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
        </ul>
      </div>
    </div>
  );
};


const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <Section title="Work Experience" id="experience">
      <div ref={ref} className="max-w-4xl mx-auto">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} isVisible={isVisible} index={index}/>
        ))}
      </div>
    </Section>
  );
};

export default Experience;