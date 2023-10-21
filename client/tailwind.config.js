/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    screens: {
      'cero': '0px',
      'xs': '360px',
      'sm':'750px',
      '2xl':'1366px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

