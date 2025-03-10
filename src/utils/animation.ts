
// Functions for working with GSAP-like animations in React

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const lerp = (start: number, end: number, t: number): number => {
  return start * (1 - t) + end * t;
};

export const mapRange = (
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
): number => {
  return (
    ((value - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) +
    outputMin
  );
};

export const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const getRandomDelay = (): number => {
  return Math.random() * 1000;
};

// Function to create staggered animation delays
export const getStaggeredDelay = (index: number, baseDelay: number = 100): number => {
  return index * baseDelay;
};

// Create a springs animation timings function
export const springs = {
  gentle: {
    duration: 0.6, 
    ease: [0.23, 1, 0.32, 1]
  },
  medium: {
    duration: 0.4, 
    ease: [0.4, 0, 0.2, 1]
  },
  bounce: {
    duration: 0.8, 
    ease: [0.16, 1.11, 0.56, 1.11]
  },
  snappy: {
    duration: 0.3, 
    ease: [0.05, 0.71, 0.1, 1]
  }
};

// Convert a hex color to rgba
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  let r = 0, g = 0, b = 0;
  
  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } 
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Easing functions for animations
export const easings = {
  linear: (t: number): number => t,
  easeInQuad: (t: number): number => t * t,
  easeOutQuad: (t: number): number => t * (2 - t),
  easeInOutQuad: (t: number): number => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: (t: number): number => t * t * t,
  easeOutCubic: (t: number): number => (--t) * t * t + 1,
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInExpo: (t: number): number => (t === 0) ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: (t: number): number => (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: (t: number): number => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if ((t *= 2) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
    return 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
  }
};
