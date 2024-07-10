/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '250px': '250px',
        '500px': '500px',
        '1600px': '1600px',
        '1440px': '1440px',
      },
      height: {
        '840px': '840px',
      },
      boxShadow: {
        'ring': '0px 0px 3px 0px rgba(14, 165, 233, 1)',
      },
      keyframes: {
        borderColorFade: {
          '0%, 100%': {
            borderBottomColor: '#d1d5db',
            borderBottomWidth: '2px'
          },
          '50%': {
            borderBottomColor: '#0891b2',
            borderBottomWidth: '2px'
          },
        },
      },
      animation: {
        'border-color-fade': 'borderColorFade 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

