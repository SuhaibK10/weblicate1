'use client'
import { Icon } from '@iconify/react'

const stack = [
  { name: 'Next.js',    icon: 'logos:nextjs-icon' },
  { name: 'React',      icon: 'logos:react' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Supabase',   icon: 'logos:supabase-icon' },
  { name: 'Cloudflare', icon: 'logos:cloudflare-icon' },
  { name: 'Python',     icon: 'logos:python' },
  { name: 'Node.js',    icon: 'logos:nodejs-icon' },
  { name: 'Shopify',    icon: 'logos:shopify' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'Stripe',     icon: 'simple-icons:stripe' },
  { name: 'Razorpay',   icon: 'simple-icons:razorpay' },
  { name: 'Figma',      icon: 'logos:figma' },
  { name: 'n8n',        icon: 'simple-icons:n8n' },
  { name: 'Docker',     icon: 'logos:docker-icon' },
  { name: 'GraphQL',    icon: 'logos:graphql' },
  { name: 'AWS',        icon: 'mdi:aws' },
]

// Rounded icon tiles drifting sideways, faded at both edges
export default function TechStack() {
  return (
    <div aria-label="Built on infrastructure you already trust" className="fade-x overflow-hidden py-4">
      <div className="flex w-max animate-marquee gap-6 md:gap-10">
        {[...stack, ...stack].map((t, i) => (
          <div
            key={i}
            title={t.name}
            aria-hidden={i >= stack.length}
            className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#1a1a1a] to-[#101010] shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
          >
            <Icon icon={t.icon} width={26} height={26} className={t.icon.startsWith('logos:') ? '' : 'text-fg'} />
          </div>
        ))}
      </div>
    </div>
  )
}
