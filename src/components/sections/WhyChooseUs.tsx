'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Palette, Award, HeartPulse, Clock, Home } from 'lucide-react'

interface Benefit {
  id: number
  icon: React.ElementType
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: ShieldCheck,
    title: 'Premium Products',
    description:
      'We use only high-end, skin-friendly products from top international brands for flawless results.',
  },
  {
    id: 2,
    icon: Palette,
    title: 'Personalized Looks',
    description:
      'Every look is uniquely tailored to your features, outfit, and personal style preferences.',
  },
  {
    id: 3,
    icon: Award,
    title: 'Experienced Artist',
    description:
      'Years of professional expertise ensuring perfection for your most important occasions.',
  },
  {
    id: 4,
    icon: HeartPulse,
    title: 'Hygienic Process',
    description:
      'Strict hygiene protocols with sanitized tools and fresh applicators for every client.',
  },
  {
    id: 5,
    icon: Clock,
    title: 'On-Time Service',
    description:
      'Punctual and reliable service so you never have to worry about running late on your big day.',
  },
  {
    id: 6,
    icon: Home,
    title: 'Home Service Available',
    description:
      'Enjoy professional makeup in the comfort of your home — convenience at your doorstep.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-[#F8EDE3] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="font-[family-name:var(--font-cormorant)] text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A373]">
            Why Choose Us
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] mt-3 text-3xl font-bold text-[#2D2D2D] sm:text-4xl md:text-5xl">
            The Makeup Therapy Difference
          </h2>
          <p className="font-[family-name:var(--font-poppins)] mx-auto mt-4 max-w-2xl text-base text-[#444444] md:text-lg">
            What sets us apart from the rest
          </p>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        {/* Benefit Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-l-4 hover:border-l-[#D4A373] md:p-8"
              >
                {/* Decorative corner accent */}
                <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#F9D5D3]/30 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#F9D5D3]/50" />

                {/* Icon */}
                <div className="relative mb-5 inline-flex">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D4A373]/30 bg-[#F8EDE3] transition-all duration-300 group-hover:border-[#D4A373] group-hover:bg-[#D4A373]">
                    <Icon className="h-6 w-6 text-[#D4A373] transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] mb-2 text-xl font-bold text-[#2D2D2D]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-poppins)] line-clamp-2 text-sm leading-relaxed text-[#444444]/80">
                  {benefit.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#D4A373] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
