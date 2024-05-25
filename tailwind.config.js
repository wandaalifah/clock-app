/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': {
          'primary': '#FBE57F'
        },
        'pink': {
          'primary': '#F8A3A3'
        },
        'teal': {
          'primary': '#5DA6A5'
        }
      },
      fontFamily: {
        'opensans': 'Open Sans'
      }
    },
  },
  plugins: [],
}

