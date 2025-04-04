"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, X } from "lucide-react";
import { motion } from "framer-motion";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { BsApple } from "react-icons/bs";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState({
    loginButton: false,
    googleButton: false,
    facebookButton: false,
    appleButton: false,
    signupLink: false,
    forgotPassword: false,
  });

  const handleMouseEnter = (item) => {
    setIsHovered((prev) => ({ ...prev, [item]: true }));
  };

  const handleMouseLeave = (item) => {
    setIsHovered((prev) => ({ ...prev, [item]: false }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { data: session } = useSession(); // backend code

  const router = useRouter();
  useEffect(() => {}, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      if (session) {
        router.replace("/home");
      }
    } catch (error) {
      console.log(error)
    }
  }; // backend code

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9fbfc5] p-4">
      <motion.div
        className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side with illustration */}
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
                src="/images/login-image.png"
                alt="Login illustration"
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
                <h3 className="text-[#9fbfc5] font-bold mb-2">Welcome back!</h3>
                <p className="text-[#9fbfc5]/90 text-sm">
                  Log in to access your account and explore our premium
                  stationery collection.
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
                Login
              </motion.h2>

              <Link href="/">
                <button className="text-gray-500 hover:text-gray-800 transition-colors">
                  <X size={24} />
                </button>
              </Link>
            </div>

            <motion.form
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-[#9fbfc5] rounded-lg focus:ring-2 focus:ring-[#9fbfc5] focus:border-[#9fbfc5] transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <span className="text-gray-400">
                      {email.length === 0 && "✉️"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-[#9fbfc5] rounded-lg focus:ring-2 focus:ring-[#9fbfc5] focus:border-[#9fbfc5] transition-all outline-none"
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
              </div>

              {error && (
                <div className="bg-red-500 text-white w-fit test-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}

              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className={`text-sm ${
                    isHovered.forgotPassword
                      ? "text-[#0d4d66]"
                      : "text-[#0d4d66]"
                  } transition-colors`}
                  onMouseEnter={() => handleMouseEnter("forgotPassword")}
                  onMouseLeave={() => handleMouseLeave("forgotPassword")}
                >
                  Forgot Password?
                </Link>
              </div>

              <motion.button
                type="submit"
                className={`w-full py-3 rounded-lg font-medium text-white transition-all ${
                  isHovered.loginButton
                    ? "bg-sky-900/90 shadow-lg shadow-slate-400 transform -translate-y-0.5"
                    : "bg-sky-900/90 shadow-md shadow-slate-400"
                }`}
                onMouseEnter={() => handleMouseEnter("loginButton")}
                onMouseLeave={() => handleMouseLeave("loginButton")}
                whileTap={{ scale: 0.98 }}
              >
                Log In
              </motion.button>
            </motion.form>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="text-gray-500 text-sm">Or Continue With</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <motion.button
                  className={`flex justify-center items-center p-3 border rounded-full transition-all ${
                    isHovered.googleButton
                      ? "border-gray-400 shadow-md transform -translate-y-0.5"
                      : "border-gray-300"
                  }`}
                  onClick={() => {
                    // backend code

                    signIn("google");
                  }} // backend code
                  onMouseEnter={() => handleMouseEnter("googleButton")}
                  onMouseLeave={() => handleMouseLeave("googleButton")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl">
                    <FcGoogle />
                  </span>
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
                  <span className="text-2xl text-blue-600">
                    <FaFacebook />
                  </span>
                </motion.button>

                <motion.button
                  className={`flex justify-center items-center p-3 border rounded-full transition-all ${
                    isHovered.appleButton
                      ? "border-gray-400 shadow-md transform -translate-y-0.5"
                      : "border-gray-300"
                  }`}
                  onMouseEnter={() => handleMouseEnter("appleButton")}
                  onMouseLeave={() => handleMouseLeave("appleButton")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                />
                <span className="text-2xl">
                  <BsApple />
                </span>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className={`font-medium ${
                    isHovered.signupLink ? "text-sky-900/90" : "text-slate-500"
                  } transition-colors`}
                  onMouseEnter={() => handleMouseEnter("signupLink")}
                  onMouseLeave={() => handleMouseLeave("signupLink")}
                >
                  Sign Up here
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
