"use client"

import { useState } from "react"

export default function PromoBanner() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="px-4 mb-16">
      <div className="container mx-auto">
        <div
          className="bg-gray-100 p-8 flex items-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=200&width=1200')",
            backgroundPosition: "right center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">ONLY THIS WEEK:</h3>
            <h2
              className={`text-4xl font-bold text-amber-600 mb-2 transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`}
            >
              SAVE 20%
            </h2>
            <p className="text-gray-700">ON ART SUPPLIES</p>
          </div>
        </div>
      </div>
    </section>
  )
}

