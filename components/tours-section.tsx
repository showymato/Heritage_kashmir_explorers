"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Star, Heart } from "lucide-react"
import Link from "next/link"
import { tours } from "@/lib/tours-data"
import { openWhatsApp, whatsAppMessages } from "@/lib/whatsapp"

export function ToursSection() {
  const [filter, setFilter] = useState("All")
  const filters = ["All", "Kashmir", "Ladakh", "Adventure", "Romantic", "Luxury"]

  const filteredTours = useMemo(() => {
    if (filter === "All") {
      return tours
    }
    return tours.filter(
      (tour) => tour.region.toLowerCase() === filter.toLowerCase() || tour.theme.toLowerCase() === filter.toLowerCase(),
    )
  }, [filter])

  const handleWhatsAppEnquiry = (tourTitle: string) => {
    openWhatsApp(whatsAppMessages.tourEnquiry(tourTitle))
  }

  return (
    <section className="py-20 bg-background chinar-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Curated Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked collection of luxury tours designed to showcase the best of Kashmir and Ladakh
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterItem) => (
            <Button
              key={filterItem}
              variant={filter === filterItem ? "default" : "outline"}
              onClick={() => setFilter(filterItem)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                filter === filterItem
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "hover:bg-primary/10 hover:border-primary"
              }`}
            >
              {filterItem}
              {filterItem !== "All" && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {
                    tours.filter(
                      (tour) =>
                        tour.region.toLowerCase() === filterItem.toLowerCase() ||
                        tour.theme.toLowerCase() === filterItem.toLowerCase(),
                    ).length
                  }
                </Badge>
              )}
            </Button>
          ))}
        </div>

        {/* Tours Grid - Enhanced for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTours.map((tour, index) => (
            <article
              key={tour.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border border-border rounded-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <header className="relative overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={`${tour.title} - ${tour.description.substring(0, 50)}...`}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground">{tour.duration}</Badge>
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
              </header>

              <div className="p-6">
                <header className="mb-4">
                  <h3 className="font-serif text-xl group-hover:text-primary transition-colors mb-2">{tour.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    {tour.region} • {tour.groupSize}
                  </p>
                </header>

                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{tour.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1">
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

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {tour.bestSeason}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {tour.groupSize}
                    </div>
                  </div>

                  <footer className="flex gap-2 pt-2">
                    <Button
                      asChild
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors focus:ring-2 focus:ring-primary/50"
                    >
                      <Link href={`/tours/${tour.slug}`}>View Details</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4 focus:ring-2 focus:ring-primary/50 bg-transparent"
                      onClick={() => handleWhatsAppEnquiry(tour.title)}
                    >
                      WhatsApp
                    </Button>
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show message when no tours match filter */}
        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No tours found for "{filter}" category.</p>
            <Button variant="outline" onClick={() => setFilter("All")} className="mt-4">
              View All Tours
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 bg-transparent focus:ring-2 focus:ring-primary/50"
          >
            <Link href="/tours">View All Tours ({tours.length})</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
