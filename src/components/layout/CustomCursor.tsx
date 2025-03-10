
import React, { useEffect, useState, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface MagneticTarget {
  element: HTMLElement;
  rect: DOMRect;
  centerX: number;
  centerY: number;
}

export const CustomCursor = () => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [magneticTarget, setMagneticTarget] = useState<MagneticTarget | null>(null);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Set up the animation loop
  useEffect(() => {
    const animateCursor = () => {
      if (cursorRef.current) {
        // Calculate the distance between current position and target position
        const dx = targetPosition.x - position.x;
        const dy = targetPosition.y - position.y;
        
        // Calculate new position with smooth lerp (linear interpolation)
        const newX = position.x + dx * 0.15;
        const newY = position.y + dy * 0.15;
        
        // Update position
        setPosition({ x: newX, y: newY });
      }
      
      // Continue the animation loop
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };
    
    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(animateCursor);
    
    return () => {
      // Clean up the animation loop
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetPosition, position]);

  // Update mouse position and handle magnetic effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;
      
      // Reset hidden state when mouse moves
      setHidden(false);
      
      // Apply magnetic effect if we have a target
      if (magneticTarget) {
        const { centerX, centerY, rect } = magneticTarget;
        
        // Calculate distance from mouse to center of element
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Magnetic effect range (px)
        const magneticRange = 150;
        
        // Apply magnetic effect if within range
        if (distance < magneticRange) {
          // Calculate magnetic pull strength (stronger as mouse gets closer)
          const pull = 1 - Math.min(distance / magneticRange, 1);
          const pullStrength = pull * 0.5; // Adjust strength of effect
          
          // Apply magnetic pull to target position
          targetX = e.clientX - distX * pullStrength;
          targetY = e.clientY - distY * pullStrength;
        }
      }
      
      // Update target position
      setTargetPosition({ x: targetX, y: targetY });
      
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

    // Track interactive elements for hover and magnetic effects
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, .interactive-element');
      
      // Add event listeners for hover effect
      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          setLinkHovered(true);
          
          // Set up magnetic target when hovering
          const rect = element.getBoundingClientRect();
          setMagneticTarget({
            element: element as HTMLElement,
            rect,
            centerX: rect.left + rect.width / 2,
            centerY: rect.top + rect.height / 2
          });
        });
        
        element.addEventListener('mouseleave', () => {
          setLinkHovered(false);
          setMagneticTarget(null);
        });
      });
      
      return () => {
        interactiveElements.forEach((element) => {
          element.removeEventListener('mouseenter', () => setLinkHovered(true));
          element.removeEventListener('mouseleave', () => setLinkHovered(false));
        });
      };
    };
    
    // Set initial position
    if (cursorRef.current) {
      setPosition({ x: 0, y: 0 });
      setTargetPosition({ x: 0, y: 0 });
    }

    // Set up all event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Initial setup of interactive elements
    const cleanupInteractive = updateInteractiveElements();
    
    // Update interactive elements when DOM changes
    const observer = new MutationObserver(() => {
      cleanupInteractive();
      updateInteractiveElements();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      // Clean up all event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      // Clean up interactive elements
      cleanupInteractive();
      
      // Clean up observer
      observer.disconnect();
      
      // Clean up the timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Clean up animation frame
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [magneticTarget]);

  // Apply smooth animation with spring effect in CSS
  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: clicked ? '18px' : linkHovered ? '28px' : '22px', // Made the cursor smaller overall
    height: clicked ? '18px' : linkHovered ? '28px' : '22px', // Made the cursor smaller overall
    opacity: hidden ? 0 : 0.65,
    mixBlendMode: 'exclusion' as 'exclusion',
    transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : linkHovered ? 1.2 : 1})`,
    transition: `
      transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      height 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.3s ease-in-out
    `,
    boxShadow: linkHovered 
      ? '0 0 15px 5px rgba(51, 195, 240, 0.3)' 
      : '0 0 8px 2px rgba(51, 195, 240, 0.2)'
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
