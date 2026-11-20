import { FadeIn } from '@/components/animations/FadeIn'

// Every figure here is either a shipped result or a commitment we already make in writing.
const facts = [
  { value: '4',      label: 'Client systems live in production today' },
  { value: '48h',    label: 'Scope, timeline, and price in writing after the first call' },
  { value: '3–6 wk', label: 'Typical build for an MVP or AI system' },
  { value: '100%',   label: 'Of the source code is yours. No hostage architecture.' },
]

export default function Mission() {
  return (
    <div>
      <FadeIn>
        <div className="flex items-center gap-4">
          <p className="label whitespace-nowrap">[ Why we exist ]</p>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <p
          className="mt-10 max-w-[22ch] font-normal text-subtle md:mt-14 md:max-w-[28ch]"
          style={{ fontSize: 'clamp(1.75rem, 3.6vw, 3rem)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
        >
          <span className="text-fg">Most organizations run on software that was never built for them.</span>{' '}
          Spreadsheets doing the work of systems. Tools stitched together by habit.{' '}
          <span className="text-fg">
            We replace that with AI-native systems designed around how a business actually operates.
          </span>
        </p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-2 border-t border-border md:mt-24 md:grid-cols-4">
        {facts.map((f, i) => (
          <FadeIn key={f.value} delay={i * 0.06}>
            <div
              className={`h-full border-border py-7 pr-4 md:px-6 md:py-8 ${
                i % 2 === 1 ? 'border-l pl-4' : ''
              } ${i >= 2 ? 'border-t md:border-t-0' : ''} ${i === 2 ? 'md:border-l' : ''} ${i === 0 ? 'md:pl-0' : ''}`}
            >
              <p className="font-mono text-3xl font-normal tracking-tight text-fg md:text-4xl">{f.value}</p>
              <p className="mt-3 max-w-[22ch] text-sm leading-snug text-muted">{f.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
