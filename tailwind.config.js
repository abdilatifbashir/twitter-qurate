const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        teal:colors.teal,
        yellow:colors.yellow,
        twitterBlue:colors.lightBlue


      },
      inset:{
        "70":"39rem",
        "66":"16rem",
        "120":"30rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
