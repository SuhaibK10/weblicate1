import { FadeIn } from '@/components/animations/FadeIn'

const steps = [
  {
    number: '01',
    title: 'Strategy & Research',
    desc: 'We map your goals, audience, and competitive landscape before writing a line of code.',
  },
  {
    number: '02',
    title: 'Design & Development',
    desc: 'Design and engineering in parallel. You see real progress from day one, not the last day.',
  },
  {
    number: '03',
    title: 'Launch & Optimise',
    desc: 'Deployed, tested, and handed over with documentation. Post-launch support included.',
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
          Simple. Strategic. Seamless.
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
