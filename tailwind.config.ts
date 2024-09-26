import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'distant': ['Distant Stroke', 'sans-serif'],
        'fredoka': ['Fredoka', 'sans-serif'],
        'adventpro': ['AdventPro Medium', 'sans-serif'],
        'code': ['Codec-Cold-Thin-trial', 'sans-serif'],
        'asper': ['Aspergit Light', 'sans-serif'],
        'hachi': ['HachiMaruPop-Regular', 'sans-serif'],
        'brother': ['Brotherhood_Script', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
