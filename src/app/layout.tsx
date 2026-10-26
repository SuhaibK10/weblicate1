import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Weblicate | Technology Consultancy · Software, AI Systems & Digital Platforms',
  description:
    'Weblicate designs and engineers the software organizations run on: digital platforms, AI systems, and industry software for education, healthcare, retail, manufacturing, and finance.',
  keywords: [
    'technology consultancy',
    'digital platforms',
    'AI systems',
    'industry software',
    'digital transformation',
    'product engineering',
  ],
  authors: [{ name: 'Suhaib Khan' }],
  openGraph: {
    title: 'Weblicate | The systems behind the business.',
    description:
      'A technology consultancy building platforms, AI systems, and digital infrastructure.',
    url: 'https://weblicate.in',
    siteName: 'Weblicate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weblicate | The systems behind the business.',
    description:
      'A technology consultancy building platforms, AI systems, and digital infrastructure.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hanken.variable}>
      <body className="bg-bg text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
