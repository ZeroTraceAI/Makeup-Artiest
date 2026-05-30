'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef, useState, useEffect } from 'react';
import { ArrowRight, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

/* ------------------------------------------------------------------ */
/*  Floating Particle                                                  */
/* ------------------------------------------------------------------ */
interface ParticleProps {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function Particle({ x, y, size, duration, delay }: ParticleProps) {
  return (
    <motion.span
      className="absolute rounded-full bg-[#D4A373]/30 pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [0, -120, -240],
        x: [0, Math.sin(x) * 20, Math.cos(x) * 10],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Decorative Glow Orb                                                */
/* ------------------------------------------------------------------ */
interface GlowOrbProps {
  className?: string;
}

function GlowOrb({ className = '' }: GlowOrbProps) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        background:
          'radial-gradient(circle, rgba(212,163,115,0.25) 0%, rgba(249,213,211,0.15) 40%, transparent 70%)',
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ------------------------------------------------------------------ */
/*  Rotating phrases for typewriter effect                             */
/* ------------------------------------------------------------------ */
const ROTATING_PHRASES = [
  'Professional Bridal Makeup Artist in Ahmedabad',
  'Creating Stunning Looks for Every Occasion',
  'Your Trusted Beauty & Makeup Expert',
  'Premium Airbrush & HD Makeup Specialist',
] as const;

const PHRASE_DURATION = 2500; // ms each phrase stays visible

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  /* Rotating typewriter text state */
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, PHRASE_DURATION);
    return () => clearInterval(interval);
  }, []);

  /* Generate deterministic particles via useMemo */
  const particles = useMemo<ParticleProps[]>(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        x: ((i * 37 + 13) % 97),
        y: 60 + ((i * 23 + 7) % 35),
        size: 4 + (i % 5) * 2,
        duration: 6 + (i % 4) * 2,
        delay: (i * 0.35) % 4,
      })),
    [],
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ---------- Background gradient ---------- */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <img
          src="/images/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9D5D3]/70 dark:from-[#1A1A1A]/70 via-[#F8EDE3]/85 dark:via-[#0F0F0F]/85 to-[#D4A373]/30 dark:to-[#1A1A1A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-[#0F0F0F]/50 via-transparent to-white/30 dark:to-[#0F0F0F]/30" />
      </motion.div>

      {/* ---------- Decorative glow orbs ---------- */}
      <GlowOrb className="w-[500px] h-[500px] -top-32 -left-32 opacity-70" />
      <GlowOrb className="w-[400px] h-[400px] -bottom-20 -right-20 opacity-50" />
      <GlowOrb className="w-[250px] h-[250px] top-1/3 right-1/4 opacity-40" />

      {/* ---------- Floating particles ---------- */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* ---------- Decorative lines ---------- */}
      <div className="absolute top-12 left-8 w-px h-24 bg-gradient-to-b from-transparent via-[#D4A373]/40 to-transparent hidden md:block" />
      <div className="absolute top-12 right-8 w-px h-24 bg-gradient-to-b from-transparent via-[#D4A373]/40 to-transparent hidden md:block" />
      <div className="absolute bottom-16 left-8 w-16 h-px bg-gradient-to-r from-transparent via-[#D4A373]/40 to-transparent hidden md:block" />
      <div className="absolute bottom-16 right-8 w-16 h-px bg-gradient-to-l from-transparent via-[#D4A373]/40 to-transparent hidden md:block" />

      {/* ---------- Corner accents ---------- */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-[#D4A373]/30 hidden md:block" />
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-[#D4A373]/30 hidden md:block" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-[#D4A373]/30 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-[#D4A373]/30 hidden md:block" />

      {/* ---------- Main content ---------- */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-[#1A1A1A]/60 backdrop-blur-md border border-[#D4A373]/20 text-sm font-[family-name:var(--font-poppins)] text-[#444444] dark:text-[#E8E0D8] shadow-sm">
            <span className="text-[#D4A373]">✨</span>
            Professional Makeup Artist in Ahmedabad
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
        >
          <span className="gradient-text">Transforming Beauty</span>
          <br />
          <span className="relative inline-block text-[#2D2D2D] dark:text-[#F0E8E0]">
            Into Confidence
            <span className="hero-gradient-underline absolute left-0 -bottom-2 h-[3px] w-full rounded-full" />
          </span>
        </motion.h1>

        {/* Rotating typewriter subheadline */}
        <motion.div
          variants={itemVariants}
          className="mt-6 h-8 sm:h-9 md:h-10 flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-base sm:text-lg md:text-xl text-[#444444]/80 dark:text-[#A09090]/80 max-w-2xl mx-auto font-[family-name:var(--font-poppins)] font-light leading-relaxed whitespace-nowrap"
            >
              {ROTATING_PHRASES[phraseIndex]}
              <span className="typewriter-cursor ml-0.5 inline-block align-middle" />
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#D4A373] hover:bg-[#c4935f] text-white px-8 py-6 text-base font-[family-name:var(--font-poppins)] font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <a href="#booking">
              <Calendar className="size-5" />
              Book Appointment
              <ArrowRight className="size-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373]/10 px-8 py-6 text-base font-[family-name:var(--font-poppins)] font-medium rounded-full hover:scale-105 transition-all duration-300"
          >
            <a href="#portfolio">
              <Eye className="size-5" />
              View Portfolio
            </a>
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-[#444444]/70 dark:text-[#A09090]/70 font-[family-name:var(--font-poppins)]"
        >
          <span className="text-[#D4A373]">★</span>
          <span>4.9 Google Rating</span>
          <span className="text-[#D4A373]/40">|</span>
          <span>155+ Happy Clients</span>
        </motion.div>
      </motion.div>

      {/* ---------- Bottom scroll indicator ---------- */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-[#D4A373]/40 flex items-start justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
