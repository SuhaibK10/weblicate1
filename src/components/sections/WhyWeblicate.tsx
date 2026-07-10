import { FadeIn } from '@/components/animations/FadeIn'

const reasons = [
  {
    title: 'Engineer-led.',
    desc: 'You talk to the people who build. There is no one else.',
  },
  {
    title: 'Full capability.',
    desc: 'Strategy, design, engineering, AI — one team, no handoffs.',
  },
  {
    title: 'In production.',
    desc: 'Our work runs live across e-commerce, education, manufacturing, and consulting.',
  },
  {
    title: 'Aligned.',
    desc: 'We are hired for outcomes. Scope, timeline, and price agreed before anything starts.',
  },
]

export default function WhyWeblicate() {
  return (
    <div>
      <FadeIn>
        <p className="font-mono text-subtle uppercase mb-4" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}>
          (07) &nbsp;Why Weblicate
        </p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em' }}
        >
          Small by design.
        </h2>
      </FadeIn>

      <div className="mt-16 border-t border-border">
        {reasons.map((r, i) => (
          <FadeIn key={r.title} delay={i * 0.06}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-8 py-8 border-b border-border">
              <h3 className="text-xl font-bold text-fg">{r.title}</h3>
              <p className="text-muted leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                {r.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
