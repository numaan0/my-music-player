/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollbar:{
        'dark': ['rounded-lg', 'dark'],
        'thumb': 'w-1'

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

