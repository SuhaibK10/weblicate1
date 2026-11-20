import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { CONTACT_EMAIL, CONTACT_HREF, LINKEDIN_URL } from '@/lib/site'

const details = [
  { label: 'Email',    value: CONTACT_EMAIL,       href: CONTACT_HREF },
  { label: 'LinkedIn', value: 'Suhaib Khan',       href: LINKEDIN_URL, external: true },
  { label: 'Response', value: 'Scope, timeline & price in writing within 48 hours' },
  { label: 'Based',    value: 'India → Worldwide' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div className="bg-blueprint pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[1100px] max-w-[180%] -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse at center, rgba(47,176,168,0.12) 0%, transparent 62%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-6 py-24 md:py-36">
        <FadeIn>
          <p className="label">[ Start a conversation ]</p>
          <h2
            className="mt-8 max-w-[16ch] font-normal text-fg"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)', lineHeight: 0.98, letterSpacing: '-0.04em' }}
          >
            Tell us what you&apos;re trying to build.
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
          <FadeIn delay={0.1} className="md:col-span-6">
            <p className="max-w-md text-lg leading-snug text-muted md:text-xl">
              A 20-minute conversation is enough to know if we can help. No pitch deck, no
              obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONTACT_HREF} className="btn-primary group">
                Start a conversation
                <ArrowRight size={14} strokeWidth={1.75} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn
                <ArrowUpRight size={14} strokeWidth={1.75} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="md:col-span-5 md:col-start-8">
            <dl className="border-b border-border">
              {details.map((d) => (
                <div key={d.label} className="grid grid-cols-[6rem_1fr] gap-4 border-t border-border py-4">
                  <dt className="label pt-0.5">{d.label}</dt>
                  <dd className="text-fg/85">
                    {d.href ? (
                      <a
                        href={d.href}
                        {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="link-draw"
                      >
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
