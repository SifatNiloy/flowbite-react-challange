/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#008ab7'
          
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
