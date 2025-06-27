"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Quote,
  ArrowRight,
  Phone,
  CheckCircle,
  Users,
  Clock,
  Shield,
  ThumbsUp,
  MapPin,
  Calendar,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", name: "All Reviews" },
    { id: "emergency", name: "Emergency Service" },
    { id: "membership", name: "Membership" },
    { id: "business", name: "Business" },
    { id: "recovery", name: "Vehicle Recovery" },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Manchester",
      rating: 5,
      category: "emergency",
      date: "2024-01-15",
      title: "Incredible Emergency Response",
      text: "My car broke down on the M60 at 2am during a storm. I was terrified, but Fast Breakdown Recovery had someone there within 18 minutes! The technician, Mark, was incredibly professional and calming. He diagnosed the issue quickly - a failed alternator - and had me recovered to a nearby garage. The real-time tracking feature kept me informed throughout. Absolutely outstanding service when I needed it most.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Emergency Roadside Assistance",
      verified: true,
    },
    {
      id: 2,
      name: "Mike Thompson",
      location: "London",
      rating: 5,
      category: "business",
      date: "2024-01-10",
      title: "Perfect for Business Fleet",
      text: "We've been using Fast Breakdown Recovery for our delivery fleet of 25 vans for over 3 years. Their response times are consistently excellent, and the advanced diagnostic tools they use have saved us thousands in unnecessary repairs. The dedicated account manager, Lisa, is fantastic and always goes above and beyond. The business continuity this service provides is invaluable.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Professional Business Plan",
      verified: true,
    },
    {
      id: 3,
      name: "Emma Davis",
      location: "Birmingham",
      rating: 5,
      category: "membership",
      date: "2024-01-08",
      title: "Membership Pays for Itself",
      text: "I was skeptical about paying for breakdown cover, but after my first callout, the Premium membership has already paid for itself. The technician arrived with all the right equipment and fixed my alternator on the spot. No waiting around, no towing fees, just professional service with a personal touch. The peace of mind alone is worth every penny.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Premium Membership",
      verified: true,
    },
    {
      id: 4,
      name: "James Wilson",
      location: "Edinburgh",
      rating: 5,
      category: "recovery",
      date: "2024-01-05",
      title: "Professional Vehicle Recovery",
      text: "After a serious accident on the A1, my car was completely undrivable. The recovery team arrived quickly and handled everything with such professionalism. They secured my vehicle properly and transported it to my chosen garage 50 miles away. The driver kept me updated throughout the journey and even helped me arrange alternative transport home. Exceptional service during a stressful time.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Vehicle Recovery",
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Chen",
      location: "Cardiff",
      rating: 5,
      category: "emergency",
      date: "2024-01-03",
      title: "Saved My Holiday",
      text: "Our family car broke down just as we were leaving for our holiday in Cornwall. It was a Sunday morning and I thought we'd have to cancel everything. Fast Breakdown Recovery had a technician with us in 25 minutes who diagnosed a faulty fuel pump. He couldn't fix it roadside but arranged for us to be recovered to a garage that opened specially for us. We were back on the road by lunchtime. Heroes!",
      image: "/placeholder.svg?height=80&width=80",
      service: "Emergency Weekend Service",
      verified: true,
    },
    {
      id: 6,
      name: "David Brown",
      location: "Newcastle",
      rating: 5,
      category: "membership",
      date: "2023-12-28",
      title: "Outstanding Customer Service",
      text: "I've been a member for 2 years and have used the service 4 times. Every single experience has been exceptional. The technicians are knowledgeable, friendly, and well-equipped. The mobile app is brilliant for tracking progress and the customer service team are always helpful when I call. This is how breakdown recovery should be done. Highly recommended to everyone.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Premium Membership",
      verified: true,
    },
    {
      id: 7,
      name: "Rachel Green",
      location: "Bristol",
      rating: 5,
      category: "emergency",
      date: "2023-12-20",
      title: "Christmas Eve Miracle",
      text: "Christmas Eve, 6pm, car wouldn't start in a supermarket car park with a boot full of presents. I called Fast Breakdown Recovery expecting to be told it would be hours. The technician arrived in 22 minutes, diagnosed a dead battery, and had me running again in 10 minutes. He even refused a tip! Made our Christmas possible. This company truly cares about their customers.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Emergency Holiday Service",
      verified: true,
    },
    {
      id: 8,
      name: "Tom Anderson",
      location: "Glasgow",
      rating: 5,
      category: "business",
      date: "2023-12-15",
      title: "Reliable Business Partner",
      text: "As a small business owner with 3 delivery vans, reliability is crucial. Fast Breakdown Recovery has never let us down. Their technicians understand commercial vehicles and the urgency of getting us back on the road. The invoicing system is seamless and the reporting helps us track our fleet maintenance. They're not just a service provider, they're a business partner.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Professional Business Plan",
      verified: true,
    },
    {
      id: 9,
      name: "Sophie Taylor",
      location: "Leeds",
      rating: 5,
      category: "recovery",
      date: "2023-12-10",
      title: "Gentle Giant Recovery",
      text: "My classic 1960s Mini broke down and I was terrified about damage during recovery. The team that arrived had specialist equipment for classic cars and treated my Mini like it was made of glass. They explained every step of the process and delivered it safely to my specialist garage. Their knowledge and care for different vehicle types is impressive.",
      image: "/placeholder.svg?height=80&width=80",
      service: "Specialist Vehicle Recovery",
      verified: true,
    },
  ]

  const filteredTestimonials = testimonials.filter(
    (testimonial) => activeFilter === "all" || testimonial.category === activeFilter,
  )

  const stats = [
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "2,847", label: "Total Reviews", icon: Users },
    { number: "99.8%", label: "Satisfaction Rate", icon: ThumbsUp },
    { number: "24hrs", label: "Response Time", icon: Clock },
  ]

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
              Real Customer Stories
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Customer</span>
              <br />
              <span className="text-white">Testimonials</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Discover why thousands of customers trust Fast Breakdown Recovery for their roadside assistance needs.
              Real stories from real people who've experienced our exceptional service.
            </p>

            {/* Rating Display */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-slate-400">from 2,847 verified reviews</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-4 border border-slate-700">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
                }`}
              >
                <span className="font-medium">{filter.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-white flex items-center gap-2">
                            {testimonial.name}
                            {testimonial.verified && <CheckCircle className="h-4 w-4 text-green-400" />}
                          </div>
                          <div className="text-sm text-slate-400 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                      <Quote className="h-6 w-6 text-blue-400 flex-shrink-0" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-slate-400 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(testimonial.date).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-3">{testimonial.title}</h3>

                    {/* Review Text */}
                    <p className="text-slate-300 leading-relaxed mb-4 text-sm">{testimonial.text}</p>

                    {/* Service Badge */}
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                        {testimonial.service}
                      </Badge>
                      {testimonial.verified && (
                        <Badge className="bg-green-500/20 text-green-400 text-xs">Verified Review</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
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
              Why Customers{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Trust Us
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The key factors that make our customers choose us again and again
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Rapid Response",
                description: "Average 28-minute response time across the UK",
                stat: "< 30 mins",
              },
              {
                icon: Shield,
                title: "Fully Insured",
                description: "Comprehensive coverage for complete peace of mind",
                stat: "100% Covered",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified technicians with years of experience",
                stat: "200+ Experts",
              },
              {
                icon: CheckCircle,
                title: "Success Rate",
                description: "Problems resolved on first visit",
                stat: "99.8%",
              },
            ].map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 text-center h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-4 border border-slate-700"
                    >
                      <indicator.icon className="h-8 w-8 text-blue-400" />
                    </motion.div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                      {indicator.stat}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{indicator.title}</h3>
                    <p className="text-slate-400 text-sm">{indicator.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Share Your{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Have you used our services? We'd love to hear about your experience. Your feedback helps us improve and
              helps other customers make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-semibold border-0 shadow-2xl"
              >
                <Star className="mr-3 h-6 w-6" />
                Leave a Review
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-12 py-6 text-xl backdrop-blur-sm"
              >
                View All Reviews
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </motion.div>
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
              Join Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Happy Customers
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Experience the same exceptional service that has earned us thousands of 5-star reviews. Get the peace of
              mind you deserve with Fast Breakdown Recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-semibold border-0 shadow-2xl"
              >
                <Phone className="mr-3 h-6 w-6" />
                Get Help Now: 0800 123 4567
              </Button>
              <Link href="/membership-plans">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-12 py-6 text-xl backdrop-blur-sm"
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
