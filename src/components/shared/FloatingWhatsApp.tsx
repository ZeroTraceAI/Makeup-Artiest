'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [bounceComplete, setBounceComplete] = useState(false)

  useEffect(() => {
    // Show tooltip briefly on first load
    const timer = setTimeout(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 4000)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    window.open('https://wa.me/919999278874', '_blank')
  }

  return (
    <TooltipProvider delayDuration={200}>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              className="absolute bottom-full right-0 mb-3 whitespace-nowrap bg-white dark:bg-[#1A1A1A] text-[#2D2D2D] dark:text-[#E8E0D8] text-sm font-[family-name:var(--font-poppins)] px-4 py-2 rounded-xl shadow-lg shadow-black/10 border border-[#F0E6DC] dark:border-[#3A3030]"
            >
              Chat on WhatsApp
              <div className="absolute top-full right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-[#1A1A1A]" />
            </motion.div>
          )}
        </AnimatePresence>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              onClick={handleClick}
              aria-label="Chat on WhatsApp"
              className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0F0F0F]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 1,
              }}
              onAnimationComplete={() => {
                if (!bounceComplete) {
                  setBounceComplete(true)
                }
              }}
            >
              {/* Pulse ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#25D366]"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut' as const,
                }}
              />

              {/* Bounce animation on load */}
              <motion.div
                animate={
                  bounceComplete
                    ? {}
                    : {
                        y: [0, -8, 0, -6, 0, -3, 0],
                      }
                }
                transition={
                  bounceComplete
                    ? {}
                    : {
                        duration: 1.2,
                        delay: 1.3,
                        ease: 'easeOut' as const,
                      }
                }
                onAnimationComplete={() => setBounceComplete(true)}
              >
                <MessageCircle className="w-6 h-6 fill-white text-white relative z-10" />
              </motion.div>
            </motion.button>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="font-[family-name:var(--font-poppins)] text-sm bg-[#2D2D2D] text-white border-[#2D2D2D]"
          >
            Chat on WhatsApp
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
