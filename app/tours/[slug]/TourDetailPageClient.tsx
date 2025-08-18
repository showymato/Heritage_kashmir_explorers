"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Clock,
  Users,
  Star,
  Calendar,
  Mountain,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { getTourBySlug } from "@/lib/tours-data"
import { openWhatsApp, whatsAppMessages, phoneNumber } from "@/lib/whatsapp"
import { notFound } from "next/navigation"

export default function TourDetailPageClient({ slug }: { slug: string }) {
  const tour = getTourBySlug(slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!tour) {
    notFound()
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % tour.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + tour.gallery.length) % tour.gallery.length)
  }

  const handleWhatsAppEnquiry = () => {
    openWhatsApp(whatsAppMessages.tourEnquiry(tour.title))
  }

  const handlePhoneCall = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={tour.bannerImage || tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/tours" className="text-white/80 hover:text-white transition-colors">
              Tours
            </Link>
            <span className="text-white/60">/</span>
            <span>{tour.title}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-2">{tour.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{tour.hook}</p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Duration</h3>
              <p className="text-muted-foreground">{tour.duration}</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Best Season</h3>
              <p className="text-muted-foreground">{tour.bestSeason}</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Group Size</h3>
              <p className="text-muted-foreground">{tour.groupSize}</p>
            </div>
            <div className="text-center">
              <Mountain className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-foreground">Difficulty</h3>
              <Badge
                variant={
                  tour.difficulty === "Easy" ? "secondary" : tour.difficulty === "Moderate" ? "default" : "destructive"
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
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{tour.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{tour.rating}</span>
                  <span className="text-muted-foreground">({tour.reviews} reviews)</span>
                </div>
                <Badge className="bg-secondary text-secondary-foreground">{tour.region}</Badge>
                <Badge variant="outline">{tour.theme}</Badge>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Tour Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Day-by-Day Itinerary */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Day-by-Day Itinerary</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {tour.itinerary.map((day, index) => (
                  <AccordionItem key={index} value={`day-${day.day}`} className="border border-border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <Badge variant="outline" className="min-w-fit">
                          Day {day.day}
                        </Badge>
                        <span className="font-semibold">{day.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p className="text-muted-foreground mb-4">{day.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Activities</h4>
                          <ul className="space-y-1">
                            {day.activities.map((activity, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                <Check className="h-3 w-3 text-primary flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Meals & Stay</h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            <strong>Meals:</strong> {day.meals.join(", ")}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Accommodation:</strong> {day.accommodation}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">What's Included & Excluded</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-700 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Inclusions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.inclusions.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      Exclusions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tour.exclusions.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Photo Gallery</h2>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={`/abstract-geometric-shapes.png?height=400&width=700&query=${tour.gallery[currentImageIndex]}`}
                    alt={`Gallery image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {tour.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
                {tour.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                      index === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={`/abstract-geometric-shapes.png?height=100&width=100&query=${image}`}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {tour.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4">Book This Tour</h3>
                  <p className="text-muted-foreground mb-4">
                    Get in touch with our travel experts for pricing and availability.
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
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-2">Our travel experts are available 24/7</p>
                    <p className="text-sm font-medium">{phoneNumber}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Tour Summary */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Tour Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Best Season:</span>
                      <span className="font-medium">{tour.bestSeason}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Group Size:</span>
                      <span className="font-medium">{tour.groupSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Difficulty:</span>
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
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{tour.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready for This Adventure?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us now to customize this itinerary according to your preferences and book your unforgettable
            journey.
          </p>
          <Button size="lg" onClick={handleWhatsAppEnquiry} className="text-lg px-8 py-3">
            Plan My Trip
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
