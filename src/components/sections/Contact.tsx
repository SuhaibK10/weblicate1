import { FadeIn } from '@/components/animations/FadeIn'
import { CONTACT_EMAIL, CONTACT_HREF, LINKEDIN_URL } from '@/lib/site'

export default function Contact() {
  return (
    <section className="relative py-40 px-6 border-t border-border bg-surface overflow-hidden">
      <div className="max-w-content mx-auto">
        <FadeIn>
          <p className="font-mono text-subtle uppercase mb-8" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}>
            (08) &nbsp;Contact
          </p>

          <h2
            className="font-extrabold text-fg max-w-4xl"
            style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)', lineHeight: 0.98, letterSpacing: '-0.02em' }}
          >
            Tell us what you&apos;re trying to build.
          </h2>

          <p className="text-muted max-w-lg mt-8 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
            A 20-minute conversation is enough to know if we can help. Scope,
            timeline, and price in writing within 48 hours.
          </p>

          <div className="flex items-center gap-4 mt-12 flex-wrap">
            <a
              href={CONTACT_HREF}
              className="bg-fg text-bg font-semibold text-base rounded px-7 py-3.5 hover:opacity-85 transition-opacity duration-200"
            >
              Start a conversation
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-fg font-medium text-base rounded px-7 py-3.5 hover:border-border-hover transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>

          <p className="font-mono text-subtle text-xs mt-10 tracking-wide">{CONTACT_EMAIL}</p>
        </FadeIn>
      </div>
    </section>
  )
}
