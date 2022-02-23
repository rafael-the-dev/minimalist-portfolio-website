module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#F43030'
        },
        cyan: {
          700: '#5FB4A2'
        },
        blue: {
          500: '#33323D',
          700: '#203A4C'
        },
        grey: {
          400: '#FAFAFA',
          500: '#EAEAEB'
        }
      }
    },
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
