/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cerise: "#d62868",
        cultured: "#f5f5f5",
        "debian-red": "#d50d56",
        "spanish-carmine": "#D0004E",
        "bright-gray": "#ececec",
        "dark-liver": "#505050",
        razzmatazz: "#DB2369",
        "moonstone-blue": "#6cc2b9",
        "morning-blue": "#8c979e",
        "chinese-black": "#0e1015",
      },
      fontFamily: {
        // sans: ["Lato", "sans-serif"],
        sans: ["Raleway", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      maxWidth: {
        "6xl": "1170px",
      },
    },
  },
};
