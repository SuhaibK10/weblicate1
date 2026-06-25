import { FadeIn } from '@/components/animations/FadeIn'
import { CheckCircle2 } from 'lucide-react'

const plans = [
  {
    name: 'Landing Page',
    target: 'Perfect for startups & early validation',
    price: '₹15,000',
    priceNote: 'starting at',
    popular: false,
    features: [
      '1-page design & development',
      '2–3 rounds of revisions',
      'Mobile responsive',
      'SEO optimized',
      'Delivered in 7 days',
      '7-day post-launch support',
    ],
    cta: 'Get Started',
    href: 'mailto:suhaibkhan830@gmail.com',
  },
  {
    name: 'Full Website',
    target: 'For businesses ready to scale',
    price: '₹35,000',
    priceNote: 'starting at',
    popular: true,
    features: [
      'Multi-page website',
      'CMS integration',
      'SEO optimization',
      '3–5 rounds of revisions',
      'Source file ownership',
      'Performance optimized',
      '14-day post-launch support',
    ],
    cta: 'Book a Call',
    href: 'mailto:suhaibkhan830@gmail.com',
  },
  {
    name: 'Retainer',
    target: 'Ongoing support for growing teams',
    price: '₹25,000',
    priceNote: '/month',
    popular: false,
    features: [
      'Unlimited content updates',
      'New landing pages & sections',
      'Bug fixes & maintenance',
      'Performance monitoring',
      'Priority response',
      'Monthly strategy call',
    ],
    cta: 'Become a Partner',
    href: 'mailto:suhaibkhan830@gmail.com',
  },
]

export default function Pricing() {
  return (
    <div>
      <FadeIn>
        <p className="text-xs text-muted uppercase tracking-widest mb-3">Pricing</p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Clear Pricing. No Surprises.
        </h2>
        <p className="text-muted text-base mt-3">
          No agency overhead. Real engineering at startup-friendly prices.
        </p>
      </FadeIn>

      {/* Comparison row */}
      <FadeIn delay={0.1}>
        <div className="flex items-center justify-between bg-surface border border-border rounded-xl p-6 mt-10 mb-10 max-w-lg">
          <div className="text-center">
            <p className="text-muted text-sm mb-1">Typical Agency</p>
            <p className="text-2xl font-bold text-muted line-through">Up to $10,000</p>
          </div>
          <div className="text-subtle text-xl px-4">→</div>
          <div className="text-center">
            <p className="text-fg text-sm mb-1 font-semibold">Weblicate</p>
            <p className="text-2xl font-bold text-fg">From ₹15,000</p>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
        {plans.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 0.08}>
            <div
              className={`relative bg-surface rounded-xl p-8 flex flex-col h-full ${
                plan.popular ? 'border border-fg/30' : 'border border-border'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-fg text-bg text-xs font-bold px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}

              <div>
                <p className="text-muted text-sm">{plan.priceNote}</p>
                <p className="text-5xl font-extrabold text-fg mt-1">{plan.price}</p>
                <h3 className="font-bold text-fg text-lg mt-3">{plan.name}</h3>
                <p className="text-muted text-sm mt-1">{plan.target}</p>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-fg/60 flex-shrink-0" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`mt-8 block w-full py-3 rounded-lg text-center font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-fg text-bg hover:opacity-85'
                    : 'border border-border text-fg hover:border-border-hover'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Custom Systems banner */}
      <FadeIn delay={0.25}>
        <div className="mt-4 bg-surface border border-border rounded-xl p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-xs text-muted uppercase tracking-widest mb-2">Custom Systems</p>
              <h3 className="text-2xl font-bold text-fg">ERP, LMS & Academic Platforms</h3>
              <p className="text-muted text-sm mt-2 max-w-xl leading-relaxed">
                Building an LMS for your institute? An ERP for your business? A test platform for
                a coaching centre? These are scoped individually — book a call and we&apos;ll send
                a clear proposal within 24 hours.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  'LMS for Schools & Colleges',
                  'Online Academy Platform',
                  'Course & Video Delivery',
                  'Inventory ERP',
                  'Coaching Institute Platform',
                  'Online Test Engine',
                  'Student Management',
                  'HR & Payroll System',
                  'Fee & Batch Management',
                  "Doctor's Website",
                  'Clinic Management System',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted border border-border rounded-md px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 text-center md:text-right">
              <p className="text-muted text-sm mb-1">Starting at</p>
              <p className="text-4xl font-extrabold text-fg">₹75,000</p>
              <a
                href="mailto:suhaibkhan830@gmail.com"
                className="mt-4 inline-block bg-fg text-bg font-bold text-sm rounded-lg px-6 py-3 hover:opacity-85 transition-opacity duration-200"
              >
                Get a Proposal →
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
