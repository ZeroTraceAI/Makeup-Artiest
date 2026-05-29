'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Heart, Star, Award, Sparkles } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                    */
/* ------------------------------------------------------------------ */
interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  inView: boolean;
}

function Counter({ target, suffix = '', prefix = '', decimals = 0, duration = 2, inView }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (value) => setCount(Number(value.toFixed(decimals))),
    });

    return () => controls.stop();
  }, [target, duration, decimals, inView]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Stat Card                                                           */
/* ------------------------------------------------------------------ */
interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  index: number;
  inView: boolean;
}

function StatCard({ icon, value, suffix, label, index, inView }: StatCardProps) {
  return (
    <motion.div
      className="group relative glass dark:bg-[#0F0F0F]/40 dark:border-[#3A3030]/30 rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg hover:shadow-[#D4A373]/10 transition-all duration-500 cursor-default"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {/* Accent top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#D4A373] to-transparent rounded-full" />

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D4A373]/10 text-[#D4A373] mb-4 group-hover:bg-[#D4A373]/20 transition-colors duration-300">
        {icon}
      </div>

      {/* Number */}
      <div className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#2D2D2D] dark:text-[#F0E8E0]">
        <Counter target={value} suffix={suffix} inView={inView} />
      </div>

      {/* Label */}
      <p className="mt-2 text-sm sm:text-base text-[#444444]/70 dark:text-[#A09090] font-[family-name:var(--font-poppins)] font-light">
        {label}
      </p>

      {/* Subtle hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(212,163,115,0.06) 0%, transparent 70%)' }} />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Trust Section                                                       */
/* ------------------------------------------------------------------ */
const stats = [
  {
    icon: <Heart className="size-6" />,
    value: 155,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: <Star className="size-6" />,
    value: 4.9,
    suffix: '',
    label: 'Google Rating',
    decimals: 1,
  },
  {
    icon: <Award className="size-6" />,
    value: 8,
    suffix: '+',
    label: 'Years Professional Experience',
  },
  {
    icon: <Sparkles className="size-6" />,
    value: 500,
    suffix: '+',
    label: 'Bridal Makeups Done',
  },
];

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="relative py-20 sm:py-28 bg-[#F8EDE3] dark:bg-[#1A1A1A]"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A373]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A373]/30 to-transparent" />

      {/* Subtle bg orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(212,163,115,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block text-sm font-[family-name:var(--font-cormorant)] text-[#D4A373] tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-[#2D2D2D] dark:text-[#F0E8E0]">
            Trusted by <span className="gradient-text">Hundreds</span>
          </h2>
          <p className="mt-4 text-[#444444]/70 dark:text-[#A09090] font-[family-name:var(--font-poppins)] font-light max-w-lg mx-auto">
            Numbers speak louder than words. Here&apos;s why our clients love us.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
              inView={inView}
              decimals={(stat as { decimals?: number }).decimals ?? 0}
            />
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-14 mx-auto max-w-xs section-divider"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
}
