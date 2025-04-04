"use client";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="px-4 mb-16 mx-4 sm:mx-20">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-[#0f172a]  to-[#334155] text-[#faf9f5] p-6 sm:p-10 text-center rounded-lg shadow-md border-l-4 border-gray-500">
          <h2 className="text-3xl sm:text-4xl font-bold">
            🖋️ Exclusive Stationery Deal!
          </h2>
          <p className="mt-2 text-lg">
            Get 20% off on premium pens & notebooks! ✨
          </p>
         
            <button className="mt-4 bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
              Shop Now
            </button>
      
        </div>
      </div>
    </section>
  );
}
