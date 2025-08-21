import React from 'react';
import { TechIcons } from './icons';

const BackgroundAnimation: React.FC = () => {
  const shapes = [
    { size: '70px', left: '10%', duration: '35s', delay: '0s' },
    { size: '110px', left: '20%', duration: '25s', delay: '2s' },
    { size: '35px', left: '35%', duration: '45s', delay: '7s' },
    { size: '130px', left: '50%', duration: '30s', delay: '5s' },
    { size: '55px', left: '65%', duration: '40s', delay: '1s' },
    { size: '90px', left: '75%', duration: '20s', delay: '4s' },
    { size: '45px', left: '85%', duration: '50s', delay: '10s' },
    { size: '150px', left: '5%', duration: '28s', delay: '12s' },
    { size: '80px', left: '90%', duration: '38s', delay: '6s' },
    { size: '25px', left: '25%', duration: '55s', delay: '8s' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <ul className="absolute top-0 left-0 w-full h-full m-0 p-0">
        {shapes.map((shape, i) => {
          const IconComponent = TechIcons[i % TechIcons.length];
          return (
            <li
              key={i}
              className="absolute block list-none animate-animate-shapes bottom-[-200px]"
              style={{
                width: shape.size,
                height: shape.size,
                left: shape.left,
                animationDuration: shape.duration,
                animationDelay: shape.delay,
              }}
            >
              <IconComponent className="w-full h-full text-accent-violet/20 dark:text-accent-pink/15" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BackgroundAnimation;