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
  title: {
    default: "Pryceless Solutions | AI Automation & Web Design — Southern Indiana",
    template: "%s | Pryceless Solutions",
  },
  description: "AI-powered automation and custom websites for Southern Indiana small businesses. Capture leads 24/7, automate follow-up, and grow revenue. Starting at $997.",
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
    description: "AI-powered automation and custom websites for Southern Indiana small businesses. Stop losing leads to missed calls.",
    url: "https://prycehedrick.com",
    siteName: "Pryceless Solutions",
    locale: "en_US",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pryceless Solutions",
    "@id": "https://prycehedrick.com",
    "url": "https://prycehedrick.com",
    "telephone": "+18126109805",
    "priceRange": "$997-$10000+",
    "areaServed": [
      { "@type": "City", "name": "Vincennes" },
      { "@type": "City", "name": "Washington" },
      { "@type": "City", "name": "Jasper" },
      { "@type": "City", "name": "Loogootee" },
      { "@type": "City", "name": "Bedford" },
      { "@type": "City", "name": "Bloomington" },
      { "@type": "City", "name": "Evansville" }
    ],
    "description": "AI-powered automation and custom websites for Southern Indiana small businesses. Lead capture, workflow automation, and website + AI integration.",
    "founder": {
      "@type": "Person",
      "name": "Pryce Hedrick",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "University of Southern Indiana"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black`}
      >
        {children}

        {/* GA4 — preserving G-8TKJWD3N6M */}
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
