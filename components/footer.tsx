"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-serif font-bold text-primary">Heritage Kashmir</div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Crafting luxury travel experiences across the enchanting landscapes of Kashmir and Ladakh since 2010.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/tours" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Our Tours
              </Link>
              <Link
                href="/destinations"
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Destinations
              </Link>
              <Link href="/about" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Travel Blog
              </Link>
              <Link href="" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Reviews
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Services</h3>
            <div className="space-y-2">
              <div className="text-secondary-foreground/80">Custom Itineraries</div>
              <div className="text-secondary-foreground/80">Luxury Accommodations</div>
              <div className="text-secondary-foreground/80">Licensed Guides</div>
              <div className="text-secondary-foreground/80">24/7 Support</div>
              <div className="text-secondary-foreground/80">Safe Transportation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                {/* <Mail className="h-5 w-5 text-primary" /> */}
                {/* <span className="text-secondary-foreground/80">info@heritagekashmir.com</span> */}
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <span className="text-secondary-foreground/80">
                  Dal Lake Road, Srinagar
                  <br />
                  Kashmir, India 190001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-secondary-foreground/60 mb-4 md:mb-0">
            © 2024 Heritage Kashmir Explorers. All rights reserved. | GST: 01ABCDE1234F1Z5 | License: J&K/TRV/2024/001
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="text-secondary-foreground hover:text-primary hover:bg-primary/10 rounded-full"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
