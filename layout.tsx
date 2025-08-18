import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Heritage Kashmir Explorers - Handcrafted Journeys Across Kashmir & Ladakh",
  description:
    "Authentic, safe, and culture-rich itineraries across Kashmir & Ladakh. From houseboats on Dal Lake to the high passes of Ladakh.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
