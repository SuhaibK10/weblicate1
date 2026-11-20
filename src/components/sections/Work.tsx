'use client'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Icon } from '@iconify/react'
import { FadeIn } from '@/components/animations/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CONTACT_HREF } from '@/lib/site'

const techIconId: Record<string, string> = {
  // Monochrome marks use currentColor so they stay visible on the dark tags
  'Next.js':          'simple-icons:nextdotjs',
  'Supabase':         'logos:supabase-icon',
  'Tailwind':         'logos:tailwind-css-icon',
  'Vercel':           'simple-icons:vercel',
  'Vercel Analytics': 'simple-icons:vercel',
  'Clarity':          'ri:microsoft-fill',
  'Resend':           'simple-icons:resend',
  'Razorpay':         'simple-icons:razorpay',
}

type Project = {
  id: string
  client: string
  sector: string
  headline: string
  desc: string
  metric?: { value: string; label: string }
  stack: string[]
  image: string
  link?: string
}

// Outcome first: the headline says what changed for the business, not what we made.
const projects: Project[] = [
  {
    id: '01',
    client: 'Louis Polo',
    sector: 'E-commerce · D2C',
    headline: 'From luggage manufacturer to direct-to-consumer brand.',
    desc: 'A ten-year-old manufacturer with offices in Mumbai, London, and Hong Kong now sells direct. Catalog, checkout, and inventory, built from zero.',
    metric: { value: '2.47L+', label: 'Products sold' },
    stack: ['Next.js', 'Supabase', 'Tailwind', 'Vercel', 'Vercel Analytics', 'Clarity', 'Resend', 'Razorpay'],
    image: 'https://image.thum.io/get/width/1200/crop/750/https://louispolo.in/store',
    link: 'https://louispolo.in/store',
  },
  {
    id: '02',
    client: 'B&B Editorial',
    sector: 'Manufacturing · B2B',
    headline: 'Thirty-five years of manufacturing, made legible.',
    desc: "A full product catalog and a 24-hour quote system for India's most trusted acrylic display manufacturer.",
    metric: { value: '1,000+', label: 'Brands across 13 industries' },
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://image.thum.io/get/width/1200/crop/750/https://bba-editorial.vercel.app',
    link: 'https://bba-editorial.vercel.app',
  },
  {
    id: '03',
    client: 'Aligarh Hostel',
    sector: 'Hospitality · Student housing',
    headline: 'Student housing, run as a booking operation.',
    desc: 'Virtual tours, live availability, and an enquiry-to-resident pipeline for the Khan Group of PG.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://image.thum.io/get/width/1200/crop/750/https://aligarhhostel.com',
    link: 'https://aligarhhostel.com',
  },
  {
    id: '04',
    client: 'Adilytics',
    sector: 'Consulting · Sales & distribution',
    headline: 'A consultancy site engineered to book discovery calls.',
    desc: 'Six practice areas for a firm that helps D2C brands scale, a corporate gifting line, and a custom weekend booking calendar.',
    metric: { value: '6', label: 'Practice areas, one booking flow' },
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://image.thum.io/get/width/1200/crop/750/https://adilytics.vercel.app',
    link: 'https://adilytics.vercel.app',
  },
]

function Screenshot({ project }: { project: Project }) {
  const host = project.link ? new URL(project.link).host : 'private'
  const frame = (
    <div className="overflow-hidden rounded-[6px] border border-border bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
      <div className="flex h-8 items-center gap-3 border-b border-border px-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </span>
        <span className="truncate font-mono text-[0.6875rem] text-subtle">{host}</span>
      </div>
      <div className="relative aspect-[16/10] bg-bg">
        <Image
          src={project.image}
          alt={`${project.client} website`}
          fill
          className="object-cover object-top brightness-[0.85] grayscale-[30%] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-100 group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 680px"
        />
      </div>
    </div>
  )

  return project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block" tabIndex={-1} aria-hidden="true">
      {frame}
    </a>
  ) : (
    <div className="group">{frame}</div>
  )
}

function CaseRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <FadeIn>
      <article className="grid grid-cols-1 gap-10 border-t border-border py-12 md:grid-cols-12 md:gap-12 md:py-16">
        <div className={`flex flex-col md:col-span-5 ${flip ? 'md:order-2' : ''}`}>
          <div className="flex items-center justify-between gap-4">
            <p className="label">
              {project.id} — <span className="text-fg/80">{project.client}</span>
            </p>
            <p className="label text-right">{project.sector}</p>
          </div>

          <h3
            className="mt-6 font-normal text-fg text-balance"
            style={{ fontSize: 'clamp(1.625rem, 2.6vw, 2.125rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
          >
            {project.headline}
          </h3>
          <p className="mt-4 leading-relaxed text-muted text-pretty">{project.desc}</p>

          {project.metric && (
            <div className="mt-8 flex items-baseline gap-4 border-l border-brand/60 pl-4">
              <span className="font-mono text-3xl tracking-tight text-fg">{project.metric.value}</span>
              <span className="text-sm text-muted">{project.metric.label}</span>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => {
              const iconId = techIconId[tech]
              return (
                <span key={tech} className="tag gap-1.5 normal-case tracking-normal">
                  {iconId && <Icon icon={iconId} width={11} height={11} />}
                  {tech}
                </span>
              )
            })}
          </div>

          <div className="mt-10">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw group font-mono text-[0.75rem] uppercase tracking-[0.1em]"
              >
                Visit live site
                <ArrowUpRight size={14} strokeWidth={1.75} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : (
              <span className="label">In production — private</span>
            )}
          </div>
        </div>

        <div className={`md:col-span-7 md:self-center ${flip ? 'md:order-1' : ''}`}>
          <Screenshot project={project} />
        </div>
      </article>
    </FadeIn>
  )
}

export default function Work() {
  return (
    <div>
      <SectionHeader
        index="02"
        label="Selected work"
        title="Systems in production."
        intro="Every project here is live and running a real business today. Outcome first, stack second."
      >
        <a href={CONTACT_HREF} className="link-draw mt-5 font-mono text-[0.75rem] uppercase tracking-[0.1em]">
          Discuss a similar build <ArrowRight size={13} strokeWidth={1.75} />
        </a>
      </SectionHeader>

      <div className="mt-12 md:mt-16">
        {projects.map((project, i) => (
          <CaseRow key={project.id} project={project} flip={i % 2 === 1} />
        ))}
        <div className="border-t border-border" />
      </div>
    </div>
  )
}
