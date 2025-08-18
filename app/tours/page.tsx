"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Calendar, Users, MapPin, Heart } from "lucide-react"
import Link from "next/link"
import { tours } from "@/lib/tours-data"
import { openWhatsApp, whatsAppMessages } from "@/lib/whatsapp"

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")
  const [themeFilter, setThemeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const filteredAndSortedTours = useMemo(() => {
    const filtered = tours.filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRegion = regionFilter === "all" || tour.region.toLowerCase() === regionFilter.toLowerCase()
      const matchesTheme = themeFilter === "all" || tour.theme.toLowerCase() === themeFilter.toLowerCase()

      return matchesSearch && matchesRegion && matchesTheme
    })

    // Sort tours
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return (a.price || 0) - (b.price || 0)
        case "price-high":
          return (b.price || 0) - (a.price || 0)
        case "duration":
          return Number.parseInt(a.duration) - Number.parseInt(b.duration)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, regionFilter, themeFilter, sortBy])

  const handleWhatsAppEnquiry = (tourTitle: string) => {
    openWhatsApp(whatsAppMessages.tourEnquiry(tourTitle))
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Our Curated Tour Packages
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Explore Kashmir & Ladakh with itineraries designed for every traveler. Discover {tours.length} handcrafted
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="kashmir">Kashmir</SelectItem>
                  <SelectItem value="ladakh">Ladakh</SelectItem>
                </SelectContent>
              </Select>

              <Select value={themeFilter} onValueChange={setThemeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Themes</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="romantic">Romantic</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredAndSortedTours.length} of {tours.length} tours
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredAndSortedTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedTours.map((tour, index) => (
                <Card
                  key={tour.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {tour.duration}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {tour.rating}
                      </Badge>
                    </div>
                    <button
                      className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label={`Add ${tour.title} to wishlist`}
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-accent text-accent-foreground font-semibold">
                        ₹{tour.price?.toLocaleString()}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                      {tour.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-2">{tour.description}</CardDescription>

                    {/* Tour details */}
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {tour.region}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {tour.bestSeason}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {tour.groupSize}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {tour.highlights.slice(0, 2).map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {tour.highlights.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{tour.highlights.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex gap-3">
                      <Button asChild variant="outline" className="flex-1 bg-transparent">
                        <Link href={`/tours/${tour.slug}`}>View Details</Link>
                      </Button>
                      <Button className="flex-1" onClick={() => handleWhatsAppEnquiry(tour.title)}>
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">No tours found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or filters to find the perfect tour.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setRegionFilter("all")
                  setThemeFilter("all")
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
