'use client'
import { MotionConfig } from 'framer-motion'

// Framer Motion animations follow the visitor's reduced-motion setting
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
