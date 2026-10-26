import { CONTACT_HREF, LINKEDIN_URL, GITHUB_URL } from '@/lib/site'

const links = [
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'GitHub',   href: GITHUB_URL,   external: true },
  { label: 'Mail',     href: CONTACT_HREF, external: false },
]

export default function Footer() {
  return (
    <footer className="px-6 pb-12 pt-10">
      <div className="mx-auto flex max-w-content flex-col justify-between gap-4 text-sm md:flex-row md:items-center">
        <p className="text-fg/70">© 2026 Weblicate · India to worldwide</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-fg/70 transition-colors duration-200 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
