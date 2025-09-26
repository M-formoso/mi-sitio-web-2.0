import React from 'react';
import WebGLParticles from './webgl-particles';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 opacity-60" style={{ zIndex: 0 }}>
        <WebGLParticles
          particleColors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981']}
          particleCount={250}
          speed={0.8}
          moveParticlesOnHover={true}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;