import Header from "@/app/components/Header"
import HeroSection from "@/app/components/HeroSection"
import WelcomeSection from "@/app/components/WelcomeSection"
import ProductGrid from "@/app/components/ProductGrid"
import PromoBanner from "@/app/components/PromoBanner"
import FeaturedProducts from "@/app/components/FeaturedProducts"
import Footer from "@/app/components/Footer"
import AddressPage from "../components/AddressPage"
import AllCard from "../components/AllCard"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (

    <main className="flex flex-row">
      <div><Sidebar/></div>
      <div>
          <Header />
          <HeroSection />
          <WelcomeSection />
          <ProductGrid />
          <PromoBanner />
          <FeaturedProducts />
          <AllCard/>
          <AddressPage/>
          <Footer />
      </div>

    </main>
  )
}

