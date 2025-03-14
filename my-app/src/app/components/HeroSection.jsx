"use client"

import { useState } from "react"
import { Truck, RotateCcw, Clock } from "lucide-react"
import {motion} from 'motion/react'

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "ART SUPPLIES PROFESSIONAL SETS",
      description: "High-quality art supplies for professionals and beginners",
    },
    {
      title: "PREMIUM STATIONERY COLLECTION",
      description: "Elegant and functional stationery for your everyday needs",
    },
    {
      title: "CREATIVE TOOLS FOR ARTISTS",
      description: "Unleash your creativity with our premium art tools",
    },
  ]

  const handleDotClick = (index) => {
    setActiveSlide(index)
  }

  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home2.png')"}}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto h-full relative z-10 flex flex-col justify-center px-4">
        <motion.div
        initial={{opacity:0, x:-50}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.7}}
        className="max-w-lg">
          <h2 className=" text-5xl font-bold mb-4 mt-30 mx-20 text-[#9fbfc5]">
              {slides[activeSlide].title}
          </h2>
          <p className="text-white/80 mb-8 mx-20">
              {slides[activeSlide].description}
          </p>
        </motion.div>

        <div className="flex gap-2 mt-auto mb-8 ml-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 right-20 flex flex-col ">
        <div className=" text-white p-4 flex items-center gap-3 w-full md:w-auto">
          <Truck size={24} />
          <div>
            <h3 className="font-bold">Free shipping</h3>
            <p className="text-sm">ON ORDERS OVER $99</p>
          </div>
        </div>

        <div className=" text-white p-4 flex items-center gap-3 w-full md:w-auto">
          <RotateCcw size={24} />
          <div>
            <h3 className="font-bold">Order return</h3>
            <p className="text-sm">RETURN WITHIN 14 DAYS</p>
          </div>
        </div>

        <div className=" text-white p-4 flex items-center gap-3 w-full md:w-auto">
          <Clock size={24} />
          <div>
            <h3 className="font-bold">Order online</h3>
            <p className="text-sm">HOURS: 8AM-11PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

