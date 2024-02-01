/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   blue: '',
    //   green: '',
    //   red: '',
    //   'gray-bg': '',
    //   'gray-text': '',
    // },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      rubik: ['Rubik Doodle Shadow', 'monospaced', 'sans'],
    },
    extend: {},
  },
  plugins: [],
};
