module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'splash': "url(/images/splash.jpg)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
