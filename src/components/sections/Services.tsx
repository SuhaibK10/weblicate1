import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import {
  Globe, Brain, Rocket, Zap, LayoutGrid,
  GraduationCap, Stethoscope, ClipboardPlus, BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: {
  icon: LucideIcon
  title: string
  desc: string
  items: string[]
  image: string
}[] = [
  {
    icon: Globe,
    title: 'Web & E-Commerce',
    desc: 'Production-ready websites and stores. React, Next.js, Supabase. Deployed and fast.',
    items: ['Landing Pages', 'Full Websites', 'E-Commerce Stores', 'Shopify Builds'],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Brain,
    title: 'AI & ML Systems',
    desc: 'End-to-end ML pipelines, fraud detection, agentic systems. Built for deployment.',
    items: ['ML Pipelines', 'Fraud Detection', 'LLM Agents', 'Data Analytics'],
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    desc: 'From idea to deployed product. Full-stack MVPs for startups moving fast.',
    items: ['Full-Stack MVPs', 'API Development', 'Database Design', 'Fast Deployment'],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Zap,
    title: 'Automation',
    desc: 'Automate repetitive workflows with n8n and CrewAI. Scale without adding headcount.',
    items: ['n8n Workflows', 'CrewAI Agents', 'API Integration', 'Process Automation'],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: LayoutGrid,
    title: 'ERP Systems',
    desc: 'Custom enterprise resource planning built around your actual workflows, not off-the-shelf software.',
    items: ['Inventory & Procurement', 'HR & Payroll', 'Finance & Reporting', 'Custom Workflows'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: BookOpen,
    title: 'LMS for Educational Institutes',
    desc: 'Full Learning Management Systems for schools, colleges, and online academies. Fully branded to your institution.',
    items: ['Course & Video Lessons', 'Quizzes & Assignments', 'Student Progress Tracking', 'Certificates & Fee Management'],
    image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: GraduationCap,
    title: 'Academic Platforms',
    desc: 'Complete digital infrastructure for coaching institutes and schools. Tests, Study Materials, Video Lectures, Student tracking -  One system.',
    items: ['Online Test Engine', 'Study Material Library', 'Student & Batch Dashboard', 'Fee Management'],
    image: 'https://images.pexels.com/photos/3231358/pexels-photo-3231358.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Websites',
    desc: 'Professional websites for doctors, dieticians, and practitioners. Clean, trustworthy, built to convert enquiries.',
    items: ["Doctor's Portfolio Site", 'Dietician Website', 'Appointment Booking', 'Patient Testimonials'],
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: ClipboardPlus,
    title: 'Clinic Management Systems',
    desc: 'Complete operational software for clinics: patient records, appointments, billing, staff, and reporting.',
    items: ['Patient Records (EMR)', 'Appointment Scheduling', 'Billing & Invoicing', 'Staff & Inventory'],
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
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
            <FadeIn key={service.title} delay={i * 0.06}>
              <div className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-border-hover transition-colors duration-300 flex flex-col h-full">

                {/* Photo header */}
                <div className="relative h-44 overflow-hidden bg-[#0a0a0a] flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-[0.80] group-hover:opacity-[0.90] group-hover:scale-105 transition-all duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient fades photo into card bg */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, var(--color-surface) 100%)',
                    }}
                  />
                  {/* Icon badge, bottom-left */}
                  <div className="absolute bottom-4 left-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <Icon size={20} className="text-fg" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-fg">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mt-2">{service.desc}</p>
                  <ul className="mt-5 space-y-2 flex-1">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                        <span className="w-1 h-1 rounded-full bg-muted flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </FadeIn>
          )
        })}
      </div>
    </div>
  )
}
