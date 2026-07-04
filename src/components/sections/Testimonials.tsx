import { FadeIn } from '@/components/animations/FadeIn'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <div>
      <FadeIn>
        <p className="text-xs text-muted uppercase tracking-widest mb-3">Testimonials</p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          What Clients Say
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-12 max-w-2xl bg-surface border border-border rounded-xl p-8">
          <Quote size={28} className="text-muted mb-5 opacity-40" />
          <p className="text-lg text-fg leading-relaxed">
            Suhaib understood what we needed and delivered without any hassle. The site works exactly as we needed — clean, fast, and professional.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-elevated flex items-center justify-center text-sm font-bold text-muted flex-shrink-0">
              L
            </div>
            <div>
              <p className="font-semibold text-fg text-sm">Louis</p>
              <p className="text-xs text-muted">Founder, Louis Polo</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
