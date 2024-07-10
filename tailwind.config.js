/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
      },
      colors: {
        oren: {
          500: '#FFC27',
        },
        hijau: {
          100: '#FFFAF5',
          200: '#E9F8F3',
          500: '#20B486',
          600: '#086D65',
          700: '#086D65',
          800: '#06241B',
        },
        secondary: {
          grey: '#6D737A',
        },
      },
    },
  },
  plugins: [],
}
