import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="bg-blueprint pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-content px-6">
          <p className="label">[ 404 / Not found ]</p>
          <h1
            className="mt-8 max-w-[18ch] font-normal text-fg"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '-0.04em' }}
          >
            This page doesn&apos;t exist. <span className="text-fg/45">The systems we build do.</span>
          </h1>
          <Link href="/" className="btn-secondary mt-10">
            <ArrowLeft size={14} strokeWidth={1.75} />
            Home
          </Link>
        </div>
      </main>
    </>
  )
}
