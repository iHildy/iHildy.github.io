module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      // screens: {
      //   'sm': '640px',
      //   // => @media (min-width: 640px) { ... }

      //   'md': '780px',
      //   // => @media (min-width: 768px) { ... }

      //   'lg': '1034px',
      //   // => @media (min-width: 1024px) { ... }

      //   'xl': '1290px',
      //   // => @media (min-width: 1280px) { ... }
      // },
      colors: {
        // primary: "#",
        // secondary: "#",
        offwhite: "#f5f5f5",
        offgray: "#202020",
        discord: "#7289DA",
      }
    }
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: []
}