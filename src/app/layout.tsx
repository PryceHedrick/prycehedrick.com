import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prycehedrick.com"),
  title: {
    default: "Pryceless Solutions | AI Automation & Web Design — Southern Indiana",
    template: "%s | Pryceless Solutions",
  },
  description:
    "AI automation and custom websites for Southern Indiana small businesses. Capture leads 24/7, automate follow-up, and grow revenue. Starting at $997.",
  keywords: [
    "AI automation Southern Indiana",
    "web design Southern Indiana",
    "lead capture automation Indiana",
    "custom website Indiana",
    "business automation Indiana",
    "HVAC automation Indiana",
    "affordable web design Indiana",
  ],
  authors: [{ name: "Pryce Hedrick" }],
  creator: "Pryce Hedrick",
  publisher: "Pryceless Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Pryceless Solutions | AI Automation & Web Design",
    description:
      "AI automation and custom websites for Southern Indiana small businesses. Stop losing leads to missed calls.",
    url: "https://prycehedrick.com",
    siteName: "Pryceless Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pryce-headshot.jpg",
        width: 1024,
        height: 1024,
        alt: "Pryce Hedrick — Founder, Pryceless Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pryceless Solutions | AI Automation",
    description:
      "Stop losing leads to missed calls. AI automation for Southern Indiana small businesses. Free audit →",
    images: ["/pryce-headshot.jpg"],
  },
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
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pryceless Solutions",
    "@id": "https://prycehedrick.com",
    url: "https://prycehedrick.com",
    telephone: "+18126109805",
    email: "prycehedrick@gmail.com",
    image: "https://prycehedrick.com/pryce-headshot.jpg",
    priceRange: "$997–$10000+",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Loogootee",
      addressRegion: "IN",
      postalCode: "47553",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6767,
      longitude: -86.9142,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "City", "name": "Vincennes" },
      { "@type": "City", "name": "Washington" },
      { "@type": "City", "name": "Jasper" },
      { "@type": "City", "name": "Loogootee" },
      { "@type": "City", "name": "Bedford" },
      { "@type": "City", "name": "Bloomington" },
      { "@type": "City", "name": "Evansville" },
    ],
    description:
      "AI automation and custom websites for Southern Indiana small businesses. Lead capture, workflow automation, and website + AI integration.",
    founder: {
      "@type": "Person",
      name: "Pryce Hedrick",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Southern Indiana",
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="geo.region" content="US-IN" />
        <meta name="geo.placename" content="Loogootee, Indiana" />
        <meta name="geo.position" content="38.6767;-86.9142" />
        <meta name="ICBM" content="38.6767, -86.9142" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0F172A]`}
      >
        {children}

        {/* GA4 — G-8TKJWD3N6M */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8TKJWD3N6M"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8TKJWD3N6M');
          `}
        </Script>
      </body>
    </html>
  );
}
