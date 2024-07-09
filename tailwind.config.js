/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '360px': '360px',
        '500px': '500px',
        '1600px': '1600px',
        '1440px': '1440px',
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

