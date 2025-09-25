import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 1000 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeoutId = setTimeout(() => {
      const chars = children.split('');
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex <= chars.length) {
          setAnimatedText(chars.slice(0, currentIndex).join(''));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, duration / chars.length);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isVisible, children, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {animatedText}
      {isVisible && animatedText.length < children.length && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};

export default TextReveal;