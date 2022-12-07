/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xl': '1600px',
      '4xl': '1900px',
      '2xl': '1535px',
      'xl': '1279px',
      'lg': '1023px',
      'md': '767px',
      'sm': '639px',
    },
    extend: {
      container: {
        padding: "40px",
        center: true,
      },
      colors: {
        primary: '#FBEB23',
        secondary: '#285FE7',
        "danger": '#FF151C',
        gray: '#D8D8D8',
        "navy": '#323C5C'
      },
      borderRadius: {
        default: '5px'
      }
    },
  },
  plugins: [],
}