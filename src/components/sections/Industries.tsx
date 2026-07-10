import { FadeIn } from '@/components/animations/FadeIn'

const industries = [
  { name: 'Education',             line: 'Institutes run on paper and patience. We build the systems that run them instead.' },
  { name: 'Healthcare',            line: 'Records, scheduling, billing — the parts of care that patients never see, done right.' },
  { name: 'Retail',                line: 'From shelf to checkout to warehouse, one system that knows where everything is.' },
  { name: 'Finance',               line: 'Software where correctness is not a feature. It is the product.' },
  { name: 'Manufacturing',         line: 'Production, procurement, and inventory — visible for the first time.' },
  { name: 'Hospitality',           line: 'Operations that move as fast as the service is supposed to.' },
  { name: 'Logistics',             line: 'Every shipment, every handoff, accounted for.' },
  { name: 'Public Sector',         line: 'Systems built for scale, scrutiny, and decades of use.' },
  { name: 'Professional Services', line: 'Client work is a pipeline. We make it one.' },
]

export default function Industries() {
  return (
    <div>
      <FadeIn>
        <p className="font-mono text-subtle uppercase mb-4" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}>
          (04) &nbsp;Industries
        </p>
        <h2
          className="font-extrabold text-fg max-w-3xl"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: 1.02 }}
        >
          Every industry runs on operations. We build for them.
        </h2>
      </FadeIn>

      {/* Desktop: 3-col grid. Mobile: horizontal snap-scroll. */}
      <div className="mt-16 flex md:grid md:grid-cols-3 gap-px bg-border border border-border overflow-x-auto md:overflow-visible snap-x snap-mandatory">
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            className="bg-bg p-8 min-w-[80vw] md:min-w-0 snap-start flex flex-col min-h-[13rem]"
          >
            <span className="font-mono text-subtle text-xs">
              {String(i + 1).padStart(2, '0')} / 09
            </span>
            <h3 className="text-xl font-bold text-fg mt-4">{ind.name}</h3>
            <p className="text-sm text-muted leading-relaxed mt-2">{ind.line}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
