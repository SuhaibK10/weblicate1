import { FadeIn } from '@/components/animations/FadeIn'
import { FAQItem } from '@/components/ui/FAQItem'

const faqs = [
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
    a: "A short brief: what you're building, who it's for, and roughly what you need. We handle everything from there. A 15-minute call is enough to kick off most projects.",
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

export default function FAQ() {
  return (
    <div>
      <FadeIn>
        <p className="text-xs text-muted uppercase tracking-widest mb-3">FAQ</p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Answers to Common Questions
        </h2>
        <p className="text-muted text-base mt-3">Everything you need to know before we start.</p>
      </FadeIn>

      <div className="max-w-3xl mt-12">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </div>
  )
}
