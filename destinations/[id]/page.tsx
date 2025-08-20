"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Thermometer,
  Mountain,
  Calendar,
  Star,
  ArrowRight,
  Check,
  Info,
  Camera,
  MessageCircle,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { getDestinationById } from "@/lib/destinations-data"
import { openWhatsApp, whatsAppMessages, phoneNumber } from "@/lib/whatsapp"
import { notFound } from "next/navigation"

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = getDestinationById(params.id)

  if (!destination) {
    notFound()
  }

  const handleWhatsAppEnquiry = () => {
    const message = `Hi Heritage Kashmir Explorers! I'm interested in visiting ${destination.name}. Can you help me plan a trip and provide more information about tours to this destination?`
    openWhatsApp(message)
  }

  const handlePhoneCall = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="font-serif text-xl font-bold text-primary">
                Heritage Kashmir Explorers
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/tours" className="text-foreground hover:text-primary transition-colors">
                Tours
              </Link>
              <Link href="/destinations" className="text-foreground hover:text-primary transition-colors">
                Destinations
              </Link>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Link href="/plan-trip">
                <Button className="bg-primary hover:bg-primary/90">Plan My Trip</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden mt-16">
        <img
          src={`/abstract-geometric-hero.png?key=hero-${destination.id}&height=600&width=1200&query=${destination.image}`}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/destinations" className="text-white/80 hover:text-white transition-colors">
              Destinations
            </Link>
            <span className="text-white/60">/</span>
            <span>{destination.name}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-2">{destination.name}</h1>
          <p className="text-lg md:text-xl italic mb-4">{destination.tagline}</p>
          <Badge className="bg-secondary text-secondary-foreground">{destination.region}</Badge>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Best Time</h3>
              <p className="text-muted-foreground text-sm">{destination.bestTime}</p>
            </div>
            <div className="text-center">
              <Mountain className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Altitude</h3>
              <p className="text-muted-foreground text-sm">{destination.altitude}</p>
            </div>
            <div className="text-center">
              <Thermometer className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Temperature</h3>
              <p className="text-muted-foreground text-sm">{destination.temperature}</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Attractions</h3>
              <p className="text-muted-foreground text-sm">{destination.highlights.length} Major Sites</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">About {destination.name}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{destination.description}</p>
            </section>

            {/* Detailed Information Tabs */}
            <Tabs defaultValue="highlights" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="sights">Top Sights</TabsTrigger>
                <TabsTrigger value="tips">Local Tips</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
              </TabsList>

              <TabsContent value="highlights" className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">Major Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sights" className="space-y-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">Must-Visit Places</h3>
                <div className="space-y-4">
                  {destination.topSights.map((sight, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{sight.name}</h4>
                        <p className="text-muted-foreground mb-2">{sight.description}</p>
                        <div className="flex items-start gap-2">
                          <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-muted-foreground italic">{sight.tips}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tips" className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">Local Tips & Advice</h3>
                <div className="space-y-3">
                  {destination.localTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="activities" className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">Popular Activities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {destination.activities.map((activity, index) => (
                    <Badge key={index} variant="secondary" className="justify-center py-2">
                      {activity}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">Nearby Attractions</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.nearbyAttractions.map((attraction, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {attraction}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4">Plan Your Visit</h3>
                  <p className="text-muted-foreground mb-4">
                    Ready to explore {destination.name}? Let our experts help you plan the perfect trip.
                  </p>
                  <div className="space-y-3">
                    <Button onClick={handleWhatsAppEnquiry} className="w-full bg-primary hover:bg-primary/90">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Enquiry
                    </Button>
                    <Button onClick={handlePhoneCall} variant="outline" className="w-full bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Link href="/plan-trip" className="block">
                      <Button variant="secondary" className="w-full">
                        Custom Trip Form
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-2">Our travel experts are available 24/7</p>
                    <p className="text-sm font-medium">{phoneNumber}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Region:</span>
                      <Badge variant="secondary">{destination.region}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Best Season:</span>
                      <span className="font-medium">{destination.bestTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Altitude:</span>
                      <span className="font-medium">{destination.altitude}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Temperature:</span>
                      <span className="font-medium text-xs">{destination.temperature}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Photo Gallery Preview
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    Photo Gallery
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square overflow-hidden rounded">
                        <img
                          src={`/placeholder-fodas.png?key=gallery-${destination.id}-${i}&height=150&width=150&query=${destination.name} scenic view ${i}`}
                          alt={`${destination.name} view ${i}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-3 bg-transparent">
                    View All Photos
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>

      {/* Related Destinations */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-8">
            Other {destination.region} Destinations
          </h2>
          <div className="text-center">
            <Link href="/destinations">
              <Button variant="outline" className="px-8 bg-transparent">
                View All Destinations
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Heritage Kashmir Explorers</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Authentic journeys across the paradise of Kashmir and the mystical landscapes of Ladakh.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => openWhatsApp(whatsAppMessages.generalEnquiry)}
                >
                  WhatsApp
                </Button>
                <Button size="sm" variant="outline" onClick={handlePhoneCall}>
                  Call Now
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/tours" className="hover:text-primary transition-colors">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="hover:text-primary transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Popular Destinations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/destinations/srinagar" className="hover:text-primary transition-colors">
                    Srinagar
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/gulmarg" className="hover:text-primary transition-colors">
                    Gulmarg
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/leh" className="hover:text-primary transition-colors">
                    Leh Ladakh
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/pahalgam" className="hover:text-primary transition-colors">
                    Pahalgam
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                {/* <p>📞 +91 9876543210</p> */}
                {/* <p>📧 info@heritagekashmir.com</p> */}
                <p>📍 Dal Lake, Srinagar, Kashmir</p>
                <p className="text-xs mt-4">Licensed Tour Operator | GST: 01XXXXX1234X1XX</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Heritage Kashmir Explorers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
