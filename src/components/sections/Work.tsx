import { FadeIn } from '@/components/animations/FadeIn'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'Louis Polo',
    type: 'E-Commerce Platform',
    desc: 'Complete B2C e-commerce platform from zero — architecture, UI/UX, inventory system, production deploy.',
    stack: ['Next.js', 'Supabase', 'Vercel'],
    tag: 'Live',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    link: 'https://louispolo.in',
  },
  {
    id: '02',
    title: 'RBIH Fraud Detection',
    type: 'AI · Fintech · ML Pipeline',
    desc: 'Ensemble ML pipeline (LightGBM + XGBoost) to detect mule accounts in financial data. SHAP explainability for RBI compliance.',
    stack: ['Python', 'LightGBM', 'XGBoost', 'SHAP'],
    tag: 'Research',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    link: null,
  },
  {
    id: '03',
    title: 'Startup Idea Evaluator',
    type: 'Agentic AI · Product',
    desc: 'Multi-agent LLM system that autonomously validates startup ideas — market research, modeling, risk analysis.',
    stack: ['CrewAI', 'OpenAI', 'Streamlit'],
    tag: 'Live',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    link: '#',
  },
  {
    id: '04',
    title: 'Factory Productivity Monitor',
    type: 'Computer Vision · Ops',
    desc: 'Real-time CV system monitoring workflow patterns in a manufacturing facility. Automated operational reporting.',
    stack: ['Python', 'OpenCV', 'TensorFlow'],
    tag: 'Delivered',
    tagColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    link: null,
  },
  {
    id: '05',
    title: 'Inventory Management System',
    type: 'Internal Tool · Web App',
    desc: 'Internal system for Louis Polo to track product catalog, stock levels, and marketplace data across channels.',
    stack: ['React', 'Supabase', 'Tailwind'],
    tag: 'Live',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    link: null,
  },
  {
    id: '06',
    title: 'Quantum ML Visualizer',
    type: 'Research Tool · Data Viz',
    desc: 'Interactive tool comparing classical ML vs Quantum ML using real-time visualization. Presented at Indo Quantum Summit.',
    stack: ['Python', 'Qiskit', 'Streamlit', 'Matplotlib'],
    tag: 'Research',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    link: '#',
  },
]

export default function Work() {
  return (
    <div>
      <FadeIn>
        <p className="text-xs text-muted uppercase tracking-widest mb-3">Our Work</p>
        <h2
          className="font-extrabold text-fg"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Selected Projects
        </h2>
        <p className="text-muted text-base mt-3">Real products. Real clients. Real engineering.</p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.06}>
            <div className="group bg-surface border border-border rounded-xl p-6 hover:border-border-hover hover:bg-elevated hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <span className="text-xs text-subtle font-mono">{project.id}</span>
                <span className={`text-xs border rounded-full px-2 py-0.5 ${project.tagColor}`}>
                  {project.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-fg mt-3">{project.title}</h3>
              <p className="text-xs text-muted uppercase tracking-wider mt-1">{project.type}</p>
              <p className="text-sm text-muted leading-relaxed mt-3 flex-1">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted bg-accent-dim border border-border rounded-md px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-fg/60 hover:text-fg mt-4 transition-colors duration-200"
                >
                  View Project <ExternalLink size={11} />
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
