export function Badge({
  children,
  variant = 'default',
}: {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'success'
}) {
  const styles = {
    default: 'border border-white/10 text-muted',
    accent: 'border border-accent/30 text-accent-light bg-accent/15',
    success: 'border border-success/30 text-success bg-success/15',
  }
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono ${styles[variant]}`}
    >
      {children}
    </span>
  )
}
