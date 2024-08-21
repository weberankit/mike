/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'xs': {'max': '480px'}, // Custom breakpoint for screens less than 400px
    },},
  },
  plugins: [],
 
}

