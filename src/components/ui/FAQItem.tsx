'use client'
import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function FAQItem({ question, answer, index }: { question: string; answer: string; index?: number }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="group border-t border-border">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-2 py-6 text-left md:grid-cols-[4rem_1fr_auto]"
      >
        <span className="label">{index !== undefined ? String(index + 1).padStart(2, '0') : ''}</span>
        <h3
          className={`text-lg font-normal tracking-tight transition-colors duration-200 md:text-xl ${
            open ? 'text-fg' : 'text-fg/80 group-hover:text-fg'
          }`}
        >
          {question}
        </h3>
        <Plus
          size={18}
          strokeWidth={1.5}
          className={`flex-shrink-0 self-center transition-all duration-300 ${open ? 'rotate-45 text-brand' : 'text-fg/60'}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pl-[2.75rem] leading-relaxed text-muted md:pl-[4.5rem]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
