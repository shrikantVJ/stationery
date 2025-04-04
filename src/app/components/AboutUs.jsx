"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 p-10 text-gray-800">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to our stationery store, where creativity meets quality. We provide a wide range of stationery products to inspire your ideas.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg mb-12 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          Our mission is to provide high-quality stationery that fuels creativity and productivity, ensuring that every idea starts with the right tools.
        </p>
      </motion.div>

      {/* Product Highlights */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg mb-12 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-2">Our Products</h2>
        <p>
          From premium notebooks and pens to artistic supplies, we offer a variety of stationery items that bring joy to writing, sketching, and planning.
        </p>
      </motion.div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Emma - Founder", "Jack - Designer", "Sophia - Customer Support"].map((name, index) => (
          <motion.div 
            key={name} 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold">{name.split(' - ')[0]}</h3>
            <p className="text-gray-600">{name.split(' - ')[1]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}