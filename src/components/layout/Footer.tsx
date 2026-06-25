import Link from 'next/link'
import Image from 'next/image'

const pages = [
  { label: 'Work',     href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left */}
        <div>
          <Link href="/">
            <Image src="/logo.jpeg" alt="Weblicate" width={75} height={38} className="object-contain" />
          </Link>
          <p className="text-sm text-muted mt-4 leading-relaxed max-w-xs">
            Web · AI · ERP · Healthcare · EdTech
          </p>
          <p className="text-xs text-subtle mt-2">Based in India · Serving Clients Globally</p>
          <p className="text-xs text-subtle mt-1">© 2025 Weblicate. All rights reserved.</p>
        </div>

        {/* Center */}
        <div>
          <p className="text-xs text-subtle uppercase tracking-wider mb-4">Pages</p>
          <div className="flex flex-col gap-3">
            {pages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="text-sm text-muted hover:text-fg transition-colors duration-200"
              >
                {page.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-xs text-subtle uppercase tracking-wider mb-4">Connect</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://linkedin.com/in/suhaibkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-fg transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SuhaibK10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-fg transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="mailto:suhaibkhan830@gmail.com"
              className="text-sm text-muted hover:text-fg transition-colors duration-200"
            >
              suhaibkhan830@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
