import Header from "@/app/components/Header"
import HeroSection from "@/app/components/HeroSection"
import WelcomeSection from "@/app/components/WelcomeSection"
import ProductGrid from "@/app/components/ProductGrid"
import PromoBanner from "@/app/components/PromoBanner"
import FeaturedProducts from "@/app/components/FeaturedProducts"
import Footer from "@/app/components/Footer"
import AboutUs from "./components/AboutUs"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ProductGrid />
      <PromoBanner />
      <FeaturedProducts />
      <AboutUs/>
      <Footer />
    </main>
  )
}

