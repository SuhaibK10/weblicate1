import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CONTACT_HREF } from '@/lib/site'

type System = {
  name: string
  line: string
  includes: string[]
  // The AI layer designed into this kind of system
  ai?: string
  // Only set where a live client build of the core system exists
  liveAt?: string
}

const systems: System[] = [
  {
    name: 'AI operations agents',
    line: 'Agents that take on repetitive work inside the tools your team already uses.',
    includes: ['Agentic workflows', 'LLM-powered tools', 'Knowledge systems', 'ML pipelines'],
  },
  {
    name: 'Commerce platform',
    line: 'Catalog, checkout, and inventory you own outright instead of renting.',
    includes: ['Catalog', 'Checkout & Razorpay payments', 'Inventory', 'Transactional email & analytics'],
    ai: 'Semantic search, recommendations, support agent',
    liveAt: 'Louis Polo',
  },
  {
    name: 'Booking operations',
    line: 'Turn visitors into residents or guests, with every enquiry tracked to the end.',
    includes: ['Virtual tours', 'Live availability', 'Enquiry-to-resident pipeline'],
    ai: 'Enquiry triage and instant first replies',
    liveAt: 'Aligarh Hostel',
  },
  {
    name: 'Academic platform',
    line: 'For schools, colleges, and coaching institutes, from one branch to many.',
    includes: ['Online tests & question banks', 'Courses, video lessons, quizzes', 'Student dashboards & progress', 'Batches & fee collection'],
    ai: 'Question generation, doubt-solving tutor',
  },
  {
    name: 'SMB ERP',
    line: 'One system for the operations that spreadsheets currently hold together.',
    includes: ['Inventory', 'Procurement', 'HR', 'Finance'],
    ai: 'Demand forecasting, document capture, reports in plain language',
  },
  {
    name: 'Clinic system',
    line: 'The parts of care patients never see, with data privacy treated as a requirement.',
    includes: ['Patient records', 'Appointment booking', 'Billing', 'Staff management'],
    ai: 'Intake summaries, smart scheduling',
  },
]

export default function Systems() {
  return (
    <div>
      <SectionHeader
        index="04"
        label="Systems"
        title="Systems we're asked for most."
        intro="Not templates. Starting points we know well, each with an AI layer designed in, adapted to how your organization actually runs."
      />

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-border bg-border md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {systems.map((s, i) => (
          <FadeIn key={s.name} delay={(i % 3) * 0.06} className="bg-bg">
            <div className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-surface md:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="label">SYS—{String(i + 1).padStart(2, '0')}</span>
                {s.liveAt && (
                  <span className="label flex items-center gap-2 text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                    Core live at {s.liveAt}
                  </span>
                )}
              </div>

              <h3 className="mt-10 text-2xl font-normal tracking-tight text-fg">{s.name}</h3>
              <p className="mt-2 leading-snug text-muted text-pretty">{s.line}</p>

              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-3 font-mono text-[0.75rem] text-fg/75">
                    <span className="text-subtle" aria-hidden="true">+</span>
                    {item}
                  </li>
                ))}
              </ul>

              {s.ai && (
                <div className="mt-5 rounded-[4px] border border-brand/25 bg-brand/[0.04] px-3 py-2.5">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-brand">AI layer</p>
                  <p className="mt-1 text-sm leading-snug text-fg/80">{s.ai}</p>
                </div>
              )}

              <a
                href={`${CONTACT_HREF}?subject=${encodeURIComponent(`Enquiry: ${s.name}`)}`}
                className="mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-subtle transition-colors duration-200 group-hover:text-fg"
              >
                Ask about this
                <ArrowRight size={13} strokeWidth={1.75} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand" />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
