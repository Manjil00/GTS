/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'titleFont': ['Archivo Black', 'sans-serif'],
      },
      colors:{
        'Beigebg':'#fbf0d8',
      }
    },
  },
  plugins: [],
}