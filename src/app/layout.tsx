import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Weblicate — Websites, AI & MVPs for Startups',
  description: 'Weblicate builds production-ready websites, AI systems, and MVPs. Founder-led tech studio. Ships in 14 days.',
  keywords: ['web development', 'AI systems', 'MVP development', 'startup studio India', 'Next.js'],
  authors: [{ name: 'Suhaib Khan' }],
  openGraph: {
    title: 'Weblicate — Websites, AI & MVPs for Startups',
    description: 'Not another dev shop. We build what your startup needs and ship it in 14 days.',
    url: 'https://weblicate.in',
    siteName: 'Weblicate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weblicate — Websites, AI & MVPs for Startups',
    description: 'Not another dev shop. We build what your startup needs and ship it in 14 days.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-bg text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
