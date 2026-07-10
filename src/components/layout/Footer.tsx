import { CONTACT_EMAIL, CONTACT_HREF, LINKEDIN_URL, GITHUB_URL } from '@/lib/site'

const columns = [
  {
    heading: 'Capabilities',
    links: [
      { label: 'Digital Platforms',   href: '#capabilities' },
      { label: 'AI Systems',          href: '#capabilities' },
      { label: 'Industry Software',   href: '#capabilities' },
      { label: 'Product Engineering', href: '#capabilities' },
      { label: 'Consulting',          href: '#capabilities' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Education',     href: '#industries' },
      { label: 'Healthcare',    href: '#industries' },
      { label: 'Retail',        href: '#industries' },
      { label: 'Manufacturing', href: '#industries' },
      { label: 'All industries', href: '#industries' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Work',       href: '#work' },
      { label: 'Philosophy', href: '#philosophy' },
      { label: 'Contact',    href: CONTACT_HREF },
      { label: 'LinkedIn',   href: LINKEDIN_URL, external: true },
      { label: 'GitHub',     href: GITHUB_URL, external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-20 pb-10">
      <div className="max-w-content mx-auto">
        {/* Wordmark */}
        <p
          className="font-extrabold text-fg select-none"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
        >
          Weblicate
        </p>
        <p className="font-serif italic text-muted mt-3" style={{ fontSize: '1.125rem' }}>
          The systems behind the business.
        </p>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-16 max-w-2xl">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-mono text-subtle uppercase mb-4" style={{ fontSize: '0.625rem', letterSpacing: '0.12em' }}>
                {col.heading}
              </p>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...('external' in link && link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="text-sm text-muted hover:text-fg transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-xs text-subtle">
            © 2026 Weblicate &nbsp;·&nbsp; India → Worldwide
          </p>
          <a href={CONTACT_HREF} className="font-mono text-xs text-muted hover:text-fg transition-colors duration-200">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
