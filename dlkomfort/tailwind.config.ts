import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFD700',
          'yellow-dark': '#E6C200',
          dark: '#111111'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.03em'
      },
      boxShadow: {
        'soft-lg': '0 20px 40px -20px rgba(17,17,17,0.25), 0 8px 16px -8px rgba(255,215,0,0.15)',
        'soft-yellow': '0 20px 40px -20px rgba(255,215,0,0.45), 0 8px 20px -10px rgba(255,215,0,0.25)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite'
      }
    }
  },
  plugins: []
}

export default config
