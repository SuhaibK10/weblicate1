import { FadeIn } from '@/components/animations/FadeIn'

export default function Mission() {
  return (
    <div>
      <FadeIn>
        <p className="font-mono text-subtle uppercase mb-10" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}>
          (02) &nbsp;Mission
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
        <FadeIn delay={0.08}>
          <blockquote
            className="font-serif italic text-fg"
            style={{ fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.15 }}
          >
            &ldquo;Most organizations run on software that was never built for them.&rdquo;
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="text-muted leading-[1.8] space-y-4" style={{ fontSize: '1.0625rem' }}>
            <p>
              Spreadsheets doing the work of systems. Tools stitched together by
              habit. Processes held up by effort alone.
            </p>
            <p>
              We replace that — with software designed around how a business
              actually operates, and engineered to be depended on.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
