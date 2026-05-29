'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const SCROLL_THRESHOLD = 400

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    // Check initial scroll position on mount
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-[#D4A373]/40 text-[#D4A373] flex items-center justify-center shadow-lg shadow-[#D4A373]/15 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/40 focus:ring-offset-2 focus:ring-offset-white hover:bg-[#D4A373]/10 hover:border-[#D4A373]/60 hover:text-[#C08B5C] font-[family-name:var(--font-poppins)]"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{
            // Spring animation for appearance
            type: 'spring',
            stiffness: 260,
            damping: 22,
          }}
          whileHover={{
            scale: 1.12,
            boxShadow: '0 8px 30px rgba(212, 163, 115, 0.3)',
          }}
          whileTap={{ scale: 0.92 }}
        >
          {/* Subtle pulse ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#D4A373]/30"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Secondary subtle ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#D4A373]/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          <ChevronUp className="w-5 h-5 relative z-10" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
