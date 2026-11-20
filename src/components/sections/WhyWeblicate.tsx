import { FadeIn } from '@/components/animations/FadeIn'

const reasons = [
  {
    title: 'ML-engineer-led.',
    desc: 'Founded by an ML engineer. You talk to the people who build. There is no one else.',
  },
  {
    title: 'Full capability.',
    desc: 'Strategy, design, engineering, AI. One team, no handoffs.',
  },
  {
    title: 'In production.',
    desc: 'Our work runs live across e-commerce, hospitality, manufacturing, and consulting.',
  },
  {
    title: 'Aligned.',
    desc: 'We are hired for outcomes. Scope, timeline, and price agreed before anything starts.',
  },
]

export default function WhyWeblicate() {
  return (
    <div className="relative overflow-hidden rounded-[6px] border border-border bg-surface">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative grid grid-cols-1 gap-12 p-6 md:grid-cols-12 md:gap-10 md:p-12">
        <FadeIn className="md:col-span-5">
          <p className="label">[ Why Weblicate ]</p>
          <h2
            className="mt-8 font-normal text-fg"
            style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.75rem)', lineHeight: 1.02, letterSpacing: '-0.03em' }}
          >
            Small by design.
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-snug text-muted">
            No account managers, no junior handoffs. The person you brief is the person who builds.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:col-span-7 md:pt-14">
          {reasons.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.06}>
              <div className="border-t border-border pt-5">
                <h3 className="text-xl font-normal tracking-tight text-fg">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{r.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
