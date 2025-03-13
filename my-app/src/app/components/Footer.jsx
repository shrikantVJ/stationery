"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, Dribbble } from "lucide-react"

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null)

  const footerLinks = {
    information: [
      { name: "SEARCH", href: "/search" },
      { name: "BLOG", href: "/blog" },
      { name: "ABOUT US", href: "/about" },
      { name: "DOCUMENTATION", href: "/docs" },
      { name: "CONTACT US", href: "/contact" },
    ],
    account: [
      { name: "MY ACCOUNT", href: "/account" },
      { name: "MY ADDRESSES", href: "/account/addresses" },
      { name: "MY CART", href: "/cart" },
    ],
    products: [
      { name: "ADHESIVES & TAPES", href: "/products/adhesives-tapes" },
      { name: "ARTS & CRAFTS", href: "/products/arts-crafts" },
      { name: "BINDERS & FOLDERS", href: "/products/binders-folders" },
      { name: "LABELS & STICKERS", href: "/products/labels-stickers" },
      { name: "OFFICE SUPPLIES", href: "/products/office-supplies" },
      { name: "PAPER PRODUCTS", href: "/products/paper-products" },
    ],
    social: [
      { name: "TWITTER", href: "#", icon: Twitter },
      { name: "FACEBOOK", href: "#", icon: Facebook },
      { name: "YOUTUBE", href: "#", icon: Youtube },
      { name: "INSTAGRAM", href: "#", icon: Instagram },
      { name: "DRIBBBLE", href: "#", icon: Dribbble },
    ],
  }

  return (
    <footer className="bg-zinc-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">INFORMATION:</h3>
            <ul className="space-y-2">
              {footerLinks.information.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-300 transition-colors flex items-center"
                    onMouseEnter={() => setHoveredLink(`info-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      className={`mr-2 transition-transform duration-300 ${hoveredLink === `info-${index}` ? "translate-x-1" : ""}`}
                    >
                      {hoveredLink === `info-${index}` ? "→" : ""}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">MY ACCOUNT:</h3>
            <ul className="space-y-2">
              {footerLinks.account.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-300 transition-colors flex items-center"
                    onMouseEnter={() => setHoveredLink(`account-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      className={`mr-2 transition-transform duration-300 ${hoveredLink === `account-${index}` ? "translate-x-1" : ""}`}
                    >
                      {hoveredLink === `account-${index}` ? "→" : ""}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">PRODUCTS:</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-300 transition-colors flex items-center"
                    onMouseEnter={() => setHoveredLink(`product-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span
                      className={`mr-2 transition-transform duration-300 ${hoveredLink === `product-${index}` ? "translate-x-1" : ""}`}
                    >
                      {hoveredLink === `product-${index}` ? "→" : ""}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">FOLLOW US:</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-300 transition-colors flex items-center"
                    onMouseEnter={() => setHoveredLink(`social-${index}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <link.icon size={16} className="mr-2" />
                    <span
                      className={`transition-transform duration-300 ${hoveredLink === `social-${index}` ? "translate-x-1" : ""}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            © 2025 Stationery. All Rights Reserved. Design by{" "}
            <a href="#" className="text-amber-300 hover:underline">
              PremiumStationery.com
            </a>
            . Powered by Shopify
          </p>
        </div>
      </div>
    </footer>
  )
}

