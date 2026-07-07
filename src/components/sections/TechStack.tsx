'use client'
import { Icon } from '@iconify/react'

const row1 = [
  { name: 'Next.js',    icon: 'logos:nextjs-icon' },
  { name: 'React',      icon: 'logos:react' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Supabase',   icon: 'logos:supabase-icon' },
  { name: 'Cloudflare', icon: 'logos:cloudflare-icon' },
  { name: 'Python',     icon: 'logos:python' },
  { name: 'Node.js',    icon: 'logos:nodejs-icon' },
]

const row2 = [
  { name: 'Shopify',    icon: 'logos:shopify' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'Stripe',     icon: 'logos:stripe' },
  { name: 'Razorpay',   icon: 'simple-icons:razorpay' },
  { name: 'Figma',      icon: 'logos:figma' },
  { name: 'n8n',        icon: 'simple-icons:n8n' },
  { name: 'Docker',     icon: 'logos:docker-icon' },
  { name: 'GraphQL',    icon: 'logos:graphql' },
  { name: 'AWS',        icon: 'logos:aws' },
]

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <span className="flex items-center gap-2.5 px-6 flex-shrink-0 select-none">
      <Icon icon={icon} width={24} height={24} className="opacity-100" />
      <span className="text-sm font-medium text-muted tracking-wide">{name}</span>
    </span>
  )
}

export default function TechStack() {
  return (
    <div className="border-y border-border bg-surface py-8 overflow-hidden">
      <p className="text-xs text-muted uppercase tracking-widest text-center mb-6 px-6">
        Every technology your product needs
      </p>

      {/* Edge fades */}
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        {/* Row 1: left */}
        <div className="flex whitespace-nowrap animate-marquee mb-4">
          {[...row1, ...row1].map((t, i) => (
            <TechItem key={i} name={t.name} icon={t.icon} />
          ))}
        </div>

        {/* Row 2: right */}
        <div className="flex whitespace-nowrap animate-marquee-rev">
          {[...row2, ...row2].map((t, i) => (
            <TechItem key={i} name={t.name} icon={t.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}
