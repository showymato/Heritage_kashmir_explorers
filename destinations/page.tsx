"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Thermometer, Mountain, Calendar, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { destinations, getDestinationsByRegion } from "@/lib/destinations-data"
import { openWhatsApp, whatsAppMessages } from "@/lib/whatsapp"

export default function DestinationsPage() {
  const kashmirDestinations = getDestinationsByRegion("Kashmir")
  const ladakhDestinations = getDestinationsByRegion("Ladakh")

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
              <Link href="/destinations" className="text-primary font-medium">
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

      {/* Header */}
      <section className="pt-24 pb-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Explore Kashmir & Ladakh</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the breathtaking destinations of Kashmir and Ladakh, each offering unique experiences, stunning
            landscapes, and rich cultural heritage.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="all">All Destinations</TabsTrigger>
            <TabsTrigger value="kashmir">Kashmir</TabsTrigger>
            <TabsTrigger value="ladakh">Ladakh</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <Card
                  key={destination.id}
                  className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={`/placeholder-glkrf.png?key=dest-${destination.id}&height=224&width=400&query=${destination.image}`}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-secondary text-secondary-foreground">{destination.region}</Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-background/80">
                        {destination.altitude}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-muted-foreground italic">{destination.tagline}</p>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{destination.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Best Time: {destination.bestTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Thermometer className="h-4 w-4" />
                        <span>{destination.temperature}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-muted-foreground">
                          {destination.highlights.length} attractions
                        </span>
                      </div>
                      <Link href={`/destinations/${destination.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                          Explore
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kashmir" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Kashmir - Paradise on Earth</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the enchanting beauty of Kashmir with its pristine lakes, Mughal gardens, and snow-capped
                mountains.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {kashmirDestinations.map((destination) => (
                <Card
                  key={destination.id}
                  className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={`/placeholder-xo5jl.png?key=kash-${destination.id}&height=256&width=500&query=${destination.image}`}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-serif text-2xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.tagline}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{destination.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{destination.bestTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mountain className="h-4 w-4 text-primary" />
                        <span>{destination.altitude}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Top Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.slice(0, 3).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {destination.highlights.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{destination.highlights.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Link href={`/destinations/${destination.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Explore {destination.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ladakh" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ladakh - Land of High Passes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the mystical landscapes of Ladakh with its ancient monasteries, high-altitude lakes, and unique
                desert terrain.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ladakhDestinations.map((destination) => (
                <Card
                  key={destination.id}
                  className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={`/placeholder-4go89.png?key=lad-${destination.id}&height=256&width=500&query=${destination.image}`}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-serif text-2xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.tagline}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{destination.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{destination.bestTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mountain className="h-4 w-4 text-primary" />
                        <span>{destination.altitude}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Top Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.slice(0, 3).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {destination.highlights.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{destination.highlights.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Link href={`/destinations/${destination.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Explore {destination.name}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Explore?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our travel experts help you plan the perfect itinerary covering these magnificent destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plan-trip">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                Plan Custom Trip
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent"
              onClick={() => openWhatsApp(whatsAppMessages.customTrip)}
            >
              WhatsApp Consultation
            </Button>
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
                <Button size="sm" variant="outline" onClick={() => window.open("tel:+919876543210", "_self")}>
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
                <p>📞 +91 9876543210</p>
                <p>📧 info@heritagekashmir.com</p>
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
