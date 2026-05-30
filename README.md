# 💄 Makeup Therapy by Madhu

> Professional luxury beauty & makeup artist website — Ahmedabad's top-rated bridal, party & occasion makeup artist

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify)](https://www.netlify.com/)

---

## ✨ Features

### 🎨 Design & UI
- **Luxury Design System** — Rose gold (#D4A373), champagne, blush pink color palette
- **Dark / Light / System Mode** — Full theme support with smooth transitions
- **Responsive Design** — Mobile-first, works beautifully on all devices
- **Glassmorphism Effects** — Premium frosted glass card styles
- **Framer Motion Animations** — Smooth scroll reveals, hover effects, page transitions
- **Custom Typography** — Playfair Display (headings), Poppins (body), Cormorant Garamond (accent)

### 📱 Sections (16+)
| Section | Description |
|---------|-------------|
| 🏠 **Hero** | Full-screen parallax hero with floating particles & rotating typewriter text |
| 📊 **Trust** | Animated counter stats (155+ clients, 4.9★ rating) |
| 👩 **About** | Artist story with portrait & floating experience badge |
| 💅 **Services** | 16 premium service cards with unique icons & WhatsApp booking |
| 📸 **Portfolio** | Filterable gallery with category tabs & lightbox |
| 🔄 **Before & After** | Interactive draggable comparison sliders |
| ✅ **Why Choose Us** | 6 benefit cards with animated icons |
| ⭐ **Reviews** | Auto-scrolling carousel with 8 client reviews |
| 📅 **Booking** | Full appointment form with WhatsApp integration |
| 💰 **Pricing** | 4 elegant pricing cards with "Most Popular" badge |
| ❓ **FAQ** | Animated accordion with 6 questions |
| 📍 **Map** | Embedded Google Maps with info card |
| 📷 **Instagram** | Grid feed with hover overlays |
| 📞 **Contact** | Contact info + quick message form |
| 🦶 **Footer** | 4-column layout with links & social icons |

### 🛠 Advanced Features
- **🌙 Dark Mode** — Light/Dark/System with next-themes
- **⬆️ Scroll-to-Top** — Floating button with glassmorphism
- **📊 Reading Progress Bar** — Gradient progress indicator with shimmer
- **💬 WhatsApp Integration** — Floating button + booking via WhatsApp
- **🎯 Typewriter Effect** — Rotating hero subheadline with blinking cursor
- **🔄 Before/After Slider** — Draggable comparison with touch support
- **📱 Mobile Navigation** — Sheet drawer with animated links
- **🔍 Active Section Tracking** — IntersectionObserver-based navbar highlighting
- **♿ Accessibility** — ARIA labels, keyboard navigation, semantic HTML
- **🚀 SEO Optimized** — Schema.org markup, Open Graph, meta tags

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ or **Bun** 1.0+
- **npm**, **yarn**, or **bun** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/makeuptherapybymadhu/website.git
cd website

# Install dependencies
npm install
# or
bun install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Add environment variables from `.env.example` in Vercel dashboard

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/makeuptherapybymadhu/website)

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Select your repository
4. Build settings are auto-configured via `netlify.toml`
5. Add environment variables from `.env.example` in Netlify dashboard

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/makeuptherapybymadhu/website)

### Manual / VPS

```bash
# Build for production
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system + dark mode
│   ├── layout.tsx           # Root layout + ThemeProvider
│   └── page.tsx             # Main page (all sections)
├── components/
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── Trust.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Reviews.tsx
│   │   ├── Booking.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── MapSection.tsx
│   │   ├── InstagramFeed.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── shared/              # Shared components
│   │   ├── Navbar.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── ReadingProgressBar.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── BeforeAfterSlider.tsx
│   └── ui/                  # shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
└── public/
    └── images/              # Static images
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Rose Gold | `#D4A373` | Primary accent, buttons, links |
| Champagne | `#F8EDE3` | Light backgrounds |
| Blush Pink | `#F9D5D3` | Secondary backgrounds |
| Luxury Dark | `#2D2D2D` | Headings, footer |
| Warm Dark | `#0F0F0F` | Dark mode background |

### Typography

| Font | Usage | Weight |
|------|-------|--------|
| Playfair Display | Headings | 400–900 |
| Poppins | Body text | 300–700 |
| Cormorant Garamond | Accent text | 300–700 |

---

## 🔧 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | 16 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | UI component library |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animations |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4 | Dark mode |
| [Lucide React](https://lucide.dev/) | Latest | Icon library |
| [Embla Carousel](https://www.embla-carousel.com/) | 8 | Reviews carousel |
| [Prisma](https://www.prisma.io/) | 6 | Database ORM |

---

## 📄 Environment Variables

See [`.env.example`](./.env.example) for all available variables.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | ✅ | Production URL |
| `NEXT_PUBLIC_PHONE` | ✅ | Business phone number |
| `NEXT_PUBLIC_WHATSAPP` | ✅ | WhatsApp number (no +) |
| `NEXT_PUBLIC_INSTAGRAM` | ✅ | Instagram profile URL |
| `NEXT_PUBLIC_GOOGLE_MAPS_LAT` | ✅ | Studio latitude |
| `NEXT_PUBLIC_GOOGLE_MAPS_LNG` | ✅ | Studio longitude |

---

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Madhu — Makeup Therapy by Madhu**

- 📍 Ahmedabad, Gujarat, India
- 📞 +91 99992 78874
- 📷 [Instagram](https://instagram.com/makeuptherapybymadhu)
- 💬 [WhatsApp](https://wa.me/919999278874)

---

<p align="center">
  Made with ❤️ in Ahmedabad
</p>
