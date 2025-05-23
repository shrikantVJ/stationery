"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { GiSpellBook } from "react-icons/gi"
import { signOut } from "next-auth/react" // ✅ Import signOut from next-auth

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
      <div className="hidden md:flex fixed w-full z-50 bg-zinc-950 border-b-2 border-purple-700 rounded-b-4xl backdrop-blur-sm text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex md:bg-none items-center gap-2 px-20">
            <h1 className="text-2xl font-light flex flex-row items-center border border-gray-400 px-5 rounded-4xl">
              <span className="text-white text-4xl mr-3"><GiSpellBook /></span>
              <span className="flex flex-col mb-0 font-bold text-white">
                Manisha
                <span className="text-[15px] text-gray-400 font-medium">enterprises</span>
              </span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {["home", "products", "about", "contact"].map((item) => (
              <Link
                key={item}
                href={item === "home" ? "/" : `/${item}`}
                className={`relative py-2 ${isHovered[item] ? "text-zinc-400" : "text-white"}`}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={() => handleMouseLeave(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {isHovered[item] && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-400"></span>}
              </Link>
            ))}
          </nav>

          {/* Cart & Logout */}
          <div className="flex items-center gap-10 mx-20">
            <div className="items-center">
              <Link href="/cart" className="flex items-center gap-1 hover:text-zinc-400 transition-colors">
                <ShoppingBag size={20} />
                <span className="text-sm">SHOPPING CART 2</span>
              </Link>
            </div>

            <div>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="border border-gray-400 px-5 rounded-4xl shadow-lg text-[15px] py-1 font-semibold hover:bg-gray-800/90 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
