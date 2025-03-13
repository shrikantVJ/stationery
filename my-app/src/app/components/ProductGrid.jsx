"use client"

import { useState } from "react"
import Link from "next/link"

export default function ProductGrid() {
  const products = [
    { id: 1, name: "Premium Notebook", image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Art Supply Kit", image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Black Pens Set", image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Colored Pencil Set", image: "/placeholder.svg?height=300&width=300" },
    { id: 5, name: "Art Case", image: "/placeholder.svg?height=300&width=300" },
  ]

  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section className="px-4 mb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="block"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="bg-gray-100 p-4 relative overflow-hidden group">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />

                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 font-bold hover:bg-amber-500 hover:text-white transition-colors">
                      QUICK VIEW
                    </button>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

