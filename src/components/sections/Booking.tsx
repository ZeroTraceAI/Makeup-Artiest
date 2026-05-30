'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const services = [
  'Bridal Makeup',
  'HD Makeup',
  'Airbrush Makeup',
  'Party Makeup',
  'Engagement Makeup',
  'Cocktail Makeup',
  'Reception Makeup',
  'Pre Bridal Package',
  'Saree Draping',
  'Hair Styling',
  'Saree Draping & Hair Styling',
];

const eventTypes = [
  'Wedding',
  'Engagement',
  'Reception',
  'Party',
  'Photoshoot',
  'Other',
];

const timeSlots = [
  'Morning (9 AM - 12 PM)',
  'Afternoon (12 PM - 4 PM)',
  'Evening (4 PM - 8 PM)',
];

const locations = ['Studio Visit', 'Home Service'];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  eventType: string;
  eventDate: string;
  preferredTime: string;
  location: string;
  specialNotes: string;
}

interface FormErrors {
  [key: string]: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const formFieldVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function Booking() {
  const { toast } = useToast();
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    eventType: '',
    eventDate: '',
    preferredTime: '',
    location: '',
    specialNotes: '',
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select an event date';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    if (!formData.location) {
      newErrors.location = 'Please select a location';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = (): string => {
    const message = `Hello Makeup Therapy by Madhu,

I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Service: ${formData.service}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Preferred Time: ${formData.preferredTime}
Location: ${formData.location}
Special Notes: ${formData.specialNotes || 'N/A'}

Please confirm availability.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Please fill in all required fields',
        description: 'Check the highlighted fields and try again.',
        variant: 'default',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate brief processing
    await new Promise((resolve) => setTimeout(resolve, 500));

    const whatsappUrl = `https://wa.me/919999278874?text=${generateWhatsAppMessage()}`;

    toast({
      title: 'Redirecting to WhatsApp!',
      description: 'Your booking details will be shared with Madhu. Please send the message on WhatsApp to confirm.',
    });

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#F8EDE3] dark:bg-[#1A1A1A] py-20 lg:py-28"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 size-72 rounded-full bg-[#F9D5D3]/30 dark:bg-[#F9D5D3]/10 blur-3xl" />
        <div className="absolute -left-24 bottom-20 size-64 rounded-full bg-[#D4A373]/10 dark:bg-[#D4A373]/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 dark:bg-white/5 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-[#D4A373]/30 bg-white/60 dark:bg-[#1A1A1A]/60 px-4 py-1.5 text-[#D4A373] font-[family-name:var(--font-poppins)] text-xs font-medium uppercase tracking-widest backdrop-blur-sm"
          >
            Book Now
          </Badge>
          <h2 className="mb-3 text-3xl font-bold text-[#2D2D2D] dark:text-[#F0E8E0] sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
            Book Your Appointment
          </h2>
          <p className="mx-auto max-w-lg text-base text-[#666666] dark:text-[#A09090] font-[family-name:var(--font-poppins)]">
            Let&apos;s create your perfect look together
          </p>
          <div className="section-divider mx-auto mt-6 max-w-48" />
        </motion.div>

        {/* Form Card with glassmorphism */}
        <motion.div variants={itemVariants}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative rounded-3xl border border-white/40 dark:border-[#3A3030]/40 bg-white/70 dark:bg-[#0F0F0F]/70 p-6 shadow-xl backdrop-blur-xl sm:p-8 lg:p-10"
          >
            {/* Decorative sparkle */}
            <div className="absolute -right-3 -top-3 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#D4A373] to-[#F9D5D3] shadow-lg">
              <Sparkles className="size-5 text-white" />
            </div>

            <motion.div
              variants={containerVariants}
              className="grid gap-5 sm:grid-cols-2 sm:gap-6"
            >
              {/* Name */}
              <motion.div variants={formFieldVariants} className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-[#2D2D2D] dark:text-[#E8E0D8] font-[family-name:var(--font-poppins)] text-sm font-medium"
                >
                  Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className={`h-11 rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-white/80 dark:bg-[#1A1A1A]/80 font-[family-name:var(--font-poppins)] placeholder:text-[#aaaaaa] dark:placeholder:text-[#666666] focus-visible:border-[#D4A373] focus-visible:ring-[#D4A373]/20 ${
                    errors.name ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/20' : ''
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 font-[family-name:var(--font-poppins)]">{errors.name}</p>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div variants={formFieldVariants} className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-[#2D2D2D] dark:text-[#E8E0D8] font-[family-name:var(--font-poppins)] text-sm font-medium"
                >
                  Phone <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 99999 99999"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className={`h-11 rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-white/80 dark:bg-[#1A1A1A]/80 font-[family-name:var(--font-poppins)] placeholder:text-[#aaaaaa] dark:placeholder:text-[#666666] focus-visible:border-[#D4A373] focus-visible:ring-[#D4A373]/20 ${
                    errors.phone ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/20' : ''
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-400 font-[family-name:var(--font-poppins)]">{errors.phone}</p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={formFieldVariants} className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[#2D2D2D] dark:text-[#E8E0D8] font-[family-name:var(--font-poppins)] text-sm font-medium"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={`h-11 rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-white/80 dark:bg-[#1A1A1A]/80 font-[family-name:var(--font-poppins)] placeholder:text-[#aaaaaa] dark:placeholder:text-[#666666] focus-visible:border-[#D4A373] focus-visible:ring-[#D4A373]/20 ${
                    errors.email ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/20' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 font-[family-name:var(--font-poppins)]">{errors.email}</p>
                )}
              </motion.div>

              {/* Service */}
              <motion.div variants={formFieldVariants} className="space-y-2">
                <Label
                  htmlFor="service"
                  className="text-[#2D2D2D] dark:text-[#E8E0D8] font-[family-name:var(--font-poppins)] text-sm font-medium"
                >
                  Service <span className="text-red-400">*</span>
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => updateField('service', value)}
                >
                  <SelectTrigger
                    className={`h-11 w-full rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-white/80 dark:bg-[#1A1A1A]/80 font-[family-name:var(--font-poppins)] focus:ring-[#D4A373]/20 ${
                      errors.service ? 'border-red-400' : ''
                    }`}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl font-[family-name:var(--font-poppins)] dark:bg-[#1A1A1A] dark:border-[#3A3030]">
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-xs text-red-400 font-[family-name:var(--font-poppins)]">{errors.service}</p>
                )}
              </motion.div>

              {/* Event Type */}
              <motion.div variants={formFieldVariants} className="space-y-2">
                <Label
                  htmlFor="eventType"
                  className="text-[#2D2D2D] dark:text-[#E8E0D8] font-[family-name:var(--font-poppins)] text-sm font-medium"
                >
                  Event Type <span className="text-red-400">*</span>
                </Label>
                <Select
                  value={formData.eventType}
                  onValueChange={(value) => updateField('eventType', value)}
                >
                  <SelectTrigger
                    className={`h-11 w-full rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-white/80 dark:bg-[#1A1A1A]/80 font-[family-name:var(--font-poppins)] focus:ring-[#D4A373]/20 ${
                      errors.eventType ? 'border-red-400' : ''
                    }`}
                  >
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl font-[family-name:var(--font-poppins)] dark:bg-[#1A1A1A] dark:border-[#3A3030]">
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.eventType && (
                  <p className="text-xs text-red-400 font-[family-name:var(--font-poppins)]">{errors.eventType}</p>
                )}
              </motion.div>

              {/* Event Date */}
              <motion.div variants={formFieldVariants} className="space-y-2">
                <Label
                  htmlFor="eventDate"
                  className="text-[#2D2D2D] dark:text-[#E8E0D8] font-[family-name:var(--font-poppins)] text-sm font-medium"
                >
                  Event Date <span className="text-red-400">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="eventDate"
                    type="date"
                    min={today}
                    value={formData.eventDate}
                    onChange={(e) => updateField('eventDate', e.target.value)}
                    className={`h-11 rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-white/80 dark:bg-[#1A1A1A]/80 font-[family-name:var(--font-poppins)] focus-visible:border-[#D4A373] focus-visible:ring-[#D4A373]/20 ${
                      errors.eventDate ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400/20' : ''
                    }`}
                  />
                  <Calendar className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#D4A373]" />
                </div>
                {errors.eventDate && (
                  <p className="text-xs text-red-400 font-[family-name:var(--font-poppins)]">{errors.eventDate}</p>
                )}
              </motion.div>

              {/* Preferred Time */}
              <motion.div variants={formFieldVariants} className="space-y-2">
                <Label
                  htmlFor="preferredTime"
                  className="text-[#2D2D2D] dark:text-[#E8E0D8] font-[family-name:var(--font-poppins)] text-sm font-medium"
                >
                  Preferred Time <span className="text-red-400">*</span>
                </Label>
                <div className="relative">
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => updateField('preferredTime', value)}
                  >
                    <SelectTrigger
                      className={`h-11 w-full rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-white/80 dark:bg-[#1A1A1A]/80 font-[family-name:var(--font-poppins)] focus:ring-[#D4A373]/20 ${
                        errors.preferredTime ? 'border-red-400' : ''
                      }`}
                    >
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl font-[family-name:var(--font-poppins)] dark:bg-[#1A1A1A] dark:border-[#3A3030]">
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Clock className="pointer-events-none absolute right-10 top-1/2 size-4 -translate-y-1/2 text-[#D4A373]" />
                </div>
                {errors.preferredTime && (
                  <p className="text-xs text-red-400 font-[family-name:var(--font-poppins)]">{errors.preferredTime}</p>
                )}
              </motion.div>

              {/* Location */}
              <motion.div variants={formFieldVariants} className="space-y-2">
                <Label
                  htmlFor="location"
                  className="text-[#2D2D2D] dark:text-[#E8E0D8] font-[family-name:var(--font-poppins)] text-sm font-medium"
                >
                  Location <span className="text-red-400">*</span>
                </Label>
                <div className="relative">
                  <Select
                    value={formData.location}
                    onValueChange={(value) => updateField('location', value)}
                  >
                    <SelectTrigger
                      className={`h-11 w-full rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-white/80 dark:bg-[#1A1A1A]/80 font-[family-name:var(--font-poppins)] focus:ring-[#D4A373]/20 ${
                        errors.location ? 'border-red-400' : ''
                      }`}
                    >
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl font-[family-name:var(--font-poppins)] dark:bg-[#1A1A1A] dark:border-[#3A3030]">
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <MapPin className="pointer-events-none absolute right-10 top-1/2 size-4 -translate-y-1/2 text-[#D4A373]" />
                </div>
                {errors.location && (
                  <p className="text-xs text-red-400 font-[family-name:var(--font-poppins)]">{errors.location}</p>
                )}
              </motion.div>

              {/* Special Notes - full width */}
              <motion.div variants={formFieldVariants} className="space-y-2 sm:col-span-2">
                <Label
                  htmlFor="specialNotes"
                  className="text-[#2D2D2D] dark:text-[#E8E0D8] font-[family-name:var(--font-poppins)] text-sm font-medium"
                >
                  Special Notes
                </Label>
                <Textarea
                  id="specialNotes"
                  placeholder="Any special requirements, preferences, or details about your look..."
                  value={formData.specialNotes}
                  onChange={(e) => updateField('specialNotes', e.target.value)}
                  rows={3}
                  className="min-h-[80px] rounded-xl border-[#F0E6DC] dark:border-[#3A3030] bg-white/80 dark:bg-[#1A1A1A]/80 font-[family-name:var(--font-poppins)] placeholder:text-[#aaaaaa] dark:placeholder:text-[#666666] focus-visible:border-[#D4A373] focus-visible:ring-[#D4A373]/20"
                />
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={formFieldVariants}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group w-full rounded-xl bg-gradient-to-r from-[#D4A373] to-[#c4935f] px-8 h-[52px] text-base font-semibold text-white shadow-lg shadow-[#D4A373]/30 transition-all duration-300 hover:from-[#c4935f] hover:to-[#b8844f] hover:shadow-xl hover:shadow-[#D4A373]/40 sm:w-auto sm:min-w-[280px] font-[family-name:var(--font-poppins)]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="size-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <MessageCircle className="size-5 transition-transform group-hover:scale-110" />
                    Book via WhatsApp
                  </span>
                )}
              </Button>
              <p className="text-center text-xs text-[#888888] dark:text-[#666666] font-[family-name:var(--font-poppins)]">
                You&apos;ll be redirected to WhatsApp to confirm your appointment
              </p>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
