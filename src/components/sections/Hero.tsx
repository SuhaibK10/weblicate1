'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CONTACT_HREF } from '@/lib/site'
import TechStack from '@/components/sections/TechStack'

const ease = [0.21, 0.47, 0.32, 0.98] as const

export default function Hero() {
  return (
    <section className="relative px-6 pb-24 pt-16 md:pb-32 md:pt-24">
      {/* Soft brand glow behind the headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] max-w-full -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse at center, rgba(47,176,168,0.10) 0%, transparent 65%)' }}
      />

      <div className="relative mx-auto flex max-w-content flex-col items-center text-center">
        <motion.div
          className="flex h-[88px] w-[88px] items-center justify-center rounded-full border border-border bg-gradient-to-b from-[#1b1d20] to-[#0e0f10] shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease }}
        >
          <Image src="/mark.png" alt="Weblicate" width={48} height={48} priority />
        </motion.div>

        <motion.h1
          className="mt-8 max-w-3xl font-normal text-fg text-balance"
          style={{ fontSize: 'clamp(2.25rem, 5.2vw, 3.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          We build what organizations run on.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-lg text-lg leading-snug text-muted text-balance"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
        >
          Platforms, AI systems, and digital infrastructure, designed and
          engineered for businesses that intend to lead.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          <a href={CONTACT_HREF} className="pill-solid">Start a conversation</a>
          <a href="#work" className="pill px-6 py-3 text-[0.9375rem]">See the work</a>
        </motion.div>
      </div>

      <motion.div
        className="relative mx-auto mt-20 max-w-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <TechStack />
      </motion.div>
    </section>
  )
}
