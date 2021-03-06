module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      "DarkModeElements": "hsl(209, 23%, 22%)",
      "DarkModeBackground": "hsl(207, 26%, 17%)",
      "LightModeText": "hsl(200, 15%, 8%)",
      "LightModeInput": "hsl(0, 0%, 52%)",
      "LightModeBackground": "hsl(0, 0%, 98%)",
      "DarkModeText&LightModeElements": "hsl(0, 0%, 100%)",
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
