import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-surface-elevated z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Glow effect */}
      <div
        className="absolute top-0 h-full bg-gradient-to-r from-primary to-secondary opacity-50 blur-sm transition-all duration-150 ease-out"
        style={{ 
          width: `${scrollProgress}%`,
          transform: 'translateY(-1px)'
        }}
      />
    </div>
  );
};

export default ScrollProgress;