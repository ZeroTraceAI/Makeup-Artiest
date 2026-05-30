'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking at least 2-4 weeks in advance for bridal makeup and 1 week for party makeup. However, we do accommodate last-minute bookings based on availability.',
  },
  {
    question: 'Do you provide home service?',
    answer:
      'Yes! We offer home service across Ahmedabad and surrounding areas. An additional travel charge may apply for locations beyond 15km from our studio.',
  },
  {
    question: 'What brands do you use?',
    answer:
      'We exclusively use premium, international brands including MAC, Bobbi Brown, NARS, Charlotte Tilbury, and Huda Beauty to ensure the best results for your skin.',
  },
  {
    question: 'Do you travel outside Ahmedabad?',
    answer:
      'Absolutely! We travel across Gujarat and India for bridal bookings. Travel and accommodation charges apply for outstation bookings.',
  },
  {
    question: 'Do you offer bridal packages?',
    answer:
      'Yes, we offer comprehensive bridal packages that include engagement, mehendi, wedding, and reception looks. Custom packages can be created based on your specific requirements.',
  },
  {
    question: 'What is the difference between HD and Airbrush makeup?',
    answer:
      'HD makeup uses high-definition products applied with brushes for a flawless, natural finish. Airbrush makeup is sprayed on using an airbrush tool for a lightweight, long-lasting, and water-resistant finish ideal for long events.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleValueChange = (value: string[]) => {
    setOpenItems(value);
  };

  const isOpen = (itemId: string) => openItems.includes(itemId);

  return (
    <section id="faq" className="relative w-full bg-[#F8EDE3] dark:bg-[#1A1A1A] py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#D4A373] rounded-full blur-3xl opacity-10 translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#F9D5D3] rounded-full blur-3xl opacity-20 -translate-x-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            FAQ
          </motion.span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] dark:text-[#F0E8E0] mb-5">
            Frequently Asked Questions
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#444444] dark:text-[#A09090] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know
          </p>
          <div className="section-divider mt-8 mx-auto w-32" />
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={handleValueChange}
            className="space-y-4"
          >
            {faqItems.map((item, index) => {
              const itemId = `faq-${index}`;
              const currentlyOpen = isOpen(itemId);

              return (
                <motion.div
                  key={itemId}
                  variants={itemVariants}
                  whileHover={{
                    boxShadow: '0 8px 30px rgba(212, 163, 115, 0.15)',
                  }}
                  className={`rounded-xl bg-white dark:bg-[#0F0F0F] transition-all duration-500 overflow-hidden ${
                    currentlyOpen
                      ? 'shadow-lg shadow-[#D4A373]/10 border-l-4 border-[#D4A373]'
                      : 'shadow-sm border-l-4 border-transparent hover:border-[#D4A373]/30'
                  }`}
                >
                  <AccordionItem value={itemId} className="border-0">
                    <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Plus/Minus Icon */}
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            currentlyOpen
                              ? 'bg-[#D4A373] text-white rotate-0'
                              : 'bg-[#F9D5D3]/60 dark:bg-[#2A2222]/60 text-[#D4A373] group-hover:bg-[#D4A373]/20'
                          }`}
                        >
                          {currentlyOpen ? (
                            <Minus className="size-4" strokeWidth={2.5} />
                          ) : (
                            <Plus className="size-4" strokeWidth={2.5} />
                          )}
                        </div>

                        {/* Question Text */}
                        <span
                          className={`font-[family-name:var(--font-playfair)] text-base md:text-lg text-left transition-colors duration-300 ${
                            currentlyOpen
                              ? 'text-[#2D2D2D] dark:text-[#F0E8E0] font-semibold'
                              : 'text-[#444444] dark:text-[#A09090] font-medium group-hover:text-[#2D2D2D] dark:group-hover:text-[#F0E8E0]'
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      {/* Hide default chevron */}
                      <span className="sr-only">Toggle</span>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-0">
                      <div className="pl-12 pb-5">
                        <div className="section-divider mb-4" />
                        <p className="font-[family-name:var(--font-poppins)] text-sm md:text-base text-[#444444]/80 dark:text-[#A09090]/80 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
