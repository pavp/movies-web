/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-dark-purple': '#161523',
        'c-light-purple': '#2a2943',
        'c-light-blue': '#83a0e9',
      },
      blur: {
        xs: '1px',
      },
    },
  },
  plugins: [],
}
