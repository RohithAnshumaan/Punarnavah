/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "limeLight": ["Limelight", "cursive"],
        "spaceMono": ["Space Mono", "monospace"],
      },
      colors:{
        "primary": "#FFFFFF",
        "secondary": "#899878",
      }
    },
  },
  plugins: [],
}