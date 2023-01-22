/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {    
    colors: {
      primary: "#0FCFEC",
      secondary: "#19D3AE",
      accent: "#3A4256",
      neutral: "#3D4451",
      base: "#FFFFFF",
      info: "#3ABFF8",
      success: "#36D399",
      warning: "#FBBD23",
      error: "#F87272",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
