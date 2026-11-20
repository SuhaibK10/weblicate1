import { FadeIn } from '@/components/animations/FadeIn'

// Editorial section header: bracketed mono index on a hairline, heading left, intro right.
//   [ 02 / Capabilities ] ─────────────────────────
//   What we build.                 A technology consultancy…
export function SectionHeader({
  index,
  label,
  title,
  intro,
  children,
}: {
  index: string
  label: string
  title: React.ReactNode
  intro?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <FadeIn>
      <div className="flex items-center gap-4">
        <p className="label whitespace-nowrap">
          [ {index} / {label} ]
        </p>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-12 md:items-end md:gap-10">
        <h2
          className="font-normal text-fg text-balance md:col-span-7"
          style={{ fontSize: 'clamp(2.25rem, 4.6vw, 3.75rem)', lineHeight: 1.04, letterSpacing: '-0.03em' }}
        >
          {title}
        </h2>
        {(intro || children) && (
          <div className="md:col-span-5 md:pb-2">
            {intro && <p className="max-w-md text-lg leading-snug text-muted text-pretty">{intro}</p>}
            {children}
          </div>
        )}
      </div>
    </FadeIn>
  )
}
