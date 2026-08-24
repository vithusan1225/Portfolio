/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0a',
          light: '#262626',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#262626',
          light: '#404040',
        },
        accent: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          light: '#60a5fa',
        },
        dark: {
          DEFAULT: '#000000',
          card: '#0a0a0a',
          cardHover: '#141414',
          border: '#232323',
          text: '#f5f5f5',
          muted: '#8a8a8a',
        },
        light: {
          DEFAULT: '#ffffff',
          card: '#ffffff',
          cardHover: '#f7f7f5',
          border: '#e5e5e0',
          text: '#0a0a0a',
          muted: '#6b6b6b',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
