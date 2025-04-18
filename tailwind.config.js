/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004D40",
        accent: "#9EE37D",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 