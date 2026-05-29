'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye } from 'lucide-react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'

type Category = 'All' | 'Bridal' | 'Reception' | 'Party' | 'Fashion' | 'Hair Styling'

interface PortfolioItem {
  id: number
  title: string
  category: Exclude<Category, 'All'>
  gradient: string
  image?: string
  rowSpan: number
  colSpan: number
}

const categories: Category[] = ['All', 'Bridal', 'Reception', 'Party', 'Fashion', 'Hair Styling']

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Royal Bridal Look',
    category: 'Bridal',
    gradient: 'linear-gradient(135deg, #D4A373 0%, #F9D5D3 50%, #F8EDE3 100%)',
    image: '/images/portfolio-bridal-1.png',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    id: 2,
    title: 'Traditional South Indian Bride',
    category: 'Bridal',
    gradient: 'linear-gradient(135deg, #F9D5D3 0%, #D4A373 50%, #2D2D2D 100%)',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    id: 3,
    title: 'Modern Bridal Glam',
    category: 'Bridal',
    gradient: 'linear-gradient(135deg, #F8EDE3 0%, #D4A373 60%, #F9D5D3 100%)',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    id: 4,
    title: 'Reception Elegance',
    category: 'Reception',
    gradient: 'linear-gradient(135deg, #2D2D2D 0%, #D4A373 50%, #F8EDE3 100%)',
    image: '/images/portfolio-reception-1.png',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    id: 5,
    title: 'Cocktail Night Glam',
    category: 'Reception',
    gradient: 'linear-gradient(135deg, #D4A373 0%, #2D2D2D 60%, #F9D5D3 100%)',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    id: 6,
    title: 'Sangeet Sparkle',
    category: 'Reception',
    gradient: 'linear-gradient(135deg, #F9D5D3 0%, #F8EDE3 50%, #D4A373 100%)',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    id: 7,
    title: 'Party Queen',
    category: 'Party',
    gradient: 'linear-gradient(135deg, #D4A373 0%, #F9D5D3 100%)',
    image: '/images/portfolio-party-1.png',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    id: 8,
    title: 'Festive Glow',
    category: 'Party',
    gradient: 'linear-gradient(135deg, #F8EDE3 0%, #F9D5D3 50%, #D4A373 100%)',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    id: 9,
    title: 'Night Out Glam',
    category: 'Party',
    gradient: 'linear-gradient(135deg, #2D2D2D 0%, #D4A373 100%)',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    id: 10,
    title: 'Editorial Chic',
    category: 'Fashion',
    gradient: 'linear-gradient(135deg, #D4A373 0%, #2D2D2D 50%, #F8EDE3 100%)',
    image: '/images/portfolio-fashion-1.png',
    rowSpan: 1,
    colSpan: 1,
  },
  {
    id: 11,
    title: 'Runway Ready',
    category: 'Fashion',
    gradient: 'linear-gradient(135deg, #F9D5D3 0%, #2D2D2D 60%, #D4A373 100%)',
    rowSpan: 2,
    colSpan: 1,
  },
  {
    id: 12,
    title: 'Bridal Updo',
    category: 'Hair Styling',
    gradient: 'linear-gradient(135deg, #D4A373 0%, #F8EDE3 40%, #F9D5D3 100%)',
    image: '/images/portfolio-hair-1.png',
    rowSpan: 1,
    colSpan: 1,
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
    setDialogOpen(true)
  }

  return (
    <section id="portfolio" className="bg-white py-20 md:py-28">
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
            Portfolio
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] mt-3 text-3xl font-bold text-[#2D2D2D] sm:text-4xl md:text-5xl">
            Our Work Speaks For Itself
          </h2>
          <p className="font-[family-name:var(--font-poppins)] mx-auto mt-4 max-w-2xl text-base text-[#444444] md:text-lg">
            Browse our collection of stunning transformations
          </p>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 md:mb-14"
        >
          <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2 md:justify-center md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`font-[family-name:var(--font-poppins)] shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 md:px-6 md:py-2.5 md:text-base ${
                  activeFilter === category
                    ? 'bg-[#D4A373] text-white shadow-lg shadow-[#D4A373]/30'
                    : 'bg-[#F8EDE3] text-[#444444] hover:bg-[#F9D5D3] hover:text-[#2D2D2D]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  layout: { duration: 0.3 },
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-md ${
                  item.rowSpan === 2 ? 'row-span-2' : 'row-span-1'
                } ${item.colSpan === 2 ? 'col-span-2' : 'col-span-1'}`}
                onClick={() => handleItemClick(item)}
              >
                {/* Image or Gradient placeholder */}
                <div
                  className="aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-105 sm:aspect-auto sm:h-full relative"
                  style={{
                    background: item.gradient,
                    minHeight: item.rowSpan === 2 ? '500px' : '250px',
                  }}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center p-6">
                      <motion.div
                        className="rounded-full border-2 border-white/30 p-4"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Eye className="h-8 w-8 text-white/60" />
                      </motion.div>
                      <p className="font-[family-name:var(--font-cormorant)] mt-4 text-lg font-medium text-white/50 italic">
                        View Project
                      </p>
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2D2D2D]/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="transform text-center transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                    <span className="font-[family-name:var(--font-cormorant)] mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A373]">
                      {item.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <div className="h-px w-8 bg-[#D4A373]" />
                      <Eye className="h-4 w-4 text-[#D4A373]" />
                      <div className="h-px w-8 bg-[#D4A373]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-3xl border-none bg-[#2D2D2D] p-0 sm:max-w-4xl">
            {selectedItem && (
              <div className="overflow-hidden rounded-lg">
                {/* Large Image Display */}
                <div
                  className="relative flex min-h-[300px] items-center justify-center sm:min-h-[450px] md:min-h-[500px] overflow-hidden"
                  style={{ background: selectedItem.gradient }}
                >
                  {selectedItem.image ? (
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 896px"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40">
                        <Eye className="h-10 w-10 text-white/70" />
                      </div>
                      <p className="font-[family-name:var(--font-cormorant)] text-sm text-white/60 italic">
                        Makeup Therapy by Madhu
                      </p>
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="bg-[#2D2D2D] px-6 py-5 sm:px-8 sm:py-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-[family-name:var(--font-cormorant)] mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A373]">
                        {selectedItem.category}
                      </span>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white md:text-3xl">
                        {selectedItem.title}
                      </h3>
                      <p className="font-[family-name:var(--font-poppins)] mt-2 text-sm text-white/60">
                        A stunning {selectedItem.category.toLowerCase()} look crafted with precision
                        and artistry by Makeup Therapy by Madhu.
                      </p>
                    </div>
                    <DialogClose asChild>
                      <button className="shrink-0 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                      </button>
                    </DialogClose>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
