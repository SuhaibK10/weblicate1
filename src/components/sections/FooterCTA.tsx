import { FadeIn } from '@/components/animations/FadeIn'

export default function FooterCTA() {
  return (
    <section className="relative py-32 px-6 border-t border-border bg-surface text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />

      <FadeIn>
        

        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.95 }}
        >
          Have a Business Idea?
        </h2>
        <h2
          className="font-extrabold text-muted mt-2"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.95 }}
        >
          Let&apos;s make it ship.
        </h2>

        <p className="text-muted text-base max-w-md mx-auto mt-6">
          Weblicate is a founder-led studio that builds websites, AI systems, and MVPs.
          No agencies. No juniors. Just fast, clean engineering.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
          <a
            href="mailto:suhaibkhan830@gmail.com"
            className="bg-fg text-bg font-bold text-base rounded-lg px-8 py-4 hover:opacity-85 transition-opacity duration-200"
          >
            Book a 15-min Call →
          </a>
          <a
            href="https://linkedin.com/in/suhaibkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-fg font-medium text-base rounded-lg px-8 py-4 hover:border-border-hover transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
