"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiSpellBook } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
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
        initial={{ x: -400 }}
        animate={{ x: isOpen ? 0 : -400 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-[400px] bg-gray-900/50 backdrop-blur-xs text-white shadow-lg p-4 z-50 md:translate-x-0"
      >
        {/* Close Button (Mobile) */}
        <div className="flex justify-center items-center mb-10">
          <div className="items-center gap-2">
              <h1 className="text-2xl font-light flex flex-row items-center border border-gray-400 px-5 rounded-4xl">
                <span className="text-white text-4xl mr-3 "><GiSpellBook /></span>
                <span className="flex flex-col mb-0 font-bold text-white">
                    Manisha
                    <span className="text-[15px] text-gray-400 font-medium">stationery</span>
                </span>
              </h1>
          </div>
          <h1 className="relative left-10  md:hidden cursor-pointer text-4xl hover:text-zinc-400" onClick={() => setIsOpen(false)} >
          <IoCloseCircleOutline />
          </h1>
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
