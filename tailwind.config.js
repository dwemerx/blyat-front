module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
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
