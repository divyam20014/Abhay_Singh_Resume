import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <div id={id} className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold font-rajdhani mb-8 md:mb-12 text-center text-gray-800 dark:text-white">
        {title}
        <span className="block h-1 w-20 bg-gradient-to-r from-accent-pink to-accent-violet mx-auto mt-2"></span>
      </h2>
      {children}
    </div>
  );
};

export default Section;