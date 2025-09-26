import { useEffect, useRef } from 'react';

interface WebGLParticlesProps {
  particleCount?: number;
  particleColors?: string[];
  speed?: number;
  moveParticlesOnHover?: boolean;
  className?: string;
}

const WebGLParticles: React.FC<WebGLParticlesProps> = ({
  particleCount = 300,
  particleColors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'],
  speed = 0.15,
  moveParticlesOnHover = true,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    console.log('WebGL Particles component mounted');
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('No canvas found');
      return;
    }

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.log('WebGL not supported, falling back to Canvas 2D');
      // Fallback to 2D canvas
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      console.log('Using Canvas 2D fallback');
      
      const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      };

      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      };

      class Particle {
        x: number;
        y: number;
        z: number;
        vx: number;
        vy: number;
        vz: number;
        size: number;
        color: string;
        alpha: number;
        life: number;
        maxLife: number;

        constructor(width: number, height: number) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.z = Math.random() * 1000;
          this.vx = (Math.random() - 0.5) * 2;
          this.vy = (Math.random() - 0.5) * 2;
          this.vz = (Math.random() - 0.5) * 1;
          this.size = Math.random() * 3 + 1;
          this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
          this.alpha = Math.random() * 0.6 + 0.2;
          this.life = 0;
          this.maxLife = Math.random() * 200 + 100;
        }

        update() {
          this.x += this.vx * speed;
          this.y += this.vy * speed;
          this.z += this.vz * speed;
          this.life++;

          // Mouse interaction
          if (moveParticlesOnHover) {
            const dx = mouseRef.current.x - this.x;
            const dy = mouseRef.current.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const force = (100 - distance) / 100;
              this.vx += dx * force * 0.01;
              this.vy += dy * force * 0.01;
            }
          }

          // Bounds checking
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;

          // Reset particle when life ends
          if (this.life > this.maxLife) {
            this.life = 0;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
          }
        }

        draw() {
          const sizeVariation = Math.sin(this.life * 0.1) * 0.5 + 1;
          const finalSize = this.size * sizeVariation * (1 + this.z / 1000);
          
          ctx.save();
          ctx.globalAlpha = this.alpha * (1 - this.life / this.maxLife);
          
          // Create gradient for glow effect
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, finalSize * 2
          );
          
          const rgb = hexToRgb(this.color);
          if (rgb) {
            gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`);
            gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4)`);
            gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
          }
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, finalSize * 2, 0, Math.PI * 2);
          ctx.fill();
          
          // Inner bright core
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, finalSize * 0.3, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        }
      }

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      };

      if (moveParticlesOnHover) {
        canvas.addEventListener('mousemove', handleMouseMove);
      }

      // Create particles
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }

      let animationId: number;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.save();
              ctx.globalAlpha = (1 - distance / 120) * 0.2;
              ctx.strokeStyle = '#3B82F6';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          });
        });

        // Update and draw particles
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        animationId = requestAnimationFrame(animate);
      };

      console.log('Starting 2D animation');
      animate();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        if (moveParticlesOnHover) {
          canvas.removeEventListener('mousemove', handleMouseMove);
        }
        cancelAnimationFrame(animationId);
      };
    }

    // WebGL implementation would go here
    console.log('WebGL context available, but not implemented yet');
    return;
    
  }, [particleCount, particleColors, speed, moveParticlesOnHover]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        width: '100%', 
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default WebGLParticles;