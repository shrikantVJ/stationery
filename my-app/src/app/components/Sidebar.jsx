"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Hamburger Button (Mobile) */}
      <button
        className="fixed top-4 left-4 z-60 text-white bg-gray-900/30 backdrop-blur-sm p-2 rounded-md md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu className="text-2xl" />
      </button>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
        className="fixed top-18 left-0 h-full w-64 bg-gray-900/50 backdrop-blur-xs text-white shadow-lg p-4 z-50 md:translate-x-0"
      >
        {/* Close Button (Mobile) */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <FiX className="md:hidden cursor-pointer text-xl" onClick={() => setIsOpen(false)} />
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-3">
          <li className="hover:bg-gray-700/50 p-2 rounded"><a href="/">Home</a></li>
          <li className="hover:bg-gray-700/50 p-2 rounded"><a href="/product">Products</a></li>
          <li className="hover:bg-gray-700/50 p-2 rounded"><a href="/about">About</a></li>
          <li className="hover:bg-gray-700/50 p-2 rounded"><a href="/contact">Contact</a></li>
        </ul>
      </motion.div>
    </div>
  );
}
