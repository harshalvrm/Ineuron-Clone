/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},

    colors : {
      'ineuron-bg': '#233C7B',
    },

    screens: {

      'xxs': '343px',

      'xs': '500px',
      
      'sm': '527px',
      // => @media (min-width: 640px) { ... }

      'md': '796px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin-windicss')
  ],
}

