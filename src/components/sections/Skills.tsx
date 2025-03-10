
import React, { useState } from 'react';
import { Cpu, Clock, Users, Brain } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SoftSkill {
  name: string;
  icon: React.ReactNode;
}

const technicalSkills: Skill[] = [
  { name: "Manual Testing", level: 90, category: "Testing" },
  { name: "Cypress", level: 85, category: "Testing" },
  { name: "Selenium", level: 85, category: "Testing" },
  { name: "JAVA", level: 70, category: "Programming" },
  { name: "JavaScript", level: 75, category: "Programming" },
  { name: "Node.js", level: 65, category: "Programming" },
  { name: "Python", level: 75, category: "Programming" },
  { name: "API Testing", level: 80, category: "Testing" },
  { name: "Postman", level: 80, category: "Tools" },
  { name: "Appium", level: 60, category: "Tools" },
  { name: "Git", level: 75, category: "Tools" },
  { name: "SQL", level: 70, category: "Database" },
  { name: "Jira", level: 85, category: "Tools" },
];

const softSkills: SoftSkill[] = [
  { name: "Attention to Detail", icon: <Cpu className="w-5 h-5 text-skyBlue" /> },
  { name: "Adaptability", icon: <Brain className="w-5 h-5 text-skyBlue" /> },
  { name: "Time Management", icon: <Clock className="w-5 h-5 text-skyBlue" /> },
  { name: "Teamwork", icon: <Users className="w-5 h-5 text-skyBlue" /> },
];

const categories = Array.from(new Set(technicalSkills.map(skill => skill.category)));

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const filteredSkills = selectedCategory 
    ? technicalSkills.filter(skill => skill.category === selectedCategory)
    : technicalSkills;

  return (
    <section id="skills" className="section bg-deepBlack relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5 bg-gradient-radial from-skyBlue to-transparent" />
      
      <div className="max-container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-skyBlue text-xs font-medium tracking-wider uppercase mb-4 inline-block">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Technical Proficiency
          </h2>
          <div className="w-24 h-1 bg-skyBlue/30 mx-auto rounded-full"></div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all interactive-element",
              selectedCategory === null
                ? "bg-skyBlue text-white shadow-glow"
                : "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10"
            )}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all interactive-element",
                selectedCategory === category
                  ? "bg-skyBlue text-white shadow-glow"
                  : "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
          {filteredSkills.map((skill, index) => {
            // Calculate a custom intensity based on skill level
            const intensity = 0.2 + (skill.level / 100) * 0.3;
            
            return (
              <FloatingElement 
                key={skill.name} 
                delay={index * 50} 
                intensity={intensity}
                className="h-full"
                rotateIntensity={0.5}
              >
                <div 
                  className={cn(
                    "glass-card flex flex-col items-center justify-center p-4 h-full transition-all duration-300 text-center",
                    hoveredSkill === skill.name ? "shadow-glow" : ""
                  )}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center mb-3 relative"
                    style={{
                      background: `conic-gradient(#33C3F0 ${skill.level}%, transparent 0)`,
                      borderRadius: "50%"
                    }}
                  >
                    <div className="absolute inset-1 bg-deepBlack rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-white">{skill.level}%</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-medium text-sm mb-1">
                    {skill.name}
                  </h3>
                  
                  <span className="text-skyBlue text-xs">
                    {skill.category}
                  </span>
                </div>
              </FloatingElement>
            );
          })}
        </div>
        
        {/* Soft Skills */}
        <div className="mt-12">
          <div className="text-center mb-12">
            <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-skyBlue text-xs font-medium tracking-wider uppercase mb-4 inline-block">
              Additional
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Soft Skills
            </h2>
            <div className="w-16 h-1 bg-skyBlue/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <FloatingElement 
                key={skill.name} 
                delay={index * 100} 
                intensity={0.4}
                className="h-full"
              >
                <div className="glass-card flex flex-col items-center justify-center text-center h-full py-8">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    {skill.icon}
                  </div>
                  
                  <h3 className="text-white font-medium">
                    {skill.name}
                  </h3>
                </div>
              </FloatingElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
