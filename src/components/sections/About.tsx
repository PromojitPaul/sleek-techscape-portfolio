
import React from 'react';
import { Code, Cpu, TestTube, FileCheck, CheckCircle2 } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

export const AboutSection = () => {
  const skillCategories = [
    {
      title: "Testing & Automation",
      items: ["Selenium", "Cypress", "Postman", "JMeter", "TestNG"]
    },
    {
      title: "Programming",
      items: ["Java", "JavaScript", "Python", "TypeScript"]
    },
    {
      title: "Tools & Frameworks",
      items: ["Jenkins", "Git", "Docker", "Cucumber"]
    },
    {
      title: "Expertise",
      items: ["Test Automation", "API Testing", "Performance Testing", "CI/CD"]
    }
  ];

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
            Bug Hunter
          </h2>
          <div className="w-24 h-1 bg-skyBlue/30 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <div className="glass-card h-full flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold text-gradient-blue mb-4">
              Summary
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
          
          {/* Skills & Expertise Section */}
          <div className="glass-card h-full p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gradient-blue mb-6">
              Skills & Expertise
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-white/90 border-b border-skyBlue/30 pb-2 mb-2">
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-skyBlue/80" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
