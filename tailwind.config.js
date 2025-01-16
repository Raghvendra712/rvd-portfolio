/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Montserrat'
      },
      colors: {
        'cirlces': '#ffead1'
      }
    },
  },
  plugins: [],
}
