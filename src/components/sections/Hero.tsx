
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
      {/* Enhanced gradient background with more vibrant colors */}
      <div className="absolute inset-0 opacity-20 bg-gradient-radial from-skyBlue/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/10 via-pink-400/5 to-transparent"></div>
      
      {/* Animated particles with more vibrant colors */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <FloatingElement 
            key={i} 
            delay={getRandomDelay()}
            intensity={0.8} 
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          >
            <div 
              className={`w-1 h-1 md:w-2 md:h-2 rounded-full ${i % 3 === 0 ? 'bg-skyBlue/70' : i % 3 === 1 ? 'bg-purple-400/70' : 'bg-pink-300/70'}`}
              style={{
                boxShadow: i % 3 === 0 ? '0 0 15px rgba(51, 195, 240, 0.8)' : 
                          i % 3 === 1 ? '0 0 15px rgba(167, 139, 250, 0.8)' : 
                          '0 0 15px rgba(249, 168, 212, 0.8)'
              }}
            />
          </FloatingElement>
        ))}
      </div>
      
      <div className="max-container h-screen flex flex-col justify-center items-center relative z-10">
        <div ref={parallaxRef} className="parallax-layer text-center">
          {/* Profile Image - Made BIGGER */}
          <div className="relative mb-8 inline-block">
            <div className="w-44 h-44 sm:w-52 sm:h-52 overflow-hidden rounded-full border-2 border-skyBlue/60 p-1 glass">
              <img 
                ref={imageRef}
                src="/lovable-uploads/28fafc41-5780-4118-8775-6e8c1c19d72d.png" 
                alt="Promojit Paul" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-skyBlue/20 via-purple-400/20 to-pink-300/20 animate-pulse" />
          </div>
          
          {/* Location tag with enhanced styling */}
          <div className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs text-white/95 border border-white/20 mb-5 shadow-glow">
            📍 Kolkata, India
          </div>
          
          {/* Name and Title with enhanced gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-white/90 to-skyBlue/80 bg-clip-text text-transparent mb-4">
            Promojit Paul
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium bg-gradient-to-r from-skyBlue via-purple-400/90 to-skyBlue/80 bg-clip-text text-transparent mb-6">
            SDET/QA Engineer
          </h2>
          
          {/* Short intro with lighter text */}
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Dynamic SDET/QA expert with Python skills and a knack for identifying algorithmic errors. Leveraging Generative AI to enhance testing efficacy.
          </p>
          
          {/* Social links with enhanced styling */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://linkedin.com/in/promojitpaul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-skyBlue to-blue-500 flex items-center gap-2 rounded-full px-4 py-2 text-sm interactive-element shadow-glow border border-white/20 hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/PromojitPaul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 text-white flex items-center gap-2 rounded-full px-4 py-2 text-sm interactive-element"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
          
          {/* Scroll down indicator with enhanced styling */}
          <button 
            onClick={handleScrollDown}
            className="animate-bounce mt-8 text-white/60 flex flex-col items-center gap-2 interactive-element group"
            aria-label="Scroll Down"
          >
            <span className="text-xs font-medium group-hover:text-skyBlue transition-colors">Scroll Down</span>
            <ArrowDown className="w-4 h-4 group-hover:text-skyBlue transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
