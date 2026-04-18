/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#F5F0E8',
        'light-card': '#FFFFFF',
        'light-card-alt': '#F0EBE1',
        'light-border': '#E0D6C2',
        gold: {
          50: '#FFF9E6',
          100: '#FFF0B3',
          200: '#FFE680',
          300: '#FFD94D',
          400: '#FFCC1A',
          500: '#D4A017',
          600: '#B8860B',
          700: '#8B6914',
          800: '#5E4510',
          900: '#30230A',
        },
        dark: {
          50: '#2A2A2A',
          100: '#1F1F1F',
          200: '#1A1A1A',
          300: '#151515',
          400: '#111111',
          500: '#0D0D0D',
          600: '#0A0A0A',
          700: '#070707',
          800: '#050505',
          900: '#000000',
        }
      },
      fontFamily: {
        heading: ['DM Sans', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
