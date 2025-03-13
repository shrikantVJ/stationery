"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react"

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
      <div className="bg-zinc-800 text-white text-xs py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <Link href="/account/create" className="hover:text-amber-300 transition-colors">
              CREATE AN ACCOUNT
            </Link>
            <span>|</span>
            <Link href="/login" className="hover:text-amber-300 transition-colors">
              LOG IN
            </Link>
            <span>|</span>
            <Link href="/checkout" className="hover:text-amber-300 transition-colors">
              CHECK OUT
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="bg-transparent border-none text-white text-xs focus:outline-none cursor-pointer">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <button className="hover:text-amber-300 transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 text-white py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-light">
              <span className="block">Stationery</span>
              <span className="text-xs tracking-widest">ONLINE STORE</span>
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
              <span className="bg-amber-600 text-white text-xs px-1 absolute -top-2 -right-2">NEW</span>
              Products
              {isHovered.products && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></span>}
            </Link>

            <Link
              href="/blog"
              className={`relative py-2 ${isHovered.blog ? "text-amber-300" : "text-white"}`}
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={() => handleMouseLeave("blog")}
            >
              Blog
              {isHovered.blog && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></span>}
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

          <div className="flex items-center">
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

