import React from 'react';

const AnimatedBorder: React.FC = () => {
  return (
    <div
      // This is the outer container that defines the frame's position and shape.
      // It's fixed, inset, rounded, and has no pointer events.
      className="fixed top-4 left-4 right-4 bottom-4 rounded-2xl z-10 pointer-events-none"
    >
      {/* 
        This is the element that creates the animated gradient.
        It's positioned absolutely to cover its parent.
        A conic gradient provides the colors for the spinning effect.
        The `animate-border-spin` class rotates this element infinitely.
      */}
      <div className="absolute -inset-px w-[calc(100%+2px)] h-[calc(100%+2px)] animate-border-spin [background:conic-gradient(from_180deg_at_50%_50%,#EC4899,#8B5CF6,#EC4899)]" />

      {/* 
        This is the inner mask. It has the page's background color
        and is inset by 1px from the gradient container, effectively creating a 1px border
        by covering the center of the gradient.
      */}
      <div className="absolute inset-px w-[calc(100%-2px)] h-[calc(100%-2px)] bg-gray-100 dark:bg-primary-dark rounded-[15px]" />
    </div>
  );
};

export default AnimatedBorder;