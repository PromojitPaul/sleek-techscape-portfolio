
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  // Set initial theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Smooth scrolling for anchor links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 hide-cursor',
        scrolled ? 'glass-navbar py-3' : 'py-5'
      )}
    >
      <div className="max-container flex items-center justify-between px-6">
        {/* Logo */}
        <a 
          href="#" 
          className="font-space-grotesk font-bold text-xl md:text-2xl text-white hover:text-skyBlue transition-colors interactive-element"
        >
          Promojit<span className="text-skyBlue">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavLinkClick(e, item.href)}
              className="nav-link text-white/90 hover:text-skyBlue transition-colors font-medium px-1 py-2 text-sm interactive-element"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors interactive-element"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5 text-skyBlue" /> : <Sun className="w-5 h-5 text-skyBlue" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors interactive-element"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5 text-skyBlue" /> : <Sun className="w-5 h-5 text-skyBlue" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 interactive-element"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span 
                className={cn(
                  "block h-0.5 bg-white transition-transform duration-300 ease-in-out",
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                )}
              />
              <span 
                className={cn(
                  "block h-0.5 bg-white transition-opacity duration-300 ease-in-out",
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span 
                className={cn(
                  "block h-0.5 bg-white transition-transform duration-300 ease-in-out",
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-[72px] right-0 w-full h-screen bg-deepBlack/95 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden glass",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col items-center justify-center gap-8 mt-16">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className="text-white text-2xl font-medium hover:text-skyBlue transition-colors interactive-element"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
