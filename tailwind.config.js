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
      },
      boxShadow: {
        'ring': '0px 0px 3px 0px rgba(14, 165, 233, 1)',
      }
    },
  },
  plugins: [],
}

