'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
    title: 'Louis Polo',
    type: 'E-Commerce · Luggage Brand · D2C',
    desc: 'A ten-year-old luggage manufacturer became a direct-to-consumer brand. Catalog, checkout, and inventory built from zero. 2.47L+ products sold, with offices in Mumbai, London, and Hong Kong.',
    stack: ['Next.js', 'Supabase', 'Tailwind', 'Vercel', 'Vercel Analytics', 'Clarity', 'Resend', 'Razorpay'],
    image: 'https://image.thum.io/get/width/1200/crop/630/https://louispolo.in/store',
    link: 'https://louispolo.in/store',
    tint: '196,120,60',
    width: 'md:max-w-[900px]',
  },
  {
    id: '02',
    title: 'Aligarh Hostel',
    type: 'Hospitality · Student Housing · Web',
    desc: 'Student housing turned into a booking operation: virtual tours, live availability, and an enquiry-to-resident pipeline for the Khan Group of PG.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://image.thum.io/get/width/1200/crop/630/https://aligarhhostel.com',
    link: 'https://aligarhhostel.com',
    tint: '110,100,200',
    width: 'md:max-w-[960px]',
  },
  {
    id: '03',
    title: 'B&B Editorial',
    type: 'Manufacturing · B2B · Corporate Web',
    desc: "Thirty-five years of manufacturing made legible: 1,000+ brands across 13 industries, a full product catalog, and a 24-hour quote system for India's most trusted acrylic display manufacturer.",
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://image.thum.io/get/width/1200/crop/630/https://bba-editorial.vercel.app',
    link: 'https://bba-editorial.vercel.app',
    tint: '60,150,110',
    width: 'md:max-w-[1020px]',
  },
  {
    id: '04',
    title: 'Adilytics',
    type: 'Consulting · Sales & Distribution · Gifting',
    desc: 'A company site for a sales and distribution consultancy that helps D2C brands scale: six practice areas, a corporate gifting line, and a custom weekend booking calendar for discovery calls.',
    stack: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://image.thum.io/get/width/1200/crop/630/https://adilytics.vercel.app',
    link: 'https://adilytics.vercel.app',
    tint: '60,120,190',
    width: 'md:max-w-[880px]',
  },
]

type Project = (typeof projects)[number]

function CaseCard({ project }: { project: Project }) {
  return (
    <motion.article
      className={`mx-auto w-full ${project.width} overflow-hidden rounded-[28px] border border-white/[0.07]`}
      style={{
        background: `radial-gradient(ellipse 60% 70% at 85% 100%, rgba(${project.tint},0.16) 0%, transparent 70%),
                     linear-gradient(140deg, #101219 0%, #151823 55%, #0f1016 100%)`,
        boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
      }}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-[1fr_1.15fr] md:gap-10 md:p-10">
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.14em] text-subtle">{project.type}</p>
          <h3 className="mt-3 text-[1.75rem] font-light leading-tight text-fg">{project.title}</h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{project.desc}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => {
              const iconId = techIconId[tech]
              return (
                <span key={tech} className="flex items-center gap-1.5 rounded-md bg-white/[0.04] px-2 py-1 text-xs text-muted">
                  {iconId && <Icon icon={iconId} width={12} height={12} />}
                  {tech}
                </span>
              )
            })}
          </div>

          <div className="mt-8 md:mt-auto md:pt-8">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="pill group gap-1.5 text-sm">
                Visit site
                <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : (
              <span className="pill text-sm text-muted">Private, in production</span>
            )}
          </div>
        </div>

        <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.55)] md:self-center">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>
      </div>
    </motion.article>
  )
}

export default function Work() {
  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {projects.map((project) => (
        <CaseCard key={project.id} project={project} />
      ))}
    </div>
  )
}
