import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import FloatingButtons from "@/components/floating-buttons";
import { EnquiryPopup } from "@/components/enquiryform-popup";
import Script from "next/script";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almumintravels.co.uk"),

  title: {
    default:
      "Al Mumin Travels | Hajj & Umrah Packages, Visa & Travel Services",
    template: "%s | Al Mumin Travels",
  },

  description:
    "Al Mumin Travels offers trusted Hajj and Umrah packages, Saudi Arabia visa processing, airline ticket booking, hotel reservations, and complete travel assistance. Plan your spiritual journey with reliable travel support.",

  keywords: [
    "Al Mumin Travels",
    "Al Mumin Travel",
    "Hajj Packages",
    "Umrah Packages",
    "Hajj Packages Pakistan",
    "Umrah Packages Pakistan",
    "Hajj and Umrah Travel Agency",
    "Umrah Visa Processing",
    "Saudi Visa Processing",
    "Saudi Arabia Visa",
    "Air Ticket Booking",
    "Flight Booking",
    "Hotel Booking Saudi Arabia",
    "Makkah Hotel Booking",
    "Madinah Hotel Booking",
    "Hajj Travel Services",
    "Umrah Travel Services",
    "Travel Agency",
  ],

  authors: [
    {
      name: "Al Mumin Travels",
      url: "https://almumintravels.co.uk",
    },
  ],

  creator: "Al Mumin Travels",
  publisher: "Al Mumin Travels",

  alternates: {
    canonical: "https://almumintravels.co.uk",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://almumintravels.co.uk",
    siteName: "Al Mumin Travels",
    title:
      "Al Mumin Travels | Trusted Hajj & Umrah Packages & Travel Services",
    description:
      "Book Hajj and Umrah packages with Al Mumin Travels. Get visa processing, flights, hotel bookings, and complete travel assistance for your journey.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al Mumin Travels – Hajj and Umrah Travel Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Al Mumin Travels | Hajj & Umrah Packages & Travel Services",
    description:
      "Trusted Hajj and Umrah packages, visa processing, flights, hotels, and complete travel assistance.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/logo.jpeg",
        sizes: "any",
      },
      {
        url: "/logo.jpeg",
        type: "image/jpeg",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/logo.jpeg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  },

  verification: {
    google: "hp7XUC-2EDg3Z2WIW-UU-4GGN0C_V-iskpcRVOT_70Q",
  },
  
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}

        {/* Global UI Components */}
        <EnquiryPopup />
        <FloatingButtons />
        <Analytics />

        {/* Tawk.to Chat Widget */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/69a0416342971f1c3a86026f/1jicvur7h';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}