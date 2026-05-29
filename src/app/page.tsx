'use client'

import Navbar from '@/components/shared/Navbar'
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp'
import Hero from '@/components/sections/Hero'
import Trust from '@/components/sections/Trust'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/sections/Reviews'
import Booking from '@/components/sections/Booking'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import MapSection from '@/components/sections/MapSection'
import InstagramFeed from '@/components/sections/InstagramFeed'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trust />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Reviews />
        <Booking />
        <Pricing />
        <FAQ />
        <MapSection />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
