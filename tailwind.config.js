/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-jost)', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fdfaf7',
          100: '#f9f3ec',
          200: '#f2e6d8',
          300: '#e8d5bf',
        },
        rose: {
          blush: '#d4a5a0',
          deep: '#b87b75',
          soft: '#e8c4c0',
        },
        sage: {
          light: '#c8d5c0',
          DEFAULT: '#94a989',
          dark: '#6b7f60',
        },
        stone: {
          warm: '#8b7d72',
          charcoal: '#3d3530',
        },
      },
    },
  },
  plugins: [],
}
