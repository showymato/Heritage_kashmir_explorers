// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Phone, Mail } from "lucide-react"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="text-2xl lg:text-3xl font-serif font-bold text-primary">Heritage Kashmir</div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
//               Home
//             </Link>
//             <Link href="/tours" className="text-foreground hover:text-primary transition-colors font-medium">
//               Tours
//             </Link>
//             <Link href="/destinations" className="text-foreground hover:text-primary transition-colors font-medium">
//               Destinations
//             </Link>
//             <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
//               About
//             </Link>
//             <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
//               Contact
//             </Link>
//           </nav>

//           {/* Contact Info & CTA */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//               <div className="flex items-center space-x-1">
//                 <Phone className="h-4 w-4" />
//                 <span>+91 9876543210</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Mail className="h-4 w-4" />
//                 <span className="hidden xl:inline">info@heritagekashmir.com</span>
//               </div>
//             </div>
//             <Button asChild className="bg-primary hover:bg-primary/90">
//               <Link href="/plan-trip">Plan My Trip</Link>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Enhanced Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
//             <nav className="flex flex-col space-y-1 p-4">
//               <Link
//                 href="/"
//                 className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/tours"
//                 className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Tours
//               </Link>
//               <Link
//                 href="/destinations"
//                 className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Destinations
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact
//               </Link>

//               {/* Mobile Contact Info */}
//               <div className="pt-4 border-t border-border space-y-3">
//                 <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//                   <Phone className="h-4 w-4" />
//                   <span>+91 9876543210</span>
//                 </div>
//                 <Button asChild className="w-full bg-primary hover:bg-primary/90">
//                   <Link href="/plan-trip" onClick={() => setIsMenuOpen(false)}>
//                     Plan My Trip
//                   </Link>
//                 </Button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }











// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Phone, Mail } from "lucide-react"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <header className="fixed top-0 w-full z-50 p-4">
//       <div 
//         className={`transition-all duration-300 rounded-2xl border border-white/20 ${
//           isScrolled 
//             ? "bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/10" 
//             : "bg-white/5 backdrop-blur-lg"
//         }`}
//       >
//         <div className="container mx-auto px-6">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             {/* Logo */}
//             <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
//               <div className="text-2xl lg:text-3xl font-serif font-bold text-white drop-shadow-lg">
//                 Heritage Kashmir
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <Link href="/" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 Home
//               </Link>
//               <Link href="/tours" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 Tours
//               </Link>
//               <Link href="/destinations" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 Destinations
//               </Link>
//               <Link href="/about" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 About
//               </Link>
//               <Link href="/contact" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 Contact
//               </Link>
//             </nav>

//             {/* Contact Info & CTA */}
//             <div className="hidden lg:flex items-center space-x-4">
//               <div className="flex items-center space-x-4 text-sm text-white/80 drop-shadow-sm">
//                 <div className="flex items-center space-x-1">
//                   <Phone className="h-4 w-4" />
//                   <span>+91 9876543210</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Mail className="h-4 w-4" />
//                   <span className="hidden xl:inline">info@heritagekashmir.com</span>
//                 </div>
//               </div>
//               <Button 
//                 asChild 
//                 className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
//               >
//                 <Link href="/plan-trip">Plan My Trip</Link>
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden p-2 text-white/90 hover:text-white hover:scale-110 transition-all duration-200 rounded-lg hover:bg-white/10" 
//               onClick={() => setIsMenuOpen(!isMenuOpen)} 
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Enhanced Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden mt-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
//               <nav className="flex flex-col space-y-2 p-6">
//                 <Link
//                   href="/"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/tours"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Tours
//                 </Link>
//                 <Link
//                   href="/destinations"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Destinations
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   About
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact
//                 </Link>

//                 {/* Mobile Contact Info */}
//                 <div className="pt-4 border-t border-white/20 space-y-3">
//                   <div className="flex items-center space-x-2 text-sm text-white/80">
//                     <Phone className="h-4 w-4" />
//                     <span>+91 9876543210</span>
//                   </div>
//                   <Button 
//                     asChild 
//                     className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-200"
//                   >
//                     <Link href="/plan-trip" onClick={() => setIsMenuOpen(false)}>
//                       Plan My Trip
//                     </Link>
//                   </Button>
//                 </div>
//               </nav>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   )
// }




// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Phone, Mail } from "lucide-react"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <header className="fixed top-0 w-full z-50 p-4">
//       <div 
//         className={`transition-all duration-300 rounded-2xl border border-white/20 ${
//           isScrolled 
//             ? "bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/10" 
//             : "bg-white/5 backdrop-blur-lg"
//         }`}
//       >
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex items-center justify-between h-14">
//             {/* Logo */}
//             <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200">
//               <div className="text-xl lg:text-2xl font-serif font-bold text-white drop-shadow-lg">
//                 Heritage Kashmir
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-6">
//               <Link href="/" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 Home
//               </Link>
//               <Link href="/tours" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 Tours
//               </Link>
//               <Link href="/destinations" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 Destinations
//               </Link>
//               <Link href="/about" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 About
//               </Link>
//               <Link href="/contact" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm">
//                 Contact
//               </Link>
//             </nav>

//             {/* Contact Info & CTA */}
//             <div className="hidden lg:flex items-center space-x-3">
//               <div className="flex items-center space-x-4 text-sm text-white/80 drop-shadow-sm">
//                 <div className="flex items-center space-x-1">
//                   <Phone className="h-4 w-4" />
//                   <span>+91 9876543210</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Mail className="h-4 w-4" />
//                   <span className="hidden xl:inline">info@heritagekashmir.com</span>
//                 </div>
//               </div>
//               <Button 
//                 asChild 
//                 className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
//               >
//                 <Link href="/plan-trip">Plan My Trip</Link>
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden p-2 text-white/90 hover:text-white hover:scale-110 transition-all duration-200 rounded-lg hover:bg-white/10" 
//               onClick={() => setIsMenuOpen(!isMenuOpen)} 
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//           {/* Enhanced Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden mt-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
//               <nav className="flex flex-col space-y-2 p-6">
//                 <Link
//                   href="/"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/tours"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Tours
//                 </Link>
//                 <Link
//                   href="/destinations"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Destinations
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   About
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact
//                 </Link>

//                 {/* Mobile Contact Info */}
//                 <div className="pt-4 border-t border-white/20 space-y-3">
//                   <div className="flex items-center space-x-2 text-sm text-white/80">
//                     <Phone className="h-4 w-4" />
//                     <span>+91 9876543210</span>
//                   </div>
//                   <Button 
//                     asChild 
//                     className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-200"
//                   >
//                     <Link href="/plan-trip" onClick={() => setIsMenuOpen(false)}>
//                       Plan My Trip
//                     </Link>
//                   </Button>
//                 </div>
//               </nav>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 p-4">
      <div
        className={`transition-all duration-300 rounded-2xl border border-white/20 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/10"
            : "bg-white/5 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex items-center justify-between h-14">
            {/* Logo (always left) */}
            <Link
              href="/"
              className="flex items-center hover:scale-105 transition-transform duration-200 mr-6"
            >
             <Image
  src="/heritage-kashmir-logo.png"
  alt="Heritage Kashmir"
  width={160}
  height={35}
  className="h-[200px] md:h-[200px] lg:h-[200px] w-auto"
  priority
/>

            </Link>

            {/* Right side: Nav + Contact */}
            <div className="flex items-center justify-end flex-1">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="/"
                  className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
                >
                  Home
                </Link>
                <Link
                  href="/tours"
                  className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
                >
                  Tours
                </Link>
                <Link
                  href="/destinations"
                  className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
                >
                  Destinations
                </Link>
                <Link
                  href="/about"
                  className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
                >
                  Contact
                </Link>
              </nav>

              {/* Contact Info & CTA */}
              <div className="hidden lg:flex items-center space-x-3 ml-6">
                <div className="flex items-center space-x-4 text-sm text-white/80 drop-shadow-sm">
                  <div className="flex items-center space-x-1">
                    <Phone className="h-4 w-4" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mail className="h-4 w-4" />
                    <span className="hidden xl:inline">
                      info@heritagekashmir.com
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  <Link href="/plan-trip">Plan My Trip</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/90 hover:text-white hover:scale-110 transition-all duration-200 rounded-lg hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
              <nav className="flex flex-col space-y-2 p-6">
                {[
                  { href: "/", label: "Home" },
                  { href: "/tours", label: "Tours" },
                  { href: "/destinations", label: "Destinations" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-white/20 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-white/80">
                    <Phone className="h-4 w-4" />
                    <span>+91 9876543210</span>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Link href="/plan-trip" onClick={() => setIsMenuOpen(false)}>
                      Plan My Trip
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
