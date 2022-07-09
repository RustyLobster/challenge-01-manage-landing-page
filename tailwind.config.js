/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'accent-orange-primary': '#f25f3a',
      'accent-orange-secondary': '#F38D75',


      'accent-100': '#ffefeb',
    
      'primary-400': '#242d52',
    
      'neutral-100': '#1d1e25',
      'neutral-900': '#242D51',
      'black-primary': '#000000',
      'black-secondary': '#23232A'
    },
    extend: {
      fontFamily: {
        'vietnam': ["Be Vietnam Pro"]
      }
    },
  },
  plugins: [],
}
