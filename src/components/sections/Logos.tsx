const clients = [
  'Louis Polo',
  'IIT Jammu',
  'FAAST FinTech Club',
  'AMU',
  'LouisLimited',
  'Startup Founders',
  'Dubai',
  'Saudi Arabia',
  'USA',
  'Malaysia',
  'Europe',
  'Healthcare Platforms',
  'Clinic Management',
  'Doctor Websites',
]

export default function Logos() {
  return (
    <div className="border-y border-border py-8 bg-surface overflow-hidden">
      <p className="text-xs text-subtle uppercase tracking-widest text-center mb-6">
        Brands & Institutions That Trust Our Work
      </p>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...clients, ...clients].map((client, i) => (
          <span key={i} className="text-sm font-semibold text-subtle px-10 flex-shrink-0">
            {client}
            <span className="mx-4 text-subtle/50">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
