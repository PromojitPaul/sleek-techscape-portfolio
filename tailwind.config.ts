
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Portfolio custom colors
        skyBlue: "#33C3F0",
        deepBlack: "#0A0A0A",
        softWhite: "#F6F6F7",
        glassLight: "rgba(255, 255, 255, 0.05)",
        glassDark: "rgba(10, 10, 10, 0.75)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        tiltHover: {
          "0%": { transform: "perspective(500px) rotateX(0) rotateY(0)" },
          "50%": { transform: "perspective(500px) rotateX(2deg) rotateY(5deg)" },
          "100%": { transform: "perspective(500px) rotateX(0) rotateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(51, 195, 240, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(51, 195, 240, 0.7)" },
          "100%": { boxShadow: "0 0 5px rgba(51, 195, 240, 0.3)" },
        },
        cursorPulse: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        tiltHover: "tiltHover 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite",
        cursorPulse: "cursorPulse 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/public/lovable-uploads/f3105848-df50-4c44-9bd7-eb2f55e64153.png')",
        "noise-pattern": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c4zIoeAAAAD0lEQVR4AY3WhWrEQBSE0Vdm5v+/uRcU7PBupQAAAABJRU5ErkJggg==')",
      },
      boxShadow: {
        'neo': '8px 8px 16px rgba(0, 0, 0, 0.25), -8px -8px 16px rgba(255, 255, 255, 0.03)',
        'glow': '0 0 15px rgba(51, 195, 240, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
