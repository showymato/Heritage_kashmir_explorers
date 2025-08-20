"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

const interests = [
  { id: "cultural", label: "Cultural Heritage", icon: "🏛️" },
  { id: "adventure", label: "Adventure Activities", icon: "🏔️" },
  { id: "photography", label: "Photography", icon: "📸" },
  { id: "nature", label: "Nature & Wildlife", icon: "🌿" },
  { id: "spiritual", label: "Spiritual Journey", icon: "🕉️" },
  { id: "food", label: "Local Cuisine", icon: "🍛" },
  { id: "shopping", label: "Shopping & Crafts", icon: "🛍️" },
  { id: "relaxation", label: "Relaxation & Wellness", icon: "🧘" },
]

const accommodationTypes = [
  { value: "luxury", label: "Luxury Hotels & Resorts" },
  { value: "premium", label: "Premium Hotels" },
  { value: "standard", label: "Standard Hotels" },
  { value: "houseboat", label: "Traditional Houseboats" },
  { value: "camps", label: "Camps & Glamping" },
  { value: "guesthouse", label: "Local Guesthouses" },
  { value: "mixed", label: "Mix of Different Types" },
]

const budgetRanges = [
  { value: "budget", label: "Budget Friendly " },
  { value: "mid", label: "Mid Range " },
  { value: "premium", label: "Premium " },
  { value: "luxury", label: "Luxury " },
  { value: "flexible", label: "Flexible - Please suggest" },
]

const pickupCities = [
  "Srinagar",
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Chandigarh",
  "Leh",
  "Other",
]

export default function PlanTripPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    name: "",
    email: "",
    phone: "",

    // Step 2: Travel Details
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    adults: 2,
    children: 0,

    // Step 3: Preferences
    interests: [] as string[],
    accommodationType: "",
    budgetRange: "",

    // Step 4: Additional Details
    pickupCity: "",
    specialRequests: "",
    previousVisit: false,
    newsletter: true,
  })

  const totalSteps = 4

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInterestToggle = (interestId: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((id) => id !== interestId)
        : [...prev.interests, interestId],
    }))
  }

  const generateWhatsAppMessage = () => {
    const message = `Hi Heritage Kashmir Explorers! 

I'm interested in planning a trip to Kashmir/Ladakh. Here are my details:

👤 *Personal Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

📅 *Travel Details:*
Travel Dates: ${formData.startDate ? format(formData.startDate, "dd MMM yyyy") : "Not specified"} to ${formData.endDate ? format(formData.endDate, "dd MMM yyyy") : "Not specified"}
Travelers: ${formData.adults} Adults${formData.children > 0 ? `, ${formData.children} Children` : ""}

🎯 *Preferences:*
Interests: ${formData.interests.length > 0 ? formData.interests.map((id) => interests.find((i) => i.id === id)?.label).join(", ") : "Not specified"}
Accommodation: ${accommodationTypes.find((a) => a.value === formData.accommodationType)?.label || "Not specified"}
Budget Range: ${budgetRanges.find((b) => b.value === formData.budgetRange)?.label || "Not specified"}

📍 *Additional Details:*
Pickup City: ${formData.pickupCity || "Not specified"}
Special Requests: ${formData.specialRequests || "None"}

Please help me plan the perfect Kashmir/Ladakh experience!`

    return encodeURIComponent(message)
  }

  const handleSubmit = () => {
    const whatsappMessage = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone
      case 2:
        return formData.adults > 0
      case 3:
        return true // Optional step
      case 4:
        return true // Optional step
      default:
        return false
    }
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
              <Link href="/tours" className="text-foreground hover:text-primary transition-colors">
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

      {/* Header */}
      <section className="pt-24 pb-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Plan Your Perfect Kashmir Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your dream trip and we'll create a personalized itinerary just for you. Our travel experts
            will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div className={`h-1 w-16 md:w-24 mx-2 ${step < currentStep ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Basic Details</span>
            <span>Travel Details</span>
            <span>Preferences</span>
            <span>Additional Info</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">
              {currentStep === 1 && "Let's Start with Your Details"}
              {currentStep === 2 && "When Are You Planning to Travel?"}
              {currentStep === 3 && "What Interests You Most?"}
              {currentStep === 4 && "Final Details"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Basic Details */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Travel Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.startDate ? format(formData.startDate, "PPP") : "Select start date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.startDate}
                          onSelect={(date) => setFormData((prev) => ({ ...prev, startDate: date }))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.endDate ? format(formData.endDate, "PPP") : "Select end date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.endDate}
                          onSelect={(date) => setFormData((prev) => ({ ...prev, endDate: date }))}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="adults">Number of Adults *</Label>
                    <Select
                      value={formData.adults.toString()}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, adults: Number.parseInt(value) }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Adult{num > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="children">Number of Children</Label>
                    <Select
                      value={formData.children.toString()}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, children: Number.parseInt(value) }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Child" : "Children"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold">What interests you most? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                    {interests.map((interest) => (
                      <div
                        key={interest.id}
                        onClick={() => handleInterestToggle(interest.id)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.interests.includes(interest.id)
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-1">{interest.icon}</div>
                          <div className="text-sm font-medium">{interest.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="accommodation">Preferred Accommodation Type</Label>
                  <Select
                    value={formData.accommodationType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, accommodationType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select accommodation preference" />
                    </SelectTrigger>
                    <SelectContent>
                      {accommodationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range (Optional)</Label>
                  <Select
                    value={formData.budgetRange}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, budgetRange: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((budget) => (
                        <SelectItem key={budget.value} value={budget.value}>
                          {budget.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 4: Additional Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="pickup">Pickup City</Label>
                  <Select
                    value={formData.pickupCity}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, pickupCity: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your pickup city" />
                    </SelectTrigger>
                    <SelectContent>
                      {pickupCities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="special">Special Requests or Requirements</Label>
                  <Textarea
                    id="special"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                    placeholder="Any dietary restrictions, accessibility needs, special occasions, or other requests..."
                    rows={4}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="previous"
                      checked={formData.previousVisit}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, previousVisit: checked as boolean }))
                      }
                    />
                    <Label htmlFor="previous">I have visited Kashmir/Ladakh before</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, newsletter: checked as boolean }))
                      }
                    />
                    <Label htmlFor="newsletter">Subscribe to our newsletter for travel tips and offers</Label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                  <MessageCircle className="h-4 w-4" />
                  Send WhatsApp Enquiry
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact Options */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Prefer to talk directly? Our travel experts are here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
              onClick={() =>
                window.open(
                  "https://wa.me/919876543210?text=Hi! I would like to plan a trip to Kashmir/Ladakh. Can you help me?",
                  "_blank",
                )
              }
            >
              <MessageCircle className="h-4 w-4" />
              Quick WhatsApp Chat
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
              onClick={() => window.open("tel:+919876543210", "_self")}
            >
              <Phone className="h-4 w-4" />
              Call +91 9876543210
            </Button>
          </div>
        </div>
      </div>

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
