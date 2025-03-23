"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Product Data
const products = [
  {
    id: 1,
    image: "/images/book2.png",
    title: "Luxury Notebook",
    description: "Premium pages for smooth writing",
    price: "$14.99",
  },
  {
    id: 2,
    image: "/images/pen.png",
    title: "Classic Pen Set",
    description: "Perfect for professionals & students",
    price: "$9.99",
  },
  {
    id: 3,
    image: "/images/sketch.png",
    title: "Creative Sketchbook",
    description: "Ideal for artists & designers",
    price: "$18.49",
  },
  {
    id: 4,
    image: "/images/desk.png",
    title: "Desk Organizer",
    description: "Keep your workspace neat & tidy",
    price: "$20.99",
  },
];

// Product Card Component
const ProductCard = ({ product, delay }) => (
  <motion.div
    className="bg-white p-5 rounded-xl hover:shadow-lg border border-gray-200 flex flex-col items-center justify-between h-full duration-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1  }}
    transition={{ duration: 0.5,delay}}
  >
    <div className="w-[150px] h-[150px] flex items-center justify-center">
      <Image src={product.image} width={150} height={150} alt={product.title} className="rounded-lg" />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">{product.title}</h3>
    <p className="text-gray-500 text-sm text-center flex-grow">{product.description}</p>
    <div className="flex flex-col items-center justify-between w-full mt-4">
      <span className="text-lg mb-2 font-bold text-gray-900">{product.price}</span>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-400 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-500 transition-all"
      >
        Buy Now
      </motion.button>
    </div>
  </motion.div>
);

// Featured Products Section
const FeaturedProducts = () => (
  <section className="min-h-screen w-full bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 md:px-20">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12">
      🌟 Featured Products
    </h2>

    {/* Responsive Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} delay={0.1 * (index + 1)} />
      ))}
    </div>
  </section>
);

export { ProductCard }; // Named Export
export default FeaturedProducts; // Default Export
