import { FadeIn } from '@/components/animations/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'

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
    desc: 'Source, documentation, understanding. No hostage architecture.',
  },
]

export default function Philosophy() {
  return (
    <div>
      <SectionTitle title="How we build" />

      <div className="mt-8">
        {principles.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.06}>
            <div className="flex flex-col gap-2 border-b border-border py-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <h3 className="text-xl font-light text-fg/90">{p.title}</h3>
              <p className="text-sm leading-relaxed text-subtle md:max-w-xs md:text-right">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
