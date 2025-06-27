"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ChevronDown,
  Search,
  Phone,
  Clock,
  Shield,
  CreditCard,
  MapPin,
  Truck,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Headphones,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All Questions", icon: Search },
    { id: "emergency", name: "Emergency Service", icon: AlertTriangle },
    { id: "membership", name: "Membership", icon: Users },
    { id: "coverage", name: "Coverage", icon: MapPin },
    { id: "payment", name: "Payment", icon: CreditCard },
    { id: "technical", name: "Technical", icon: Truck },
  ]

  const faqs = [
    {
      id: 1,
      category: "emergency",
      question: "How quickly do you respond to emergency calls?",
      answer:
        "Our average response time is under 30 minutes for emergency breakdowns. For priority emergency situations (such as motorway breakdowns or unsafe locations), we aim to reach you within 15 minutes. Response times may vary based on location, traffic conditions, and technician availability.",
      tags: ["response time", "emergency", "breakdown"],
    },
    {
      id: 2,
      category: "coverage",
      question: "What areas do you cover?",
      answer:
        "We provide comprehensive coverage across the entire UK, including England, Scotland, and Wales. Our service extends to all major cities, motorways, A-roads, and rural areas. We have strategically positioned technicians to ensure rapid response times even in remote locations.",
      tags: ["coverage", "UK", "areas", "locations"],
    },
    {
      id: 3,
      category: "emergency",
      question: "Are you available 24/7?",
      answer:
        "Yes, our emergency breakdown service operates 24 hours a day, 7 days a week, 365 days a year. This includes weekends, bank holidays, and Christmas Day. Our emergency hotline (0800 123 4567) is always staffed by trained operators ready to dispatch help immediately.",
      tags: ["24/7", "availability", "emergency", "holidays"],
    },
    {
      id: 4,
      category: "membership",
      question: "How do I join a membership plan?",
      answer:
        "You can join our membership plans in several ways: online through our website, by calling our customer service line, through our mobile app, or by speaking with one of our technicians. Membership activation is immediate upon payment confirmation, and you can use the service right away.",
      tags: ["membership", "join", "signup", "activation"],
    },
    {
      id: 5,
      category: "technical",
      question: "What types of vehicles do you cover?",
      answer:
        "We cover a wide range of vehicles including cars, motorcycles, vans up to 3.5 tonnes, motorhomes, and commercial vehicles. Our Professional membership plan extends coverage to larger commercial vehicles and trucks. We have specialized equipment for different vehicle types.",
      tags: ["vehicles", "cars", "motorcycles", "vans", "commercial"],
    },
    {
      id: 6,
      category: "payment",
      question: "Do you work with insurance companies?",
      answer:
        "Yes, we work directly with most major insurance companies in the UK. We can bill your insurance provider directly for covered services, eliminating the need for you to pay upfront and claim reimbursement. We're an approved supplier for many insurance networks.",
      tags: ["insurance", "billing", "approved supplier", "claims"],
    },
    {
      id: 7,
      category: "membership",
      question: "Can I cancel my membership anytime?",
      answer:
        "Yes, you can cancel your membership at any time with 30 days' notice. There are no cancellation fees or penalties. If you cancel within the first 30 days, you're eligible for a full refund under our money-back guarantee. You can cancel online, by phone, or through our app.",
      tags: ["cancel", "membership", "refund", "notice period"],
    },
    {
      id: 8,
      category: "technical",
      question: "What if my vehicle can't be repaired roadside?",
      answer:
        "If your vehicle cannot be repaired at the roadside, we'll safely recover it to your preferred destination - whether that's your home, a garage of your choice, or our recommended repair facility. Our recovery vehicles are equipped with the latest lifting technology to ensure safe transportation.",
      tags: ["recovery", "repair", "transportation", "garage"],
    },
    {
      id: 9,
      category: "emergency",
      question: "What should I do while waiting for help?",
      answer:
        "Stay safe by moving to a safe location if possible, turn on hazard lights, and use warning triangles if you have them. Stay with your vehicle unless it's unsafe to do so. Our operator will provide specific safety advice based on your location. You can track our technician's progress through our app.",
      tags: ["safety", "waiting", "hazard lights", "advice"],
    },
    {
      id: 10,
      category: "payment",
      question: "How much does the service cost?",
      answer:
        "Costs vary depending on the service required and your membership level. Members enjoy significant discounts and many services are included in membership plans. Non-members pay standard rates. We provide upfront pricing with no hidden fees. Emergency callouts start from £89 for non-members.",
      tags: ["cost", "pricing", "fees", "membership discounts"],
    },
    {
      id: 11,
      category: "coverage",
      question: "Do you provide European breakdown cover?",
      answer:
        "Yes, our Premium and Professional membership plans include European breakdown cover for up to 90 days per year. This covers you in all EU countries plus Norway, Switzerland, and other popular destinations. European cover includes repatriation if your vehicle cannot be repaired abroad.",
      tags: ["European cover", "travel", "abroad", "repatriation"],
    },
    {
      id: 12,
      category: "technical",
      question: "What equipment do your technicians carry?",
      answer:
        "Our technicians carry comprehensive diagnostic equipment, jump starters, tire repair kits, fuel, basic tools, and recovery equipment. Each vehicle is equipped with GPS tracking, communication systems, and safety equipment. We continuously update our equipment with the latest automotive technology.",
      tags: ["equipment", "tools", "diagnostic", "technology"],
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
              Instant Answers
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="text-white">Questions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Find instant answers to common questions about our breakdown recovery services, membership plans, and
              coverage options.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <Search className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
                <p className="text-slate-400">Try adjusting your search terms or browse different categories.</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                      <CardContent className="p-0">
                        <button
                          onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                        >
                          <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                          <motion.div animate={{ rotate: openFAQ === faq.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {openFAQ === faq.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <div className="border-t border-slate-700 pt-4">
                                  <p className="text-slate-300 leading-relaxed mb-4">{faq.answer}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {faq.tags.map((tag, tagIndex) => (
                                      <Badge
                                        key={tagIndex}
                                        variant="outline"
                                        className="border-slate-600 text-slate-400 text-xs"
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
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
              Need{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Immediate Help
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Emergency Breakdown",
                description: "Immediate assistance for roadside emergencies",
                action: "Call Now: 0800 123 4567",
                gradient: "from-red-500 to-orange-500",
                urgent: true,
              },
              {
                icon: Headphones,
                title: "Customer Support",
                description: "General inquiries and membership questions",
                action: "Call: 0800 987 6543",
                gradient: "from-blue-500 to-cyan-500",
                urgent: false,
              },
              {
                icon: Clock,
                title: "Live Chat",
                description: "Instant messaging support available online",
                action: "Start Chat",
                gradient: "from-green-500 to-emerald-500",
                urgent: false,
              },
              {
                icon: Users,
                title: "Membership Help",
                description: "Assistance with plans and account management",
                action: "Get Help",
                gradient: "from-purple-500 to-pink-500",
                urgent: false,
              },
            ].map((help, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card
                  className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full ${
                    help.urgent ? "ring-2 ring-red-500/50" : ""
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`mx-auto w-16 h-16 bg-gradient-to-r ${help.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <help.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{help.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{help.description}</p>
                    <Button className={`w-full bg-gradient-to-r ${help.gradient} hover:opacity-90 text-white border-0`}>
                      {help.action}
                    </Button>
                    {help.urgent && <Badge className="mt-3 bg-red-500 text-white">Emergency Priority</Badge>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
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
              Popular{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Topics</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most searched topics and common concerns from our customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Response Times",
                description: "How quickly we respond to different types of calls",
                topics: ["Emergency response", "Planned service", "Peak hours", "Rural areas"],
              },
              {
                icon: MapPin,
                title: "Coverage Areas",
                description: "Where our services are available across the UK",
                topics: ["UK coverage", "European cover", "Remote locations", "Motorway service"],
              },
              {
                icon: CreditCard,
                title: "Pricing & Payment",
                description: "Costs, membership benefits, and payment options",
                topics: ["Membership costs", "Pay-per-use", "Insurance billing", "Refund policy"],
              },
              {
                icon: Truck,
                title: "Vehicle Types",
                description: "What vehicles we can assist and recover",
                topics: ["Cars & motorcycles", "Vans & trucks", "Commercial vehicles", "Motorhomes"],
              },
              {
                icon: Shield,
                title: "Safety & Insurance",
                description: "Our safety protocols and insurance coverage",
                topics: ["Safety procedures", "Insurance coverage", "Liability protection", "Technician training"],
              },
              {
                icon: Users,
                title: "Membership Benefits",
                description: "What's included in our membership plans",
                topics: ["Plan comparison", "Upgrade options", "Family coverage", "Business plans"],
              },
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <topic.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed">{topic.description}</p>
                    <div className="space-y-2">
                      {topic.topics.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-slate-400 text-sm">{item}</span>
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
              Still Have{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Questions
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Our friendly support team is ready to help with any questions not covered in our FAQ. Get in touch for
              personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-semibold border-0 shadow-2xl"
              >
                <Phone className="mr-3 h-6 w-6" />
                Contact Support
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-12 py-6 text-xl backdrop-blur-sm"
                >
                  Visit Contact Page
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
