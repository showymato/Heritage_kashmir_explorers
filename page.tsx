


"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Shield, Users, Star, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="font-serif text-lg sm:text-xl font-bold text-primary">
                <span className="hidden sm:inline">Heritage Kashmir Explorers</span>
                <span className="sm:hidden">HKE</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/tours" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
                Tours
              </Link>
              <Link href="/destinations" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
                Destinations
              </Link>
              <a href="#about" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm lg:text-base">
                Contact
              </a>
              <Link href="/plan-trip">
                <Button className="bg-primary hover:bg-primary/90 text-sm lg:text-base px-4 lg:px-6">
                  Plan My Trip
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-background border-t border-border">
              <div className="px-4 py-3 space-y-3">
                <Link 
                  href="/tours" 
                  className="block text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tours
                </Link>
                <Link 
                  href="/destinations" 
                  className="block text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Destinations
                </Link>
                <a 
                  href="#about" 
                  className="block text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="block text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Link href="/plan-trip" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 mt-2">
                    Plan My Trip
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder-bs23f.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 mt-16">
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-snug drop-shadow-lg">
            Handcrafted Journeys<br className="sm:hidden" /> Across Kashmir & Ladakh
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-4 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Discover the breathtaking beauty of the Himalayas with personalized itineraries, local expertise, and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-sm mx-auto">
            <Link href="/plan-trip" className="w-full">
              <Button 
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-3 text-sm font-semibold rounded-lg shadow-lg"
              >
                Plan My Trip →
              </Button>
            </Link>
            <Link href="/tours" className="w-full">
              <Button
                variant="outline"
                className="w-full border border-white text-white hover:bg-white hover:text-gray-900 px-4 py-3 text-sm font-semibold rounded-lg bg-transparent shadow-lg"
              >
                Browse Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* USP Highlight Strip */}
      <section className="py-6 sm:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 flex items-center space-x-3">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Licensed Local Guides</h3>
                <p className="text-xs text-gray-600">Expert local knowledge</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 flex items-center space-x-3">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">24×7 Travel Assistance</h3>
                <p className="text-xs text-gray-600">Always available</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 flex items-center space-x-3">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Customizable Itineraries</h3>
                <p className="text-xs text-gray-600">Tailored experiences</p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 flex items-center space-x-3">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Safe & Comfortable Transport</h3>
                <p className="text-xs text-gray-600">Comfortable journeys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Preview */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Discover Our Signature Tours
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully curated experiences that showcase the best of Kashmir and Ladakh's natural beauty and cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Kashmir Classics",
                subtitle: "6 Days",
                description: "Srinagar • Gulmarg • Pahalgam",
                image: "Kashmir valley with traditional houseboats and chinar trees",
                difficulty: "Easy",
              },
              {
                title: "Leh–Nubra–Pangong",
                subtitle: "7 Days",
                description: "Monasteries • Valleys • High Passes",
                image: "Ladakh landscape with Buddhist monastery and mountains",
                difficulty: "Moderate",
              },
              {
                title: "Winter Wonderland",
                subtitle: "4 Days",
                description: "Snow Gulmarg & Cozy Houseboats",
                image: "Snow covered Kashmir with traditional architecture",
                difficulty: "Easy",
              },
              {
                title: "Honeymoon in Paradise",
                subtitle: "5 Days",
                description: "Dal Lake • Meadows • Private Stays",
                image: "Romantic Kashmir setting with Dal Lake at sunset",
                difficulty: "Easy",
              },
            ].map((tour, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?height=200&width=300&query=${tour.image}`}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-secondary text-secondary-foreground text-xs">
                    {tour.difficulty}
                  </Badge>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground">{tour.title}</h3>
                    <span className="text-xs sm:text-sm text-muted-foreground">{tour.subtitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">{tour.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm text-muted-foreground">4.8 (120+ reviews)</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs sm:text-sm"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link href="/tours">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 px-8">View All Tours</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-primary mb-3">
                Heritage Kashmir Explorers
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Authentic journeys across the paradise of Kashmir and the mystical landscapes of Ladakh.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button
                  size="sm"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-xs sm:text-sm"
                  onClick={() =>
                    window.open(
                      "https://wa.me/?text=Hi! I would like to plan a trip to Kashmir/Ladakh. Can you help me?",
                      "_blank",
                    )
                  }
                >
                  WhatsApp
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full sm:w-auto text-xs sm:text-sm"
                  onClick={() => window.open("tel:+919876543210", "_self")}
                >
                  Call Now
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link href="/tours" className="hover:text-primary transition-colors">Tours</Link></li>
                <li><Link href="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Popular Destinations</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link href="/destinations/srinagar" className="hover:text-primary transition-colors">Srinagar</Link></li>
                <li><Link href="/destinations/gulmarg" className="hover:text-primary transition-colors">Gulmarg</Link></li>
                <li><Link href="/destinations/leh" className="hover:text-primary transition-colors">Leh Ladakh</Link></li>
                <li><Link href="/destinations/pahalgam" className="hover:text-primary transition-colors">Pahalgam</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Contact Info</h4>
              <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {/* <p> +91 9876543210</p> */}
                {/* <p> info@heritagekashmir.com</p> */}
                <p>📍 Dal Lake, Srinagar, Kashmir</p>
                <p className="text-xs mt-4">Licensed Tour Operator | GST: 01XXXXX1234X1XX</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-6 sm:mt-8 pt-6 text-center text-xs sm:text-sm text-muted-foreground">
            <p>&copy; 2024 Heritage Kashmir Explorers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

