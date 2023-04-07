/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'main-black':'#1c1c27',
        'main-gray' : '#f5f5f5',
        'gray-black': '#272833',
        'dark-yellow': '#ffb43a',
        'main-white': '#fcfcfc',
        'main-red' : '#E94141'
      },
    },
  },
  plugins: [],
};