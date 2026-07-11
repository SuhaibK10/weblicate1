'use client'
import { motion } from 'framer-motion'
import { CONTACT_HREF } from '@/lib/site'

const lines = ['We build what', 'organizations run on.']

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center px-6 py-24">
      {/* Dot grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(247,246,243,0.13)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>
      {/* Radial fade so dots vanish toward edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0a0a_75%)] pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto w-full">
        <motion.p
          className="font-mono text-subtle uppercase mb-8"
          style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          (01) &nbsp;A technology consultancy
        </motion.p>

        <h1
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 8rem)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
        >
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="text-muted leading-relaxed max-w-xl mt-10"
          style={{ fontSize: '1.0625rem' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          Platforms, AI systems, and digital infrastructure — designed and
          engineered for businesses that intend to lead.
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-10 flex-wrap"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <a
            href={CONTACT_HREF}
            className="bg-fg text-bg font-semibold text-base rounded px-7 py-3.5 hover:opacity-85 transition-opacity duration-200"
          >
            Start a conversation
          </a>
          <a
            href="#work"
            className="border border-border text-fg font-medium text-base rounded px-7 py-3.5 hover:border-border-hover transition-colors duration-200"
          >
            See the work →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
