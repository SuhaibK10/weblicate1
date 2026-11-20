import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import Providers from '@/components/Providers'
import './globals.css'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Weblicate | AI-Native Technology Consultancy · AI Systems, Platforms & Industry Software',
  description:
    'Weblicate is an AI-native technology consultancy. We design and engineer the software organizations run on: AI systems, digital platforms, and industry software for education, healthcare, retail, manufacturing, and finance.',
  keywords: [
    'AI-native technology consultancy',
    'AI consultancy',
    'AI agents',
    'AI systems',
    'LLM development',
    'technology consultancy',
    'digital platforms',
    'industry software',
    'product engineering',
  ],
  authors: [{ name: 'Suhaib Khan' }],
  openGraph: {
    title: 'Weblicate | AI-native technology consultancy',
    description:
      'The systems behind the business. AI systems, platforms, and digital infrastructure, with intelligence designed in from day one.',
    url: 'https://weblicate.in',
    siteName: 'Weblicate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weblicate | AI-native technology consultancy',
    description:
      'The systems behind the business. AI systems, platforms, and digital infrastructure, with intelligence designed in from day one.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${GeistMono.variable}`}>
      <body className="bg-bg text-fg font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
