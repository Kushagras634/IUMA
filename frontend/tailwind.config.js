/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins']
      }
    },
    colors:{
      sidepanel: '#003049',
      white: '#fff',
      black: '#000',
      lightGrey: "#e3e1e1"
      
    }
  },
  plugins: [],
  important: true
}

