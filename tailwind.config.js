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
        "link": "#FF3657",
        "darkBg": "#0C141C",
        "darkLink": "#FFFAED",
        "cc": "#51FCCC"
      },
    }
  },
  plugins: []
}