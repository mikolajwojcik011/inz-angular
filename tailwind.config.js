/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '480px': '480px',
        '500px': '500px',
        '1920px': '1920px',
        '1440px': '1440px',
      },
      height: {
        '840px': '840px',
      },
      boxShadow: {
        'ring': '0px 0px 3px 0px rgba(14, 165, 233, 1)',
      }
    },
    screens:{
      // '3xl': {'max': '1919px'},
      // '2xl': {'max': '1535px'},
      // 'xl': {'max': '1279px'},
      // 'lg': {'max': '1023px'},
      // 'md': {'max': '767px'},
      // 'sm': {'max': '639px'},
    }
  },
  plugins: [],
}

