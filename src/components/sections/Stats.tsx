import { Counter } from '@/components/animations/Counter'
import { FadeIn } from '@/components/animations/FadeIn'

const stats = [
  { end: 10, suffix: '+', label: 'Projects Shipped' },
  { end: 6,  suffix: '+', label: 'Countries Served' },
  { end: 3,  suffix: '',  label: 'Industries Served' },
  { end: 1,  suffix: '',  label: 'IIT Internship' },
  { end: 1,  suffix: '',  label: 'National Summit' },
]

export default function Stats() {
  return (
    <section className="bg-surface border-y border-border py-24">
      <div className="max-w-content mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs text-muted uppercase tracking-widest mb-4">By the Numbers</p>
            <h2
              className="font-extrabold text-fg"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Small studio. Serious output.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-8 py-4">
              <span
                className="font-extrabold text-fg leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                <Counter end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
