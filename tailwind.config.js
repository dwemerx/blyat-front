module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#FEFE55',
      },
      boxShadow: {
        card:
          '0 0 15px -3px rgba(0, 0, 0, 0.1), 0 0 6px -2px rgba(0, 0, 0, 0.05)',
        cardHover:
          '0 0 15px -3px rgba(0, 0, 0, 0.5), 0 0 6px -2px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        body: ['Open Sans'],
      },
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
