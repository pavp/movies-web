/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#191b1e',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
