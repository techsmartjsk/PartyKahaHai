/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './atoms/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu_400Regular'],
        ubuntuBold: ['Ubuntu_500Medium'],
      },
      colors: {
        'custom-start': '#AD00DF',
        'custom-end': '#3E0050',
      },
    },
  },
  plugins: [
    require('autoprefixer'),
  ],
};
