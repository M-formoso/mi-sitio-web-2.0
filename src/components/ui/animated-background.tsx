import React from 'react';
import Particles from './particles';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 opacity-40" style={{ zIndex: 0 }}>
        <Particles
          particleColors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981']}
          particleCount={300}
          particleSpread={15}
          speed={0.15}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          particleHoverFactor={2}
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