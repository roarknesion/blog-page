const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',

  plugins: [require('@tailwindcss/typography')],

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px'
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      orange: colors.orange
    },

    extend: {
      fontFamily: {
        serif: ['Bitter', 'serif'],
        mono: ['Inconsolata', 'monospace']
      },

      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.orange.900'),
            maxWidth: '',

            '[class~="lead"]': {
              color: theme('colors.orange.600')
            },

            a: {
              color: theme('colors.orange.900')
            },

            h2: {
              color: theme('colors.orange.900')
            },

            'ul > li::before': {
              backgroundColor: theme('colors.orange.300')
            },

            'ol > li::before': {
              color: theme('colors.orange.500')
            },

            blockquote: {
              borderLeftColor: theme('colors.orange.300'),
              color: theme('colors.orange.900'),
              borderRadius: '4px'
            }
          }
        }
      })
    }
  }
}
