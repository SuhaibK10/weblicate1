'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { CONTACT_HREF } from '@/lib/site'

const navLinks = [
  { label: 'Work',         href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries',   href: '#industries' },
  { label: 'Philosophy',   href: '#philosophy' },
  { label: 'FAQ',          href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-bg/75 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="relative mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/mark.png" alt="" width={26} height={26} priority />
          <span className="text-[0.9375rem] font-medium tracking-tight text-fg">Weblicate</span>
        </Link>

        {/* Desktop center nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-normal text-fg/75 transition-colors duration-200 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={CONTACT_HREF} className="pill hidden text-sm md:inline-flex">
          Talk to us
        </a>

        <button
          className="text-fg md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-5 px-6 pb-8 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-light text-fg"
            >
              {link.label}
            </a>
          ))}
          <a href={CONTACT_HREF} className="pill-solid mt-4 justify-center">
            Talk to us
          </a>
        </div>
      )}
    </header>
  )
}
