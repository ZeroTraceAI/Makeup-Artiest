'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSyncExternalStore } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const themeOptions = [
  { value: 'light' as const, label: 'Light', icon: Sun },
  { value: 'dark' as const, label: 'Dark', icon: Moon },
  { value: 'system' as const, label: 'System', icon: Monitor },
]

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full"
        aria-label="Toggle theme"
      >
        <span className="size-4" />
      </Button>
    )
  }

  const currentIcon =
    resolvedTheme === 'dark' ? Moon : resolvedTheme === 'light' ? Sun : Monitor

  const CurrentIconComponent = currentIcon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group relative h-9 w-9 rounded-full hover:bg-[#D4A373]/10 dark:hover:bg-[#D4A373]/20"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={resolvedTheme}
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <CurrentIconComponent className="size-[18px] text-[#D4A373] transition-colors group-hover:text-[#D4A373]" />
            </motion.div>
          </AnimatePresence>

          {/* Label visible on desktop only (hidden in navbar) */}
          <span className="sr-only sm:not-sr-only sm:ml-1 sm:inline sm:text-xs sm:font-[family-name:var(--font-poppins)] sm:text-[#D4A373] sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity">
            {theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-44 rounded-xl border-[#D4A373]/20 bg-white/95 backdrop-blur-md dark:bg-neutral-900/95 dark:border-[#D4A373]/30"
      >
        {themeOptions.map((option) => {
          const Icon = option.icon
          const isActive = theme === option.value

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value)}
              className={`flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 font-[family-name:var(--font-poppins)] text-sm transition-colors ${
                isActive
                  ? 'bg-[#D4A373]/10 text-[#D4A373] dark:bg-[#D4A373]/20 dark:text-[#D4A373]'
                  : 'text-neutral-700 hover:bg-[#D4A373]/5 dark:text-neutral-300 dark:hover:bg-[#D4A373]/10'
              }`}
            >
              <Icon className="size-4 shrink-0" />
              <span className="flex-1">{option.label}</span>
              {isActive && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Check className="size-3.5 text-[#D4A373]" />
                </motion.div>
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
