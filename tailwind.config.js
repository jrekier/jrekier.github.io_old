  const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.11ty.js',
      './src/**/*.njk',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['PT Serif', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    // borderWidth: ['responsive', 'first', 'hover', 'focus'],
    // padding: ['responsive', 'first', 'hover', 'focus'],
  },
  plugins: [],
}
