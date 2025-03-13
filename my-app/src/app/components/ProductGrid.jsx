"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"

export default function ProductGrid() {
  const products = [
    { id: 1, name: "Premium Notebook", image: "/images/book.png" },
    { id: 2, name: "Art Supply Kit", image: "/images/pen.png" },
    { id: 3, name: "Black Pens Set", image: "/images/duster.png" },
    { id: 4, name: "Colored Pencil Set", image: "/images/pencil.png" },
    { id: 5, name: "Art Case", image: "/images/book2.png" },
    { id: 6, name: "Art Case", image: "/images/staple.png" },
  ]

  const [hoveredProduct, setHoveredProduct] = useState(null)

  return (
    <section className=" px-4 mb-16 mx-20">
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
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.5}}
              className="shadow-md bg-gray-100 p-4 relative overflow-hidde group flex items-center justify-center">
                <img
                  src={product.image || "/images/book.png"}
                  alt={product.name}
                  className="flex items-center w-[150px] h-[150px] transition-transform duration-500 group-hover:scale-110"
                />
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 font-bold hover:bg-amber-500 hover:text-white transition-colors">
                      QUICK VIEW
                    </button>
                  </div>
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

