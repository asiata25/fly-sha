const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "75px",
    },
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        inter: ['"Inter"'],
      },
      spacing: {
        7.5: "30px",
        12.5: "50px",
        15: "60px",
        25: "100px",
        55: "220px",
        77.5: "310px",
      },
      colors: {
        brand: {
          primary: "#B88DFF",
          dark: "#080318",
          grey: "#909296",
        },
      },
      animation: {
        slider: "scroll 60s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      lineHeight:{
        7.5: '30px'
      }
    },
  },
  plugins: [],
};
