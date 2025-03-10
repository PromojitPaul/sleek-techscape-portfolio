
import React, { useEffect, useRef } from 'react';
import { ArrowDown, ExternalLink, Github, Linkedin } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';
import { getRandomDelay } from '@/utils/animation';

export const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      parallaxRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${-x * 0.5}px, ${-y * 0.5}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section bg-deepBlack relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-10 bg-gradient-radial from-skyBlue/20 to-transparent" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingElement 
            key={i} 
            delay={getRandomDelay()}
            intensity={0.5} 
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          >
            <div 
              className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-skyBlue/50"
              style={{
                boxShadow: '0 0 10px rgba(51, 195, 240, 0.5)'
              }}
            />
          </FloatingElement>
        ))}
      </div>
      
      <div className="max-container h-screen flex flex-col justify-center items-center relative z-10">
        <div ref={parallaxRef} className="parallax-layer text-center">
          {/* Profile Image */}
          <div className="relative mb-8 inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-full border-2 border-skyBlue/50 p-1 glass">
              <img 
                ref={imageRef}
                src="/lovable-uploads/28fafc41-5780-4118-8775-6e8c1c19d72d.png" 
                alt="Promojit Paul" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-skyBlue/10 animate-pulse" />
          </div>
          
          {/* Location tag */}
          <div className="inline-flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm px-3 py-1 text-xs text-white/90 border border-white/10 mb-5">
            📍 Kolkata, India
          </div>
          
          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-4">
            Promojit Paul
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gradient-blue mb-6">
            SDET/QA Engineer
          </h2>
          
          {/* Short intro */}
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Dynamic SDET/QA expert with Python skills and a knack for identifying algorithmic errors. Leveraging Generative AI to enhance testing efficacy.
          </p>
          
          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://linkedin.com/in/promojitpaul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-2 rounded-full px-4 py-2 text-sm interactive-element"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/PromojitPaul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 text-white flex items-center gap-2 rounded-full px-4 py-2 text-sm interactive-element"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
          
          {/* Scroll down indicator */}
          <button 
            onClick={handleScrollDown}
            className="animate-bounce mt-8 text-white/50 flex flex-col items-center gap-2 interactive-element"
            aria-label="Scroll Down"
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
