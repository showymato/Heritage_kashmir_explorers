import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ToursSection } from "@/components/tours-section"
import { DestinationsSection } from "@/components/destinations-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ToursSection />
      <DestinationsSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
