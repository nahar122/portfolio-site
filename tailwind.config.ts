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
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" }, // Move full width to create a loop
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
