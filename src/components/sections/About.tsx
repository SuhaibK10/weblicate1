import { SectionLabel } from '@/components/ui/SectionLabel'
import { FadeIn } from '@/components/animations/FadeIn'

const credentials = [
  { label: 'ML Intern',           org: 'IIT Jammu',               period: 'Jun – Aug 2025' },
  { label: 'Product Engineer',    org: 'Louis Polo',               period: 'Aug 2025 – Apr 2026' },
  { label: 'ML & Research Head',  org: 'FAAST FinTech Club, AMU',  period: 'Sep 2025 – Present' },
  { label: 'Quantum ML Research', org: 'Indo Quantum Summit',      period: '2024' },
  { label: 'Hackathon Winner',    org: 'AMU Hackathon',            period: '2024' },
  { label: 'Founder',             org: 'Weblicate',                period: 'Nov 2024 – Present' },
]

export default function About() {
  return (
    <div>
      <FadeIn>
        <SectionLabel text="(03 / About)" />
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 mt-8 items-start">
        {/* Left — pullquote + copy */}
        <FadeIn>
          <blockquote
            className="font-serif italic text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '2rem' }}
          >
            &ldquo;Built by a founder,
            <br />
            not an agency.&rdquo;
          </blockquote>

          <div className="font-sans text-ink-2 leading-[1.8] space-y-4" style={{ fontSize: '1.05rem' }}>
            <p>
              Weblicate was started in November 2024 by Suhaib Khan — a Computer Science student at
              Aligarh Muslim University and ML engineer. The mission: give startups access to serious
              engineering without agency overhead or junior freelancers.
            </p>
            <p>
              I&apos;ve shipped everything from B2C e-commerce platforms to RBI-aligned fraud
              detection systems. ML intern at IIT Jammu. Quantum ML research at the Indo Quantum
              Summit. AMU Hackathon winner. If it involves code or AI, I&apos;ve probably built it.
            </p>
          </div>

          <a
            href="https://linkedin.com/in/suhaibkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-ink mt-6 border-b border-transparent hover:border-ink transition-all duration-200"
            style={{ fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            View LinkedIn →
          </a>
        </FadeIn>

        {/* Right — credential timeline */}
        <FadeIn delay={0.12}>
          <div>
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="border-b border-rule py-4 flex justify-between items-baseline gap-4"
              >
                <div>
                  <p className="font-serif italic text-ink" style={{ fontSize: '1rem' }}>
                    {cred.label}
                  </p>
                  <p
                    className="font-mono text-ink-3 mt-0.5 uppercase tracking-widest"
                    style={{ fontSize: '0.58rem', letterSpacing: '0.1em' }}
                  >
                    {cred.org}
                  </p>
                </div>
                <span
                  className="font-mono text-ink-3 flex-shrink-0"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.06em' }}
                >
                  {cred.period}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
