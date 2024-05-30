/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding:'2rem',
      width:'1295px'
    },
    extend: {
      backgroundImage:{
        grad:'linear-gradient(96.78deg, #F64D4D -57.09%, #4D5EF6 101.17%)'
        
      }
    },
  },
  plugins: [],
}