import { screens as _screens } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"]
export const theme = {
  extend: {
    scrollbar: {
      'dark': ['rounded-lg', 'dark'],
      'thumb': 'w-1'
    },
  },
  screens: {
    'xs': { 'max': '639px' },
    ..._screens,
  },
}
export const plugins = [
  require('tailwind-scrollbar'),
]

