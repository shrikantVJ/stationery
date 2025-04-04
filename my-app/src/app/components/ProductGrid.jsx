"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-100 mb-10 px-4 sm:px-8">
      {/* Header */}
      <header className="text-center text-3xl sm:text-4xl font-bold text-gray-800 pt-16 sm:pt-20">
        Enterprise Documentation
      </header>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto mt-12 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Government Cards */}
          <motion.div
          whileHover={{ y: -10 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="flex flex-col items-center rounded-lg p-6 outline outline-transparent transition-all duration-500 hover:outline hover:outline-zinc-900/20
 ">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Government Cards</h2>
            <Image 
              src="/images/gov-card.png" 
              width={200} 
              height={200} 
              alt="Government Cards" 
              className="rounded-md mb-4" 
              priority
            />
            <p className="text-gray-600 text-sm sm:text-base text-center">
              All essential government-issued cards in one place.
            </p>
            <button className="bg-gray-400 text-white text-[15px] mt-5 rounded-2xl px-5 py-2">
                Apply now
            </button>
          </motion.div>

          {/* Business Documents */}
          <motion.div
          whileHover={{ y: -10 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="flex flex-col items-center rounded-lg p-6 outline outline-transparent transition-all duration-500 hover:outline hover:outline-zinc-900/20
 ">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Business Documents</h2>
            <Image 
              src="/images/gov-docs.png" 
              width={200} 
              height={200} 
              alt="Business Documents" 
              className="rounded-md mb-4" 
              priority
            />
            <p className="text-gray-600 text-sm sm:text-base text-center">
              Essential documents for running and managing a business.
            </p>
            <button className="bg-gray-400 text-white text-[15px] mt-5 rounded-2xl px-5 py-2">
                Apply now
            </button>
          </motion.div>

          {/* Government Documents */}
          <motion.div 
          whileHover={{ y: -10 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="flex flex-col items-center rounded-lg p-6 outline outline-transparent transition-all duration-500 hover:outline hover:outline-zinc-900/20
">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Government Documents</h2>
            <Image 
              src="/images/business-doc.png" 
              width={200} 
              height={200} 
              alt="Government Documents" 
              className="rounded-md mb-4" 
              priority
            />
              <p className="text-gray-600 text-sm sm:text-base text-center">
                Important government records and legal paperwork.
              </p>
              <button className="bg-gray-400 text-white text-[15px] mt-5 rounded-2xl px-5 py-2">
                Apply now
              </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
