'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'
import { ArrowUpRight } from 'lucide-react'
import { Icon } from '@iconify/react'

const techIconId: Record<string, string> = {
  'Next.js':          'logos:nextjs-icon',
  'Supabase':         'logos:supabase-icon',
  'Tailwind':         'logos:tailwind-css-icon',
  'Vercel':           'logos:vercel-icon',
  'Vercel Analytics': 'logos:vercel-icon',
  'Clarity':          'ri:microsoft-fill',
  'Resend':           'simple-icons:resend',
  'Razorpay':         'simple-icons:razorpay',
}

const projects = [
  {
    id: '01',
    initials: 'LP',
    logoUrl: '/logos/louispolo.svg',
    title: 'Louis Polo',
    type: 'E-Commerce · Luggage Brand · D2C',
    tagline: 'Premium luggage, direct to consumer',
    desc: 'A ten-year-old luggage manufacturer became a direct-to-consumer brand. Catalog, checkout, and inventory built from zero. 2.47L+ products sold, with offices in Mumbai, London, and Hong Kong.',
    stack: ['Next.js', 'Supabase', 'Tailwind', 'Vercel', 'Vercel Analytics', 'Clarity', 'Resend', 'Razorpay'],
    image: 'https://image.thum.io/get/width/1200/crop/630/https://louispolo.in/store',
    link: 'https://louispolo.in/store',
    featured: true,
  },
  {
    id: '02',
    initials: 'AH',
    logoUrl: '/logos/aligarhhostel.png',
    title: 'Aligarh Hostel',
    type: 'Hospitality · Student Housing · Web',
    tagline: 'Premium student housing, Aligarh',
    desc: 'Student housing turned into a booking operation: virtual tours, live availability, and an enquiry-to-resident pipeline for the Khan Group of PG.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://image.thum.io/get/width/1200/crop/630/https://aligarhhostel.com',
    link: 'https://aligarhhostel.com',
    featured: false,
  },
  {
    id: '03',
    initials: 'B&B',
    logoUrl: null,
    title: 'B&B Editorial',
    type: 'Manufacturing · B2B · Corporate Web',
    tagline: "India's most trusted acrylic manufacturer",
    desc: "Thirty-five years of manufacturing made legible: 1,000+ brands across 13 industries, a full product catalog, and a 24-hour quote system for India's most trusted acrylic display manufacturer.",
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://image.thum.io/get/width/1200/crop/630/https://bba-editorial.vercel.app',
    link: 'https://bba-editorial.vercel.app',
    featured: false,
  },
  {
    id: '04',
    initials: 'AC',
    logoUrl: null,
    title: 'Adilytics Consulting',
    type: 'Consulting · Data Analytics · Web',
    tagline: 'Analytics & business consulting firm',
    desc: 'Enterprise credibility for a data consultancy, engineered to convert: service architecture, credibility signals, and a structured lead pipeline.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://images.pexels.com/photos/8068691/pexels-photo-8068691.jpeg?auto=compress&cs=tinysrgb&w=900',
    link: null,
    featured: true,
  },
]

interface Project {
  id: string
  initials: string
  logoUrl: string | null
  title: string
  type: string
  tagline: string
  desc: string
  stack: string[]
  image: string
  link: string | null
  featured: boolean
}

function ProjectCard({ project, imageHeight }: { project: Project; imageHeight: string }) {
  return (
    <motion.div
      className="group relative bg-surface border border-border rounded-2xl overflow-hidden flex flex-col h-full"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ borderColor: 'rgba(255,255,255,0.13)' }}
    >
      {/* Photo panel */}
      <div className={`relative ${imageHeight} overflow-hidden flex-shrink-0 bg-[#0a0a0a]`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {/* Top row: id + Live badge */}
        <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
          <span className="text-xs font-mono text-white/40">{project.id}</span>
          <span className="text-xs font-mono text-white/60 border border-white/20 rounded px-2.5 py-0.5">
            In production
          </span>
        </div>

        {/* Brand badge: real logo or monogram fallback */}
        <div className="absolute bottom-5 left-5 flex items-end gap-3">
          <div
            className="rounded-xl flex items-center justify-center flex-shrink-0 px-4"
            style={{
              background: 'rgba(0,0,0,0.55)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
              height: '48px',
              minWidth: '3rem',
            }}
          >
            {project.logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.logoUrl}
                alt={project.title}
                style={{ maxHeight: '32px', maxWidth: '110px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            ) : (
              <span className="text-xs font-bold text-white tracking-widest">{project.initials}</span>
            )}
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-tight drop-shadow-md">{project.title}</p>
            <p className="text-white/55 text-xs mt-0.5">{project.tagline}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-muted uppercase tracking-wider">{project.type}</p>
        <p className="text-sm text-muted leading-relaxed mt-3 flex-1">{project.desc}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.stack.map((tech) => {
            const iconId = techIconId[tech]
            return (
              <span
                key={tech}
                className="flex items-center gap-1.5 text-xs text-muted border border-border bg-accent-dim rounded-md px-2 py-1"
              >
                {iconId && <Icon icon={iconId} width={14} height={14} />}
                {tech}
              </span>
            )
          })}
        </div>

        {/* CTA */}
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-fg/60 hover:text-fg mt-5 transition-colors duration-200 self-start group/link"
          >
            Visit site
            <ArrowUpRight
              size={13}
              className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        ) : (
          <p className="text-xs font-mono text-subtle mt-5">In production — private</p>
        )}
      </div>
    </motion.div>
  )
}

export default function Work() {

  return (
    <div>
      <FadeIn>
        <p className="font-mono text-subtle uppercase mb-4" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}>
          (05) &nbsp;Selected Work
        </p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em' }}
        >
          Systems in production.
        </h2>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.08}>
            <ProjectCard project={project} imageHeight="h-64" />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
