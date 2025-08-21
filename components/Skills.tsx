import React, { useState, useMemo } from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  // Get unique categories and set the first one as default
  const categories = useMemo(() => [...new Set(SKILLS.map(s => s.category))], []);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter skills based on the active category
  const filteredSkills = useMemo(() => SKILLS.filter(skill => skill.category === activeCategory), [activeCategory]);

  return (
    <Section title="Technical Skills" id="skills">
      <div ref={ref} className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 min-h-[400px]">
        
        {/* Category Filters - Left Column */}
        <div className="w-full md:w-1/4">
          <div className="md:sticky md:top-24">
             <h3 className="text-lg font-semibold font-rajdhani text-gray-700 dark:text-gray-300 mb-4 hidden md:block">Categories</h3>
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-accent-pink to-accent-violet text-white shadow-lg'
                      : 'bg-white dark:bg-secondary-dark hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid - Right Column */}
        <div className="w-full md:w-3/4">
          <div key={activeCategory} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
             {filteredSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`relative group transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-pink to-accent-violet rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative h-full flex items-center justify-center bg-white dark:bg-secondary-dark text-gray-700 dark:text-gray-200 py-4 px-3 rounded-lg shadow-md transform group-hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                    <p className="font-medium text-center text-sm">{skill.name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;