
// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
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
//         <div className="max-w-6xl mx-auto px-2">
//           <div className="flex items-center justify-between h-14">
//             {/* Logo (always left) */}
//             <Link
//               href="/"
//               className="flex items-center hover:scale-105 transition-transform duration-200 mr-6"
//             >
//              <Image
//   src="/heritage-kashmir-logo.png"
//   alt="Heritage Kashmir"
//   width={160}
//   height={35}
//   className="h-[200px] md:h-[200px] lg:h-[200px] w-auto"
//   priority
// />

//             </Link>

//             {/* Right side: Nav + Contact */}
//             <div className="flex items-center justify-end flex-1">
//               {/* Desktop Navigation */}
//               <nav className="hidden md:flex items-center space-x-6">
//                 <Link
//                   href="/"
//                   className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/tours"
//                   className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
//                 >
//                   Tours
//                 </Link>
//                 <Link
//                   href="/destinations"
//                   className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
//                 >
//                   Destinations
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
//                 >
//                   About
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
//                 >
//                   Contact
//                 </Link>
//               </nav>

//               {/* Contact Info & CTA */}
//               <div className="hidden lg:flex items-center space-x-3 ml-6">
//                 <div className="flex items-center space-x-4 text-sm text-white/80 drop-shadow-sm">
//                   <div className="flex items-center space-x-1">
//                     <Phone className="h-4 w-4" />
//                     <span>+91 9876543210</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Mail className="h-4 w-4" />
//                     <span className="hidden xl:inline">
//                       info@heritagekashmir.com
//                     </span>
//                   </div>
//                 </div>
//                 <Button
//                   asChild
//                   className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
//                 >
//                   <Link href="/https://wa.me/919876543210">Plan My Trip</Link>
//                 </Button>
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 text-white/90 hover:text-white hover:scale-110 transition-all duration-200 rounded-lg hover:bg-white/10"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden mt-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
//               <nav className="flex flex-col space-y-2 p-6">
//                 {[
//                   { href: "/", label: "Home" },
//                   { href: "/tours", label: "Tours" },
//                   { href: "/destinations", label: "Destinations" },
//                   { href: "/about", label: "About" },
//                   { href: "/contact", label: "Contact" },
//                 ].map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}

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
//                     <Link href="https://wa.me/919876543210" onClick={() => setIsMenuOpen(false)}>
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
        className={`transition-all duration-300 rounded-2xl border ${
          isScrolled
            ? "bg-gray-400/90 backdrop-blur-xl shadow-2xl border-gray-600/50"
            : "bg-gray-600/70 backdrop-blur-lg border-gray-300/30"
        }`}
      >
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
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
                    className="text-gray-200 hover:text-white hover:scale-105 transition-all duration-200 font-medium drop-shadow-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Contact Info & CTA */}
              <div className="hidden lg:flex items-center space-x-3 ml-6">
                <div className="flex items-center space-x-4 text-sm text-gray-300 drop-shadow-sm">
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
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all duration-200"
                >
                  <Link href="https://wa.me/919876543210">Plan My Trip</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-200 hover:text-white hover:scale-110 transition-all duration-200 rounded-lg hover:bg-white/10"
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
            <div className="md:hidden mt-4 bg-gray-900/95 backdrop-blur-xl border border-gray-700/40 rounded-2xl shadow-2xl">
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
                    className="text-gray-200 hover:text-white hover:bg-gray-700/40 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-700/50 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Phone className="h-4 w-4" />
                    <span>+91 9876543210</span>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-none shadow-lg hover:shadow-amber-500/30 transition-all duration-200"
                  >
                    <Link
                      href="https://wa.me/919876543210"
                      onClick={() => setIsMenuOpen(false)}
                    >
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
