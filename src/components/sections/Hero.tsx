'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'

const words = ['Websites', 'AI Systems', 'MVPs', 'E-Commerce', 'ML Pipelines', 'ERP Systems', 'LMS Platforms', 'Academic Platforms']

const wordColors: Record<string, { color: string; glow: string }> = {
  'Websites':           { color: '#9ab0c4', glow: 'rgba(154,176,196,0.12)' },  // dusty blue
  'AI Systems':         { color: '#a898c4', glow: 'rgba(168,152,196,0.12)' },  // muted periwinkle
  'MVPs':               { color: '#90bcb0', glow: 'rgba(144,188,176,0.12)' },  // muted teal
  'E-Commerce':         { color: '#c4a888', glow: 'rgba(196,168,136,0.12)' },  // warm stone
  'ML Pipelines':       { color: '#88b0bc', glow: 'rgba(136,176,188,0.12)' },  // slate cyan
  'ERP Systems':        { color: '#98a4b4', glow: 'rgba(152,164,180,0.10)' },  // cool slate
  'LMS Platforms':      { color: '#92b898', glow: 'rgba(146,184,152,0.12)' },  // muted sage
  'Academic Platforms': { color: '#a898c4', glow: 'rgba(168,152,196,0.12)' },  // soft lilac
}

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 py-24">
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.15)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>
      {/* Radial fade so dots vanish toward edges and don't distract from content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#080808_75%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full -mt-16">

        {/* Eyebrow */}
        

        {/* H1 with rotating word */}
        <FadeIn delay={0.2}>
          <h1
            className="font-extrabold text-fg tracking-tight leading-[0.95]"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            We Build
            <br />
            <span className="inline-block" style={{ minHeight: '1.1em' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  style={{
                    color: wordColors[words[index]].color,
                    textShadow: `0 0 32px ${wordColors[words[index]].glow}`,
                  }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.3}>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-8">
            We build production-ready websites, AI systems, E-com Stores, LMS and custom
            platforms.<br/>
            Trusted by clients across India, Dubai, USA, Europe, and beyond.
          </p>
        </FadeIn>

        {/* CTA row */}
        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <a
              href="mailto:suhaibkhan830@gmail.com"
              className="bg-fg text-bg font-bold text-base rounded-lg px-8 py-4 hover:opacity-85 transition-opacity duration-200"
            >
              Book a 15-min Call →
            </a>
            <a
              href="#work"
              className="border border-border text-fg font-medium text-base rounded-lg px-8 py-4 hover:border-border-hover transition-all duration-200"
            >
              See Our Work
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
