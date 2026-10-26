import { FadeIn } from '@/components/animations/FadeIn'

const reasons = [
  {
    title: 'Engineer-led.',
    desc: 'You talk to the people who build. There is no one else.',
  },
  {
    title: 'Full capability.',
    desc: 'Strategy, design, engineering, AI. One team, no handoffs.',
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

const rings = [260, 460, 660, 860]

export default function WhyWeblicate() {
  return (
    <div className="relative overflow-x-clip py-16 md:py-28">
      {/* Concentric rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        {rings.map((size) => (
          <span
            key={size}
            className="absolute rounded-full border border-white/[0.05]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <FadeIn>
        <p className="relative text-center text-sm uppercase tracking-[0.16em] text-subtle">Small by design</p>
      </FadeIn>

      <div className="relative mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
        {reasons.map((r, i) => (
          <FadeIn key={r.title} delay={i * 0.08}>
            <div className="mx-auto max-w-[240px] text-center">
              <h3 className="text-2xl font-medium tracking-tight text-fg">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{r.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
