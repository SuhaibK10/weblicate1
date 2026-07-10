import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#0a0a0a',
        surface:      '#141414',
        elevated:     '#1e1e1e',
        border:       'rgba(247,246,243,0.12)',
        'border-hover': 'rgba(247,246,243,0.28)',
        fg:           '#f7f6f3',
        muted:        '#a8a6a0',
        subtle:       '#6e6c66',
        accent:       '#4d6bfe',
        'accent-dim': 'rgba(247,246,243,0.08)',
      },
      fontFamily: {
        sans:  ['var(--font-geist)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        mono:  ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
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
