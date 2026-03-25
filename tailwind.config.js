/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e6f7f4',
          100: '#b3e8df',
          200: '#80d9cb',
          300: '#4dcab6',
          400: '#26bfa6',
          500: '#00b496',
          600: '#009f85',
          700: '#008570',
          800: '#006b5b',
          900: '#004a3f',
        },
        accent: {
          DEFAULT: '#FF6B35',
          light: '#FF8C60',
          dark: '#E5521C',
        },
        dark: '#0F1F1C',
        light: '#F5FAF9',
      },
      fontFamily: {
        heading: ['"Clash Display"', '"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.07)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.13)',
        'glow': '0 0 40px rgba(0,180,150,0.18)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
