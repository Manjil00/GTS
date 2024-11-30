/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'titleFont': "'Archivo Black', 'sans-serif'",
        'LogoFont': "'Zeyada', cursive;",
      },
      colors:{
        'Gts_blue':'#199fbd',
        'Gts_white':'#e6f4f7',
      }
    },
  },
  plugins: [],
}