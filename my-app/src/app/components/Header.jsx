"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { GiAbstract023 } from "react-icons/gi";


export default function Header() {
  const [isHovered, setIsHovered] = useState({
    home: false,
    products: false,
    blog: false,
    sale: false,
    about: false,
    contact: false,
  })

  const handleMouseEnter = (item) => {
    setIsHovered((prev) => ({ ...prev, [item]: true }))
  }

  const handleMouseLeave = (item) => {
    setIsHovered((prev) => ({ ...prev, [item]: false }))
  }

  return (
    <header className="w-full">

      <div className="bg-zinc-900 text-white py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 mx-20">
            <h1 className="text-2xl font-light flex flex-row">
              <span className="text-white text-4xl mr-3 "><GiAbstract023 /></span>
              <span className="block mb-0 font-bold bg-gradient-to-r from-pink-500 to-purple-800 bg-clip-text text-3xl tracking-tight text-transparent">SHRIKANT</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`relative py-2 ${isHovered.home ? "text-amber-300" : "text-white"}`}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={() => handleMouseLeave("home")}
            >
              Home
              {isHovered.home && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></span>}
            </Link>

            <Link
              href="/products"
              className={`relative py-2 ${isHovered.products ? "text-amber-300" : "text-white"}`}
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={() => handleMouseLeave("products")}
            >
              Products
              {isHovered.products && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></span>}
            </Link>

            <Link
              href="/sale"
              className={`relative py-2 ${isHovered.sale ? "text-amber-300" : "text-white"}`}
              onMouseEnter={() => handleMouseEnter("sale")}
              onMouseLeave={() => handleMouseLeave("sale")}
            >
              Sale
              {isHovered.sale && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></span>}
            </Link>

            <Link
              href="/about"
              className={`relative py-2 ${isHovered.about ? "text-amber-300" : "text-white"}`}
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={() => handleMouseLeave("about")}
            >
              About us
              {isHovered.about && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></span>}
            </Link>

            <Link
              href="/contact"
              className={`relative py-2 ${isHovered.contact ? "text-amber-300" : "text-white"}`}
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={() => handleMouseLeave("contact")}
            >
              Contact us
              {isHovered.contact && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></span>}
            </Link>
          </nav>

          <div className="flex items-center mx-20">
            <Link href="/cart" className="flex items-center gap-1 hover:text-amber-300 transition-colors">
              <ShoppingBag size={20} />
              <span className="text-sm">SHOPPING CART 2</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

