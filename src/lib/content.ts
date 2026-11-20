// Shared copy used by more than one section (hero pillars, capabilities, footer).
// Positioning and wording follow docs/rebrand.md.

export const TAGLINE = 'The systems behind the business.'

export const CATEGORY = 'AI-native technology consultancy'

export const DESCRIPTION =
  'An AI-native technology consultancy that designs and engineers the software organizations run on: AI systems, digital platforms, and industry software.'

export type Capability = {
  id: string
  slug: string
  title: string
  short: string
  line: string
  items: string[]
}

// AI Systems leads: as an AI-native consultancy it is the core practice, not an add-on.
export const capabilities: Capability[] = [
  {
    id: '01',
    slug: 'ai',
    title: 'AI Systems',
    short: 'Agents, automation, ML',
    line: 'Intelligence embedded in operations, not bolted on.',
    items: ['AI agents', 'Workflow automation', 'Knowledge systems', 'Decision support', 'ML pipelines'],
  },
  {
    id: '02',
    slug: 'platforms',
    title: 'Digital Platforms',
    short: 'Portals, internal systems, SaaS',
    line: 'Software that becomes the way the company works, built ready for AI.',
    items: ['Enterprise applications', 'Customer portals', 'Internal systems', 'SaaS products'],
  },
  {
    id: '03',
    slug: 'industry',
    title: 'Industry Software',
    short: 'Built for how a sector runs',
    line: 'Purpose-built for how each industry actually runs.',
    items: ['School & hospital systems', 'Restaurant operations', 'Retail & logistics', 'Manufacturing'],
  },
  {
    id: '04',
    slug: 'engineering',
    title: 'Product Engineering',
    short: 'The full stack, end to end',
    line: 'The full stack, owned end to end.',
    items: ['Architecture', 'UX & frontend', 'Backend & APIs', 'Cloud & infrastructure'],
  },
  {
    id: '05',
    slug: 'consulting',
    title: 'Strategic Consulting',
    short: 'Deciding what to build',
    line: 'Deciding what to build, and where AI earns its place, is half the work.',
    items: ['AI strategy & adoption', 'Technology strategy', 'Digital transformation', 'Software architecture'],
  },
]

export const industries = [
  { name: 'Education',             line: 'Institutes run on paper and patience. We build the systems that run them instead.' },
  { name: 'Healthcare',            line: 'Records, scheduling, billing: the parts of care that patients never see, done right.' },
  { name: 'Retail',                line: 'From shelf to checkout to warehouse, one system that knows where everything is.' },
  { name: 'Finance',               line: 'Software where correctness is not a feature. It is the product.' },
  { name: 'Manufacturing',         line: 'Production, procurement, and inventory, visible for the first time.' },
  { name: 'Hospitality',           line: 'Operations that move as fast as the service is supposed to.' },
  { name: 'Logistics',             line: 'Every shipment, every handoff, accounted for.' },
  { name: 'Public Sector',         line: 'Systems built for scale, scrutiny, and decades of use.' },
  { name: 'Professional Services', line: 'Client work is a pipeline. We make it one.' },
]

export const navLinks = [
  { label: 'AI-native',    href: '/#ai-native' },
  { label: 'Work',         href: '/#work' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Systems',      href: '/#systems' },
  { label: 'Industries',   href: '/#industries' },
  { label: 'Process',      href: '/#process' },
  { label: 'FAQ',          href: '/#faq' },
]
