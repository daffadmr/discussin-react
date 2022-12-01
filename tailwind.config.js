/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "40px",
        center: true,
      },
      colors: {
        primary: '#FBEB23',
        secondary: '#285FE7',
        "danger": '#FF151C'
      },
      borderRadius: {
        default: '5px'
      }
    },
  },
  plugins: [],
}