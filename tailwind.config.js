/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#FF9500'
      },
      fontFamily:{ 
        'vietnam': ["Be Vietnam Pro", "sans-serif"]
      }
    },
  },
  plugins: [],
}