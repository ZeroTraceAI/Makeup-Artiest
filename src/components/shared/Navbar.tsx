'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, Home, User, Sparkles, Camera, Tag, Star, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', icon: <Home className="size-4" /> },
  { label: 'About', href: '#about', icon: <User className="size-4" /> },
  { label: 'Services', href: '#services', icon: <Sparkles className="size-4" /> },
  { label: 'Portfolio', href: '#portfolio', icon: <Camera className="size-4" /> },
  { label: 'Pricing', href: '#pricing', icon: <Tag className="size-4" /> },
  { label: 'Reviews', href: '#reviews', icon: <Star className="size-4" /> },
  { label: 'Contact', href: '#contact', icon: <Phone className="size-4" /> },
];

const WHATSAPP_URL = 'https://wa.me/919999278874?text=Hi%20Madhu%2C%20I%27d%20like%20to%20book%20an%20appointment!';

const SCROLL_THRESHOLD = 50;

/* ------------------------------------------------------------------ */
/*  Navbar Component                                                   */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ---------- Scroll listener ---------- */
  const scrollRef = useRef(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;
    if (scrollRef.current !== scrolled) {
      scrollRef.current = scrolled;
      setIsScrolled(scrolled);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* ---------- Active section observer ---------- */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ---------- Smooth scroll handler ---------- */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // close mobile menu if open
      if (mobileOpen) setMobileOpen(false);
    },
    [mobileOpen]
  );

  /* ---------- Lock body scroll when mobile menu open ---------- */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(212,163,115,0.12)]'
            : 'bg-white/60 backdrop-blur-sm'
        }`}
      >
        <nav
          className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[60px] lg:h-[70px]"
        >
          {/* ---- Logo / Brand ---- */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 shrink-0"
          >
            {/* Decorative diamond icon */}
            <span
              className="text-[#D4A373] text-xl transition-transform duration-300 group-hover:rotate-45"
              aria-hidden="true"
            >
              ◆
            </span>
            <span
              className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-semibold tracking-wide text-[#2D2D2D] transition-colors duration-300"
            >
              Makeup Therapy
              <span
                className="block text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-cormorant)] font-medium -mt-1 text-[#D4A373] transition-colors duration-300"
              >
                by Madhu
              </span>
            </span>
          </a>

          {/* ---- Desktop Nav Links ---- */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative font-[family-name:var(--font-poppins)] text-[13px] font-medium tracking-wide uppercase px-3 py-2 transition-colors duration-300 group ${
                      isActive
                        ? 'text-[#D4A373]'
                        : 'text-[#444444] hover:text-[#D4A373]'
                    }`}
                  >
                    {link.label}
                    {/* Underline animation — scales from center */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#D4A373] rounded-full transition-all duration-300 ease-out ${
                        isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ---- Desktop CTA ---- */}
          <div className="hidden lg:block">
            <a href="#booking" onClick={(e) => handleNavClick(e, '#booking')}>
              <Button
                className="font-[family-name:var(--font-poppins)] text-xs font-semibold tracking-wider uppercase bg-[#D4A373] hover:bg-[#c4935f] text-white rounded-sm px-6 h-10 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Book Now
              </Button>
            </a>
          </div>

          {/* ---- Mobile Hamburger ---- */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-md transition-colors duration-300 cursor-pointer text-[#2D2D2D] hover:text-[#D4A373]"
            aria-label="Open navigation menu"
          >
            <Menu className="size-6" />
          </button>
        </nav>
      </motion.header>

      {/* ---- Mobile Sheet / Drawer ---- */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[340px] bg-white border-l-[#F0E6DC] p-0 flex flex-col"
        >
          {/* Header with brand */}
          <SheetHeader className="p-6 pb-4 border-b border-[#F0E6DC]">
            <SheetTitle className="flex items-center gap-2">
              <span className="text-[#D4A373] text-lg" aria-hidden="true">
                ◆
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-[#2D2D2D] text-lg font-semibold">
                Makeup Therapy
                <span className="block text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-cormorant)] font-medium text-[#D4A373] -mt-0.5">
                  by Madhu
                </span>
              </span>
            </SheetTitle>
          </SheetHeader>

          {/* Navigation links */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <nav>
              <ul className="space-y-1">
                {NAV_LINKS.map((link, index) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-md font-[family-name:var(--font-poppins)] text-sm font-medium tracking-wide transition-all duration-200 ${
                          isActive
                            ? 'bg-[#F8EDE3] text-[#D4A373]'
                            : 'text-[#444444] hover:bg-[#F8EDE3]/60 hover:text-[#D4A373]'
                        }`}
                      >
                        <span
                          className={`transition-colors duration-200 ${
                            isActive ? 'text-[#D4A373]' : 'text-[#D4A373]/60'
                          }`}
                        >
                          {link.icon}
                        </span>
                        {link.label}
                        {isActive && (
                          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#D4A373]" />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Bottom CTA area */}
          <div className="p-4 pt-2 border-t border-[#F0E6DC] space-y-3">
            {/* Book Now button */}
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className="block"
            >
              <Button className="w-full font-[family-name:var(--font-poppins)] text-xs font-semibold tracking-wider uppercase bg-[#D4A373] hover:bg-[#c4935f] text-white rounded-sm h-11 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                Book Now
              </Button>
            </a>

            {/* WhatsApp quick link */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-sm border border-[#25D366] text-[#25D366] font-[family-name:var(--font-poppins)] text-xs font-semibold tracking-wider uppercase hover:bg-[#25D366]/10 transition-all duration-300"
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
