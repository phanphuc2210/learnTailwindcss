/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      height: {
        custom: "620px",
      }
    },
  },
  plugins: [],
}
