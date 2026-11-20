'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_HREF } from '@/lib/site'
import { navLinks } from '@/lib/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll and allow Escape while the mobile sheet is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? 'border-border bg-bg/80 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <Image src="/mark.png" alt="" width={24} height={24} priority />
            <span className="text-[0.9375rem] font-medium tracking-tight text-fg">Weblicate</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-fg/70 transition-colors duration-200 hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href={CONTACT_HREF} className="btn-primary hidden !px-4 !py-2.5 lg:inline-flex">
            Talk to us
            <ArrowUpRight size={14} strokeWidth={1.75} />
          </a>

          <button
            type="button"
            className="-mr-2 p-2 text-fg lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile: full-screen sheet, numbered links, CTA pinned to the bottom.
          Rendered outside <header>: its backdrop-filter would otherwise become
          the containing block for this fixed element and collapse it. */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col justify-between overflow-y-auto bg-bg px-6 pb-8 pt-6 lg:hidden"
        >
          <nav aria-label="Mobile">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-border py-4"
              >
                <span className="label">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-3xl font-light tracking-tight text-fg">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <a href={CONTACT_HREF} className="btn-primary justify-center">
              Start a conversation
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
            <p className="label text-center">{CONTACT_EMAIL}</p>
          </div>
        </div>
      )}
    </>
  )
}
