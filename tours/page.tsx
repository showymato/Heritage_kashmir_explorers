"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Users, Star, Filter } from "lucide-react"
import Link from "next/link"
import { tours } from "@/lib/tours-data"

export default function ToursPage() {
  const [filteredTours, setFilteredTours] = useState(tours)
  const [filters, setFilters] = useState({
    region: "all",
    duration: "all",
    season: "all",
    theme: "all",
  })

  const applyFilters = (newFilters: typeof filters) => {
    let filtered = tours

    if (newFilters.region !== "all") {
      filtered = filtered.filter((tour) => tour.region === newFilters.region)
    }
    if (newFilters.duration !== "all") {
      if (newFilters.duration === "short") {
        filtered = filtered.filter((tour) => Number.parseInt(tour.duration) <= 4)
      } else if (newFilters.duration === "medium") {
        filtered = filtered.filter((tour) => Number.parseInt(tour.duration) >= 5 && Number.parseInt(tour.duration) <= 7)
      } else if (newFilters.duration === "long") {
        filtered = filtered.filter((tour) => Number.parseInt(tour.duration) >= 8)
      }
    }
    if (newFilters.season !== "all") {
      filtered = filtered.filter((tour) => tour.season === newFilters.season || tour.season === "All Year")
    }
    if (newFilters.theme !== "all") {
      filtered = filtered.filter((tour) => tour.theme === newFilters.theme)
    }

    setFilteredTours(filtered)
  }

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)
    applyFilters(newFilters)
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
              <Link href="/tours" className="text-primary font-medium">
                Tours
              </Link>
              <a href="#destinations" className="text-foreground hover:text-primary transition-colors">
                Destinations
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button className="bg-primary hover:bg-primary/90">Plan My Trip</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Discover Our Tours</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handcrafted journeys across Kashmir and Ladakh, each designed to showcase the region's natural beauty,
              rich culture, and authentic experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium text-foreground">Filter by:</span>
            </div>

            <Select value={filters.region} onValueChange={(value) => handleFilterChange("region", value)}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="Kashmir">Kashmir</SelectItem>
                <SelectItem value="Ladakh">Ladakh</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.duration} onValueChange={(value) => handleFilterChange("duration", value)}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="short">1-4 Days</SelectItem>
                <SelectItem value="medium">5-7 Days</SelectItem>
                <SelectItem value="long">8+ Days</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.season} onValueChange={(value) => handleFilterChange("season", value)}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Seasons</SelectItem>
                <SelectItem value="Spring">Spring</SelectItem>
                <SelectItem value="Summer">Summer</SelectItem>
                <SelectItem value="Winter">Winter</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.theme} onValueChange={(value) => handleFilterChange("theme", value)}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Themes</SelectItem>
                <SelectItem value="Cultural">Cultural</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Romance">Romance</SelectItem>
                <SelectItem value="Photography">Photography</SelectItem>
                <SelectItem value="Seasonal">Seasonal</SelectItem>
              </SelectContent>
            </Select>

            <div className="ml-auto text-sm text-muted-foreground">
              {filteredTours.length} tour{filteredTours.length !== 1 ? "s" : ""} found
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={`/abstract-geometric-shapes.png?key=px0nq&key=lftch&height=224&width=400&query=${tour.image}`}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-secondary text-secondary-foreground">{tour.region}</Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={
                        tour.difficulty === "Easy"
                          ? "secondary"
                          : tour.difficulty === "Moderate"
                            ? "default"
                            : "destructive"
                      }
                      className={
                        tour.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : tour.difficulty === "Moderate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {tour.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{tour.hook}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{tour.highlights.join(" • ")}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                      <span className="text-sm text-muted-foreground">({tour.reviews} reviews)</span>
                    </div>
                    <Link href={`/tours/${tour.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No tours found matching your criteria.</p>
              <Button
                onClick={() => {
                  setFilters({ region: "all", duration: "all", season: "all", theme: "all" })
                  setFilteredTours(tours)
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Can't Find the Perfect Tour?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us create a custom itinerary tailored to your preferences, interests, and travel style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Plan Custom Trip
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              Contact Our Experts
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
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  WhatsApp
                </Button>
                <Button size="sm" variant="outline">
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
                  <a href="#destinations" className="hover:text-primary transition-colors">
                    Destinations
                  </a>
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
              <h4 className="font-semibold text-foreground mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Srinagar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Gulmarg
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Leh Ladakh
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pahalgam
                  </a>
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
