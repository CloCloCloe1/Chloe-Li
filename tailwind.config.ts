import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18212f",
        mist: "#eef5f3",
        sage: "#8aa399",
        teal: "#367d82",
        coral: "#d9826b",
        wheat: "#f5efe3"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(24, 33, 47, 0.11)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        rise: "rise 0.7s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
