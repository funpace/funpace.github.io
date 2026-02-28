/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-black': '#0A0A0A',
        'neon-volt': '#CCFF00',
        'cobalt-blue': '#0055FF',
      },
      fontFamily: {
        'display': ['"Archivo Black"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
        'sans': ['"Inter"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}