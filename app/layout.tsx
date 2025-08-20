import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Heritage Kashmir Explorers - Luxury Tours & Travel",
  description:
    "Handcrafted journeys across Kashmir & Ladakh. Experience the royal heritage of Kashmir with our luxury travel packages, custom itineraries and expert local guides.",
  keywords:
    "Kashmir tours, Ladakh travel, luxury travel, heritage tours, Dal Lake, Gulmarg, Leh, Pangong Lake, houseboat stays, adventure tours",
  openGraph: {
    title: "Heritage Kashmir Explorers - Luxury Tours & Travel",
    description: "Handcrafted journeys across Kashmir & Ladakh with luxury accommodations and expert guides",
    images: ["/kashmir-dal-lake-sunrise.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage Kashmir Explorers - Luxury Tours & Travel",
    description: "Handcrafted journeys across Kashmir & Ladakh",
    images: ["/kashmir-dal-lake-sunrise.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#c3942cff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="font-sans antialiased min-h-screen">{children}</body>
    </html>
  )
}
