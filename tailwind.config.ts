import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#080808',
        surface:      '#161616',
        elevated:     '#222222',
        border:       'rgba(255,255,255,0.13)',
        'border-hover': 'rgba(255,255,255,0.28)',
        fg:           '#ffffff',
        muted:        '#c0c0c0',
        subtle:       '#888888',
        accent:       '#ffffff',
        'accent-dim': 'rgba(255,255,255,0.10)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      animation: {
        'marquee':     'marquee 30s linear infinite',
        'marquee-rev': 'marquee-rev 30s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          from: { transform: 'translateX(-50%)' },
          to:   { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
