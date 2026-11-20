import { FadeIn } from '@/components/animations/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const steps = [
  {
    title: 'Conversation',
    time: '20 minutes',
    desc: "Tell us what you're trying to build. Twenty minutes is enough to know whether we can help.",
  },
  {
    title: 'Scope',
    time: 'Within 48 hours',
    desc: 'Scope, timeline, and price in writing, including where AI earns its place and where it does not.',
  },
  {
    title: 'Build',
    time: 'Weeks, not quarters',
    desc: 'Design, engineering, and AI happen together. Models are tested on your real data, and you see progress throughout.',
  },
  {
    title: 'Handover',
    time: 'Yours to keep',
    desc: 'Deployed, monitored, and fully yours: source, prompts, evals, docs, and a walkthrough. Post-launch support included.',
  },
]

export default function Process() {
  return (
    <div>
      <SectionHeader
        index="06"
        label="Process"
        title="From conversation to production."
        intro="One engagement model, four steps. Certainty up front so the work can move fast."
      />

      <ol className="relative mt-12 grid grid-cols-1 md:mt-16 md:grid-cols-4">
        {/* Track: vertical on mobile, horizontal on desktop */}
        <span className="absolute bottom-0 left-[3px] top-0 w-px bg-border md:hidden" aria-hidden="true" />
        <span className="absolute left-0 right-0 top-[3px] hidden h-px bg-border md:block" aria-hidden="true" />

        {steps.map((step, i) => (
          <li key={step.title} className="relative pb-10 pl-8 md:pb-0 md:pl-0 md:pr-8 md:pt-10">
            <span
              className="absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full border border-brand bg-bg md:top-0"
              aria-hidden="true"
            />
            <FadeIn delay={i * 0.08}>
              <p className="label">
                {String(i + 1).padStart(2, '0')} · <span className="text-brand">{step.time}</span>
              </p>
              <h3 className="mt-4 text-2xl font-normal tracking-tight text-fg md:mt-6">{step.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-muted text-pretty">{step.desc}</p>
            </FadeIn>
          </li>
        ))}
      </ol>
    </div>
  )
}
