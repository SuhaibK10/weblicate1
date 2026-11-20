import { FadeIn } from '@/components/animations/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const principles = [
  {
    title: 'Boring where it should be boring.',
    desc: 'Proven infrastructure, standard patterns, no experiments where reliability matters.',
  },
  {
    title: 'Fast is a feature.',
    desc: 'Weeks, not quarters. Momentum is part of the deliverable.',
  },
  {
    title: 'AI where it compounds.',
    desc: 'In operations, decisions, and workflows. Never as decoration.',
  },
  {
    title: 'You own what we ship.',
    desc: 'Source, prompts, evals, documentation. Model-agnostic, no hostage architecture.',
  },
]

export default function Philosophy() {
  return (
    <div>
      <SectionHeader
        index="07"
        label="Principles"
        title="How we build."
        intro="Four rules we hold ourselves to on every engagement, whatever the size."
      />

      <div className="mt-12 grid grid-cols-1 border-t border-border sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {principles.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.06} className="h-full">
            <div
              className={`h-full border-b border-border py-8 sm:px-6 lg:border-b-0 lg:py-10 ${
                i % 2 === 1 ? 'sm:border-l' : 'sm:pl-0'
              } ${i === 2 ? 'lg:border-l lg:pl-6' : ''}`}
            >
              <span className="font-mono text-5xl font-light tracking-tight text-fg/20 md:text-6xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-8 text-xl font-normal leading-snug tracking-tight text-fg text-balance">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
