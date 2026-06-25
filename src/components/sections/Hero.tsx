'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'

const words = ['Websites', 'AI Systems', 'MVPs', 'E-Commerce', 'ML Pipelines', 'ERP Systems', 'Academic Platforms']

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      

        {/* Eyebrow */}
        <FadeIn delay={0.1}>
          <p className="text-xs text-muted uppercase tracking-widest mb-6">10+ Projects Shipped</p>
        </FadeIn>

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
                  className="text-glow inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            for Startups.
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.3}>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-8">
            Not another dev shop. We build production-ready websites, AI systems, and custom
            platforms — trusted by clients across India, Dubai, USA, Europe, and beyond.
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
