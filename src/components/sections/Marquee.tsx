const items = [
  'Web Development', 'AI Systems', 'MVP Builds', 'E-Commerce',
  'Fraud Detection', 'Agentic AI', 'Based in India', 'Startup Studio',
  'React & Next.js', 'ML Pipelines', '10+ Projects', 'Open for Work',
]

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-rule py-4">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-serif italic text-base text-ink-2 flex-shrink-0"
          >
            {item} <span className="text-ink-3 mx-1">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
