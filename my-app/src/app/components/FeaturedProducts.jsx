"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FeaturedProducts() {
  const products = [
    { id: 1, 
      name: "3-HOLE PUNCH SIZE", 
      price: "$9.00", 
      image: "/images/hole-punch.png", 
      tag: "New" },
    {
      id: 2,
      name: "DELUXE OFFICE INTERCOM DESK",
      price: "$55.00",
      image: "/images/telephone.png",
      tag: "Sale",
    },
    {
      id: 3,
      name: "CUTTING KNIFE 25MM & SPARE",
      price: "$12.00",
      image: "/images/knife.png",
      tag: "Hot",
    },
    {
      id: 4,
      name: "DVD-R SPINDLE 4.7 GB 16X",
      price: "$17.00",
      image: "/images/eraser.png",
      tag: "New"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const productsToShow = 4

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + productsToShow >= products.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - productsToShow : prevIndex - 1))
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + productsToShow)

  // If we don't have enough products to fill the slider, add from the beginning
  if (visibleProducts.length < productsToShow) {
    visibleProducts.push(...products.slice(0, productsToShow - visibleProducts.length))
  }

  return (
    <section className="px-4 mb-16 mx-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">FEATURED PRODUCTS:</h2>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="bg-gray-100 p-4 mb-4 relative overflow-hidden group">
                  <div
                    className={`absolute top-2 left-2 z-10 text-xs text-white px-2 py-1 ${
                      product.tag === "New" ? "bg-blue-600" : product.tag === "Sale" ? "bg-red-600" : "bg-amber-600"
                    }`}
                  >
                    {product.tag}
                  </div>

                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-[220px] transition-transform duration-500 group-hover:scale-110"
                  />

                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white text-gray-800 px-4 py-2 font-bold hover:bg-amber-500 hover:text-white transition-colors">
                        QUICK VIEW
                      </button>
                    </div>
                  )}
                </div>

                <h3 className="text-sm font-bold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-amber-600 font-bold">{product.price}</p>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

