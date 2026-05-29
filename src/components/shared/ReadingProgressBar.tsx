'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function ReadingProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Derive the shimmer's horizontal position from the same progress
  const shimmerX = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[39] pointer-events-none">
      {/* Background track — extremely subtle */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Gradient progress bar */}
      <motion.div
        className="absolute inset-y-0 left-0 right-0 origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #D4A373, #F9D5D3, #D4A373)',
        }}
      />

      {/* Shimmer / glow at the leading edge */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left: shimmerX,
          x: '-50%',
          width: '40px',
          height: '12px',
          borderRadius: '9999px',
          background:
            'radial-gradient(ellipse at center, rgba(244,190,170,0.9) 0%, rgba(212,163,115,0.5) 40%, transparent 70%)',
          filter: 'blur(3px)',
        }}
      />

      {/* Tiny bright dot at the very edge for extra sparkle */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left: shimmerX,
          x: '-50%',
          width: '6px',
          height: '6px',
          borderRadius: '9999px',
          background: 'rgba(255,255,255,0.95)',
          boxShadow:
            '0 0 6px 2px rgba(212,163,115,0.7), 0 0 12px 4px rgba(249,213,211,0.4)',
        }}
      />
    </div>
  )
}
