
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  intensity?: number;
  rotateIntensity?: number;
}

export const FloatingElement = ({
  children,
  delay = 0,
  className = '',
  intensity = 1,
  rotateIntensity = 1,
}: FloatingElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0 });
  const requestRef = useRef<number>();
  const mousePosition = useRef({ x: 0, y: 0 });
  const initialOffset = useRef({
    x: Math.random() * 20 - 10,
    y: Math.random() * 20 - 10,
  });
  const initialDelay = useRef(delay);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animate the element
  useEffect(() => {
    let startTime: number | null = null;
    
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsedTime = time - startTime;
      
      // Only start animation after the delay
      if (elapsedTime < initialDelay.current) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to center of element
        const distanceX = mousePosition.current.x - centerX;
        const distanceY = mousePosition.current.y - centerY;
        
        // Calculate movement factor based on distance (closer = more movement)
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const movementFactor = 
          Math.min(
            100 / 
            (Math.sqrt(
              Math.pow(distanceX, 2) + 
              Math.pow(distanceY, 2)
            ) + 100), 
            0.02
          ) * intensity;
        
        // Calculate rotation based on mouse position
        const rotateValue = 
          (distanceX / windowWidth * 5 * rotateIntensity) - 
          (distanceY / windowHeight * 5 * rotateIntensity);
        
        // Apply floating animation and mouse-based movement
        setPosition({
          x: -distanceX * movementFactor + initialOffset.current.x * Math.sin(time * 0.001),
          y: -distanceY * movementFactor + initialOffset.current.y * Math.cos(time * 0.001),
          rotate: rotateValue,
        });
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [intensity, rotateIntensity]);

  return (
    <div
      ref={elementRef}
      className={cn('floating-element relative', className)}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${position.rotate}deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
