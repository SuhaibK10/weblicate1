import { FadeIn } from '@/components/animations/FadeIn'

// Section heading with the brand dot, e.g. "• What we build"
export function SectionTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <FadeIn>
      <h2
        className="flex items-center gap-3 font-normal text-fg"
        style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', letterSpacing: '-0.01em' }}
      >
        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-green to-brand-teal shadow-[0_0_12px_rgba(79,191,165,0.7)]" />
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-md text-lg leading-snug text-muted">{intro}</p>
      )}
    </FadeIn>
  )
}
