"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const destinations = [
  {
    name: "Srinagar",
    description: "The crown jewel with Dal Lake and Mughal gardens",
    image: "/srinagar-dal-lake-houseboats-mughal-gardens.png",
    bestTime: "Mar-Oct",
    highlights: ["Dal Lake", "Mughal Gardens", "Old City"],
  },
  {
    name: "Gulmarg",
    description: "Meadow of flowers and winter sports paradise",
    image: "/gulmarg-meadows-gondola.png",
    bestTime: "All Year",
    highlights: ["Gondola Ride", "Skiing", "Alpine Views"],
  },
  {
    name: "Leh",
    description: "Gateway to high-altitude desert landscapes",
    image: "/leh-ladakh-monasteries.png",
    bestTime: "May-Sep",
    highlights: ["Monasteries", "Palace", "Markets"],
  },
  {
    name: "Pangong Lake",
    description: "Pristine high-altitude lake of changing colors",
    image: "/pangong-lake-ladakh.png",
    bestTime: "Jun-Sep",
    highlights: ["Color Changes", "Camping", "Photography"],
  },
  {
    name: "Sonamarg",
    description: "Golden meadow surrounded by glaciers",
    image: "/placeholder.svg?height=300&width=400",
    bestTime: "May-Oct",
    highlights: ["Thajiwas Glacier", "Trekking", "Pony Rides"],
  },
  {
    name: "Nubra Valley",
    description: "Cold desert with sand dunes and double-humped camels",
    image: "/placeholder.svg?height=300&width=400",
    bestTime: "Jun-Sep",
    highlights: ["Sand Dunes", "Camel Safari", "Diskit Monastery"],
  },
]

export function DestinationsSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Enchanting Destinations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From serene lakes to towering peaks, discover the diverse landscapes that make Kashmir and Ladakh truly
            magical
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={destination.name}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-1">{destination.name}</h3>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Best: {destination.bestTime}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight) => (
                    <Badge key={highlight} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
