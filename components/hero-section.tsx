


// "use client"

// import { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Shield, Clock, MapPin, Car } from "lucide-react"
// import Link from "next/link"

// export function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Parallax */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/kashmir-dal-lake-sunrise.jpg')`,
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//         <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
//             <span className="block">Explore</span>
//             <span className="block text-yellow-400">Kashmir & Ladakh</span>
//           </h1>

//           <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
//             Discover the breathtaking beauty of the Himalayas with personalized itineraries, local expertise, and
//             unforgettable experiences.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Button 
//               asChild 
//               size="lg" 
//               className="text-lg px-8 py-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-xl rounded-lg"
//             >
//               <a
//                 href="https://wa.me/919596055491?text=Hi, I want to plan my trip with Heritage Kashmir Explorers"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Plan My Trip <ArrowRight className="ml-2 h-5 w-5" />
//               </a>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm rounded-lg"
//             >
//               <Link href="/tours">Browse Tours</Link>
//             </Button>
//           </div>
//         </div>

//         <div
//           className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 transition-all duration-1000 delay-500 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
//             <Shield className="h-8 w-8 text-yellow-400 mb-2" />
//             <span className="text-sm font-medium">Licensed Local Guides</span>
//             <span className="text-xs text-gray-300 mt-1">Expert local knowledge</span>
//           </div>
//           <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
//             <Clock className="h-8 w-8 text-yellow-400 mb-2" />
//             <span className="text-sm font-medium">24×7 Travel Assistance</span>
//             <span className="text-xs text-gray-300 mt-1">Always available</span>
//           </div>
//           <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
//             <MapPin className="h-8 w-8 text-yellow-400 mb-2" />
//             <span className="text-sm font-medium">Customizable Itineraries</span>
//             <span className="text-xs text-gray-300 mt-1">Tailored experiences</span>
//           </div>
//           <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
//             <Car className="h-8 w-8 text-yellow-400 mb-2" />
//             <span className="text-sm font-medium">Safe & Comfortable Transport</span>
//             <span className="text-xs text-gray-300 mt-1">Comfortable journeys</span>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   )
// }













// "use client"

// import { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Shield, Clock, MapPin, Car } from "lucide-react"
// import Link from "next/link"

// export function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Background Image with Parallax */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/kashmir-dal-lake-sunrise.jpg')`,
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
//         <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
//             <span className="block">Explore</span>
//             <span className="block text-yellow-400">Kashmir & Ladakh</span>
//           </h1>

//           <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
//             Discover the breathtaking beauty of the Himalayas with personalized itineraries, local expertise, and
//             unforgettable experiences.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Button 
//               asChild 
//               size="lg" 
//               className="text-lg px-8 py-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-xl rounded-lg"
//             >
//               <a
//                 href="https://wa.me/919596055491?text=Hi, I want to plan my trip with Heritage Kashmir Explorers"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Plan My Trip <ArrowRight className="ml-2 h-5 w-5" />
//               </a>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm rounded-lg"
//             >
//               <Link href="/tours">Browse Tours</Link>
//             </Button>
//           </div>
//         </div>

//         <div
//           className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 transition-all duration-1000 delay-500 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
//             <Shield className="h-8 w-8 text-yellow-400 mb-2" />
//             <span className="text-sm font-medium">Licensed Local Guides</span>
//             <span className="text-xs text-gray-300 mt-1">Expert local knowledge</span>
//           </div>
//           <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
//             <Clock className="h-8 w-8 text-yellow-400 mb-2" />
//             <span className="text-sm font-medium">24×7 Travel Assistance</span>
//             <span className="text-xs text-gray-300 mt-1">Always available</span>
//           </div>
//           <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
//             <MapPin className="h-8 w-8 text-yellow-400 mb-2" />
//             <span className="text-sm font-medium">Customizable Itineraries</span>
//             <span className="text-xs text-gray-300 mt-1">Tailored experiences</span>
//           </div>
//           <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
//             <Car className="h-8 w-8 text-yellow-400 mb-2" />
//             <span className="text-sm font-medium">Safe & Comfortable Transport</span>
//             <span className="text-xs text-gray-300 mt-1">Comfortable journeys</span>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   )
// }







"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, MapPin, Car } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/kashmir-dal-lake-sunrise.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">Explore</span>
            <span className="block text-yellow-400">Kashmir & Ladakh</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed px-2">
            Discover the breathtaking beauty of the Himalayas with personalized itineraries, local expertise, and
            unforgettable experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Button 
              asChild 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-xl rounded-lg w-full sm:w-auto"
            >
              <a
                href="https://wa.me/919596055491?text=Hi, I want to plan my trip with Heritage Kashmir Explorers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan My Trip <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm rounded-lg w-full sm:w-auto"
            >
              <Link href="/tours">Browse Tours</Link>
            </Button>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 md:mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
            <Shield className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-400 mb-2" />
            <span className="text-xs sm:text-sm font-medium leading-tight">Licensed Local Guides</span>
            <span className="text-xs text-gray-300 mt-1 hidden sm:block">Expert local knowledge</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
            <Clock className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-400 mb-2" />
            <span className="text-xs sm:text-sm font-medium leading-tight">24×7 Travel Assistance</span>
            <span className="text-xs text-gray-300 mt-1 hidden sm:block">Always available</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
            <MapPin className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-400 mb-2" />
            <span className="text-xs sm:text-sm font-medium leading-tight">Customizable Itineraries</span>
            <span className="text-xs text-gray-300 mt-1 hidden sm:block">Tailored experiences</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
            <Car className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-400 mb-2" />
            <span className="text-xs sm:text-sm font-medium leading-tight">Safe & Comfortable Transport</span>
            <span className="text-xs text-gray-300 mt-1 hidden sm:block">Comfortable journeys</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}














