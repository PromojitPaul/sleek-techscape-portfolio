
import React, { useRef, useEffect } from 'react';
import { Github, ExternalLink, Code, FileCheck, ChevronRight, Browser } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "BooksWagon Automation Testing",
    description: "Automated end-to-end testing of the Bookswagon website using Selenium and TestNG. Implemented the Page Object Model (POM) to structure tests efficiently for better reusability.",
    technologies: ["Selenium", "TestNG", "Page Object Model"],
    github: "https://github.com/PromojitPaul/Bookswagon",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "Automation"
  },
  {
    id: 2,
    title: "TutorialsNinja Cypress Automation",
    description: "Utilized the Page Object Model (POM) to enhance test code organization and maintainability. Implemented Cucumber for behavior-driven development, improving clarity and communication with stakeholders.",
    technologies: ["Cypress", "Cucumber", "Page Object Model"],
    github: "https://github.com/PromojitPaul/ClimateCodeCrusaders_088/tree/master",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Automation"
  },
  {
    id: 3,
    title: "Manual Testing - Gift Certificate",
    description: "Designed and executed test scenarios to identify functionality and usability issues within the Gift Certificate feature, focusing on enhancing user experience.",
    technologies: ["Google Docs", "Google Sheets", "XMind"],
    github: "https://github.com/PromojitPaul/Data-Divers/tree/main/TutorialsNinja%20Gift%20Certificate",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Manual Testing"
  },
  {
    id: 4,
    title: "Restaurant Order Management System",
    description: "Ensured timely resolution of bugs by working closely with the development team through collaborative troubleshooting sessions.",
    technologies: ["JavaScript", "Node.js"],
    github: "https://github.com/PromojitPaul/Data-Divers/tree/main/Restaurant%20Order%20Management%20System",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Development"
  }
];

export const ProjectsSection = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          ref.style.opacity = "1";
          ref.style.transform = "translateY(0)";
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="section bg-deepBlack relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5 bg-gradient-radial from-skyBlue to-transparent" />
      
      <div className="max-container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-skyBlue text-xs font-medium tracking-wider uppercase mb-4 inline-block">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-skyBlue/30 mx-auto rounded-full"></div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="glass-card group transform hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transitionDelay: `${index * 100}ms`,
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out"
              }}
            >
              {/* Project Image */}
              <div className="h-48 md:h-56 w-full mb-6 overflow-hidden rounded-lg relative">
                <div className="absolute inset-0 bg-deepBlack/50 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white/90 border border-white/20">
                  {project.category}
                </div>
              </div>
              
              {/* Project Content */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-skyBlue transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/70 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-skyBlue"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex items-center gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-glow flex items-center gap-2 text-sm py-2 rounded-full interactive-element"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 transition-colors text-white flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-white/10 interactive-element"
                  aria-label={`View details for ${project.title}`}
                >
                  <span>Details</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certification */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-skyBlue text-xs font-medium tracking-wider uppercase mb-4 inline-block">
              Achievements
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Certifications
            </h2>
            <div className="w-16 h-1 bg-skyBlue/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="glass-card transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <FileCheck className="w-12 h-12 text-skyBlue" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Selenium 4 in Java
                </h3>
                <p className="text-white/70 mb-4">
                  Advanced locators, CDP, and Grid improvement – Test Automation University
                </p>
                <a 
                  href="https://testautomationu.applitools.com/certificate/?id=85158d86" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-glow flex items-center gap-2 text-sm py-2 px-4 rounded-full w-max interactive-element"
                  aria-label="View Selenium 4 in Java Certification"
                >
                  <Browser className="w-4 h-4" />
                  <span>View Certificate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
