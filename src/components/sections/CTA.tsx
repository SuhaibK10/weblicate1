import { FadeIn } from '@/components/animations/FadeIn'

export default function CTA() {
  return (
    <section className="bg-ink text-background py-28 px-8 text-center">
      <FadeIn>
        <p
          className="font-mono uppercase tracking-widest mb-6"
          style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(240,237,230,0.4)' }}
        >
          (Start a project)
        </p>

        <h2
          className="font-serif italic font-semibold text-background leading-[1.0] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Have a project
          <br />
          in mind?
        </h2>

        <p
          className="font-sans mb-10 max-w-md mx-auto leading-relaxed"
          style={{ fontSize: '1rem', color: 'rgba(240,237,230,0.5)' }}
        >
          Let&apos;s build something that works. Reach out directly. No forms, no gatekeepers.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:suhaibkhan830@gmail.com"
            className="bg-background text-ink font-sans font-semibold text-sm px-6 py-3 rounded hover:opacity-80 transition-opacity duration-200"
          >
            suhaibkhan830@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/suhaibkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono uppercase tracking-widest px-6 py-3 rounded hover:border-background/70 transition-all duration-200"
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              border: '1px solid rgba(240,237,230,0.3)',
              color: 'rgba(240,237,230,1)',
            }}
          >
            LinkedIn →
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
