/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sfPro: ["Questrial", "sans-serif"],
      },
      backgroundImage: {
        homeHero:
          "radial-gradient(ellipse 80% 60% at 85% 50%, #1D4EFF 0%, #0a0f20 40%, #000000 70%)",
      },
    },
  },
  plugins: [],
};
