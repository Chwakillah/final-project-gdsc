import daisyui from 'daisyui';

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
          200: '#FFFAF5',
          500: '#FFC27A',
        },
        hijau: {
          100: '#FFFAF5',
          200: '#E9F8F3',
          500: '#20B486',
          600: '#086D65',
          800: '#06241B',
        },
        secondary: {
          abu: '#6D737A',
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"],
  },
}
