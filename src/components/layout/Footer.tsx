import Image from 'next/image'
import { CONTACT_EMAIL, CONTACT_HREF, LINKEDIN_URL, GITHUB_URL } from '@/lib/site'
import { capabilities, industries, DESCRIPTION, TAGLINE } from '@/lib/content'

type FooterLink = { label: string; href: string; external?: boolean }

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Capabilities',
    links: capabilities.map((c) => ({ label: c.title, href: `/#cap-${c.slug}` })),
  },
  {
    title: 'Industries',
    links: [
      ...industries.slice(0, 5).map((ind) => ({ label: ind.name, href: '/#industries' })),
      { label: `+${industries.length - 5} more`, href: '/#industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Work',      href: '/#work' },
      { label: 'Systems',   href: '/#systems' },
      { label: 'Process',   href: '/#process' },
      { label: 'Principles', href: '/#philosophy' },
      { label: 'FAQ',       href: '/#faq' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Email',    href: CONTACT_HREF },
      { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
      { label: 'GitHub',   href: GITHUB_URL,   external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-content px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <Image src="/mark.png" alt="" width={24} height={24} />
              <span className="text-[0.9375rem] font-medium tracking-tight text-fg">Weblicate</span>
            </div>
            <p className="mt-5 max-w-xs leading-relaxed text-muted">{DESCRIPTION}</p>
            <a href={CONTACT_HREF} className="link-draw mt-6 font-mono text-sm">
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 md:col-span-8" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="label">{col.title}</p>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-sm text-fg/70 transition-colors duration-200 hover:text-fg"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between md:mt-24">
          <p className="label">© {new Date().getFullYear()} Weblicate · India → Worldwide</p>
          <p className="label">{TAGLINE}</p>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the page edge */}
      <div className="pointer-events-none select-none" aria-hidden="true">
        <p
          className="-mb-[0.22em] text-center font-medium leading-none tracking-[-0.06em]"
          style={{
            fontSize: 'clamp(4.5rem, 21vw, 19rem)',
            background: 'linear-gradient(to bottom, rgba(237,238,240,0.10), rgba(237,238,240,0))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Weblicate
        </p>
      </div>
    </footer>
  )
}
