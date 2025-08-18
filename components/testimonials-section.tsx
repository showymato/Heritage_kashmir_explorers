"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Priya & Raj Sharma",
    location: "Mumbai",
    trip: "Honeymoon Package",
    rating: 5,
    text: "Our Kashmir honeymoon was absolutely magical! The houseboat stay on Dal Lake and the personalized service made it unforgettable. Every detail was perfectly arranged.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "David Johnson",
    location: "London, UK",
    trip: "Leh-Ladakh Adventure",
    rating: 5,
    text: "The Ladakh expedition exceeded all expectations. Our guide was knowledgeable, the accommodations were excellent, and the landscapes were breathtaking. Highly recommended!",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Meera Patel Family",
    location: "Ahmedabad",
    trip: "Kashmir Family Tour",
    rating: 5,
    text: "Perfect family vacation! The kids loved the pony rides in Pahalgam, and we adults were mesmerized by the beauty of Gulmarg. Excellent arrangements throughout.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Sarah & Mike Chen",
    location: "Singapore",
    trip: "Winter Wonderland",
    rating: 5,
    text: "Kashmir in winter is pure magic! The snow-covered landscapes, cozy houseboats, and warm hospitality made our trip extraordinary. Professional service from start to finish.",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Traveler Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our guests about their unforgettable journeys through Kashmir and Ladakh
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Avatar className="h-20 w-20 border-4 border-primary">
                    <AvatarImage src={testimonials[currentIndex].image || "/placeholder.svg"} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div>
                      <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">{testimonials[currentIndex].trip}</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
