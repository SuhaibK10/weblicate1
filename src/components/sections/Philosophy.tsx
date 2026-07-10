import { FadeIn } from '@/components/animations/FadeIn'

const principles = [
  {
    index: '01',
    title: 'Boring where it should be boring.',
    desc: 'Proven infrastructure, standard patterns, no experiments where reliability matters.',
  },
  {
    index: '02',
    title: 'Fast is a feature.',
    desc: 'Weeks, not quarters. Momentum is part of the deliverable.',
  },
  {
    index: '03',
    title: 'AI where it compounds.',
    desc: 'In operations, decisions, and workflows — never as decoration.',
  },
  {
    index: '04',
    title: 'You own what we ship.',
    desc: 'Source, documentation, understanding. No hostage architecture.',
  },
]

export default function Philosophy() {
  return (
    <div>
      <FadeIn>
        <p className="font-mono text-subtle uppercase mb-4" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}>
          (06) &nbsp;Philosophy
        </p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em' }}
        >
          How we build.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 mt-16 max-w-4xl">
        {principles.map((p, i) => (
          <FadeIn key={p.index} delay={i * 0.08}>
            <div>
              <span className="font-mono text-subtle text-xs">{p.index}</span>
              <h3 className="text-xl font-bold text-fg mt-3">{p.title}</h3>
              <p className="text-muted leading-relaxed mt-2" style={{ fontSize: '1rem' }}>
                {p.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
