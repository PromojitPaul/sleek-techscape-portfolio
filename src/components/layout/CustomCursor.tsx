
import React, { useEffect, useState, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const CustomCursor = () => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      
      // Reset the timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set a new timeout
      timeoutRef.current = setTimeout(() => {
        setHidden(true);
      }, 5000);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseLeave = () => {
      setHidden(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    
    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Track link hover states
    const handleLinkMouseEnter = () => setLinkHovered(true);
    const handleLinkMouseLeave = () => setLinkHovered(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const linkElements = document.querySelectorAll('a, button, .interactive-element');
    linkElements.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkMouseEnter);
      link.addEventListener('mouseleave', handleLinkMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      linkElements.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkMouseEnter);
        link.removeEventListener('mouseleave', handleLinkMouseLeave);
      });
    };
  }, []);

  // Apply smooth animation with GSAP-like spring animation in CSS
  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: clicked ? '24px' : linkHovered ? '36px' : '30px',
    height: clicked ? '24px' : linkHovered ? '36px' : '30px',
    opacity: hidden ? 0 : 0.65,
    mixBlendMode: 'exclusion',
    transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : linkHovered ? 1.2 : 1})`,
    transition: `
      transform 0.25s cubic-bezier(0.23, 1, 0.32, 1),
      width 0.25s cubic-bezier(0.23, 1, 0.32, 1),
      height 0.25s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 0.3s ease-in-out
    `
  };

  return (
    <div 
      ref={cursorRef}
      className="cursor-dot animate-cursorPulse" 
      style={cursorStyle}
    />
  );
};

export default CustomCursor;
