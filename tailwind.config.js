/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '450px',
      md: '600px',
      lg: '800px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      rubik: ['Rubik Doodle Shadow', 'monospaced', 'sans'],
    },
    extend: {},
  },
  plugins: [],
};
