import { getTourBySlug, tours } from "@/lib/tours-data"
import { notFound } from "next/navigation"
import TourDetailClient from "./TourDetailClient"

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const tour = getTourBySlug(params.slug)

  if (!tour) {
    return {
      title: "Tour Not Found",
    }
  }

  return {
    title: `${tour.title} - Heritage Kashmir Explorers`,
    description: tour.description,
    openGraph: {
      title: `${tour.title} - Heritage Kashmir Explorers`,
      description: tour.description,
      images: [tour.bannerImage || tour.image],
    },
  }
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = getTourBySlug(params.slug)

  if (!tour) {
    notFound()
  }

  return <TourDetailClient tour={tour} />
}
