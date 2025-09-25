import React from 'react';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ count = 6, className = '' }) => {
  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full opacity-10 animate-float"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.left}%`,
            top: `${element.top}%`,
            background: `linear-gradient(135deg, hsl(217, 91%, 60%), hsl(262, 83%, 58%))`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-primary/20 rotate-45 animate-spin" 
           style={{ animationDuration: '8s' }} />
      <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-secondary/20 animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-8 h-1 bg-accent/20 animate-pulse" 
           style={{ animationDelay: '2s' }} />
      
      {/* Code-like elements */}
      <div className="absolute top-20 right-20 font-mono text-xs text-primary/20 animate-fade-in-up">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-40 left-16 font-mono text-xs text-secondary/20 animate-fade-in-up" 
           style={{ animationDelay: '1s' }}>
        {}
      </div>
      <div className="absolute top-1/3 left-1/5 font-mono text-xs text-accent/20 animate-fade-in-up" 
           style={{ animationDelay: '3s' }}>
        ( )
      </div>
    </div>
  );
};

export default FloatingElements;