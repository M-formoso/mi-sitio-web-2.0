import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import AnimatedBackground from '@/components/ui/animated-background';
import ScrollProgress from '@/components/ui/scroll-progress';
import FloatingElements from '@/components/ui/floating-elements';
import CustomCursor from '@/components/ui/custom-cursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground className="min-h-screen">
        <FloatingElements />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </AnimatedBackground>
    </div>
  );
};

export default Index;
