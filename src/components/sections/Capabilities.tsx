import { FadeIn } from '@/components/animations/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { capabilities } from '@/lib/content'

export default function Capabilities() {
  return (
    <div>
      <SectionHeader
        index="03"
        label="Capabilities"
        title="What we build."
        intro="Five practice areas with AI at the center of each. One team, no handoffs in between."
      />

      <div className="mt-12 border-b border-border md:mt-16">
        {capabilities.map((cap, i) => (
          <FadeIn key={cap.id} delay={i * 0.04}>
            <div
              id={`cap-${cap.slug}`}
              className="group relative grid scroll-mt-24 grid-cols-1 gap-5 border-t border-border py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <span
                className="absolute left-0 top-[-1px] h-px w-0 bg-brand transition-[width] duration-700 ease-out group-hover:w-full"
                aria-hidden="true"
              />
              <p className="label md:col-span-1 md:pt-2">{cap.id}</p>
              <div className="md:col-span-5">
                <h3
                  className="font-normal text-fg"
                  style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                >
                  {cap.title}
                </h3>
                <p className="mt-2 text-muted transition-colors duration-300 group-hover:text-fg/85">{cap.line}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2 md:col-span-6 md:justify-end md:pt-2">
                {cap.items.map((item) => (
                  <li key={item} className="tag">{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
