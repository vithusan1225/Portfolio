/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          light: '#2a4d7d',
          dark: '#142740',
        },
        secondary: {
          DEFAULT: '#2c5282',
          light: '#3b6ea8',
        },
        accent: {
          DEFAULT: '#d4a843',
          hover: '#b88d30',
          light: '#f5d378',
        },
        dark: {
          DEFAULT: '#000000',
          card: '#050505',
          cardHover: '#0b0b0b',
          border: '#1a1a1a',
          text: '#e2e8f0',
          muted: '#94a3b8',
        },
        light: {
          DEFAULT: '#f8fafc',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: '#e2e8f0',
          text: '#1e293b',
          muted: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
