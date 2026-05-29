'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  service: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    text: 'Madhu made my wedding day absolutely perfect! My bridal makeup lasted the entire day and looked flawless in every photo. She understood exactly what I wanted.',
    rating: 5,
    service: 'Bridal Makeup',
  },
  {
    id: 2,
    name: 'Neha Patel',
    text: "The best makeup artist in Ahmedabad! I've tried many but Madhu's attention to detail and personalized approach is unmatched. Highly recommend!",
    rating: 5,
    service: 'Party Makeup',
  },
  {
    id: 3,
    name: 'Kavita Desai',
    text: 'My engagement look was stunning! Madhu created the perfect balance between traditional and modern. Received so many compliments!',
    rating: 5,
    service: 'Engagement Makeup',
  },
  {
    id: 4,
    name: 'Roshni Shah',
    text: "Booked Madhu for my sister's reception and she looked like a dream. The airbrush makeup was so natural yet glamorous!",
    rating: 5,
    service: 'Airbrush Makeup',
  },
  {
    id: 5,
    name: 'Meera Joshi',
    text: 'Madhu is incredibly talented and professional. She arrived on time, was super patient, and the final look exceeded my expectations!',
    rating: 5,
    service: 'Bridal Makeup',
  },
  {
    id: 6,
    name: 'Anjali Mehta',
    text: 'The pre-bridal package was amazing! My skin looked so radiant. Madhu really knows her craft and uses premium products.',
    rating: 5,
    service: 'Pre Bridal Package',
  },
  {
    id: 7,
    name: 'Shruti Trivedi',
    text: 'Got my cocktail party makeup done and I felt like a celebrity! The look was bold yet elegant. Will definitely book again!',
    rating: 5,
    service: 'Cocktail Makeup',
  },
  {
    id: 8,
    name: 'Pooja Raval',
    text: "Madhu's saree draping skills are exceptional! Combined with the gorgeous hairstyle, I looked picture-perfect for my function.",
    rating: 5,
    service: 'Saree Draping & Hair Styling',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating
              ? 'fill-[#D4A373] text-[#D4A373]'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(212, 163, 115, 0.15)' }}
      transition={{ duration: 0.3 }}
      className="h-full rounded-2xl border border-[#F0E6DC] bg-white p-6 shadow-md transition-colors"
    >
      {/* Decorative quote icon */}
      <div className="mb-4 flex items-start justify-between">
        <Quote className="size-8 text-[#D4A373] opacity-40" />
        <Badge
          variant="secondary"
          className="bg-[#F9D5D3]/40 text-[#D4A373] hover:bg-[#F9D5D3]/60 font-[family-name:var(--font-poppins)] text-xs"
        >
          {review.service}
        </Badge>
      </div>

      {/* Review text */}
      <p className="mb-5 text-[15px] leading-relaxed text-[#555555] italic font-[family-name:var(--font-cormorant)] text-lg">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Rating */}
      <div className="mb-3">
        <StarRating rating={review.rating} />
      </div>

      {/* Client name */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#D4A373] to-[#F9D5D3]">
          <span className="text-sm font-semibold text-white font-[family-name:var(--font-poppins)]">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#2D2D2D] font-[family-name:var(--font-poppins)]">
            {review.name}
          </p>
          <p className="text-xs text-[#888888] font-[family-name:var(--font-poppins)]">
            Verified Client
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 size-96 rounded-full bg-[#F9D5D3]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-[#F8EDE3]/40 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-14 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-[#D4A373]/30 bg-[#F9D5D3]/20 px-4 py-1.5 text-[#D4A373] font-[family-name:var(--font-poppins)] text-xs font-medium uppercase tracking-widest"
          >
            Client Reviews
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-[#2D2D2D] sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="size-5 fill-[#D4A373] text-[#D4A373]" />
              <span className="text-lg font-bold text-[#2D2D2D] font-[family-name:var(--font-poppins)]">
                4.9
              </span>
              <span className="text-sm text-[#888888] font-[family-name:var(--font-poppins)]">
                /5
              </span>
            </div>
            <div className="h-4 w-px bg-[#F0E6DC]" />
            <span className="text-sm text-[#888888] font-[family-name:var(--font-poppins)]">
              155+ Happy Clients
            </span>
          </div>
          <div className="section-divider mx-auto mt-6 max-w-48" />
        </motion.div>

        {/* Carousel */}
        <motion.div variants={itemVariants} className="relative">
          {/* Navigation arrows */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="pointer-events-auto -left-2 size-10 rounded-full border-[#D4A373]/30 bg-white/90 shadow-lg backdrop-blur-sm hover:bg-[#D4A373] hover:text-white sm:-left-5"
            >
              <ChevronLeft className="size-5" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center">
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="pointer-events-auto -right-2 size-10 rounded-full border-[#D4A373]/30 bg-white/90 shadow-lg backdrop-blur-sm hover:bg-[#D4A373] hover:text-white sm:-right-5"
            >
              <ChevronRight className="size-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Embla viewport */}
          <div
            ref={emblaRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="-ml-4 flex">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`size-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'w-8 bg-[#D4A373]'
                    : 'bg-[#D4A373]/30 hover:bg-[#D4A373]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
