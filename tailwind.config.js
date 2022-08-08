module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#183152",
        "link": "#375D81",
        "grey": {
          100: "#F5F7FA",
          1000: "#1F2933"
        }
      },
      typography: theme => ({
        default: {
          css: {
            pre: {
              color: theme("colors.grey.1000"),
              backgroundColor: theme("colors.grey.100")
            },
            "pre code::before": {
              "padding-left": "unset"
            },
            "pre code::after": {
              "padding-right": "unset"
            },
            code: {
              backgroundColor: theme("colors.grey.100"),
              color: "#DD1144",
              fontWeight: "400",
              "border-radius": "0.25rem"
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem"
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem"
            }
          }
        }
      })
    }
  },
  plugins: []
}