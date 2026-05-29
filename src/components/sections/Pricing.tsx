'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PricingFeature {
  text: string;
}

interface PricingPackage {
  name: string;
  price: string;
  features: PricingFeature[];
  popular?: boolean;
  whatsappMessage: string;
}

const packages: PricingPackage[] = [
  {
    name: 'Bridal Package',
    price: '₹25,000',
    features: [
      { text: 'Bridal Makeup' },
      { text: 'Hairstyling' },
      { text: 'Saree Draping' },
      { text: 'Touch-up Kit' },
      { text: 'Trial Session' },
    ],
    popular: true,
    whatsappMessage:
      'Hi Madhu! I am interested in the Bridal Package (₹25,000). Could you please share more details and availability?',
  },
  {
    name: 'Party Makeup',
    price: '₹5,000',
    features: [
      { text: 'Party Makeup' },
      { text: 'Hairstyling' },
      { text: 'False Lashes' },
      { text: 'Touch-up' },
      { text: 'Products Included' },
    ],
    whatsappMessage:
      'Hi Madhu! I am interested in the Party Makeup package (₹5,000). Could you please share more details and availability?',
  },
  {
    name: 'Fashion Makeup',
    price: '₹8,000',
    features: [
      { text: 'Creative Makeup' },
      { text: 'Hair Styling' },
      { text: 'Professional Products' },
      { text: 'Multiple Looks' },
      { text: 'Direction' },
    ],
    whatsappMessage:
      'Hi Madhu! I am interested in the Fashion Makeup package (₹8,000). Could you please share more details and availability?',
  },
  {
    name: 'Hair Styling',
    price: '₹3,000',
    features: [
      { text: 'Blow Dry' },
      { text: 'Curling' },
      { text: 'Updo' },
      { text: 'Braiding' },
      { text: 'Accessories' },
    ],
    whatsappMessage:
      'Hi Madhu! I am interested in the Hair Styling package (₹3,000). Could you please share more details and availability?',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Pricing() {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919999278874?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="pricing" className="relative w-full bg-white dark:bg-[#0F0F0F] py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F9D5D3] rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A373] rounded-full blur-3xl opacity-10 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
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
            Pricing
          </motion.span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] dark:text-[#F0E8E0] mb-5">
            Investment in Your Beauty
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#444444] dark:text-[#A09090] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for all our premium services
          </p>
          <div className="section-divider mt-8 mx-auto w-32" />
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: pkg.popular
                  ? '0 25px 60px rgba(212, 163, 115, 0.35)'
                  : '0 20px 50px rgba(212, 163, 115, 0.2)',
              }}
              className={`relative group rounded-2xl bg-white dark:bg-[#1A1A1A] transition-all duration-500 flex flex-col ${
                pkg.popular
                  ? 'border-2 border-[#D4A373] shadow-xl shadow-[#D4A373]/15 lg:scale-105 lg:z-10'
                  : 'border border-[#F0E6DC] dark:border-[#3A3030] shadow-md hover:border-[#D4A373]/50'
              }`}
            >
              {/* Top gradient bar for popular card */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-[#D4A373] via-[#F9D5D3] to-[#D4A373]" />
              )}

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <Badge className="bg-[#D4A373] text-white font-[family-name:var(--font-poppins)] text-xs px-4 py-1.5 shadow-lg shadow-[#D4A373]/30 border-0 rounded-full">
                    <Sparkles className="size-3.5 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="p-6 md:p-7 flex flex-col flex-1">
                {/* Package Name */}
                <h3
                  className={`font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-[#2D2D2D] dark:text-[#F0E8E0] text-center mb-2 ${
                    pkg.popular ? 'mt-3' : ''
                  }`}
                >
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="text-center my-5">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#D4A373]">
                    {pkg.price}
                  </span>
                </div>

                {/* Divider */}
                <div className="section-divider mb-5 mx-auto w-16" />

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          pkg.popular
                            ? 'bg-[#D4A373]/15'
                            : 'bg-[#F9D5D3]/50 dark:bg-[#2A2222]/50'
                        }`}
                      >
                        <Check
                          className={`size-3 ${
                            pkg.popular ? 'text-[#D4A373]' : 'text-[#D4A373]/70'
                          }`}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="font-[family-name:var(--font-poppins)] text-sm text-[#444444] dark:text-[#A09090] leading-snug">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp CTA */}
                <Button
                  onClick={() => openWhatsApp(pkg.whatsappMessage)}
                  className={`w-full font-[family-name:var(--font-poppins)] text-sm font-medium rounded-full py-5 transition-all duration-300 cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#D4A373] hover:bg-[#c4935f] text-white shadow-lg shadow-[#D4A373]/30'
                      : 'bg-white dark:bg-[#0F0F0F] border-2 border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white shadow-md'
                  }`}
                  size="lg"
                >
                  <MessageCircle className="size-4 mr-2" />
                  Book on WhatsApp
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          className="text-center mt-12 font-[family-name:var(--font-poppins)] text-sm text-[#444444]/70 dark:text-[#A09090]/70 italic"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Prices may vary based on requirements. Contact for custom packages.
        </motion.p>
      </div>
    </section>
  );
}
