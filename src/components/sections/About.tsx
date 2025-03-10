
import React from 'react';
import { Code, Cpu, TestTube, FileCheck } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

export const AboutSection = () => {
  return (
    <section id="about" className="section bg-deepBlack relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-5 bg-gradient-radial from-skyBlue to-transparent" />
      
      <div className="max-container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-skyBlue text-xs font-medium tracking-wider uppercase mb-4 inline-block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-skyBlue/30 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <div className="glass-card h-full flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold text-gradient-blue mb-4">
              My Background
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              I'm a dynamic SDET/QA expert with medium-level Python skills and a knack for identifying algorithmic errors through detailed test scenario design. 
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              I have a proven ability to document issues clearly and collaborate effectively with developers. I'm distinguished for leveraging Generative AI and rapidly mastering new technologies to enhance testing efficacy.
            </p>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gradient-blue mb-4 mt-6">
              Education
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold text-white">Software Development Engineer in Test</h4>
              <p className="text-white/70">Masai School | Bangalore</p>
              <p className="text-white/50 text-sm">June 2024-present</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Bachelor of Arts</h4>
              <p className="text-white/70">University of Calcutta | Kolkata</p>
              <p className="text-white/50 text-sm">January 2017 - January 2020</p>
            </div>
          </div>
          
          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FloatingElement delay={100} intensity={0.3} className="h-full">
              <div className="glass-card h-full">
                <div className="mb-4 p-3 bg-white/5 rounded-full w-fit">
                  <TestTube className="w-6 h-6 text-skyBlue" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Quality Assurance</h3>
                <p className="text-white/70 text-sm">
                  Expertise in manual and automated testing methodologies, test case design, and defect management.
                </p>
              </div>
            </FloatingElement>
            
            <FloatingElement delay={200} intensity={0.3} className="h-full">
              <div className="glass-card h-full">
                <div className="mb-4 p-3 bg-white/5 rounded-full w-fit">
                  <Code className="w-6 h-6 text-skyBlue" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Automation</h3>
                <p className="text-white/70 text-sm">
                  Proficient in Selenium, Cypress, and building robust test frameworks using Page Object Model.
                </p>
              </div>
            </FloatingElement>
            
            <FloatingElement delay={300} intensity={0.3} className="h-full">
              <div className="glass-card h-full">
                <div className="mb-4 p-3 bg-white/5 rounded-full w-fit">
                  <Cpu className="w-6 h-6 text-skyBlue" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Technology Stack</h3>
                <p className="text-white/70 text-sm">
                  Skilled in Python, Java, JavaScript, and various testing tools and frameworks.
                </p>
              </div>
            </FloatingElement>
            
            <FloatingElement delay={400} intensity={0.3} className="h-full">
              <div className="glass-card h-full">
                <div className="mb-4 p-3 bg-white/5 rounded-full w-fit">
                  <FileCheck className="w-6 h-6 text-skyBlue" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Documentation</h3>
                <p className="text-white/70 text-sm">
                  Strong documentation skills for test plans, test cases, and bug reports with clear reproduction steps.
                </p>
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
