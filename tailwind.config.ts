import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:             '#0a0a0a',
        surface:        '#111111',
        elevated:       '#181818',
        border:         'rgba(237,238,240,0.09)',
        'border-hover': 'rgba(237,238,240,0.22)',
        fg:             '#edeef0',
        muted:          '#adb1b8',
        subtle:         '#6b7177',
        // Brand cube gradient: green → teal. Teal doubles as the interaction accent.
        brand:          '#4fbfa5',
        'brand-green':  '#8fcb7e',
        'brand-teal':   '#2fb0a8',
      },
      fontFamily: {
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '100% 0' },
          '50%':      { backgroundPosition: '0% 0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [],
}
export default config
