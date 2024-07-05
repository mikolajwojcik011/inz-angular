/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '500px': '500px',
      },
      height: {
        '840px': '840px',
      }
    },
  },
  plugins: [],
}

