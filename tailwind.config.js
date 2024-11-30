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
        'Gts_blue':'#1065c0',
        'Gts_blue2':'#18aae5',
        'Gts_white':'#e6f4f7',
        'appleblack': '#1A1A1A',
        'crimson': '#DC143C',
        
        'sacramento':'#162114',
        'pine': '#294122',
        'tangerine':'#EB3D00',
        'chiffon':'#FFEDD2',
        'gradientblue':'#c8cee8',
      }
    },
  },
  plugins: [],
}