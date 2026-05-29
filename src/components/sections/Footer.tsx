'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram, Star, Heart } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Bridal Makeup',
  'HD Makeup',
  'Airbrush Makeup',
  'Party Makeup',
  'Hair Styling',
  'Pre Bridal Packages',
]

const contactLinks = [
  {
    id: 'phone',
    icon: Phone,
    label: '+91 99992 78874',
    href: 'tel:+919999278874',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: '+91 99992 78874',
    href: 'https://wa.me/919999278874',
  },
  {
    id: 'instagram',
    icon: Instagram,
    label: '@makeuptherapybymadhu',
    href: 'https://instagram.com/makeuptherapybymadhu',
  },
]

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#2D2D2D] dark:bg-[#1A1A1A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-white mb-3">
              Makeup Therapy by Madhu
            </h3>
            <p className="font-[family-name:var(--font-poppins)] text-[#F8EDE3] text-sm leading-relaxed mb-5">
              Transforming Beauty Into Confidence
            </p>

            {/* Google Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#D4A373] text-[#D4A373]"
                  />
                ))}
              </div>
              <span className="font-[family-name:var(--font-poppins)] text-[#F8EDE3] text-sm font-medium">
                4.9/5
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/makeuptherapybymadhu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A373] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#F8EDE3] group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://wa.me/919999278874"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#F8EDE3] group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="tel:+919999278874"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A373] transition-all duration-300 group"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-[#F8EDE3] group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group relative font-[family-name:var(--font-poppins)] text-[#F8EDE3] text-sm hover:text-[#D4A373] transition-colors duration-300 inline-block"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4A373] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group relative font-[family-name:var(--font-poppins)] text-[#F8EDE3] text-sm hover:text-[#D4A373] transition-colors duration-300 inline-block"
                  >
                    {service}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4A373] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <item.icon className="w-4 h-4 text-[#D4A373] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-[family-name:var(--font-poppins)] text-[#F8EDE3] text-sm group-hover:text-[#D4A373] transition-colors duration-300">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#D4A373] flex-shrink-0 mt-0.5"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-[family-name:var(--font-poppins)] text-[#F8EDE3] text-sm leading-relaxed">
                  Olive Greens, SG Highway, Gota, Ahmedabad 382481
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-white/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-poppins)] text-[#F8EDE3]/60 text-xs sm:text-sm">
            &copy; 2024 Makeup Therapy by Madhu. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-poppins)] text-[#F8EDE3]/60 text-xs sm:text-sm flex items-center gap-1.5">
            Made with{' '}
            <Heart className="w-3.5 h-3.5 fill-[#D4A373] text-[#D4A373]" />{' '}
            in Ahmedabad
          </p>
        </div>
      </div>
    </footer>
  )
}
