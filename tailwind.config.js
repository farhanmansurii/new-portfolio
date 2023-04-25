/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        loopL: 'loopTextLeft 10s linear infinite'
      },
      keyframes: {
        loopTextLeft: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      }
    },
    fontFamily: {
      'migra': ['Migra'],
      'neue': ['Neue Montreal'],
    }
  },
  plugins: [],
}
