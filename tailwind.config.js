/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg: {
          primary:   "#080B14",
          secondary: "#0D1120",
          card:      "#111827",
        },
        accent: {
          blue:   "#4F8EF7",
          purple: "#8B5CF6",
          cyan:   "#22D3EE",
          glow:   "#4F8EF720",
        },
        border: {
          subtle: "rgba(255,255,255,0.07)",
          card:   "rgba(255,255,255,0.10)",
        },
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(79,142,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.04) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      animation: {
        "float":       "float 6s ease-in-out infinite",
        "pulse-slow":  "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "glow":        "glow 2s ease-in-out infinite alternate",
        "scan":        "scan 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        glow: {
          "0%":   { boxShadow: "0 0 20px rgba(79,142,247,0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(139,92,246,0.4)" },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "card":       "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glow-blue":  "0 0 30px rgba(79,142,247,0.3)",
        "glow-purple":"0 0 30px rgba(139,92,246,0.3)",
      },
    },
  },
  plugins: [],
};
