import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      );
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateTrail = () => {
      setTrailPosition(prevTrail => ({
        x: prevTrail.x + (position.x - prevTrail.x) / 8,
        y: prevTrail.y + (position.y - prevTrail.y) / 8,
      }));
      requestAnimationFrame(updateTrail);
    };

    const animationFrame = requestAnimationFrame(updateTrail);

    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  const cursorSize = isPointer ? 32 : 10;
  const trailSize = 36;

  return (
    <>
      <div 
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-all duration-200"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          backgroundColor: isPointer ? 'rgba(236, 72, 153, 0.4)' : '#EC4899',
          border: isPointer ? '2px solid #EC4899' : 'none'
        }}
      />
      <div 
        className="fixed top-0 left-0 w-9 h-9 bg-gradient-to-r from-accent-pink to-accent-violet rounded-full pointer-events-none z-[9998] opacity-20"
        style={{
          transform: `translate(${trailPosition.x}px, ${trailPosition.y}px) translate(-50%, -50%)`,
           width: `${trailSize}px`,
          height: `${trailSize}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;