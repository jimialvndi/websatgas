/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins",
      },
      colors: {
        "cp-black": "#0a0510",
        "cp-dark-blue": "#603393",
        "cp-pale-orange": "#FFEDD1",
        "cp-light-grey": "#848FA7",
        "cp-light-blue": "#007AFF",
        "cp-pale-blue": "#f2f8ff",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),

  ],
}