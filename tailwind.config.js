const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        teal:colors.teal,
        yellow:colors.yellow


      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
