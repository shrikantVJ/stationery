"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [isHovered, setIsHovered] = useState({
    nextButton: false,
    backButton: false,
  });

  const handleMouseEnter = (item) => {
    setIsHovered((prev) => ({ ...prev, [item]: true }));
  };

  const handleMouseLeave = (item) => {
    setIsHovered((prev) => ({ ...prev, [item]: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const nextStep = () => {
    if (!formData.name || !formData.email) {
      setError("Please fill in all fields");
      return;
    }

    // Optional email validation
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail(formData.email)) {
      setError("Enter a valid email address");
      return;
    }

    setError("");
    setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password) {
      setError("Please enter a password");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.status === 201) {
        // Success
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-[#9fbfc5] p-4">
      <motion.div
        className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="md:w-1/2 bg-[#0d4d66] p-8 relative">
            <Link href="/" className="text-[#9fbfc5] font-bold text-xl">
              Stationery.
            </Link>
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img
                src="/images/signup.png"
                alt="Signup illustration"
                className="w-full max-w-xs mx-auto"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-8 right-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-[#9fbfc5] font-bold mb-2">
                  Join our community!
                </h3>
                <p className="text-[#9fbfc5]/70 text-sm">
                  Create an account to access exclusive deals and keep track of
                  your favorite stationery products.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
              <motion.h2
                className="text-3xl font-bold text-gray-800"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Sign Up
              </motion.h2>
              <Link href="/">
                <button className="text-gray-500 hover:text-gray-800">
                  <X size={24} />
                </button>
              </Link>
            </div>

            {/* Step Indicators */}
            <div className="mb-8">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 1
                      ? "bg-[#0d4d66]/80 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > 1 ? <Check size={16} /> : 1}
                </div>
                <div
                  className={`h-1 flex-1 mx-2 ${
                    currentStep > 1 ? "bg-[#0d4d66]/80" : "bg-gray-200"
                  }`}
                ></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= 2
                      ? "bg-[#0d4d66]/80 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  2
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Account Info</span>
                <span>Password Setup</span>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
                {error}
              </div>
            )}

            {/* Step 1 */}
            {currentStep === 1 && (
              <motion.form
                className="space-y-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="flex justify-end">
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
                      isHovered.nextButton
                        ? "bg-sky-900/90 shadow-lg transform -translate-y-0.5"
                        : "bg-sky-900/90 shadow-lg"
                    }`}
                    onMouseEnter={() => handleMouseEnter("nextButton")}
                    onMouseLeave={() => handleMouseLeave("nextButton")}
                    whileTap={{ scale: 0.98 }}
                  >
                    Next Step
                  </motion.button>
                </div>
              </motion.form>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="Enter a strong password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800"
                  >
                    Back
                  </motion.button>

                  <motion.button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-[#0d4d66] text-white hover:bg-[#08384a]"
                  >
                    Create Account
                  </motion.button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
