module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "fade-in-down": {
          from: { opacity: "0", transform: "translateY(-50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-text": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0) rotate(-180deg)", opacity: "0" },
          "50%": { transform: "scale(1.1) rotate(-90deg)" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        "slide-in-bottom": {
          from: { opacity: "0", transform: "translateY(100px) scale(0.8)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "final-celebration": {
          "0%": { transform: "scale(0) rotate(-360deg)", opacity: "0" },
          "50%": { transform: "scale(1.1) rotate(-180deg)" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
        "fade-in-down": "fade-in-down 1.5s ease-out",
        "fade-in-up": "fade-in-up 1.5s ease-out 0.5s both",
        "fade-in-text": "fade-in-text 0.8s ease-out both",
        "bounce-in": "bounce-in 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "slide-in-bottom": "slide-in-bottom 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "final-celebration": "final-celebration 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [],
}
