/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      
      backgroundImage: {
        'save-nature': "url('/src/save-nature.jpg')",
        'solar': "url('/src/solar.jpg')",
        'green-architecture-3': "url('/src/green-architecture-3.jpg')",
        'solar-plant': "url('/src/solar-plant.avif')",
        'solar-plant2': "url('/src/solar-plant2.avif')",
      'solar-plant3': "url('/src/solar-plant3.jpeg')",
         'web-dev':"url('/src/web-dev.jpg')",
         'branding':"url('/src/branding.jpg')", 
        'seo':"url('/src/seo.jpg')",
       
        'marketing':"url('/src/marketing.jpg')"
      
      },
    },
  },
  plugins: [],
}
