'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'

const industries = [
  { name: 'Education',             line: 'Institutes run on paper and patience. We build the systems that run them instead.' },
  { name: 'Healthcare',            line: 'Records, scheduling, billing: the parts of care that patients never see, done right.' },
  { name: 'Retail',                line: 'From shelf to checkout to warehouse, one system that knows where everything is.' },
  { name: 'Finance',               line: 'Software where correctness is not a feature. It is the product.' },
  { name: 'Manufacturing',         line: 'Production, procurement, and inventory, visible for the first time.' },
  { name: 'Hospitality',           line: 'Operations that move as fast as the service is supposed to.' },
  { name: 'Logistics',             line: 'Every shipment, every handoff, accounted for.' },
  { name: 'Public Sector',         line: 'Systems built for scale, scrutiny, and decades of use.' },
  { name: 'Professional Services', line: 'Client work is a pipeline. We make it one.' },
]

export default function Industries() {
  const [active, setActive] = useState(0)

  return (
    <div className="relative">
      {/* Blue glow, as in the reference's skills block */}
      <div
        className="pointer-events-none absolute -right-20 -top-24 h-[420px] w-[420px] rounded-full md:right-0"
        style={{ background: 'radial-gradient(circle, rgba(70,140,190,0.22) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative">
        <SectionTitle title="Industries" intro="Every industry runs on operations. We build for them." />

        <FadeIn delay={0.1}>
          <div className="mt-8 flex max-w-2xl flex-wrap gap-2.5">
            {industries.map((ind, i) => (
              <button
                key={ind.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`chip ${i === active ? 'border-border-hover bg-white/[0.08] text-fg' : 'hover:border-border-hover'}`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          <div className="mt-8 min-h-[4rem] max-w-xl" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                className="text-xl font-light leading-snug text-fg/85"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {industries[active].line}
              </motion.p>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
