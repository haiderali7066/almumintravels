import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FloatingButtons } from "@/components/floating-buttons";
import { EnquiryPopup } from "@/components/enquiryform-popup";
import Script from "next/script";

import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: {
    default: "Al Mumin Travels – Trusted Hajj & Umrah Services",
    template: "%s | Al Mumin Travels"
  },
  description:
    "Al Mumin Travels provides trusted Hajj and Umrah packages, visa processing, airline ticketing, and hotel booking services with affordable prices and complete guidance.",
  keywords: [
    "Al Mumin Travels",
    "Umrah Packages Pakistan",
    "Hajj Packages Pakistan",
    "Saudi Visa Processing",
    "Air Ticket Booking",
    "Travel Agency Pakistan"
  ],
  metadataBase: new URL("https://almumintravels.com"),
  openGraph: {
    title: "Al Mumin Travels – Trusted Hajj & Umrah Services",
    description:
      "Book reliable Hajj and Umrah packages with complete travel support and guidance.",
    url: "https://almumintravels.com",
    siteName: "Al Mumin Travels",
    locale: "en_PK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ADD_GOOGLE_VERIFICATION_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
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