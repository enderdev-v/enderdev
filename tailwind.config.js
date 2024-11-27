/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '100': '43.75rem',
      },
      colors: {
        Ctblue: {
          100: '#2A5ADF',
          200: '#4070f4',
          300: '#0D6EFD',
          400: '#0E93DC',
          500: '#5964F0',
        },
        black: {
          0: "#000000",
          100: "#23272a",
          200: "#36393f",
          300: "#242526",                  
          400: "#16191E"                  
        },
        white: {
          0: "#FFFFFF",
          100: "#E4E9F7",
          200: "#f6f5ff",
          300: "#DBD7FB",
          400: "#C4BFF0",
        }
      },
      fontSize: {
        'sm-2': '0.9rem',
        'base-2': '1.2rem',
      },
      minWidth: {
        '1': '60px',
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  darkMode: "class",
  plugins: [],
}

