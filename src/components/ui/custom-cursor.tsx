import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-150 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px) ${
            isHovering ? 'scale(1.5)' : 'scale(1)'
          } ${isClicking ? 'scale(0.75)' : ''}`,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 transition-all duration-150 ${
            isHovering
              ? 'border-primary bg-primary/20 animate-pulse'
              : 'border-white/50 bg-white/10'
          }`}
        />
      </div>

      {/* Trailing cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border transition-all duration-300 ${
            isHovering
              ? 'border-secondary/30 bg-secondary/5 scale-125'
              : 'border-white/20 bg-white/5 scale-100'
          }`}
        />
      </div>

      {/* Glow effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-30 transition-all duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px)`,
        }}
      >
        <div
          className={`w-24 h-24 rounded-full transition-all duration-500 ${
            isHovering
              ? 'bg-gradient-to-r from-primary/10 to-secondary/10 scale-100 opacity-100'
              : 'bg-gradient-to-r from-primary/5 to-secondary/5 scale-75 opacity-50'
          }`}
          style={{
            filter: 'blur(20px)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;