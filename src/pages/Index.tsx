
import React, { useEffect, useState } from 'react';
import CustomCursor from '@/components/layout/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import ProjectsSection from '@/components/sections/Projects';
import SkillsSection from '@/components/sections/Skills';
import ContactSection from '@/components/sections/Contact';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Set initial body background
  useEffect(() => {
    document.body.classList.add('bg-deepBlack');
    document.documentElement.classList.add('dark');
    
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => {
      document.body.classList.remove('bg-deepBlack');
      document.documentElement.classList.remove('dark');
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-deepBlack">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-2 border-skyBlue border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-skyBlue/30 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hide-cursor">
      <CustomCursor />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
