import { FadeIn } from '@/components/animations/FadeIn'
import { CONTACT_EMAIL, CONTACT_HREF, LINKEDIN_URL } from '@/lib/site'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 md:py-40">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[480px] w-[1000px] max-w-[160%] -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(47,176,168,0.14) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <FadeIn className="relative mx-auto flex max-w-content flex-col items-center text-center">
        <h2
          className="max-w-2xl font-normal text-fg text-balance"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
        >
          Tell us what you&apos;re trying to build.
        </h2>

        <p className="mt-5 max-w-lg text-lg leading-snug text-muted text-balance">
          A 20-minute conversation is enough to know if we can help. Scope,
          timeline, and price in writing within 48 hours.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={CONTACT_HREF} className="pill-solid">Start a conversation</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="pill px-6 py-3 text-[0.9375rem]">
            LinkedIn
          </a>
        </div>

        <a href={CONTACT_HREF} className="mt-8 text-sm text-subtle transition-colors duration-200 hover:text-fg">
          {CONTACT_EMAIL}
        </a>
      </FadeIn>
    </section>
  )
}
