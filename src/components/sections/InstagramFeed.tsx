'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface InstagramPost {
  id: number;
  caption: string;
  likes: number;
  gradient: string;
}

const posts: InstagramPost[] = [
  {
    id: 1,
    caption: 'Bridal glow ✨ Perfecting the art of timeless elegance',
    likes: 284,
    gradient: 'from-[#D4A373] via-[#E8C4A0] to-[#F9D5D3]',
  },
  {
    id: 2,
    caption: 'Soft glam for a dreamy engagement 💫',
    likes: 192,
    gradient: 'from-[#F9D5D3] via-[#F8EDE3] to-[#D4A373]',
  },
  {
    id: 3,
    caption: 'Bold lips & winged liner — a classic combo 💄',
    likes: 347,
    gradient: 'from-[#C4956A] via-[#D4A373] to-[#F8EDE3]',
  },
  {
    id: 4,
    caption: 'Pre-bridal skincare routine for that inner radiance 🌸',
    likes: 156,
    gradient: 'from-[#E8C4A0] via-[#F9D5D3] to-[#F8EDE3]',
  },
  {
    id: 5,
    caption: 'Cocktail night glam — shimmer & sophistication 🥂',
    likes: 221,
    gradient: 'from-[#D4A373] via-[#C4956A] to-[#E8C4A0]',
  },
  {
    id: 6,
    caption: 'Traditional bridal look with a modern twist 💍',
    likes: 412,
    gradient: 'from-[#F9D5D3] via-[#D4A373] to-[#C4956A]',
  },
  {
    id: 7,
    caption: 'Dewy fresh makeup — less is more 💧',
    likes: 178,
    gradient: 'from-[#F8EDE3] via-[#F9D5D3] to-[#D4A373]',
  },
  {
    id: 8,
    caption: 'Festival-ready with stunning eye art 🪔',
    likes: 298,
    gradient: 'from-[#D4A373] via-[#F8EDE3] to-[#F9D5D3]',
  },
];

const INSTAGRAM_URL = 'https://instagram.com/makeuptherapybymadhu';

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function formatLikes(count: number): string {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
}

function InstagramPostCard({ post }: { post: InstagramPost }) {
  return (
    <motion.a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative block aspect-square overflow-hidden rounded-2xl shadow-md"
    >
      {/* Gradient placeholder for image */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${post.gradient} transition-transform duration-500 group-hover:scale-110`}
      />

      {/* Decorative pattern overlay for visual interest */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 size-16 rounded-full border-2 border-white/40" />
        <div className="absolute bottom-1/4 right-1/4 size-24 rounded-full border border-white/30" />
        <div className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />
      </div>

      {/* Instagram logo in top-right corner */}
      <div className="absolute right-3 top-3 z-10 rounded-full bg-white/20 p-1.5 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">
        <Instagram className="size-3.5 text-white" />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2D2D2D]/0 transition-all duration-300 group-hover:bg-[#2D2D2D]/50">
        {/* Heart + likes (visible on hover) */}
        <div className="flex translate-y-4 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Heart className="size-6 fill-white text-white" />
          <span className="text-lg font-semibold text-white font-[family-name:var(--font-poppins)]">
            {formatLikes(post.likes)}
          </span>
        </div>

        {/* Caption preview (visible on hover) */}
        <p className="mt-2 max-w-[80%] translate-y-4 text-center text-sm leading-snug text-white/90 opacity-0 transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100 font-[family-name:var(--font-poppins)]">
          {post.caption}
        </p>
      </div>

      {/* Bottom caption bar (always visible, fades on hover) */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2D2D2D]/60 to-transparent px-3 pb-3 pt-8 transition-opacity duration-300 group-hover:opacity-0">
        <p className="truncate text-xs text-white/90 font-[family-name:var(--font-poppins)]">
          {post.caption}
        </p>
      </div>
    </motion.a>
  );
}

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/4 size-96 rounded-full bg-[#F9D5D3]/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-80 rounded-full bg-[#F8EDE3]/30 blur-3xl" />
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
            Follow Us
          </Badge>
          <h2 className="mb-3 text-3xl font-bold text-[#2D2D2D] sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)]">
            Stay Connected on Instagram
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[#666666] font-[family-name:var(--font-poppins)] text-base leading-relaxed">
            Follow our journey for daily beauty inspiration, behind-the-scenes looks, and the latest makeup trends
          </p>

          {/* Instagram handle with follow link */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group/ig inline-flex items-center gap-2 rounded-full border border-[#D4A373]/30 bg-[#F8EDE3]/50 px-5 py-2.5 transition-all duration-300 hover:border-[#D4A373] hover:bg-[#F8EDE3]"
            >
              <Instagram className="size-5 text-[#D4A373] transition-transform duration-300 group-hover/ig:scale-110" />
              <span className="text-sm font-medium text-[#D4A373] font-[family-name:var(--font-poppins)]">
                @makeuptherapybymadhu
              </span>
              <ExternalLink className="size-3.5 text-[#D4A373]/60 transition-all duration-300 group-hover/ig:text-[#D4A373]" />
            </a>
          </div>

          {/* Decorative divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A373]/40" />
            <div className="size-1.5 rounded-full bg-[#D4A373]/40" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A373]/40" />
          </div>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {posts.map((post) => (
            <InstagramPostCard key={post.id} post={post} />
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div variants={itemVariants} className="mt-14 text-center">
          <Button
            asChild
            size="lg"
            className="group rounded-full bg-[#D4A373] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#D4A373]/25 transition-all duration-300 hover:bg-[#C4956A] hover:shadow-xl hover:shadow-[#D4A373]/30 font-[family-name:var(--font-poppins)]"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 size-5 transition-transform duration-300 group-hover:rotate-12" />
              Follow on Instagram
            </a>
          </Button>

          {/* Subtle follower count hint */}
          <p className="mt-4 text-sm text-[#999999] font-[family-name:var(--font-cormorant)] italic text-lg">
            Join our growing community of beauty enthusiasts
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
