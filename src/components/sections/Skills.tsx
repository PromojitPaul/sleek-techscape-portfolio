
import React, { useState } from 'react';
import { Cpu, Code, Server, Rocket, Workflow, Database, GitBranch, TerminalSquare } from 'lucide-react';
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

// Updated skills data based on user request
const technicalSkills: Skill[] = [
  // Testing & Automation
  { name: "Selenium", level: 88, category: "Testing & Automation" },
  { name: "Cypress", level: 85, category: "Testing & Automation" },
  { name: "Postman", level: 82, category: "Testing & Automation" },
  { name: "JMeter", level: 78, category: "Testing & Automation" },
  { name: "TestNG", level: 80, category: "Testing & Automation" },
  { name: "API Testing", level: 85, category: "Testing & Automation" },
  
  // Programming
  { name: "Java", level: 75, category: "Programming" },
  { name: "JavaScript", level: 78, category: "Programming" },
  { name: "Python", level: 82, category: "Programming" },
  { name: "TypeScript", level: 70, category: "Programming" },
  
  // Tools & Frameworks
  { name: "Jenkins", level: 75, category: "Tools & Frameworks" },
  { name: "Git", level: 80, category: "Tools & Frameworks" },
  { name: "Docker", level: 72, category: "Tools & Frameworks" },
  { name: "Cucumber", level: 76, category: "Tools & Frameworks" },
  
  // Expertise
  { name: "Test Automation", level: 88, category: "Expertise" },
  { name: "Performance Testing", level: 80, category: "Expertise" },
  { name: "CI/CD", level: 78, category: "Expertise" },
];

const softSkills: SoftSkill[] = [
  { name: "Attention to Detail", icon: <Cpu className="w-5 h-5 text-skyBlue" /> },
  { name: "Adaptability", icon: <Rocket className="w-5 h-5 text-purple-400" /> },
  { name: "Time Management", icon: <Workflow className="w-5 h-5 text-pink-400" /> },
  { name: "Teamwork", icon: <GitBranch className="w-5 h-5 text-skyBlue" /> },
];

// Get unique categories
const categories = Array.from(new Set(technicalSkills.map(skill => skill.category)));

export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const filteredSkills = selectedCategory 
    ? technicalSkills.filter(skill => skill.category === selectedCategory)
    : technicalSkills;

  return (
    <section id="skills" className="section bg-deepBlack relative overflow-hidden">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 opacity-5 bg-gradient-radial from-skyBlue to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(93,_217,_255,_0.05),_rgba(228,_168,_249,_0.05))]"></div>
      
      <div className="max-container relative z-10">
        {/* Section Title with enhanced styling */}
        <div className="text-center mb-16">
          <FloatingElement intensity={0.3}>
            <span className="px-4 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-skyBlue text-xs font-medium tracking-wider uppercase mb-4 inline-block shadow-glow">
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-skyBlue/90 to-purple-400/80 bg-clip-text text-transparent mb-6">
              Technical Proficiency
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-skyBlue via-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </FloatingElement>
        </div>
        
        {/* Category Filter with enhanced futuristic styling */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all interactive-element backdrop-blur-sm",
              selectedCategory === null
                ? "bg-gradient-to-r from-skyBlue to-blue-500 text-white shadow-glow border border-white/20"
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
                "px-4 py-2 rounded-full text-sm font-medium transition-all interactive-element backdrop-blur-sm",
                selectedCategory === category
                  ? "bg-gradient-to-r from-skyBlue to-blue-500 text-white shadow-glow border border-white/20"
                  : "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills Grid with enhanced styling and animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
          {filteredSkills.map((skill, index) => {
            // Calculate a custom intensity based on skill level
            const intensity = 0.3 + (skill.level / 100) * 0.4;
            
            return (
              <FloatingElement 
                key={skill.name} 
                delay={index * 50} 
                intensity={intensity}
                className="h-full"
                rotateIntensity={0.8}
              >
                <div 
                  className={cn(
                    "glass-card flex flex-col items-center justify-center p-4 h-full transition-all duration-300 text-center border border-white/10 backdrop-blur-md",
                    hoveredSkill === skill.name ? "shadow-glow border-skyBlue/30" : ""
                  )}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center mb-3 relative"
                    style={{
                      background: skill.category === "Testing & Automation" 
                        ? `conic-gradient(#33C3F0 ${skill.level}%, transparent 0)`
                        : skill.category === "Programming" 
                        ? `conic-gradient(#A78BFA ${skill.level}%, transparent 0)`
                        : skill.category === "Tools & Frameworks"
                        ? `conic-gradient(#F9A8D4 ${skill.level}%, transparent 0)`
                        : `conic-gradient(#93C5FD ${skill.level}%, transparent 0)`,
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
                  
                  <span className={cn(
                    "text-xs",
                    skill.category === "Testing & Automation" ? "text-skyBlue" :
                    skill.category === "Programming" ? "text-purple-400" :
                    skill.category === "Tools & Frameworks" ? "text-pink-400" :
                    "text-blue-300"
                  )}>
                    {skill.category}
                  </span>
                </div>
              </FloatingElement>
            );
          })}
        </div>
        
        {/* Soft Skills with enhanced styling */}
        <div className="mt-12">
          <div className="text-center mb-12">
            <FloatingElement intensity={0.2}>
              <span className="px-4 py-1 rounded-full bg-white/5 border border-white/20 text-skyBlue text-xs font-medium tracking-wider uppercase mb-4 inline-block backdrop-blur-md">
                Additional
              </span>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-skyBlue/90 to-purple-400/80 bg-clip-text text-transparent mb-6">
                Soft Skills
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-skyBlue via-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </FloatingElement>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <FloatingElement 
                key={skill.name} 
                delay={index * 100} 
                intensity={0.5}
                className="h-full"
                rotateIntensity={0.7}
              >
                <div className="glass-card flex flex-col items-center justify-center text-center h-full py-8 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 backdrop-blur-md">
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
