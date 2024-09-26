/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
       

      'md': '768px',
     

      'lg': '1024px',

      'gx': '1130px',

      'xl': '1280px',

      'bch': '1350px',
    

      '2xl': '1536px',
       
    },
  },
  plugins: [],
}