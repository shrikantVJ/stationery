"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WelcomePage() {
  return (
    <section className="min-h-screen w-full bg-gray-50 text-gray-900 flex flex-col justify-center">
      {/* About Section */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <motion.div
          initial={{ opacity:0, x: -100 }}
          whileInView={{ opacity:1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,  // faster movement
            damping: 10,     // gitter effect
            mass: 1          // Lower mass makes it more responsive
          }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/bg.webp"
            width={550}
            height={400}
            alt="Store Interior"
            className="rounded-xl shadow-lg border border-l-10 border-purple-400 "
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
            Welcome to <span className="text-purple-500">Our Stationery Store</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Discover high-quality stationery, office essentials, and creative supplies to boost your productivity and creativity.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Whether you're looking for <span className="font-semibold">notebooks, pens, organizers, or office decor</span>,
            we have everything you need to create an inspiring workspace.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-black text-white font-semibold text-lg rounded-lg shadow-md hover:bg-gray-800 transition-all"
          >
            Explore Products
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
