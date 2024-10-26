/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      
      backgroundImage: {
        'solar': "url('/src/solar.jpg')",
      
        'solar-plant2': "url('/src/solar-plant2.avif')",
      'solar-plant3': "url('/src/solar-plant3.jpeg')",
     
      },
    },
  },
  plugins: [],
}
