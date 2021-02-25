const colors = require('tailwindcss/colors')

module.exports = {
//   purge: [
//     "./*.html",
//     "./**/*.html",
//   ],
//   purge: {
//     enabled: true,
//     content: [
//       "./*.html",
//       "./**/*.html",
//     ],
//   },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        offwhite: "#f5f5f5",
        darkgray: "#32373b",

        primary: {
          900: "#142C28",
          800: "#20453E",
          700: "#449194",
          600: "#398384",
          500: "#60B9A9",
          400: "#60B9B9",
          300: "#5BBDC0",
          200: "#7CCECE",
        },

        gray: colors.trueGray,
      },
      fontFamily: {
        name: "JetBrains Mono",
        para: "SF Pro Display Regular",
      },
    },
  },
  variants: {},
  plugins: [],
};