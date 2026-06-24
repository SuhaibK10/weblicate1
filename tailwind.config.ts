import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#080808',
        surface:      '#111111',
        elevated:     '#1a1a1a',
        border:       'rgba(255,255,255,0.07)',
        'border-hover': 'rgba(255,255,255,0.14)',
        fg:           '#f5f5f5',
        muted:        '#888888',
        subtle:       '#555555',
        accent:       '#ffffff',
        'accent-dim': 'rgba(255,255,255,0.06)',
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
