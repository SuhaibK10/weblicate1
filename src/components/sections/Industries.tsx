import { FadeIn } from '@/components/animations/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { industries } from '@/lib/content'

export default function Industries() {
  const total = String(industries.length).padStart(2, '0')

  return (
    <div>
      <SectionHeader
        index="05"
        label="Industries"
        title="Every industry runs on operations."
        intro="We build for them. Each sector has its own truth about where the work actually happens."
      />

      <FadeIn delay={0.1}>
        {/* Grid on desktop; horizontal snap-scroll on mobile */}
        <div className="no-scrollbar -mx-6 mt-12 overflow-x-auto px-6 md:mx-0 md:mt-16 md:overflow-visible md:px-0">
          <ul className="flex w-max snap-x snap-mandatory gap-px overflow-hidden rounded-[6px] border border-border bg-border md:grid md:w-auto md:grid-cols-3">
            {industries.map((ind, i) => (
              <li
                key={ind.name}
                className="group flex w-[78vw] max-w-[320px] flex-shrink-0 snap-start flex-col bg-bg p-6 transition-colors duration-300 hover:bg-surface md:w-auto md:max-w-none md:p-8"
              >
                <span className="label">
                  {String(i + 1).padStart(2, '0')}/{total}
                </span>
                <h3 className="mt-10 text-xl font-normal tracking-tight text-fg md:mt-14 md:text-2xl">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-fg/80 text-pretty">
                  {ind.line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  )
}
