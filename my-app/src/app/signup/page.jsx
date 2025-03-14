"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, X, Check } from "lucide-react"
import { motion } from "framer-motion"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isHovered, setIsHovered] = useState({
    nextButton: false,
    backButton: false,
    createButton: false,
    googleButton: false,
    facebookButton: false,
    appleButton: false,
    loginLink: false
  })
  
  const handleMouseEnter = (item) => {
    setIsHovered(prev => ({ ...prev, [item]: true }))
  }
  
  const handleMouseLeave = (item) => {
    setIsHovered(prev => ({ ...prev, [item]: false }))
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  
  const nextStep = () => {
    setCurrentStep(2)
  }
  
  const prevStep = () => {
    setCurrentStep(1)
  }
  
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  }
  
  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r bg-[#9fbfc5] p-4">
      <motion.div 
        className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side with illustration */}
          <div className="md:w-1/2 bg-[#0d4d66] p-8 relative">
            <Link href="/" className="text-[#9fbfc5] font-bold text-xl">Stationery.</Link>
            
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
                <h3 className="text-[#9fbfc5] font-bold mb-2">Join our community!</h3>
                <p className="text-[#9fbfc5]/70 text-sm">
                  Create an account to access exclusive deals and keep track of your favorite stationery products.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Right side with form */}
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
                <button className="text-gray-500 hover:text-gray-800 transition-colors">
                  <X size={24} />
                </button>
              </Link>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? 'bg-[#0d4d66]/80 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > 1 ? <Check size={16} /> : 1}
                </div>
                <div className={`h-1 flex-1 mx-2 ${
                  currentStep > 1 ? 'bg-[#0d4d66]/80' : 'bg-gray-200'
                }`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? 'bg-[#0d4d66]/80 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Account Info</span>
                <span>Password Setup</span>
              </div>
            </div>
            
            {currentStep === 1 && (
              <motion.form 
                className="space-y-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-[#9fbfc5] rounded-lg focus:ring-2 focus:ring-[#9fbfc5] focus:border-[#9fbfc5] transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-[#9fbfc5] rounded-lg focus:ring-2 focus:ring-[#9fbfc5] focus:border-[#9fbfc5] transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="flex justify-end">
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
                      isHovered.nextButton 
                        ? 'bg-sky-900/90 shadow-lg shadow-slate-400 transform -translate-y-0.5' 
                        : 'bg-sky-900/90 shadow-lg shadow-slate-400'
                    }`}
                    onMouseEnter={() => handleMouseEnter('nextButton')}
                    onMouseLeave={() => handleMouseLeave('nextButton')}
                    whileTap={{ scale: 0.98 }}
                  >
                    Next Step
                  </motion.button>
                </div>
              </motion.form>
            )}
            
            {currentStep === 2 && (
              <motion.form 
                className="space-y-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-[#9fbfc5] rounded-lg focus:ring-2 focus:ring-[#9fbfc5] focus:border-[#9fbfc5] transition-all outline-none"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Password must be at least 8 characters long with a number and a special character.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-[#9fbfc5] rounded-lg focus:ring-2 focus:ring-[#9fbfc5] focus:border-[#9fbfc5] transition-all outline-none"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className={`px-6 py-3 rounded-lg font-medium border transition-all ${
                      isHovered.backButton 
                        ? 'shadow-slate-400 bg-slate-100 text-sky-900/90 transform -translate-y-0.5' 
                        : 'shadow-slate-400 bg-white text-gray-700'
                    }`}
                    onMouseEnter={() => handleMouseEnter('backButton')}
                    onMouseLeave={() => handleMouseLeave('backButton')}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                  
                  <motion.button
                    type="submit"
                    className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
                      isHovered.createButton 
                        ? 'bg-sky-900/90 shadow-lg shadow-slate-400 transform -translate-y-0.5' 
                        : 'bg-sky-900/90 shadow-lg shadow-slate-400'
                    }`}
                    onMouseEnter={() => handleMouseEnter('createButton')}
                    onMouseLeave={() => handleMouseLeave('createButton')}
                    whileTap={{ scale: 0.98 }}
                  >
                    Create Account
                  </motion.button>
                </div>
              </motion.form>
            )}
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="text-gray-500 text-sm">Or Sign Up With</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <motion.button
                  className={`flex justify-center items-center p-3 border rounded-full transition-all ${
                    isHovered.googleButton 
                      ? 'border-gray-400 shadow-md transform -translate-y-0.5' 
                      : 'border-gray-300'
                  }`}
                  onMouseEnter={() => handleMouseEnter('googleButton')}
                  onMouseLeave={() => handleMouseLeave('googleButton')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                   <span className="text-2xl"><FcGoogle /></span>
                </motion.button>

                <motion.button
                  className={`flex justify-center items-center p-3 border rounded-full transition-all ${
                    isHovered.facebookButton
                      ? "border-gray-400 shadow-md transform -translate-y-0.5"
                      : "border-gray-300"
                  }`}
                  onMouseEnter={() => handleMouseEnter("facebookButton")}
                  onMouseLeave={() => handleMouseLeave("facebookButton")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                 <span className="text-2xl text-blue-600"><FaFacebook /></span>
                </motion.button>

                <motion.button
                  className={`flex justify-center items-center p-3 border rounded-full transition-all ${
                    isHovered.appleButton ? "border-gray-400 shadow-md transform -translate-y-0.5" : "border-gray-300"
                  }`}
                  onMouseEnter={() => handleMouseEnter("appleButton")}
                  onMouseLeave={() => handleMouseLeave("appleButton")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                 <span className="text-2xl"><BsApple /></span>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-gray-600">
                i have an account?{" "}
                <Link
                  href="/login"
                  className={`font-medium ${isHovered.signupLink ? "text-sky-900/90" : "text-slate-00"} transition-colors`}
                  onMouseEnter={() => handleMouseEnter("signupLink")}
                  onMouseLeave={() => handleMouseLeave("signupLink")}
                >
                  Sign In here
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

