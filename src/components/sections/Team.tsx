'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeIn } from '@/components/animations/FadeIn'
import { Code2, Globe, Palette } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Member {
  id: string
  initials: string
  name: string
  role: string
  focus: string
  bio: string
  image: string
  Icon: LucideIcon
  g0: string
  g1: string
  linkedin: string | null
}

const members: Member[] = [
  {
    id: 'sk',
    initials: 'SK',
    name: 'Suhaib Khan',
    role: 'Founder',
    focus: 'Engineering & AI',
    bio: 'CS student at AMU and ML engineer. Builds websites, AI systems, and MVPs end-to-end. ML intern at IIT Jammu. Hackathon winner. Ships fast.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    Icon: Code2,
    g0: '#14b8a6',
    g1: '#3b82f6',
    linkedin: 'https://linkedin.com/in/suhaibkhan',
  },
  {
    id: 'ja',
    initials: 'JA',
    name: 'Jamal Ahmad',
    role: 'UAE & KSA Head',
    focus: 'Middle East Operations',
    bio: 'Leads client relationships and business development across the UAE and Saudi Arabia. Bridges regional requirements with technical delivery.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    Icon: Globe,
    g0: '#f59e0b',
    g1: '#ef4444',
    linkedin: null,
  },
  {
    id: 'dk',
    initials: 'DK',
    name: 'Danish Khan',
    role: 'Creative Head',
    focus: 'Design & Brand',
    bio: 'Drives visual identity, UI design, and brand direction across all Weblicate projects. Ensures every product looks as good as it works.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    Icon: Palette,
    g0: '#a855f7',
    g1: '#ec4899',
    linkedin: null,
  },
]

function AvatarRing({ id, g0, g1 }: { id: string; g0: string; g1: string }) {
  return (
    <div className="relative w-16 h-16 mb-5 flex-shrink-0 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={g0} />
            <stop offset="100%" stopColor={g1} />
          </linearGradient>
        </defs>
        <circle
          cx="32" cy="32" r="30"
          fill="none"
          stroke={`url(#ring-${id})`}
          strokeWidth="1.5"
        />
      </svg>
      <div className="w-14 h-14 rounded-full bg-elevated flex items-center justify-center text-base font-bold text-fg z-10">
        {id.toUpperCase()}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div className="relative">
      {/* SVG dot-grid background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="team-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.035)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#team-dots)" />
      </svg>

      <div className="relative z-10">
        <FadeIn>
          <p className="text-xs text-muted uppercase tracking-widest mb-3">Team</p>
          <h2
            className="font-extrabold text-fg"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            The People Behind It
          </h2>
          <p className="text-muted text-base mt-3">
            Small team. High output. Every client works directly with the people building their product.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {members.map((member, i) => {
            const Icon = member.Icon
            return (
              <FadeIn key={member.name} delay={i * 0.1}>
                <motion.div
                  className="group relative overflow-hidden bg-surface rounded-xl flex flex-col h-full cursor-default transition-colors duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                  onHoverStart={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'}
                  onHoverEnd={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  {/* Background image, very subtle, reveals on hover */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={member.image}
                      alt=""
                      fill
                      className="object-cover opacity-[0.05] group-hover:opacity-[0.13] scale-100 group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* gradient overlay so text stays readable */}
                    <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/80 to-surface" />
                  </div>

                  {/* Decorative large icon, watermark top-right */}
                  <div
                    className="absolute top-4 right-4 z-0 opacity-[0.05] group-hover:opacity-[0.09] transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    <Icon size={88} strokeWidth={0.6} style={{ color: member.g0 }} />
                  </div>

                  {/* Gradient glow at top on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${member.g0}, ${member.g1}, transparent)` }}
                  />

                  {/* Card content */}
                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <AvatarRing id={member.id} g0={member.g0} g1={member.g1} />

                    <h3 className="font-bold text-fg text-xl">{member.name}</h3>
                    <p className="text-xs text-muted uppercase tracking-wider mt-1">{member.role}</p>

                    {/* Role-coloured focus pill */}
                    <span
                      className="text-xs rounded-full px-2.5 py-0.5 mt-3 self-start font-medium border"
                      style={{
                        color: member.g0,
                        borderColor: `${member.g0}50`,
                        backgroundColor: `${member.g0}12`,
                      }}
                    >
                      {member.focus}
                    </span>

                    <p className="text-sm text-muted leading-relaxed mt-4 flex-1">{member.bio}</p>

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted hover:text-fg mt-5 transition-colors duration-200 self-start"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </div>
  )
}
