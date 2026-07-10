import { FadeIn } from '@/components/animations/FadeIn'

const capabilities = [
  {
    index: '01',
    title: 'Digital Platforms',
    line: 'Software that becomes the way the company works.',
    items: ['Enterprise applications', 'Customer portals', 'Internal systems', 'SaaS products'],
  },
  {
    index: '02',
    title: 'AI Systems',
    line: 'Intelligence embedded in operations — not bolted on.',
    items: ['AI agents', 'Workflow automation', 'Knowledge systems', 'Decision support'],
  },
  {
    index: '03',
    title: 'Industry Software',
    line: 'Purpose-built for how each industry actually runs.',
    items: ['School & hospital systems', 'Restaurant operations', 'Retail & logistics platforms', 'Manufacturing software'],
  },
  {
    index: '04',
    title: 'Product Engineering',
    line: 'The full stack, owned end to end.',
    items: ['Architecture', 'UX & frontend', 'Backend & APIs', 'Cloud & infrastructure'],
  },
  {
    index: '05',
    title: 'Strategic Consulting',
    line: 'Deciding what to build is half the work.',
    items: ['Technology strategy', 'Digital transformation', 'Software architecture', 'AI adoption'],
  },
]

export default function Capabilities() {
  return (
    <div>
      <FadeIn>
        <p className="font-mono text-subtle uppercase mb-4" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}>
          (03) &nbsp;Capabilities
        </p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em' }}
        >
          What we build.
        </h2>
      </FadeIn>

      <div className="mt-16 border-t border-border">
        {capabilities.map((cap, i) => (
          <FadeIn key={cap.index} delay={i * 0.06}>
            <div className="group grid grid-cols-1 md:grid-cols-[4rem_1fr_1fr] gap-4 md:gap-8 py-10 border-b border-border hover:bg-accent-dim transition-colors duration-300 md:px-4 md:-mx-4">
              <span className="font-mono text-subtle text-sm pt-1.5">{cap.index}</span>
              <div>
                <h3 className="text-2xl font-bold text-fg">{cap.title}</h3>
                <p className="font-serif italic text-muted mt-2" style={{ fontSize: '1.0625rem' }}>
                  {cap.line}
                </p>
              </div>
              <ul className="space-y-1.5 md:pt-1.5">
                {cap.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
