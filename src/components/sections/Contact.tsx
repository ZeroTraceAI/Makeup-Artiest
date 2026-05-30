'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram, MapPin, Clock, Send, Check } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 99992 78874',
    href: 'tel:+919999278874',
    color: '#D4A373',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 99992 78874',
    href: 'https://wa.me/919999278874',
    color: '#25D366',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@makeuptherapybymadhu',
    href: 'https://instagram.com/makeuptherapybymadhu',
    color: '#E1306C',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'First Floor, Olive Greens, 125, Sarkhej-Gandhinagar Highway, Gota, Ahmedabad, Gujarat 382481',
    href: 'https://maps.google.com/?q=Makeup+Therapy+by+Madhu+Gota+Ahmedabad',
    color: '#D4A373',
  },
]

const workingHours = {
  icon: Clock,
  label: 'Working Hours',
  value: 'Mon-Sat: 9:00 AM - 8:00 PM',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.message) return

    setIsSubmitting(true)

    const whatsappMessage = encodeURIComponent(
      `Hi Madhu! I'm ${formData.name}.\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    )
    const whatsappUrl = `https://wa.me/919999278874?text=${whatsappMessage}`

    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', phone: '', message: '' })
      }, 3000)
    }, 500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white dark:bg-[#0F0F0F] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F9D5D3]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F8EDE3]/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-[family-name:var(--font-cormorant)] text-[#D4A373] text-lg md:text-xl tracking-[0.2em] uppercase mb-3">
            Contact
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] dark:text-[#F0E8E0] mb-4">
            Get In Touch
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#444444] dark:text-[#A09090] text-base md:text-lg max-w-md mx-auto">
            We&apos;d love to hear from you
          </p>
          <div className="section-divider w-24 mx-auto mt-6" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info - Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-5"
          >
            {contactInfo.map((item) => (
              <motion.a
                key={item.label}
                variants={itemVariants}
                href={item.href}
                target={item.label === 'WhatsApp' || item.label === 'Instagram' || item.label === 'Address' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl border border-[#F0E6DC] dark:border-[#3A3030] bg-white dark:bg-[#1A1A1A] hover:bg-[#F8EDE3]/30 dark:hover:bg-[#242424]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A373]/10 hover:-translate-y-0.5"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: item.color }}
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-poppins)] text-xs font-semibold tracking-wider uppercase text-[#D4A373] mb-1">
                    {item.label}
                  </p>
                  <p className="font-[family-name:var(--font-poppins)] text-[#2D2D2D] dark:text-[#F0E8E0] text-sm md:text-base leading-relaxed group-hover:text-[#D4A373] transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Working Hours */}
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-5 rounded-2xl border border-[#D4A373]/20 bg-gradient-to-r from-[#F8EDE3]/40 dark:from-[#242424]/40 to-[#F9D5D3]/20 dark:to-[#2A2222]/20"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D4A373]/15 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#D4A373]" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-poppins)] text-xs font-semibold tracking-wider uppercase text-[#D4A373] mb-1">
                  {workingHours.label}
                </p>
                <p className="font-[family-name:var(--font-poppins)] text-[#2D2D2D] dark:text-[#F0E8E0] text-sm md:text-base">
                  {workingHours.value}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-[#1A1A1A] border border-[#F0E6DC] dark:border-[#3A3030] shadow-xl shadow-[#D4A373]/5">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4A373]/10 to-transparent" />
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-semibold text-[#2D2D2D] dark:text-[#F0E8E0] mb-2">
                Quick Contact
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-[#444444] dark:text-[#A09090] text-sm mb-8">
                Send us a message and we&apos;ll get back to you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-[family-name:var(--font-poppins)] text-sm font-medium text-[#2D2D2D] dark:text-[#F0E8E0] mb-2"
                  >
                    Name <span className="text-[#D4A373]">*</span>
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="font-[family-name:var(--font-poppins)] h-12 rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-[#F8EDE3]/20 dark:bg-[#242424]/20 focus:border-[#D4A373] focus:ring-[#D4A373]/20 placeholder:text-[#999] dark:placeholder:text-[#666] text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block font-[family-name:var(--font-poppins)] text-sm font-medium text-[#2D2D2D] dark:text-[#F0E8E0] mb-2"
                  >
                    Phone <span className="text-[#D4A373]">*</span>
                  </label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="font-[family-name:var(--font-poppins)] h-12 rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-[#F8EDE3]/20 dark:bg-[#242424]/20 focus:border-[#D4A373] focus:ring-[#D4A373]/20 placeholder:text-[#999] dark:placeholder:text-[#666] text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-[family-name:var(--font-poppins)] text-sm font-medium text-[#2D2D2D] dark:text-[#F0E8E0] mb-2"
                  >
                    Message <span className="text-[#D4A373]">*</span>
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="font-[family-name:var(--font-poppins)] rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-[#F8EDE3]/20 dark:bg-[#242424]/20 focus:border-[#D4A373] focus:ring-[#D4A373]/20 placeholder:text-[#999] dark:placeholder:text-[#666] text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full h-12 rounded-xl font-[family-name:var(--font-poppins)] text-sm font-semibold bg-[#D4A373] hover:bg-[#c4935f] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A373]/30 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' as const }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
