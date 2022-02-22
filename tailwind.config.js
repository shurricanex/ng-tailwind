module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      animation: {
        blob: "blob 20s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate3d(0) scale(1)"
          },
          "66%": {
            transform: "translate3d(-2.7rem, 0, 1rem) scale(12)"
          },
          "100%": {
            transform: "translate3d(0) scale(1)"
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
