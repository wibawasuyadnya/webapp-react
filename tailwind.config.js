const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter-extra-bold' : ['inter-extra-bold', 'sans-serif'], 
      'inter-bold' : ['inter-bold', 'sans-serif'],
      'inter-semi-bold' : ['inter-semi-bold', 'sans-serif'],
      'inter-medium' : ['inter-medium', 'sans-serif'],
      'inter-normal' : ['inter-normal', 'sans-serif'],
      'inter-regular' : ['inter-regular', 'sans-serif'],
      'inter-light' : ['inter-light', 'sans-serif'],
  },
    extend: {
      },
      screens: {
        // adding xs to the rest
        xs: {"max": "600px"},
        // if you did not add this, you would have only "xs"
        ...defaultTheme.screens,
      },
  },
  plugins: [],
}