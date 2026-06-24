export function Pill({
  children,
  active = false,
}: {
  children: React.ReactNode
  active?: boolean
}) {
  return <span className={`pill ${active ? 'active' : ''}`}>{children}</span>
}
