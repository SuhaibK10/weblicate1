import { FadeIn } from '@/components/animations/FadeIn'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Suhaib understood what we needed and delivered without any hassle. The site works exactly as we needed — clean, fast, and professional.',
    name: 'Louis',
    role: 'Founder @ LouisLimited',
    initials: 'L',
  },
  {
    quote:
      'Strong technical execution and great communication throughout. Very happy with the final result.',
    name: 'Client',
    role: 'Founder @ Weblicate Client',
    initials: 'C',
  },
  {
    quote:
      'Fast delivery, no back-and-forth, exactly what we described. The product looks far more expensive than it cost.',
    name: 'Client',
    role: 'Startup Founder',
    initials: 'C',
  },
]

export default function Testimonials() {
  return (
    <div>
      <FadeIn>
        <p className="text-xs text-muted uppercase tracking-widest mb-3">Testimonials</p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Real Feedback from Founders
        </h2>
        <p className="text-muted text-base mt-3">
          Rated 4.9+ for fast delivery, clean execution, and real results.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="bg-surface border border-border rounded-xl p-6 flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-base text-fg leading-relaxed flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-10 h-10 rounded-full bg-elevated flex items-center justify-center text-sm font-bold text-muted flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-fg text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
