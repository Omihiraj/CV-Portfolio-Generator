/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'navbg': '#1C1C1C',
        'secondarypink' : '#CF0070',
        'secondaryblue' : '#00C2FF',
        'theme2bg' : '#202020',
        'theme2text' : '#A9A9A9'
      },
      
    },
    fontFamily: {
      'display': ['Poppins'],
      'body': ['"Poppins"'],
    }
    
  },
  plugins: [],
}
