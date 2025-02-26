import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', "sans-serif"],
      },
      colors: {
        background: {
          light: "#F6F9FF",
          white: "#FFFFFF",
          dark: "#BFBFBF",
          subtle: "#F3F4F8",
        },
        oren: {
          200: "#FFFAF5",
          500: "#FFC27A",
        },
        hijau: {
          sage: "#F0FBF7",
          100: "#FFFAF5",
          200: "#E9F8F3",
          500: "#20B486",
          600: "#086D65",
          800: "#06241B",
        },
        secondary: {
          abu: "#6D737A",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#20B486",
          secondary: "#086D65",
        },
      },
    ],
  },
};
