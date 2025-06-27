"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Clock,
  Shield,
  Wrench,
  Star,
  CheckCircle,
  ArrowRight,
  Truck,
  Play,
  ChevronRight,
  Zap,
  Globe,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const { scrollY } = useScroll()

  // Advanced scroll transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX - 16)
      mouseY.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  const variants = {
    default: {
      x: mouseXSpring,
      y: mouseYSpring,
      scale: 1,
      opacity: 1,
    },
    text: {
      x: mouseXSpring,
      y: mouseYSpring,
      scale: 4,
      opacity: 0.6,
      mixBlendMode: "difference" as const,
    },
    button: {
      x: mouseXSpring,
      y: mouseYSpring,
      scale: 2,
      opacity: 0.8,
    },
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-900 overflow-hidden relative">
      {/* Custom Cursor - Hidden on Touch Devices */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Advanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          {/* Floating Orbs - Reduced for mobile */}
          {[...Array(typeof window !== "undefined" && window.innerWidth < 768 ? 6 : 12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-${typeof window !== "undefined" && window.innerWidth < 768 ? 2 + (i % 2) : 4 + (i % 4) * 2} h-${
                typeof window !== "undefined" && window.innerWidth < 768 ? 2 + (i % 2) : 4 + (i % 4) * 2
              } rounded-full blur-xl opacity-20`}
              style={{
                background: `linear-gradient(45deg, ${
                  ["#F59E0B", "#EAB308", "#F97316", "#DC2626", "#EA580C"][i % 5]
                }, ${["#D97706", "#CA8A04", "#EA580C", "#B91C1C", "#C2410C"][i % 5]})`,
                left: `${10 + ((i * 8) % 80)}%`,
                top: `${10 + ((i * 12) % 80)}%`,
              }}
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -100, 50, 0],
                scale: [1, 1.5, 0.8, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Geometric Shapes - Reduced for mobile */}
          {[...Array(typeof window !== "undefined" && window.innerWidth < 768 ? 4 : 8)].map((_, i) => (
            <motion.div
              key={`geo-${i}`}
              className="absolute border border-yellow-500/20"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                left: `${20 + ((i * 15) % 60)}%`,
                top: `${20 + ((i * 10) % 60)}%`,
                borderRadius: i % 2 === 0 ? "50%" : "0%",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 0.8,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Hero Section with Advanced Parallax */}
      <motion.section
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center px-4 pt-24 sm:pt-32"
      >
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
              onMouseEnter={() => setCursorVariant("text")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              >
                <Badge className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-bold border-0 mb-6 lg:mb-8 shadow-2xl">
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
                  >
                    24/7 Emergency Service Available
                  </motion.span>
                </Badge>
              </motion.div>

              <motion.h1
                style={{ y: textY }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black leading-tight"
              >
                <motion.span
                  className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  Future of
                </motion.span>
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Breakdown Recovery
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-300 leading-relaxed font-light"
              >
                Revolutionary breakdown recovery solutions powered by{" "}
                <motion.span
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-semibold"
                  whileHover={{ scale: 1.1 }}
                >
                  advanced AI technology
                </motion.span>{" "}
                and expert technicians.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("button")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl font-bold border-0 shadow-2xl relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="hidden sm:inline">Emergency: </span>0800 123 4567
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(30, 41, 59, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
               
                </motion.div>
              </motion.div>

              {/* Animated Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 lg:pt-16"
              >
                {[
                  { value: "24/7", label: "Emergency Response", color: "from-yellow-400 to-orange-500" },
                  { value: "<30min", label: "Average Arrival", color: "from-orange-500 to-red-500" },
                  { value: "50k+", label: "Satisfied Customers", color: "from-red-500 to-yellow-500" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.1, y: -10 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                  >
                    <motion.div
                      className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div className="text-xs sm:text-sm lg:text-base text-slate-400 mt-1 sm:mt-2 group-hover:text-white transition-colors">
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image with Advanced Effects */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative perspective-1000 mt-8 lg:mt-0"
            >
              <motion.div
                className="relative group"
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-2xl sm:rounded-3xl blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <Image
                 src="https://166recovery.com/uploads/services/560174595366502.jpg"
                  alt="Professional Breakdown Recovery Vehicle"
                  width={800}
                  height={600}
                  className="rounded-2xl sm:rounded-3xl shadow-2xl relative z-10 group-hover:shadow-yellow-500/25 transition-shadow duration-500 w-full h-auto"
                />

                {/* Floating Info Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 lg:-left-8 bg-slate-800/90 backdrop-blur-xl text-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-2xl border border-yellow-500/30 group-hover:scale-105 transition-transform duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <motion.div
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-bold text-sm sm:text-base lg:text-xl">Fully Insured & Licensed</div>
                      <div className="text-xs sm:text-sm text-slate-300">Professional Recovery Service</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.8 }}
                  className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 backdrop-blur-xl text-white p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 25px 50px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-xl sm:text-2xl lg:text-3xl font-black"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      #1
                    </motion.div>
                    <div className="text-xs sm:text-sm">UK Recovery Service</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Advanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-6 sm:w-8 h-10 sm:h-14 border-2 border-yellow-500 rounded-full flex justify-center relative overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: "#F59E0B" }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-1.5 sm:w-2 h-4 sm:h-6 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mt-2"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-transparent"
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section with Advanced Scroll Animations */}
      <ServicesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

// Advanced Services Section Component
function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const services = [
    {
      icon: Wrench,
      title: "AI-Powered Diagnostics",
      description:
        "Revolutionary AI diagnostic tools for instant problem identification and predictive maintenance solutions",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
     image: "https://mobisoftinfotech.com/resources/wp-content/uploads/2024/01/role_of_ai_in_damage_detection.png",
      features: ["Real-time analysis", "Predictive maintenance", "Remote diagnostics"],
    },
    {
      icon: Truck,
      title: "Quantum Fleet Recovery",
      description:
        "Next-generation recovery vehicles with quantum-enhanced lifting technology and autonomous navigation",
      gradient: "from-orange-500 via-red-500 to-yellow-500",
     image: "https://cdn.prod.website-files.com/627a06238857af3ce50a2ed3/62a9f02983d2d8f720433b5b_VEHICLE%20RECOVERY%20AND%20FLEET%20MANAGEMENT%20EXPLAINED.jpg",
      features: ["Autonomous vehicles", "Quantum lifting", "Smart routing"],
    },
    {
      icon: Globe,
      title: "Holographic Tracking",
      description: "3D holographic tracking system with augmented reality integration for precise location services",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
     image: "https://www.fic.com.tw/wp-content/uploads/2024/05/holographic-display-car01.jpg",
      features: ["AR integration", "3D tracking", "Real-time holograms"],
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "Military-grade blockchain security protocols ensuring complete data protection and service integrity",
      gradient: "from-yellow-400 via-orange-500 to-red-600",
     image: "https://b2161880.smushcdn.com/2161880/wp-content/uploads/2022/02/9530-scaled.jpg?lossy=1&strip=1&webp=1",
      features: ["Blockchain secured", "Military encryption", "Zero-trust security"],
    },
  ]

  return (
    <motion.section ref={ref} style={{ opacity }} className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8"
            whileInView={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_100%]">
              Revolutionary
            </span>{" "}
            Solutions
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience the future of breakdown recovery with our cutting-edge technology and innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -20,
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group perspective-1000"
            >
              <Card className="bg-slate-800/30 border-yellow-500/30 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-500 h-full overflow-hidden relative">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 180 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Glowing Border Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.6 }}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Floating Icon */}
                  <motion.div
                    className={`absolute top-2 sm:top-4 right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl`}
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                  </motion.div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>

                <CardHeader className="text-center pb-2 sm:pb-4 relative z-10 p-3 sm:p-4 lg:p-6">
                  <CardTitle className="text-white text-sm sm:text-base lg:text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 p-3 sm:p-4 lg:p-6 pt-0">
                  <p className="text-slate-300 text-center leading-relaxed mb-3 sm:mb-4 group-hover:text-slate-200 transition-colors text-xs sm:text-sm lg:text-base">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    {service.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        className={`px-2 sm:px-3 py-1 text-xs rounded-full bg-gradient-to-r ${service.gradient} text-white font-semibold opacity-0 group-hover:opacity-100`}
                        initial={{ scale: 0, y: 10 }}
                        whileInView={{ scale: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>

                {/* Particle Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <Link href="/services">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white border-0 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl font-bold relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                Explore All Solutions
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

// Advanced How It Works Section
function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const steps = [
    {
      step: "01",
      title: "AI-Powered Request",
      description:
        "Our advanced AI system instantly analyzes your location, vehicle data, and situation to dispatch the optimal technician with precision timing.",
      icon: Zap,
      image: "https://cdn.openart.ai/published/user_2hW9RqAh9YzV2UfYtGyhyFuxNsY/-k5h1by0_JAx0_1024.webp",
      color: "from-yellow-500 to-orange-500",
    },
    {
      step: "02",
      title: "Quantum Response",
      description:
        "Our quantum-enhanced fleet arrives with predictive maintenance tools and autonomous diagnostic systems for instant problem resolution.",
      icon: Truck,
        image: "https://media.licdn.com/dms/image/v2/C5612AQHM3EOcwMip2w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1571849167356?e=2147483647&v=beta&t=HDGi3GiBG1G7e-hy-8sK1dihodZORHaJkP13QEjQ2a0",
      color: "from-orange-500 to-red-500",
    },
    {
      step: "03",
      title: "Holographic Solution",
      description:
        "Experience next-level service with holographic guidance, AR-assisted repairs, and blockchain-verified completion certificates.",
      icon: CheckCircle,
    image: "https://www.fic.com.tw/wp-content/uploads/2024/05/holographic-display-car01.jpg",
      color: "from-red-500 to-yellow-500",
    },
  ]

  return (
    <motion.section ref={ref} className="py-16 sm:py-20 lg:py-32 relative bg-slate-800/20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {[...Array(typeof window !== "undefined" && window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-10 sm:h-16 lg:h-20 bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent"
            style={{
              left: `${i * 5}%`,
              top: `${(i % 4) * 25}%`,
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8">
            How It{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto">
            Experience the future of breakdown recovery with our revolutionary 3-step process
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <motion.div
                className={`space-y-4 sm:space-y-6 lg:space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""} text-center lg:text-left`}
                whileInView={{ x: 0 }}
                initial={{ x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start">
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-black text-lg sm:text-xl lg:text-3xl shadow-2xl`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    {step.step}
                  </motion.div>
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                  </motion.div>
                </div>

                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-white"
                  whileHover={{
                    scale: 1.05,
                    color: "transparent",
                    backgroundImage: `linear-gradient(to right, ${step.color.split(" ")[1]}, ${step.color.split(" ")[3]})`,
                    backgroundClip: "text",
                  }}
                >
                  {step.title}
                </motion.h3>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">{step.description}</p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  {["AI-Powered", "Real-time", "Secure"].map((feature, idx) => (
                    <motion.span
                      key={idx}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${step.color} text-white rounded-full text-xs sm:text-sm font-semibold`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.6 }}
              >
                {/* Glowing Background */}
                <motion.div
                  className={`absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r ${step.color} opacity-20 rounded-2xl sm:rounded-3xl blur-2xl`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.div
                  className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl"
                  whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)" }}
                >
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={350}
                    height={250}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <step.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                  </motion.div>
                </motion.div>

                {/* Connection Line - Hidden on mobile */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-8 w-16 h-px bg-gradient-to-r from-yellow-500 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// Advanced Stats Section
function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const stats = [
    {
      number: 50000,
      suffix: "+",
      label: "Successful Recoveries",
      icon: CheckCircle,
      color: "from-yellow-400 to-orange-500",
    },
    { number: 99.8, suffix: "%", label: "Customer Satisfaction", icon: Star, color: "from-orange-500 to-red-500" },
    { number: 24, suffix: "/7", label: "Emergency Response", icon: Clock, color: "from-red-500 to-yellow-500" },
    { number: 15, suffix: "+", label: "Years Experience", icon: Shield, color: "from-yellow-500 to-orange-600" },
  ]

  return (
    <motion.section ref={ref} className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 h-full">
          {[
            ...Array(
              typeof window !== "undefined" && window.innerWidth < 640
                ? 24
                : typeof window !== "undefined" && window.innerWidth < 1024
                  ? 32
                  : 48,
            ),
          ].map((_, i) => (
            <motion.div
              key={i}
              className="border-r border-b border-yellow-500/20"
              animate={{
                backgroundColor: ["rgba(245, 158, 11, 0)", "rgba(245, 158, 11, 0.1)", "rgba(245, 158, 11, 0)"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Millions
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300">Performance metrics that define excellence</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="text-center group cursor-pointer"
              whileHover={{
                scale: 1.1,
                y: -20,
                rotateY: 10,
              }}
            >
              <motion.div
                className="mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-full flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 border border-yellow-500/30 group-hover:border-transparent relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 180 }}
                  transition={{ duration: 0.6 }}
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-400 group-hover:text-white relative z-10" />
                </motion.div>
              </motion.div>

              <motion.div
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 sm:mb-3 lg:mb-4`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
              >
                <CountUpAnimation
                  target={stat.number}
                  suffix={stat.suffix}
                  isInView={isInView}
                  delay={index * 0.2 + 0.5}
                />
              </motion.div>

              <motion.div
                className="text-slate-400 group-hover:text-white transition-colors text-sm sm:text-base lg:text-lg font-semibold"
                whileHover={{ scale: 1.1 }}
              >
                {stat.label}
              </motion.div>

              {/* Particle Effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100`}
                    style={{
                      left: `${30 + (i % 4) * 20}%`,
                      top: `${40 + Math.floor(i / 4) * 30}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// Count Up Animation Component
function CountUpAnimation({
  target,
  suffix,
  isInView,
  delay,
}: { target: number; suffix: string; isInView: boolean; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [isInView, target, delay])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

// Advanced Testimonials Section
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Manchester",
      rating: 5,
      text: "Absolutely revolutionary! The AI-powered diagnostics identified my car's issue before the technician even arrived. The holographic guidance system made the whole experience feel like science fiction. This is the future of breakdown recovery!",
      image: "/placeholder.svg?height=80&width=80",
      role: "Business Executive",
      company: "Tech Innovations Ltd",
    },
    {
      name: "Mike Thompson",
      location: "London",
      rating: 5,
      text: "The quantum fleet response is incredible! Our entire business fleet is covered by their blockchain-secured system. The predictive maintenance has saved us thousands and the autonomous recovery vehicles are mind-blowing.",
      image: "/placeholder.svg?height=80&width=80",
      role: "Fleet Manager",
      company: "Global Logistics Corp",
    },
    {
      name: "Emma Davis",
      location: "Birmingham",
      rating: 5,
      text: "I was skeptical about the advanced technology, but when my car broke down at midnight, their holographic tracking system guided me to safety while the quantum-enhanced recovery team arrived in record time. Absolutely phenomenal service!",
      image: "/placeholder.svg?height=80&width=80",
      role: "Marketing Director",
      company: "Creative Solutions",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <motion.section
      ref={ref}
      className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-800/30 to-slate-900/30 relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(typeof window !== "undefined" && window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8">
            What Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Customers
            </span>{" "}
            Say
          </h2>

          <div className="flex justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Star className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
            <motion.span
              className="text-xl sm:text-2xl font-bold text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              4.9/5
            </motion.span>
            <span className="text-slate-400 text-sm sm:text-base lg:text-lg">from 2,847 verified reviews</span>
          </div>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-yellow-500/30 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Glowing Border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 opacity-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                <CardContent className="p-6 sm:p-8 lg:p-12 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Customer Image & Info */}
                    <motion.div className="text-center lg:text-left order-1 lg:order-none" whileHover={{ scale: 1.05 }}>
                      <motion.div className="relative inline-block mb-4 sm:mb-6" whileHover={{ rotate: 5 }}>
                        <motion.div
                          className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-20 blur-xl"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        <Image
                          src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                          alt={testimonials[activeTestimonial].name}
                          width={120}
                          height={120}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white/20 relative z-10"
                        />
                      </motion.div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                        {testimonials[activeTestimonial].name}
                      </h3>
                      <p className="text-yellow-400 font-semibold mb-1 text-sm sm:text-base">
                        {testimonials[activeTestimonial].role}
                      </p>
                      <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4">
                        {testimonials[activeTestimonial].company}
                      </p>
                      <p className="text-slate-500 flex items-center justify-center lg:justify-start gap-1 sm:gap-2 text-sm">
                        <span>📍</span> {testimonials[activeTestimonial].location}
                      </p>
                    </motion.div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-2 order-2 lg:order-none">
                      <motion.div
                        className="flex mb-4 sm:mb-6 justify-center lg:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            <Star className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.blockquote
                        className="text-lg sm:text-xl lg:text-2xl text-slate-200 leading-relaxed italic mb-4 sm:mb-6 relative text-center lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <span className="text-4xl sm:text-5xl lg:text-6xl text-yellow-400/30 absolute -top-2 sm:-top-4 -left-2 sm:-left-4">
                          "
                        </span>
                        {testimonials[activeTestimonial].text}
                        <span className="text-4xl sm:text-5xl lg:text-6xl text-yellow-400/30 absolute -bottom-4 sm:-bottom-8 -right-2 sm:-right-4">
                          "
                        </span>
                      </motion.blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-2 sm:gap-4 mt-8 sm:mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 scale-125"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// Advanced CTA Section
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <motion.section
      ref={ref}
      className="py-16 sm:py-20 lg:py-32 relative bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(245, 158, 11, 0.05), rgba(249, 115, 22, 0.05))",
              "linear-gradient(225deg, rgba(249, 115, 22, 0.05), rgba(239, 68, 68, 0.05))",
              "linear-gradient(45deg, rgba(245, 158, 11, 0.05), rgba(249, 115, 22, 0.05))",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Floating Shapes */}
        {[...Array(typeof window !== "undefined" && window.innerWidth < 768 ? 5 : 10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border border-yellow-500/20 rounded-full"
            style={{
              left: `${10 + ((i * 10) % 80)}%`,
              top: `${20 + ((i * 15) % 60)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8"
            whileInView={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            Ready to Experience the{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_100%]">
              Future?
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join thousands of satisfied customers who've experienced our revolutionary breakdown recovery service. Get
            instant access to AI-powered diagnostics, quantum fleet response, and holographic assistance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <Link href="/get-quote">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(249, 115, 22, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white px-8 sm:px-12 lg:px-16 py-6 sm:py-7 lg:py-8 text-lg sm:text-xl lg:text-2xl font-bold border-0 shadow-2xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  Get Instant Quote
                  <ChevronRight className="ml-2 sm:ml-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-slate-900 px-8 sm:px-12 lg:px-16 py-6 sm:py-7 lg:py-8 text-lg sm:text-xl lg:text-2xl backdrop-blur-sm relative overflow-hidden group bg-transparent"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <Phone className="mr-2 sm:mr-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                Call: 0800 123 4567
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 text-slate-400"
          >
            {[
              "✓ 24/7 Emergency Response",
              "✓ AI-Powered Diagnostics",
              "✓ Quantum Fleet Technology",
              "✓ Blockchain Security",
              "✓ Holographic Assistance",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base lg:text-lg"
                whileHover={{
                  scale: 1.1,
                  color: "#ffffff",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
