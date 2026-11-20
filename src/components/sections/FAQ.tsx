import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { FAQItem } from '@/components/ui/FAQItem'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CONTACT_HREF } from '@/lib/site'

const faqs = [
  {
    q: 'What does "AI-native" mean at Weblicate?',
    a: 'AI is part of the system design from day one, not a feature added after launch. Data, workflows, and interfaces are built so models and agents can work inside them. Every AI component is evaluated against your real data before launch and monitored in production after, and the system stays model-agnostic so you can switch providers as prices and capabilities change.',
  },
  {
    q: 'Does every project need AI?',
    a: "No. Part of scoping is deciding where AI earns its place and where plain, reliable software is the better answer. If AI isn't worth it for your problem, we'll say so.",
  },
  {
    q: 'Which AI models do you work with?',
    a: 'We are model-agnostic. We choose between frontier model APIs and open-source models based on accuracy, cost, latency, and data-privacy needs for your use case, and design the system so the model can be swapped later without a rebuild.',
  },
  {
    q: 'How long does a project take?',
    a: 'Landing pages: 5–7 days. Full websites: 10–14 days. MVPs and AI systems: 3–6 weeks depending on scope. We agree on a timeline before starting.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: "Yes, most of our clients are early-stage. We're used to working with limited briefs and helping founders clarify what they actually need before building.",
  },
  {
    q: 'What makes Weblicate different from a freelancer or agency?',
    a: "Founder-led means you work directly with the person building your product. No account managers, no junior handoffs. We also bring ML and AI capabilities that most web studios don't have.",
  },
  {
    q: 'Can you build AI features into a website?',
    a: "Yes. We've built agentic AI systems, ML fraud detection pipelines, and LLM-powered tools. If your product needs AI, we can scope and build that alongside the web layer.",
  },
  {
    q: 'What do you need from me to start?',
    a: "A short brief: what you're building, who it's for, and roughly what you need. We handle everything from there. A 20-minute call is enough to kick off most projects.",
  },
  {
    q: 'Do you build ERP systems for small and medium businesses?',
    a: 'Yes. We build custom ERP systems: inventory, procurement, HR, finance. Built around how your business actually operates, not the other way around. Most SMB ERPs start at ₹1,50,000 depending on scope.',
  },
  {
    q: 'Can you build a test and study platform for a coaching institute?',
    a: 'Yes. We build complete academic platforms: online test engines with question banks, study material libraries, student dashboards, batch management, and fee collection. All in one system. Works for single-branch institutes and multi-centre operations. Book a call to discuss your requirements.',
  },
  {
    q: 'Can you build an LMS for a school, college, or educational institute?',
    a: 'Yes. We build full Learning Management Systems for educational institutes: course creation, video lessons, quizzes, assignments, student progress tracking, certifications, and fee management. Works for schools, colleges, coaching centres, and online academies. Fully custom-built and branded to your institution.',
  },
  {
    q: 'Do you work with international clients?',
    a: "Yes. We work remotely with clients across UAE, Saudi Arabia, Malaysia, USA, Europe, and India. All communication is async-friendly: calls, Notion, WhatsApp, or email, whatever works for you. Payment via international transfer or UPI.",
  },
  {
    q: 'Can you build a website for a doctor, dietician, or healthcare clinic?',
    a: 'Yes. We build professional websites for doctors, dieticians, physiotherapists, and other practitioners, including appointment booking, service pages, testimonials, and trust-focused design. We also build full clinic management systems: patient records, scheduling, billing, and staff management. Healthcare clients get special attention to data privacy and professional presentation.',
  },
]

// FAQPage structured data so answers can surface directly in search results
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQ() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SectionHeader
        index="08"
        label="FAQ"
        title="Questions, answered."
        intro="AI, timelines, engagement, and what we build. If yours isn't here, ask it directly."
      >
        <a href={CONTACT_HREF} className="link-draw mt-5 font-mono text-[0.75rem] uppercase tracking-[0.1em]">
          Ask a question <ArrowRight size={13} strokeWidth={1.75} />
        </a>
      </SectionHeader>

      <FadeIn delay={0.1}>
        <div className="mt-12 border-b border-border md:mt-16">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} index={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </FadeIn>
    </div>
  )
}
