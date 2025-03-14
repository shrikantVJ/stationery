"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, X, Check } from "lucide-react"
import { motion } from "framer-motion"

export default function SignupPage() {
  //backend code
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
console.log("Name:",name);

   //backend code
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-pink-200 p-4">
      <motion.div 
        className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side with illustration */}
          <div className="md:w-1/2 bg-pink-200 p-8 relative">
            <Link href="/" className="text-pink-700 font-bold text-xl">Stationery.</Link>
            
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img 
                src="/placeholder.svg?height=400&width=400&text=Illustration" 
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
                <h3 className="text-pink-800 font-bold mb-2">Join our community!</h3>
                <p className="text-pink-900/70 text-sm">
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
                  currentStep >= 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > 1 ? <Check size={16} /> : 1}
                </div>
                <div className={`h-1 flex-1 mx-2 ${
                  currentStep > 1 ? 'bg-pink-500' : 'bg-gray-200'
                }`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
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
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 transition-all outline-none"
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
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="flex justify-end">
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className={`px-6 py-3 rounded-lg font-medium text-white transition-all ${
                      isHovered.nextButton 
                        ? 'bg-pink-600 shadow-lg shadow-pink-300/50 transform -translate-y-0.5' 
                        : 'bg-pink-500 shadow-md shadow-pink-300/30'
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
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 transition-all outline-none"
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
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-500 transition-all outline-none"
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
                        ? 'border-pink-300 bg-pink-50 text-pink-600 transform -translate-y-0.5' 
                        : 'border-gray-300 bg-white text-gray-700'
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
                        ? 'bg-pink-600 shadow-lg shadow-pink-300/50 transform -translate-y-0.5' 
                        : 'bg-pink-500 shadow-md shadow-pink-300/30'
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
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M12.545 12.151L12.545 12.151L12.545 12.151C12.545 9.36911 9.96036 7.29403 7.1793 7.29403C4.39824 7.29403 2.18182 9.51046 2.18182 12.2915C2.18182 15.0726 4.39824 17.289 7.1793 17.289C9.24737 17.289 11.0001 16.1475 11.8528 14.5056H7.1793V12.151H12.545ZM17.2731 12.151H19.6367V14.5147H22.0003V16.8783H19.6367V19.242H17.2731V16.8783H14.9094V14.5147H17.2731V12.151Z"
                      fill="#4285F4"
                    />
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                      fill="#1877F2"
                    />
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M14.94 5.19C16.23 3.63 15.85 2.44 15.85 2.44C15.85 2.44 14.75 2.8 13.41 3.84C12.07 4.88 11.87 6.24 11.87 6.24C11.87 6.24 13.65 6.75 14.94 5.19ZM17.39 22C16.92 22 16.19 21.67 15.27 21.18C14.35 20.69 13.5 20.45 12.72 20.45C11.88 20.45 11.16 20.69 10.57 21.18C9.97 21.67 9.18 21.92 8.18 21.92C6.97 21.92 5.88 21.51 4.9 20.69C3.92 19.88 3.12 18.69 2.49 17.13C1.86 15.57 1.54 13.96 1.54 12.3C1.54 10.58 1.95 9.14 2.76 7.97C3.58 6.8 4.69 6.22 6.11 6.22C6.59 6.22 7.13 6.38 7.73 6.71C8.33 7.04 8.74 7.21 8.96 7.21C9.23 7.21 9.72 7.05 10.44 6.71C11.15 6.38 11.77 6.22 12.3 6.22C13.21 6.22 14.04 6.46 14.8 6.96C15.56 7.46 16.13 8.13 16.53 8.96C15.41 9.57 14.84 10.49 14.84 11.73C14.84 12.81 15.22 13.71 15.98 14.42C16.74 15.13 17.62 15.49 18.62 15.49C18.75 15.49 18.87 15.48 18.99 15.46C18.99 16.36 18.9 17.17 18.7 17.88C18.5 18.59 18.2 19.23 17.8 19.8C17.4 20.37 16.94 20.83 16.41 21.18C15.88 21.53 15.35 21.83 14.82 22H17.39Z"
                      fill="#000000"
                    />
                  </svg>
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
                  className={`font-medium ${isHovered.signupLink ? "text-pink-600" : "text-pink-500"} transition-colors`}
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

