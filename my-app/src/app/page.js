import Header from "@/app/components/Header"
import HeroSection from "@/app/components/HeroSection"
import WelcomeSection from "@/app/components/WelcomeSection"
import ProductGrid from "@/app/components/ProductGrid"
import PromoBanner from "@/app/components/PromoBanner"
import FeaturedProducts from "@/app/components/FeaturedProducts"
import SocialMedia from "@/app/components/SocialMedia"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ProductGrid />
      <PromoBanner />
      <FeaturedProducts />
      <SocialMedia />
      <Footer />
    </main>
  )
}

