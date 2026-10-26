import { FadeIn } from '@/components/animations/FadeIn'

// Plain strings render as text, { pill } renders as a highlighted pill.
// `after` is punctuation kept on the same line as its pill.
const copy: (string | { pill: string; after?: string })[] = [
  'Most organizations run on software that was ',
  { pill: 'never built for them', after: '.' },
  ' Spreadsheets doing the work of systems, tools stitched together by habit. We replace that with ',
  { pill: 'digital platforms' },
  ' and ',
  { pill: 'AI systems' },
  ' designed around how a business actually operates, and ',
  { pill: 'engineered to be depended on', after: '.' },
]

export default function Mission() {
  return (
    <FadeIn>
      <p
        className="mx-auto max-w-3xl text-center font-light text-fg/90"
        style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.625rem)', lineHeight: 2.1 }}
      >
        {copy.map((part, i) =>
          typeof part === 'string' ? (
            part
          ) : (
            <span key={i} className="whitespace-nowrap">
              <span className={`pill ml-1 py-0.5 align-middle leading-normal ${part.after ? 'mr-0.5' : 'mr-1'}`}>
                <span className="text-shimmer">{part.pill}</span>
              </span>
              {part.after}
            </span>
          ),
        )}
      </p>
    </FadeIn>
  )
}
