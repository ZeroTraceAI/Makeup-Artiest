import type { Metadata } from "next";
import { Playfair_Display, Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/components/shared/ThemeProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Makeup Therapy by Madhu | Professional Bridal & Party Makeup Artist in Ahmedabad",
  description:
    "Transform your beauty with Makeup Therapy by Madhu — Ahmedabad's top-rated professional makeup artist specializing in bridal, HD, airbrush, party & occasion makeup. 4.9★ Google rating with 155+ happy clients. Book your appointment today!",
  keywords: [
    "Makeup Artist Ahmedabad",
    "Bridal Makeup Ahmedabad",
    "HD Makeup Ahmedabad",
    "Airbrush Makeup Ahmedabad",
    "Party Makeup Ahmedabad",
    "Professional Makeup Artist Ahmedabad",
    "Bridal Makeup Artist Gujarat",
    "Wedding Makeup Ahmedabad",
    "Engagement Makeup Ahmedabad",
    "Makeup Therapy by Madhu",
    "Best Makeup Artist Gota",
    "Saree Draping Ahmedabad",
    "Pre Bridal Package Ahmedabad",
    "Hair Styling Ahmedabad",
  ],
  authors: [{ name: "Madhu - Makeup Therapy by Madhu" }],
  creator: "Makeup Therapy by Madhu",
  publisher: "Makeup Therapy by Madhu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Makeup Therapy by Madhu | Professional Bridal & Party Makeup Artist in Ahmedabad",
    description:
      "Transform your beauty with Makeup Therapy by Madhu — Ahmedabad's top-rated professional makeup artist. 4.9★ Google rating. Book now!",
    url: "https://makeuptherapybymadhu.com",
    siteName: "Makeup Therapy by Madhu",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makeup Therapy by Madhu | Professional Makeup Artist Ahmedabad",
    description:
      "Ahmedabad's top-rated professional makeup artist specializing in bridal, HD, airbrush & party makeup. 4.9★ Google rating.",
  },
  alternates: {
    canonical: "https://makeuptherapybymadhu.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Makeup Therapy by Madhu",
              image: "https://makeuptherapybymadhu.com/og-image.jpg",
              url: "https://makeuptherapybymadhu.com",
              telephone: "+919999278874",
              address: {
                "@type": "PostalAddress",
                streetAddress: "First Floor, Olive Greens, 125, Sarkhej-Gandhinagar Highway",
                addressLocality: "Gota, Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "382481",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.0883,
                longitude: 72.5077,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "155",
                bestRating: "5",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "20:00",
              },
              sameAs: ["https://www.instagram.com/makeuptherapybymadhu"],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
