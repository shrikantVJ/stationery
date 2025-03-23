"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen bg-zinc-950 rounded rounded-b-4xl text-white px-6 sm:px-12 md:px-20 gap-6 sm:gap-10 md:gap-16 py-10">
      {/* Text Content */}
      <div className="max-w-2xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text tracking-tight text-transparent"
        >
          Welcome To Manisha Enterprises
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-sm sm:text-base md:text-lg mb-6 text-gray-300"
        >
          Curating beautiful stationery for every occasion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center md:justify-start"
        >
          <motion.a
            href="#explore"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-5 animate-bounce sm:px-6 py-2.5 sm:py-3 mt-5 bg-purple-700 rounded-lg shadow-lg text-base sm:text-lg font-semibold hover:bg-purple-900 transition"
          >
            Explore More
          </motion.a>
        </motion.div>

        {/* Feature Boxes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 mt-10"
        >
          <div className="flex w-full sm:w-[230px] items-center gap-x-4 rounded-xl border border-zinc-800 p-3">
            <span className="text-2xl ml-2 sm:ml-4">
              <FaShippingFast />
            </span>
            <div>
              <div className="text-[14px] sm:text-[15px] font-medium text-white">Free Shipping</div>
              <p className="text-[12px] text-gray-500">ON ORDERS OVER $99</p>
            </div>
          </div>

          <div className="flex w-full sm:w-[230px] items-center gap-x-4 rounded-xl border border-zinc-800 p-3">
            <span className="text-2xl">
              <GiReturnArrow />
            </span>
            <div>
              <div className="text-[14px] sm:text-[15px] font-medium text-white">Order Return</div>
              <p className="text-[12px] text-gray-500">RETURN WITHIN 14 DAYS</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
       initial={{ opacity:0, x: 100 }}
       animate={{ opacity:1, x: 0 }}
       transition={{
         type: "spring",
         stiffness: 500,  // faster movement
         damping: 10,     // gitter effect
         mass: 1         // Lower mass makes it more responsive
       }}
        className="relative w-full max-w-md"
      >
        <img src="images/desk.png" alt="Stationery Desk" className="w-full h-auto object-contain" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
