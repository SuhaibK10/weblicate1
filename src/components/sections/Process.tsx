import { FadeIn } from '@/components/animations/FadeIn'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: '15 minutes is enough. We agree on scope, timeline, and price upfront. Nothing starts until everything is clear.',
  },
  {
    number: '02',
    title: 'Build',
    desc: 'Design and code happen together. You get regular updates throughout, not a big reveal on the last day.',
  },
  {
    number: '03',
    title: 'Ship & Support',
    desc: 'Deployed, tested, and fully yours. Every project includes post-launch support. No handoff chaos.',
  },
]

export default function Process() {
  return (
    <div>
      <FadeIn>
        <p className="text-xs text-muted uppercase tracking-widest mb-3">Process</p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          How a project runs.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {steps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.1}>
            <div>
              <div
                className="font-extrabold leading-none select-none text-subtle"
                style={{ fontSize: '6rem' }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-fg mt-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed mt-2">{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
