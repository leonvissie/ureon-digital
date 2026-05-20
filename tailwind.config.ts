import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05080F",
          900: "#080E17",
          850: "#0B101B",
          800: "#0F172A",
          700: "#1E293B"
        },
        brand: {
          teal: "#00E5C0",
          tealDeep: "#0E9384",
          blue: "#0EAEF9",
          purple: "#785CFF",
          violet: "#A855F7"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(0, 229, 192, 0.18)",
        glowPurple: "0 0 42px rgba(120, 92, 255, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00E5C0 0%, #0EAEF9 45%, #785CFF 100%)",
        "soft-radial": "radial-gradient(circle at 30% 20%, rgba(0,229,192,.18), transparent 32%), radial-gradient(circle at 80% 10%, rgba(120,92,255,.16), transparent 32%), radial-gradient(circle at 55% 90%, rgba(14,174,249,.10), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
