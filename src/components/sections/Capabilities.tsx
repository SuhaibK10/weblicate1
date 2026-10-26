import { FadeIn } from '@/components/animations/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'

const capabilities = [
  {
    title: 'Digital Platforms',
    line: 'Software that becomes the way the company works.',
    items: ['Enterprise applications', 'Customer portals', 'Internal systems', 'SaaS products'],
  },
  {
    title: 'AI Systems',
    line: 'Intelligence embedded in operations, not bolted on.',
    items: ['AI agents', 'Workflow automation', 'Knowledge systems', 'Decision support'],
  },
  {
    title: 'Industry Software',
    line: 'Purpose-built for how each industry actually runs.',
    items: ['School & hospital systems', 'Restaurant operations', 'Retail & logistics platforms', 'Manufacturing software'],
  },
  {
    title: 'Product Engineering',
    line: 'The full stack, owned end to end.',
    items: ['Architecture', 'UX & frontend', 'Backend & APIs', 'Cloud & infrastructure'],
  },
  {
    title: 'Strategic Consulting',
    line: 'Deciding what to build is half the work.',
    items: ['Technology strategy', 'Digital transformation', 'Software architecture', 'AI adoption'],
  },
]

export default function Capabilities() {
  return (
    <div>
      <SectionTitle
        title="What we build"
        intro="A technology consultancy that designs and engineers the software organizations run on."
      />

      <div className="mt-10">
        {capabilities.map((cap, i) => (
          <FadeIn key={cap.title} delay={i * 0.05}>
            <div className="group flex flex-col gap-4 border-b border-border py-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <div>
                <h3 className="text-2xl font-light text-fg md:text-[1.625rem]">{cap.title}</h3>
                <p className="mt-1 text-sm text-subtle transition-colors duration-300 group-hover:text-muted">{cap.line}</p>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5 md:max-w-[50%] md:justify-end">
                {cap.items.map((item) => (
                  <li key={item} className="text-sm text-fg/75">{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
