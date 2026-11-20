'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { CONTACT_HREF } from '@/lib/site'
import { capabilities, CATEGORY } from '@/lib/content'
import TechStack from '@/components/sections/TechStack'

const ease = [0.21, 0.47, 0.32, 0.98] as const

const lines = ['We build what', 'organizations run on.']

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Blueprint grid with a faint brand wash at the top */}
      <div className="bg-blueprint pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[1100px] max-w-[180%] -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse at center, rgba(47,176,168,0.09) 0%, transparent 62%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-6 pb-16 pt-16 md:pb-20 md:pt-28">
        <motion.p
          className="inline-flex items-center gap-2.5 rounded-[4px] border border-border bg-white/[0.02] px-3 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-fg/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand" aria-hidden="true" />
          {CATEGORY}
          <span className="hidden text-subtle sm:inline">· India → Worldwide</span>
        </motion.p>

        {/* Line-by-line mask reveal, once on load */}
        <h1
          className="mt-7 font-normal text-fg"
          style={{ fontSize: 'clamp(2.75rem, 7.6vw, 6.5rem)', lineHeight: 0.98, letterSpacing: '-0.04em' }}
        >
          {lines.map((line, i) => (
            <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
              <motion.span
                className={`block text-balance ${i === 1 ? 'text-fg/55' : ''}`}
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-12 md:items-end"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
        >
          <p className="max-w-md text-lg leading-snug text-muted text-pretty md:col-span-6 md:text-xl">
            AI systems, platforms, and digital infrastructure, with intelligence designed in
            from day one, for businesses that intend to lead.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
            <a href={CONTACT_HREF} className="btn-primary group">
              Start a conversation
              <ArrowRight size={14} strokeWidth={1.75} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href="#work" className="btn-secondary">See the work</a>
          </div>
        </motion.div>

        {/* Pillars: each one jumps to its capability row */}
        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <p className="label">[ Pillars ]</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5">
            {capabilities.map((cap) => (
              <a
                key={cap.id}
                href={`#cap-${cap.slug}`}
                className="group relative flex items-center justify-between gap-4 border-t border-border py-4 lg:block lg:pb-6 lg:pt-5"
              >
                <span
                  className="absolute left-0 top-[-1px] h-px w-0 bg-brand transition-[width] duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
                <div className="flex items-baseline gap-4 lg:block">
                  <span className="label lg:flex lg:items-center lg:justify-between">
                    {cap.id}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="hidden text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand lg:block"
                    />
                  </span>
                  <span className="block text-lg text-fg lg:mt-8">{cap.title}</span>
                </div>
                <span className="hidden text-sm text-subtle transition-colors duration-300 group-hover:text-muted lg:mt-1 lg:block">
                  {cap.short}
                </span>
                <ArrowUpRight size={16} strokeWidth={1.5} className="flex-shrink-0 text-subtle lg:hidden" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative border-y border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="mx-auto flex max-w-content flex-col items-stretch gap-2 px-6 py-6 md:flex-row md:items-center md:gap-8">
          <p className="label flex-shrink-0 md:w-40">Built on infrastructure you already trust</p>
          <div className="min-w-0 flex-1">
            <TechStack />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
