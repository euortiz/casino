/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cinza: "#292929",
        preto: "#181818",
        white: "#ffffff",
        pink: "#FD2D5E",
        yellow: "#FFFF00",
        green: "#4ADE80",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },

  plugins: [],
};
