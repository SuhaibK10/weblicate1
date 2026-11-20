import { FadeIn } from '@/components/animations/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

// "AI-native" only means something if we say what it changes. Each row contrasts
// the common bolted-on approach with how we build.
const rows = [
  {
    dimension: 'Architecture',
    bolted: 'AI added as a feature after launch, wherever it happens to fit.',
    native: 'Data, workflows, and interfaces designed for models and agents from the first commit.',
  },
  {
    dimension: 'Placement',
    bolted: 'A chatbot on the homepage.',
    native: 'AI inside operations: triage, extraction, forecasting, decisions. Where it compounds.',
  },
  {
    dimension: 'Quality',
    bolted: 'A demo that worked once.',
    native: 'Evaluated against your real data before launch, monitored in production after.',
  },
  {
    dimension: 'Ownership',
    bolted: "Locked to one vendor's model and pricing.",
    native: 'Model-agnostic. Swap providers as prices and capabilities move. Prompts, evals, and code are yours.',
  },
  {
    dimension: 'Judgment',
    bolted: 'Automation that removes people from decisions.',
    native: 'Humans in the loop wherever the stakes are high.',
  },
]

export default function AINative() {
  return (
    <div>
      <SectionHeader
        index="01"
        label="AI-native"
        title="AI-native, defined."
        intro="Every firm says AI now. Here is what it actually changes in how we build."
      />

      <div className="mt-12 md:mt-16">
        {/* Column headings, desktop only */}
        <div className="hidden grid-cols-12 gap-10 pb-4 md:grid">
          <p className="label col-span-3">Dimension</p>
          <p className="label col-span-4">Bolted-on AI</p>
          <p className="label col-span-5 flex items-center gap-2 text-fg/85">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            AI-native, how we build
          </p>
        </div>

        <div className="border-b border-border">
          {rows.map((row, i) => (
            <FadeIn key={row.dimension} delay={i * 0.04}>
              <div className="group relative grid grid-cols-1 gap-3 border-t border-border py-7 md:grid-cols-12 md:gap-10 md:py-8">
                <span
                  className="absolute left-0 top-[-1px] h-px w-0 bg-brand transition-[width] duration-700 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
                <p className="flex items-baseline gap-4 md:col-span-3">
                  <span className="label">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-xl font-normal tracking-tight text-fg">{row.dimension}</span>
                </p>

                {/* On mobile the AI-native answer comes first, the contrast second */}
                <p className="order-3 flex gap-3 text-sm leading-relaxed text-subtle md:order-none md:col-span-4 md:text-base">
                  <span className="font-mono" aria-hidden="true">−</span>
                  <span>
                    <span className="sr-only">Bolted-on AI: </span>
                    {row.bolted}
                  </span>
                </p>
                <p className="flex gap-3 leading-relaxed text-fg/90 md:col-span-5">
                  <span className="font-mono text-brand" aria-hidden="true">+</span>
                  <span>
                    <span className="sr-only">AI-native: </span>
                    {row.native}
                  </span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
