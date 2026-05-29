'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Crown,
  Sparkles,
  Wind,
  Heart,
  PartyPopper,
  Gem,
  Wine,
  Calendar,
  Camera,
  Scissors,
  Palette,
  Hand,
  ArrowRight,
  GlassWater,
  Aperture,
  Flower2,
  Stars,
} from 'lucide-react';

interface Service {
  name: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    name: 'Bridal Makeup',
    description: 'Timeless elegance for your special day',
    icon: Crown,
  },
  {
    name: 'HD Makeup',
    description: 'Flawless high-definition finish',
    icon: Sparkles,
  },
  {
    name: 'Airbrush Makeup',
    description: 'Seamless, lightweight perfection',
    icon: Wind,
  },
  {
    name: 'Traditional Bridal',
    description: 'Classic bridal beauty with cultural grace',
    icon: Heart,
  },
  {
    name: 'Reception Makeup',
    description: 'Glamorous looks for your reception',
    icon: GlassWater,
  },
  {
    name: 'Party Makeup',
    description: 'Bold & beautiful party-ready looks',
    icon: PartyPopper,
  },
  {
    name: 'Engagement Makeup',
    description: 'Radiant glow for your engagement',
    icon: Gem,
  },
  {
    name: 'Cocktail Makeup',
    description: 'Chic & sophisticated evening looks',
    icon: Wine,
  },
  {
    name: 'Event Makeup',
    description: 'Stunning looks for every occasion',
    icon: Calendar,
  },
  {
    name: 'Fashion Makeup',
    description: 'Editorial & runway-ready artistry',
    icon: Camera,
  },
  {
    name: 'Photoshoots',
    description: 'Camera-ready perfection for every shot',
    icon: Aperture,
  },
  {
    name: 'Hair Styling',
    description: 'Trendy & elegant hair transformations',
    icon: Scissors,
  },
  {
    name: 'Bridal Hairstyling',
    description: 'Regal bridal hair masterpieces',
    icon: Flower2,
  },
  {
    name: 'Saree Draping',
    description: 'Perfect pleats & elegant draping',
    icon: Palette,
  },
  {
    name: 'Pre Bridal Packages',
    description: 'Complete pre-wedding beauty care',
    icon: Stars,
  },
  {
    name: 'Nail Services',
    description: 'Beautiful nails for every occasion',
    icon: Hand,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background: Champagne with subtle pattern */}
      <div className="absolute inset-0 bg-[#F8EDE3]" />
      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #D4A373 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#D4A373]/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#F9D5D3]/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4A373] text-xs font-[family-name:var(--font-poppins)] font-semibold uppercase tracking-[0.2em] mb-3">
            Our Services
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] leading-tight mb-4">
            Premium Makeup Services
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl italic text-[#444444] max-w-2xl mx-auto">
            Transforming your beauty with expert artistry
          </p>
          {/* Decorative divider */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#D4A373]/40" />
            <div className="w-2 h-2 rounded-full bg-[#D4A373]" />
            <div className="h-[1px] w-12 bg-[#D4A373]/40" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div
                  className={`
                    relative h-full p-5 md:p-6 rounded-xl bg-white border border-[#D4A373]/10
                    transition-all duration-400 ease-out cursor-pointer overflow-hidden
                    ${isHovered ? '-translate-y-2 border-[#D4A373]/50 shadow-xl shadow-[#D4A373]/10' : 'shadow-sm shadow-[#D4A373]/5'}
                  `}
                >
                  {/* Hover shimmer effect */}
                  <div
                    className={`
                      absolute inset-0 opacity-0 transition-opacity duration-500
                      ${isHovered ? 'opacity-100' : ''}
                    `}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4A373]/5 via-transparent to-[#F9D5D3]/5" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="mx-auto mb-4 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8EDE3] border border-[#D4A373]/15 flex items-center justify-center transition-all duration-300 group-hover:bg-[#D4A373]/10 group-hover:border-[#D4A373]/30 group-hover:scale-110">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#D4A373]" strokeWidth={1.5} />
                    </div>

                    {/* Service name */}
                    <h3 className="font-[family-name:var(--font-playfair)] text-base md:text-lg font-semibold text-[#2D2D2D] mb-2 leading-snug">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="font-[family-name:var(--font-poppins)] text-xs md:text-sm text-[#888888] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Book Now link - appears on hover */}
                    <div
                      className={`
                        mt-3 transition-all duration-300 overflow-hidden
                        ${isHovered ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <a
                        href="https://wa.me/919999278874?text=Hi%20Madhu%2C%20I%27m%20interested%20in%20your%20makeup%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#D4A373] text-xs font-[family-name:var(--font-poppins)] font-medium hover:underline"
                      >
                        Book Now
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mt-16"
        >
          <p className="font-[family-name:var(--font-poppins)] text-[#444444] text-sm md:text-base mb-6">
            Can&apos;t find what you&apos;re looking for? We offer custom packages tailored to your needs.
          </p>
          <a href="#contact">
            <button className="group inline-flex items-center gap-2 bg-[#D4A373] hover:bg-[#c4935f] text-white font-[family-name:var(--font-poppins)] font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#D4A373]/25 hover:shadow-xl hover:shadow-[#D4A373]/30">
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
