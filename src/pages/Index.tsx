
import React, { useEffect } from 'react';
import CustomCursor from '@/components/layout/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import ProjectsSection from '@/components/sections/Projects';
import SkillsSection from '@/components/sections/Skills';
import ContactSection from '@/components/sections/Contact';

const Index = () => {
  // Set initial body background
  useEffect(() => {
    document.body.classList.add('bg-deepBlack');
    document.documentElement.classList.add('dark');
    
    return () => {
      document.body.classList.remove('bg-deepBlack');
      document.documentElement.classList.remove('dark');
    };
  }, []);

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
