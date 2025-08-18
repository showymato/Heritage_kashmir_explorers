import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"

const destinations = [
  {
    name: "Srinagar",
    description: "Dal Lake, Mughal Gardens, Houseboats",
    image: "/srinagar-dal-lake.png",
    highlights: ["Dal Lake Shikara Rides", "Mughal Gardens", "Houseboat Stays", "Floating Markets"],
  },
  {
    name: "Gulmarg",
    description: "Skiing, Gondola Ride, Meadows",
    image: "/gulmarg-gondola.png",
    highlights: ["Gondola Cable Car", "Skiing & Snowboarding", "Alpine Meadows", "Golf Course"],
  },
  {
    name: "Pahalgam",
    description: "Aru Valley, Lidder River, Betaab Valley",
    image: "/pahalgam-valley.png",
    highlights: ["Betaab Valley", "Aru Valley", "Lidder River", "Chandanwari"],
  },
  {
    name: "Sonmarg",
    description: "Gateway to Great Lakes Trek",
    image: "/sonmarg-meadows.png",
    highlights: ["Thajiwas Glacier", "Zoji La Pass", "Trekking Base", "Sindh River"],
  },
  {
    name: "Leh",
    description: "Monasteries, Culture, Nubra Valley",
    image: "/leh-monasteries.png",
    highlights: ["Ancient Monasteries", "Leh Palace", "Local Markets", "Cultural Heritage"],
  },
  {
    name: "Pangong Lake",
    description: "Scenic high-altitude lake",
    image: "/pangong-lake.png",
    highlights: ["Crystal Blue Waters", "High Altitude Lake", "Stunning Landscapes", "Photography Paradise"],
  },
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Destinations You'll Fall in Love With
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover the most breathtaking locations across Kashmir and Ladakh, each offering unique experiences and
              unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-serif font-bold">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.description}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-primary">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {destination.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
