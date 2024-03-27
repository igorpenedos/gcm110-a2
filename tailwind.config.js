/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "**/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1B1D1C",
        secondary: "#FFFFFF",
        tertiary: "#FFA858",
      },
    },
    fontFamily: {
      merriweather: ["Merriweather", "serif"],
    },
    dropShadow: {
      button: [
        "0 10px 8px rgb(255,168,88 / 0.04)",
        "0 4px 3px rgb(255,168,88 / 0.1)",
      ],
    },
  },
  plugins: [],
};

