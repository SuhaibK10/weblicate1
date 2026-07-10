'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { CONTACT_HREF } from '@/lib/site'

const navLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries',   href: '#industries' },
  { label: 'Work',         href: '#work' },
  { label: 'Philosophy',   href: '#philosophy' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.jpeg" alt="Weblicate" width={80} height={40} className="object-contain" />
        </Link>

        {/* Desktop center nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-fg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={CONTACT_HREF}
            className="bg-fg text-bg font-semibold text-sm rounded px-4 py-2 hover:opacity-85 transition-opacity duration-200"
          >
            Talk to us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-fg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu — numbered list, CTA at bottom */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 text-xl font-semibold text-fg"
            >
              <span className="font-mono text-subtle text-xs">
                {String(i + 1).padStart(2, '0')}
              </span>
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT_HREF}
            className="bg-fg text-bg font-semibold text-sm rounded px-4 py-3.5 hover:opacity-85 transition-opacity duration-200 text-center mt-4"
          >
            Talk to us
          </a>
        </div>
      )}
    </header>
  )
}
