import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import VariableProximity from '@/components/ui/variable-proximity';
import ScrollReveal from '@/components/ui/scroll-reveal';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      heroRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg"
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/30 rounded-full blur-2xl float"></div>
      </div>

      {/* Interactive Mouse Follow Effect */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(66, 165, 245, 0.15), transparent 40%)`,
        }}
      ></div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Text */}
          <div className="animate-fade-in-up">
            <p className="text-text-secondary text-lg mb-4 font-mono">
              {'<hello_world>'}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <VariableProximity
                label="Hola, soy Mateo Formoso"
                containerRef={heroRef}
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                radius={150}
                className="text-gradient"
              />
            </h1>
            <h2 className="text-2xl md:text-3xl text-text-secondary mb-6 font-light">
              <span className="inline-block">
                <ScrollReveal 
                  baseOpacity={0.2} 
                  enableBlur={true} 
                  baseRotation={2} 
                  blurStrength={6}
                  containerClassName="inline-block"
                  textClassName="text-2xl md:text-3xl font-light"
                >
                  Full Stack Developer & Problem Solver
                </ScrollReveal>
              </span>
            </h2>
            <div className="text-xl text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed font-mono">
              <ScrollReveal 
                baseOpacity={0.1} 
                enableBlur={true} 
                baseRotation={1} 
                blurStrength={4}
                textClassName="text-xl leading-relaxed"
              >
                Especializado en arquitectura de sistemas, desarrollo web y soluciones empresariales. Transformo ideas complejas en código funcional y escalable.
              </ScrollReveal>
            </div>
            <p className="text-text-secondary font-mono mb-8">
              {'</hello_world>'}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 pulse-glow"
            >
              Ver Proyectos
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="glass border-white/20 hover:border-primary/50 text-white hover:text-primary backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              Contactarme
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up delay-500">
            <a
              href="https://github.com/M-formoso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mateoformoso0606@gmail.com"
              className="text-text-secondary hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('#about')}>
            <ArrowDown className="w-6 h-6 text-text-secondary hover:text-primary transition-colors duration-300 mx-auto" />
          </div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 text-primary/30 font-mono text-sm animate-float opacity-70">
        {'// Angular + Python + MySQL'}
      </div>
      <div className="absolute top-40 right-20 text-secondary/30 font-mono text-sm animate-float delay-1000 opacity-70">
        {'class Developer { solveProblems() }'}
      </div>
      <div className="absolute bottom-40 left-20 text-accent/30 font-mono text-sm animate-float delay-2000 opacity-70">
        {'> git commit -m "build solutions"'}
      </div>
    </section>
  );
};

export default Hero;