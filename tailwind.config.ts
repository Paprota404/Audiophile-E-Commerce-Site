import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '880px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        // Add more sizes as needed
      }
    }
  },
  plugins: [],
 }
export default config
