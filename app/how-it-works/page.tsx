"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Smartphone,
  MapPin,
  Truck,
  Wrench,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Navigation,
  Headphones,
  CreditCard,
  FileText,
  AlertTriangle,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-32">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg blur-xl"
          animate={{
            rotate: [0, 180, 360],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 mb-8">
              Simple & Efficient Process
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">How It</span>
              <br />
              <span className="text-white">Works</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Getting help has never been easier. Our streamlined process ensures you get back on the road quickly and
              safely with minimal hassle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  3 Steps
                </div>
                <div className="text-slate-400">Simple Process</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  &lt;30min
                </div>
                <div className="text-slate-400">Average Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-slate-400">Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Simple Steps
              </span>{" "}
              to Recovery
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our advanced system makes getting help as easy as 1-2-3
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-32"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    01
                  </div>
                  <h3 className="text-4xl font-bold text-white">Contact Us</h3>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Reach out to us through multiple convenient channels. Our AI-powered system instantly identifies your
                  location and dispatches the nearest qualified technician to your exact position.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Phone,
                      title: "Emergency Hotline",
                      description: "Call 0800 123 4567 for immediate assistance",
                      gradient: "from-red-500 to-orange-500",
                    },
                    {
                      icon: Smartphone,
                      title: "Mobile App",
                      description: "Use our app for GPS-enabled quick requests",
                      gradient: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Headphones,
                      title: "Live Chat",
                      description: "Chat with our support team online",
                      gradient: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: FileText,
                      title: "Online Form",
                      description: "Submit a request through our website",
                      gradient: "from-purple-500 to-pink-500",
                    },
                  ].map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${method.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <method.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                        <p className="text-slate-400 text-sm">{method.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="https://www.shutterstock.com/image-photo/hand-show-icon-address-phone-600nw-2475999141.jpg"
                  alt="Contact Methods"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-blue-400" />
                    <div>
                      <div className="font-semibold text-white">GPS Location</div>
                      <div className="text-slate-300">Automatically detected</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-32"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative lg:order-first"
              >
                <Image
                   src="https://www.pendragonvehiclemanagement.co.uk/-/media/pvm/news-and-insights/fleet-vehicle-maintenance-essential-tips-and-checklist/technician-servicing-vehicle-1920x774px.ashx"
                  alt="Expert Technician Arrives"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-6 -left-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-green-400" />
                    <div>
                      <div className="font-semibold text-white">ETA</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        28 mins
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    02
                  </div>
                  <h3 className="text-4xl font-bold text-white">Expert Arrives</h3>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Our certified technician arrives within 30 minutes, fully equipped with advanced diagnostic tools and
                  recovery equipment. You'll receive real-time updates and can track their progress.
                </p>
                <div className="space-y-4">
                  {[
                    "Real-time GPS tracking of technician",
                    "SMS and app notifications with updates",
                    "Fully equipped recovery vehicles",
                    "Certified and experienced technicians",
                    "Advanced diagnostic equipment",
                    "Safety-first approach on all roads",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    03
                  </div>
                  <h3 className="text-4xl font-bold text-white">Problem Solved</h3>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Our expert performs quick diagnostics and either fixes your vehicle on-site or safely recovers it to
                  your preferred destination. You're back on the road or safely transported with minimal disruption.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Wrench,
                      title: "On-Site Repair",
                      description: "Quick fixes to get you moving again",
                      gradient: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Truck,
                      title: "Safe Recovery",
                      description: "Professional vehicle transportation",
                      gradient: "from-orange-500 to-red-500",
                    },
                    {
                      icon: Navigation,
                      title: "Destination Choice",
                      description: "Home, garage, or preferred location",
                      gradient: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: Shield,
                      title: "Full Insurance",
                      description: "Complete coverage and protection",
                      gradient: "from-purple-500 to-pink-500",
                    },
                  ].map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${solution.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <solution.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{solution.title}</h4>
                        <p className="text-slate-400 text-sm">{solution.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                 src="https://st2.depositphotos.com/1368414/6056/i/450/depositphotos_60564503-stock-photo-problem-solved.jpg"
                  alt="Problem Solved"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <div>
                      <div className="font-semibold text-white">Success Rate</div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        99.8%
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Behind the Process */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technology
              </span>{" "}
              Behind the Magic
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced systems working seamlessly to deliver exceptional service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "GPS Tracking",
                description: "Real-time location services for precise dispatch and tracking",
                features: ["Automatic location detection", "Live technician tracking", "Accurate ETAs"],
              },
              {
                icon: Smartphone,
                title: "Mobile App",
                description: "User-friendly app for quick requests and status updates",
                features: ["One-tap emergency requests", "Service history", "Live chat support"],
              },
              {
                icon: AlertTriangle,
                title: "AI Dispatch",
                description: "Intelligent routing system for optimal response times",
                features: ["Smart technician matching", "Traffic optimization", "Priority handling"],
              },
              {
                icon: CreditCard,
                title: "Secure Payments",
                description: "Multiple payment options with secure processing",
                features: ["Contactless payments", "Membership billing", "Insurance integration"],
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                    >
                      <tech.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-white text-xl">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-center leading-relaxed mb-4">{tech.description}</p>
                    <div className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-slate-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency vs Non-Emergency */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Emergency vs{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Planned Service
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Different situations require different approaches - we're prepared for both
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-black">Emergency Breakdown</CardTitle>
                  <p className="text-slate-700">Immediate assistance when you're stranded</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                      &lt;15 mins
                    </div>
                    <div className="text-slate-400">Priority Response Time</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Immediate dispatch of nearest technician",
                      "Priority handling over non-emergency calls",
                      "Real-time GPS tracking and updates",
                      "24/7 emergency hotline availability",
                      "Safety-first approach on busy roads",
                      "Direct communication with technician",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency: 0800 123 4567
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-black">Planned Service</CardTitle>
                  <p className="text-slate-700">Scheduled assistance at your convenience</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      2-4 hours
                    </div>
                    <div className="text-slate-400">Flexible Scheduling</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Schedule service at your convenience",
                      "Choose preferred time slots",
                      "Advance booking available",
                      "Non-urgent repairs and maintenance",
                      "Detailed service planning",
                      "Cost estimates provided upfront",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
                    <Clock className="mr-2 h-5 w-5" />
                    Schedule Service
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Customer{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From the moment you contact us to getting back on the road
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  time: "0 mins",
                  title: "Initial Contact",
                  description: "You contact us via phone, app, or website",
                  details: ["Location automatically detected", "Issue assessment begins", "Technician dispatched"],
                },
                {
                  time: "2 mins",
                  title: "Confirmation & Updates",
                  description: "Service confirmed with ETA and technician details",
                  details: ["SMS confirmation sent", "Technician profile shared", "Live tracking activated"],
                },
                {
                  time: "15-30 mins",
                  title: "Technician Arrival",
                  description: "Expert arrives and begins assessment",
                  details: ["Professional introduction", "Vehicle inspection", "Diagnosis explanation"],
                },
                {
                  time: "30-60 mins",
                  title: "Service Completion",
                  description: "Problem resolved or vehicle safely recovered",
                  details: ["Service performed", "Payment processed", "Follow-up scheduled"],
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-8 items-start min-h-fit"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-center">
                      <span className="text-white font-bold text-sm leading-tight">{step.time}</span>
                    </div>
                  </div>
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm flex-1 min-h-[120px]">
                    <CardContent className="p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white mb-2 text-center">{step.title}</h3>
                      <p className="text-slate-300 mb-4 text-center">{step.description}</p>
                      <div className="grid md:grid-cols-3 gap-3 justify-items-center">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-center">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-slate-400 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Our Process
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Join thousands of satisfied customers who trust our streamlined process for fast, reliable breakdown
              recovery services across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-semibold border-0 shadow-2xl"
              >
                <Phone className="mr-3 h-6 w-6" />
                Try It Now: 0800 123 4567
              </Button>
              <Link href="/membership-plans">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-12 py-6 text-xl backdrop-blur-sm bg-transparent"
                >
                  View Membership Plans
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
