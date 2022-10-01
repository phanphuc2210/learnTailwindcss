/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}"
  ],
  mode: "jit",
  purge: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      height: {
        custom: "620px",
      },
      spacing: {
        "40-c": "40rem"
      }
    },
  },
  plugins: [],
}
