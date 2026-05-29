'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BeforeAfterSliderProps {
  /** CSS gradient for the "before" side (muted/flat) */
  beforeGradient: string
  /** CSS gradient for the "after" side (vibrant/luxury) */
  afterGradient: string
  /** Title displayed below the slider */
  title?: string
  /** Subtitle displayed below the title */
  subtitle?: string
  /** Aspect ratio class for the container (default: aspect-[4/5]) */
  aspectClass?: string
  /** Initial slider position as percentage (default: 50) */
  initialPosition?: number
}

export default function BeforeAfterSlider({
  beforeGradient,
  afterGradient,
  title,
  subtitle,
  aspectClass = 'aspect-[4/5]',
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPosition, setSliderPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const motionX = useMotionValue(initialPosition)

  // Sync motion value with state
  useEffect(() => {
    motionX.set(sliderPosition)
  }, [sliderPosition, motionX])

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    },
    []
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      handleMove(e.clientX)
    },
    [handleMove]
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true)
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        // Prevent scrolling while dragging
        e.preventDefault()
        handleMove(e.touches[0].clientX)
      }
    }

    const handleEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('mouseup', handleEnd)
      window.addEventListener('touchend', handleEnd)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mouseup', handleEnd)
      window.removeEventListener('touchend', handleEnd)
    }
  }, [isDragging, handleMove])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const step = 2
      if (e.key === 'ArrowLeft') {
        setSliderPosition((prev) => Math.max(0, prev - step))
      } else if (e.key === 'ArrowRight') {
        setSliderPosition((prev) => Math.min(100, prev + step))
      }
    },
    []
  )

  // Motion values for animated divider
  const dividerLeft = useTransform(motionX, (v) => `${v}%`)

  return (
    <div className="group w-full">
      {/* Slider Container */}
      <div
        ref={containerRef}
        className={`relative ${aspectClass} w-full cursor-ew-resize select-none overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(212,163,115,0.15)]`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after comparison slider"
        tabIndex={0}
      >
        {/* BEFORE Layer (full background) */}
        <div
          className="absolute inset-0"
          style={{ background: beforeGradient }}
        >
          {/* Decorative pattern overlay for "before" */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* AFTER Layer (clipped) */}
        <div
          className="absolute inset-0"
          style={{
            background: afterGradient,
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            transition: isDragging ? 'none' : 'clip-path 0.05s ease-out',
          }}
        >
          {/* Decorative shimmer overlay for "after" */}
          <div className="absolute inset-0 shimmer opacity-30" />
          {/* Subtle sparkle pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(255,255,255,0.4) 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        {/* BEFORE Label */}
        <motion.div
          className="absolute top-4 left-4 z-10"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="glass rounded-full px-4 py-1.5">
            <span className="font-[family-name:var(--font-poppins)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md sm:text-xs">
              Before
            </span>
          </div>
        </motion.div>

        {/* AFTER Label */}
        <motion.div
          className="absolute top-4 right-4 z-10"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="glass rounded-full px-4 py-1.5">
            <span className="font-[family-name:var(--font-poppins)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md sm:text-xs">
              After
            </span>
          </div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          className="absolute top-0 bottom-0 z-20 w-[3px]"
          style={{ left: dividerLeft }}
        >
          {/* The vertical line */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4A373] via-[#F9D5D3] to-[#D4A373] shadow-[0_0_12px_rgba(212,163,115,0.5)]" />

          {/* Glow effect behind the line */}
          <div className="absolute inset-y-0 -left-1 -right-1 bg-[#D4A373]/20 blur-sm" />
        </motion.div>

        {/* Handle (circle with arrows) */}
        <motion.div
          className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
          style={{ left: dividerLeft }}
        >
          <motion.div
            className="relative flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#D4A373] bg-white shadow-[0_0_20px_rgba(212,163,115,0.4),0_4px_12px_rgba(0,0,0,0.15)] sm:h-12 sm:w-12"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {/* Inner glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4A373]/20 to-transparent" />

            {/* Left arrow */}
            <ChevronLeft className="h-4 w-4 text-[#D4A373] sm:h-5 sm:w-5" strokeWidth={2.5} />

            {/* Right arrow */}
            <ChevronRight className="h-4 w-4 text-[#D4A373] sm:h-5 sm:w-5" strokeWidth={2.5} />
          </motion.div>

          {/* Drag hint tooltip (shown briefly on mount) */}
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2D2D]/90 px-3 py-1"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -8 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <span className="font-[family-name:var(--font-poppins)] text-[10px] font-medium text-white">
              Drag to compare
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade for aesthetics */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
      </div>

      {/* Title & Subtitle */}
      {title && (
        <div className="mt-4 text-center sm:mt-5">
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2D2D2D] sm:text-xl">
            {title}
          </h3>
          {subtitle && (
            <p className="font-[family-name:var(--font-poppins)] mt-1 text-xs font-light text-[#888888] sm:text-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
