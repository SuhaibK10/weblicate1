import type { Metadata } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500'],
  variable: '--font-newsreader',
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${newsreader.variable}`}>
      <body className="bg-bg text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
