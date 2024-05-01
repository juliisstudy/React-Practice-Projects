/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        vuejs: {
          100: "#49e659",
        },
      },
    },
  },
  plugins: [],
};
