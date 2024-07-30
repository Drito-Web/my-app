module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        'custom':'960px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
