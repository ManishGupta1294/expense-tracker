/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'current': 'currentColor',
      'body-bg': '#F8F8F8',
      'white': '#FFF',
      'light-blue': '#DCEAF5',
      'medium-blue': '#2398F8',
      'dark-blue': '#16193A',
      'blue-gradient': '#208dec',
      'text-grey': '#5E9EA0',
      'main-grey': '#DCEAF5',
    },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};
