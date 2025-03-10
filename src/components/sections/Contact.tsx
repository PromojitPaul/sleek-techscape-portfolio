
import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-deepBlack relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5 bg-gradient-radial from-skyBlue to-transparent" />
      
      <div className="max-container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-skyBlue text-xs font-medium tracking-wider uppercase mb-4 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-skyBlue/30 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="glass-card h-full flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold text-gradient-blue mb-6">
              Let's Connect
            </h3>
            
            <p className="text-white/80 leading-relaxed mb-8">
              Feel free to reach out for collaborations, opportunities, or just to say hello! I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-skyBlue" />
                </div>
                <div>
                  <h4 className="text-white/50 text-sm">Phone</h4>
                  <a href="tel:+917003354450" className="text-white hover:text-skyBlue transition-colors interactive-element">
                    +91 7003354450
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-skyBlue" />
                </div>
                <div>
                  <h4 className="text-white/50 text-sm">Email</h4>
                  <a href="mailto:promojitpaul@gmail.com" className="text-white hover:text-skyBlue transition-colors interactive-element">
                    promojitpaul@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-skyBlue" />
                </div>
                <div>
                  <h4 className="text-white/50 text-sm">Location</h4>
                  <p className="text-white">Kolkata, India</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gradient-blue mb-4">
              Follow Me
            </h3>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/promojitpaul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-skyBlue/20 transition-colors interactive-element"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-skyBlue" />
              </a>
              
              <a 
                href="https://github.com/PromojitPaul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-skyBlue/20 transition-colors interactive-element"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-skyBlue" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card">
            <h3 className="text-xl md:text-2xl font-semibold text-gradient-blue mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/70 text-sm mb-2">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/70 text-sm mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue/50 transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/70 text-sm mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-skyBlue/50 transition-all resize-none"
                    placeholder="Your message"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full py-3 rounded-lg flex items-center justify-center gap-2 interactive-element"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center mt-20 pt-8 border-t border-white/5">
        <p className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Promojit Paul. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
