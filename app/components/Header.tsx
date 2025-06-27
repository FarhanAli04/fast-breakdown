"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone, Menu, X, ChevronDown, Zap, Shield, Clock } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = [
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "AI Diagnostics", href: "/services#ai-diagnostics", icon: Zap },
        { name: "Quantum Recovery", href: "/services#quantum-recovery", icon: Shield },
        { name: "Emergency Response", href: "/services#emergency", icon: Clock },
      ],
    },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-0"
        animate={{
          opacity: isScrolled ? 1 : 0,
          background: [
            "linear-gradient(90deg, rgba(245, 158, 11, 0.05), rgba(249, 115, 22, 0.05), rgba(239, 68, 68, 0.05))",
            "linear-gradient(90deg, rgba(249, 115, 22, 0.05), rgba(239, 68, 68, 0.05), rgba(245, 158, 11, 0.05))",
            "linear-gradient(90deg, rgba(239, 68, 68, 0.05), rgba(245, 158, 11, 0.05), rgba(249, 115, 22, 0.05))",
          ],
        }}
        transition={{
          opacity: { duration: 0.3 },
          background: { duration: 8, repeat: Number.POSITIVE_INFINITY },
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <Image
                src="/logo.png"
                alt="Fast Breakdown Recovery"
                width={100}
                height={50}
               
              />
            </motion.div>
          
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center transition-colors duration-300 font-medium group relative ${
                      isScrolled ? "text-gray-700 hover:text-gray-900" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.dropdown && (
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </motion.div>
                    )}

                    {/* Hover Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 -z-10 ${
                        isScrolled
                          ? "bg-gradient-to-r from-yellow-100/50 to-orange-100/50"
                          : "bg-gradient-to-r from-yellow-500/20 to-orange-500/20"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-2 w-64 backdrop-blur-xl border rounded-xl shadow-2xl overflow-hidden ${
                        isScrolled ? "bg-white/95 border-gray-200/50" : "bg-slate-800/95 border-slate-700/50"
                      }`}
                    >
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              href={dropdownItem.href}
                              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group ${
                                isScrolled
                                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                              }`}
                            >
                              <motion.div
                                className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <dropdownItem.icon className="h-4 w-4 text-white" />
                              </motion.div>
                              <span className="font-medium">{dropdownItem.name}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="sm"
                className={`backdrop-blur-sm relative overflow-hidden group transition-all duration-300 ${
                  isScrolled
                    ? "border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white"
                    : "border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-slate-900"
                }`}
              >
                <motion.div
                  className={`absolute inset-0 ${
                    isScrolled
                      ? "bg-gradient-to-r from-yellow-100/50 to-orange-100/50"
                      : "bg-gradient-to-r from-yellow-500/20 to-orange-500/20"
                  }`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <Phone className="mr-2 h-4 w-4" />
                0800 123 4567
              </Button>
            </motion.div>

            <Link href="/get-quote">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 font-semibold relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  Get Quote
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`relative overflow-hidden group transition-all duration-300 ${
                      isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-slate-800"
                    }`}
                  >
                    <motion.div
                      className={`absolute inset-0 ${
                        isScrolled
                          ? "bg-gradient-to-r from-yellow-100/50 to-orange-100/50"
                          : "bg-gradient-to-r from-yellow-500/20 to-orange-500/20"
                      }`}
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className="h-6 w-6" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu className="h-6 w-6" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:w-80 bg-white/95 backdrop-blur-xl border-gray-200 p-0">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Mobile Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/logo.png"
                        alt="Fast Breakdown Recovery"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">Fast Breakdown Recovery</h2>
                        <p className="text-sm text-gray-600">24/7 Emergency Service</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-4">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center justify-between p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-all duration-300 group"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="font-medium">{item.name}</span>
                            <motion.div
                              className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100"
                              whileHover={{ scale: 1.5 }}
                            />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-6 border-t border-gray-200 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white bg-transparent"
                        onClick={() => setIsOpen(false)}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call: 0800 123 4567
                      </Button>
                    </motion.div>

                    <Link href="/get-quote">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        onClick={() => setIsOpen(false)}
                      >
                        <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0">
                          Get Instant Quote
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
        style={{
          scaleX: useScroll().scrollYProgress,
          transformOrigin: "0%",
        }}
      />
    </motion.header>
  )
}
