import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "scroll-infinite": "scroll 10s linear infinite", // Adjust timing for speed
        slideInFromRight: "slideInFromRight 0.5s ease-out forwards",
        slideOutToLeft: "slideOutToLeft 0.5s ease-out forwards",
        slideInFromLeft: "slideInFromLeft 0.5s ease-out forwards",
        slideOutToRight: "slideOutToRight 0.5s ease-out forwards",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" }, // Move full width to create a loop
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutToLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutToRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      colors: {
        "primary-red": "rgb(255 70 84)",
        light: "rgb(246 246 246)",
        "deep-red": "rgb(233 17 34)",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)", "sans-serif"],
        mohave: ["var(--font-mohave)", "sans-serif"],
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
