/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0B251A',
          900: '#0F2E22',
          800: '#143A2C',
          700: '#1B4A38',
        },
        emerald: {
          accent: '#10B981',
          deep: '#059669',
        },
        cream: '#F9FBF9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(16,185,129,0.35), 0 0 40px -8px rgba(16,185,129,0.55)',
        'glow-soft': '0 0 60px -12px rgba(16,185,129,0.45)',
        float: '0 30px 80px -30px rgba(11,37,26,0.35), 0 12px 30px -12px rgba(11,37,26,0.15)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseLine: {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        fadeUp: 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        pulseLine: 'pulseLine 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
