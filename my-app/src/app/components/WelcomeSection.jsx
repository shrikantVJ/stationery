"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function WelcomeSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">WELCOME</h2>
          <h3 className="text-xl text-gray-700 mb-6">TO OUR STORE</h3>

          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <p className="text-gray-600 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

          <button
            className="bg-transparent border-2 border-gray-800 text-gray-800 px-6 py-2 font-bold hover:bg-gray-800 hover:text-white transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            READ MORE
            <span className={`ml-2 inline-block transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}>
              →
            </span>
          </button>
        </div>

        <div className="relative">
          <img
            src="/placeholder.svg?height=300&width=500"
            alt="Welcome video thumbnail"
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
            <Play size={24} className="text-gray-800 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  )
}

