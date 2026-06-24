const countries = ['🇮🇳 India', '🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇺🇸 USA', '🇪🇺 Europe', '🇲🇾 Malaysia']

export default function GlobalStrip() {
  return (
    <div className="w-full border-b border-border bg-surface py-3 px-6">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className="text-xs text-muted uppercase tracking-widest font-medium">
          Clients across
        </span>
        {countries.map((country) => (
          <span
            key={country}
            className="text-xs text-muted border border-border rounded-full px-3 py-1"
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  )
}
