import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { business } from "@/lib/business";
import StickyMobileBar from "@/components/StickyMobileBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const siteUrl = "https://peluqueria-canina-mimos.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} – Peluquería canina en Alcalá de Henares`,
    template: `%s | ${business.name}`,
  },
  description:
    "Peluquería canina en Alcalá de Henares (C. de Gil de Andrade, 3). Baño, corte, deslanado y corte de uñas con calma y cariño. 4,9/5 en Google con más de 260 reseñas. Reserva por WhatsApp o teléfono.",
  keywords: [
    "peluquería canina Alcalá de Henares",
    "peluquería canina cerca de mí",
    "peluquería para perros Alcalá de Henares",
    "baño y corte para perros Alcalá de Henares",
    "corte de pelo para perros Alcalá de Henares",
    "deslanado perro Alcalá de Henares",
    "tienda de mascotas Alcalá de Henares",
    "peluquería canina Mimos",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} – Peluquería canina en Alcalá de Henares`,
    description:
      "Baño, corte, deslanado y cuidado canino con calma y cariño en el centro de Alcalá de Henares. 4,9/5 en Google (269 reseñas).",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} – Peluquería canina en Alcalá de Henares`,
    description:
      "Baño, corte, deslanado y cuidado canino con calma y cariño en el centro de Alcalá de Henares.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#faf6f0",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#negocio`,
  name: business.name,
  image: `${siteUrl}/opengraph-image`,
  url: siteUrl,
  telephone: business.phoneIntl,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.province,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  openingHoursSpecification: business.openingHoursSpecification.map((spec) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: spec.days,
    opens: spec.opens,
    closes: spec.closes,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
  },
  sameAs: [business.instagramUrl],
  areaServed: {
    "@type": "City",
    name: "Alcalá de Henares",
  },
  description:
    "Peluquería canina y tienda de mascotas en Alcalá de Henares: baño, corte, deslanado, corte de uñas y accesorios.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-terracotta focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <StickyMobileBar />
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
