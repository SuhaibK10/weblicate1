import { FadeIn } from '@/components/animations/FadeIn'
import { Globe, Brain, Rocket, Zap, LayoutGrid, GraduationCap, Stethoscope, ClipboardPlus } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: {
  icon: LucideIcon
  title: string
  desc: string
  items: string[]
}[] = [
  {
    icon: Globe,
    title: 'Web & E-Commerce',
    desc: 'Production-ready websites and stores. React, Next.js, Supabase. Deployed and fast.',
    items: ['Landing Pages', 'Full Websites', 'E-Commerce Stores', 'Shopify Builds'],
  },
  {
    icon: Brain,
    title: 'AI & ML Systems',
    desc: 'End-to-end ML pipelines, fraud detection, agentic systems. Built for deployment.',
    items: ['ML Pipelines', 'Fraud Detection', 'LLM Agents', 'Data Analytics'],
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    desc: 'From idea to deployed product. Full-stack MVPs for startups moving fast.',
    items: ['Full-Stack MVPs', 'API Development', 'Database Design', 'Fast Deployment'],
  },
  {
    icon: Zap,
    title: 'Automation',
    desc: 'Automate repetitive workflows with n8n and CrewAI. Scale without adding headcount.',
    items: ['n8n Workflows', 'CrewAI Agents', 'API Integration', 'Process Automation'],
  },
  {
    icon: LayoutGrid,
    title: 'ERP Systems',
    desc: 'Custom enterprise resource planning built around your actual workflows — not off-the-shelf software that costs a fortune to configure.',
    items: ['Inventory & Procurement', 'HR & Payroll', 'Finance & Reporting', 'Custom Workflows'],
  },
  {
    icon: GraduationCap,
    title: 'Academic Platforms',
    desc: 'Complete digital infrastructure for coaching institutes and schools. Tests, materials, student tracking — one system for everything.',
    items: ['Online Test Engine', 'Study Material Library', 'Student & Batch Dashboard', 'Fee Management'],
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Websites',
    desc: 'Professional websites for doctors, dieticians, and healthcare practitioners. Clean, trustworthy, and built to convert patient enquiries.',
    items: ["Doctor's Portfolio Site", 'Dietician Website', 'Appointment Booking', 'Patient Testimonials'],
  },
  {
    icon: ClipboardPlus,
    title: 'Clinic Management Systems',
    desc: 'Complete operational software for healthcare clinics — patient records, appointments, billing, staff, and reporting in one system.',
    items: ['Patient Records (EMR)', 'Appointment Scheduling', 'Billing & Invoicing', 'Staff & Inventory'],
  },
]

export default function Services() {
  return (
    <div>
      <FadeIn>
        <p className="text-xs text-muted uppercase tracking-widest mb-3">Services</p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          What We Build
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <FadeIn key={service.title} delay={i * 0.07}>
              <div className="bg-surface border border-border rounded-xl p-8 hover:border-border-hover transition-all duration-200">
                <div className="w-11 h-11 bg-accent-dim border border-border rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-fg" />
                </div>
                <h3 className="text-xl font-bold text-fg mt-5">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed mt-2">{service.desc}</p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </div>
  )
}
