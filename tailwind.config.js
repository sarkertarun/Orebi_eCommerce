/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Container
      maxWidth: {
        container: "[90%]",
      },
      // Container
      // custom color start
      colors: {
        'primaryColor': "#262626",
         'secondaryColor': "#767676",
         'borderColor': "#979797",
         'borderColortwo': "#F0F0F0",
         'categoryBgColor': "#F5F5F3",
         'textColor':"#6D6D6D",
         'placeholderColor' : "#C4C4C4",
         'adsBgColor' : "#F3F3F3",
       },
      // custom color end 
      // Font Family
        fontFamily: {
          'dm' :["DM Sans"],
          
        },
      // Font Family
    },
  },
  plugins: [],
}

