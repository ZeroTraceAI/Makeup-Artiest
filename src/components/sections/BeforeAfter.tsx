'use client'

import React from 'react'
import { motion } from 'framer-motion'
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider'

const transformations = [
  {
    id: 1,
    title: 'Bridal Transformation',
    subtitle: 'From everyday beauty to blushing bride',
    beforeGradient:
      'linear-gradient(135deg, #b0a090 0%, #c4b8a8 30%, #d5ccc0 60%, #c8bdb0 100%)',
    afterGradient:
      'linear-gradient(135deg, #D4A373 0%, #F9D5D3 25%, #D4A373 50%, #F8EDE3 75%, #D4A373 100%)',
  },
  {
    id: 2,
    title: 'Party Glam Makeover',
    subtitle: 'Turn heads at every celebration',
    beforeGradient:
      'linear-gradient(135deg, #9e9e9e 0%, #b8b0a8 30%, #a8a098 60%, #b0a8a0 100%)',
    afterGradient:
      'linear-gradient(135deg, #2D2D2D 0%, #D4A373 30%, #F9D5D3 55%, #D4A373 80%, #2D2D2D 100%)',
  },
  {
    id: 3,
    title: 'Reception Ready Look',
    subtitle: 'Elegant sophistication for your special evening',
    beforeGradient:
      'linear-gradient(135deg, #a89888 0%, #c0b5a5 35%, #b5a898 65%, #a89888 100%)',
    afterGradient:
      'linear-gradient(135deg, #F8EDE3 0%, #D4A373 30%, #2D2D2D 55%, #D4A373 80%, #F8EDE3 100%)',
  },
]

export default function BeforeAfter() {
  return (
    <section id="transformations" className="bg-white py-20 md:py-28">
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
            Transformations
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] mt-3 text-3xl font-bold text-[#2D2D2D] sm:text-4xl md:text-5xl">
            Before &amp; After
          </h2>
          <p className="font-[family-name:var(--font-poppins)] mx-auto mt-4 max-w-2xl text-base text-[#444444] md:text-lg">
            Slide to reveal the stunning transformations we create for our clients
          </p>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        {/* Slider Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
            >
              <BeforeAfterSlider
                beforeGradient={item.beforeGradient}
                afterGradient={item.afterGradient}
                title={item.title}
                subtitle={item.subtitle}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="font-[family-name:var(--font-poppins)] mt-10 text-center text-sm text-[#888888] md:mt-12"
        >
          Drag the slider to see the transformation ✨
        </motion.p>
      </div>
    </section>
  )
}
