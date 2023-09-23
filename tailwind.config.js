/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    DEFAULT: `#5538C8`,
    black: `#080614`,
  },
};
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { ...colors },
    },
  },
  plugins: [],
};
