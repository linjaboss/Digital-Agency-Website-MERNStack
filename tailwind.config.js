/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'ft-primary': ['Righteous', 'sans-serif'],
      'ft-secondary': ["Merriweather Sans", 'sans-serif']
    },
    screens: {
      sm: '450px',
      md: '600px',
      lg: '800px',
      xl: '1200px',
      '2xl': '1400px'
    },
    extend: {
      colors: {
        primary: '#0d1245',
        secondary: '#a4ef7d',
        'secondary-hv': '#a0e071',
        third: '#c471f5',
        'font-primary': 'rgb(196,113,245)',
      },
      boxShadow: {
        'bs-primary': '0px 3px 7px 0px #c471f5',
        'bs-secondary': '0px 0px 8px -2px #c471f5',
        'bs-hover': '0px 3px 7px 0px #c471f5, 0px 0px 0px 2px #c471f5',
        'bs-rhover': '0px 0px 0px 2px #ee2222, 0px 3px 7px 0px #c471f5'
      },
      backgroundImage: {
        'store': 'url(/src/assets/img/store-img.png)'
      },
      gridTemplateRows: {
        'gt-primary': 'max-content minmax(0,1fr) max-content auto'
      }
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
