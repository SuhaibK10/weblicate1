const countries = ['🇮🇳 India', '🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇺🇸 USA', '🇪🇺 Europe', '🇲🇾 Malaysia']

export default function GlobalStrip() {
  return (
    <div className="w-full border-b border-border bg-surface py-10 px-6">
      <p className="text-xs text-muted uppercase tracking-widest text-center mb-6">
        Clients across
      </p>
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto">
        {countries.map((country) => (
          <span
            key={country}
            className="text-base font-semibold text-fg border border-border rounded-xl px-6 py-3 bg-elevated hover:border-border-hover transition-colors duration-200 whitespace-nowrap"
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  )
}
