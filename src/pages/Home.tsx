import { HeroSection } from "@/components/HeroSection"
import { GallerySection } from "@/components/GallerySection"
import { PricingSection } from "@/components/PricingSection"

export const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GallerySection />
      <PricingSection />
    </main>
  )
}