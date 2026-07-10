/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        cream: '#F7F4EC',
        ink: '#1A1A1A',
        accent: '#D94B3D',
        muted: '#666666',
        line: '#D8D4CC',
      },
      fontFamily: {
        display: ['"General Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body: ['"Inter Tight"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(3.2rem, 12vw, 11rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        display: ['clamp(2.4rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.8rem, 4vw, 3.2rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
}
