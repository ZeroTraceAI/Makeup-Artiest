'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  { label: 'Years of Experience', icon: '✓' },
  { label: 'Premium Products', icon: '✓' },
  { label: 'Personalized Looks', icon: '✓' },
  { label: '155+ Happy Clients', icon: '✓' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background: White with subtle champagne gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F8EDE3]/40" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#F9D5D3]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#D4A373]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Soft shadow/glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4A373]/20 to-[#F9D5D3]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />

              {/* Main image container with rose gold border */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4A373]/30 shadow-2xl shadow-[#D4A373]/10">
                {/* Image */}
                <img
                  src="/images/madhu-portrait.png"
                  alt="Madhu - Professional Makeup Artist"
                  className="w-full max-w-md h-auto object-cover rounded-2xl"
                  loading="lazy"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4A373]/5 to-transparent" />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12">
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#D4A373]" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#D4A373]" />
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12">
                <div className="absolute top-0 right-0 w-8 h-[2px] bg-[#D4A373]" />
                <div className="absolute top-0 right-0 w-[2px] h-8 bg-[#D4A373]" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12">
                <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#D4A373]" />
                <div className="absolute bottom-0 left-0 w-[2px] h-8 bg-[#D4A373]" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-[#D4A373]" />
                <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-[#D4A373]" />
              </div>

              {/* Floating decorative element */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F8EDE3] rounded-full flex items-center justify-center shadow-lg border border-[#D4A373]/20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-center">
                  <span className="block font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#D4A373]">
                    5+
                  </span>
                  <span className="block text-[10px] font-[family-name:var(--font-poppins)] text-[#444444] uppercase tracking-wider">
                    Years
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Section label */}
            <div>
              <span className="inline-block text-[#D4A373] text-xs font-[family-name:var(--font-poppins)] font-semibold uppercase tracking-[0.2em] mb-3">
                About Me
              </span>
            </div>

            {/* Main heading */}
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
              Meet Madhu
            </h2>

            {/* Subtitle */}
            <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl italic text-[#D4A373]">
              Your Trusted Makeup Artist
            </p>

            {/* Description paragraphs */}
            <div className="space-y-4">
              <p className="font-[family-name:var(--font-poppins)] text-[#444444] text-base leading-relaxed">
                With a passion for beauty and an eye for detail, I&apos;ve dedicated my career to
                helping every client discover their most radiant self. From the delicate artistry
                of bridal makeup to the bold creativity of party looks, I believe makeup is more
                than just application &mdash; it&apos;s therapy for the soul.
              </p>
              <p className="font-[family-name:var(--font-poppins)] text-[#444444] text-base leading-relaxed">
                Based in Ahmedabad, I specialize in creating personalized looks that enhance your
                natural beauty using only premium, skin-friendly products. Whether it&apos;s your
                wedding day, a festive celebration, or a professional photoshoot, I ensure every
                stroke of my brush reflects your unique personality.
              </p>
              <p className="font-[family-name:var(--font-poppins)] text-[#444444] text-base leading-relaxed">
                Serving clients across Gujarat, my mission is simple &mdash; to make you feel
                confident, beautiful, and truly yourself. Because when you look good, you feel
                unstoppable.
              </p>
            </div>

            {/* Highlights mini-grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={highlightVariants}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#F8EDE3]/50 border border-[#D4A373]/10"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A373]/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#D4A373]" />
                  </div>
                  <span className="font-[family-name:var(--font-poppins)] text-sm font-medium text-[#2D2D2D]">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <div className="pt-4">
              <a href="#contact">
                <Button
                  className="group bg-[#D4A373] hover:bg-[#c4935f] text-white font-[family-name:var(--font-poppins)] font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#D4A373]/25 hover:shadow-xl hover:shadow-[#D4A373]/30"
                  size="lg"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
