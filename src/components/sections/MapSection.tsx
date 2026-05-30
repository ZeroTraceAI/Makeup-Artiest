'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

const mapVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay: 0.3 },
  },
};

const STUDIO_ADDRESS =
  'First Floor, Olive Greens, 125, Sarkhej-Gandhinagar Highway, Gota, Ahmedabad, Gujarat 382481';
const PHONE_NUMBER = '+91 99992 78874';
const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=23.0883,72.5077';
const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=23.0883,72.5077&z=15&output=embed';

export default function MapSection() {
  return (
    <section id="location" className="relative w-full bg-white dark:bg-[#0F0F0F] py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F9D5D3] rounded-full blur-3xl opacity-15 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4A373] rounded-full blur-3xl opacity-10 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-18"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="inline-block font-[family-name:var(--font-cormorant)] text-[#D4A373] text-lg md:text-xl tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Location
          </motion.span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] dark:text-[#F0E8E0] mb-5">
            Visit Our Studio
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#444444] dark:text-[#A09090] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Come experience luxury beauty services at our studio
          </p>
          <div className="section-divider mt-8 mx-auto w-32" />
        </motion.div>

        {/* Map and Info Card */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Map - Takes 2 columns on desktop */}
            <motion.div
              className="lg:col-span-2 relative"
              variants={mapVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#D4A373]/10 border border-[#F0E6DC] dark:border-[#3A3030]">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Makeup Therapy by Madhu Studio Location"
                  className="w-full h-[400px]"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/30 dark:from-[#0F0F0F]/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Info Card - Takes 1 column on desktop */}
            <motion.div
              className="lg:col-span-1"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="h-full bg-gradient-to-br from-white dark:from-[#1A1A1A] to-[#F8EDE3]/50 dark:to-[#242424]/50 rounded-2xl border border-[#F0E6DC] dark:border-[#3A3030] p-6 md:p-8 shadow-lg flex flex-col justify-between">
                {/* Address Section */}
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#D4A373]/15 flex items-center justify-center">
                      <MapPin className="size-5 text-[#D4A373]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#2D2D2D] dark:text-[#F0E8E0] mb-1.5">
                        Studio Address
                      </h3>
                      <p className="font-[family-name:var(--font-poppins)] text-sm text-[#444444]/80 dark:text-[#A09090]/80 leading-relaxed">
                        {STUDIO_ADDRESS}
                      </p>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#D4A373]/15 flex items-center justify-center">
                      <Phone className="size-5 text-[#D4A373]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#2D2D2D] dark:text-[#F0E8E0] mb-1.5">
                        Phone
                      </h3>
                      <a
                        href="tel:+919999278874"
                        className="font-[family-name:var(--font-poppins)] text-sm text-[#D4A373] hover:text-[#c4935f] transition-colors duration-300 underline underline-offset-4 decoration-[#D4A373]/30 hover:decoration-[#c4935f]"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="section-divider mb-6" />

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-[#D4A373] hover:bg-[#c4935f] text-white font-[family-name:var(--font-poppins)] text-sm font-medium rounded-full py-5 shadow-lg shadow-[#D4A373]/25 transition-all duration-300 cursor-pointer"
                    size="lg"
                  >
                    <a
                      href={MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="size-4 mr-2" />
                      Get Directions
                      <ExternalLink className="size-3 ml-1.5 opacity-60" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white font-[family-name:var(--font-poppins)] text-sm font-medium rounded-full py-5 transition-all duration-300 cursor-pointer"
                    size="lg"
                  >
                    <a href="tel:+919999278874">
                      <Phone className="size-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
