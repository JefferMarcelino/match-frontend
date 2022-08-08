module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#183152",
        "link": "#375D81",
        "darkBg": "#0C141C",
        "darkLink": "#376945"
      },
    }
  },
  plugins: []
}