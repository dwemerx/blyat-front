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
        primary:
          '0 0 15px -3px rgba(0, 0, 0, 0.1), 0 0 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
    fontFamily: {
      body: ['Open Sans'],
    },
  },
  variants: {},
  plugins: [],
};
