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
    extend: {},
  },
  plugins: [],
}