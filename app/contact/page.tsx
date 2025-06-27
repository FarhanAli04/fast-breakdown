"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertTriangle,
  Headphones,
  Navigation,
  Shield,
} from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "normal",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-32">
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
              24/7 Support Available
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get in</span>
              <br />
              <span className="text-white">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Need help? Have questions? Our expert team is here to assist you 24/7. Choose the best way to reach us for
              your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <AlertTriangle className="h-8 w-8 text-white" />
              </motion.div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">Emergency Breakdown?</h2>
            </div>
            <p className="text-white/90 mb-6 text-lg">
              Don't wait - call our emergency hotline for immediate assistance
            </p>
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold shadow-2xl"
            >
              <Phone className="mr-3 h-6 w-6" />
              0800 123 4567
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Multiple Ways to{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the contact method that works best for your situation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Emergency Hotline",
                description: "24/7 immediate assistance for breakdowns",
                contact: "0800 123 4567",
                gradient: "from-red-500 to-orange-500",
                urgent: true,
              },
              {
                icon: Headphones,
                title: "Customer Support",
                description: "General inquiries and membership support",
                contact: "0800 987 6543",
                gradient: "from-blue-500 to-cyan-500",
                urgent: false,
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Non-urgent queries and feedback",
                contact: "info@fastbreakdownrecovery.co.uk",
                gradient: "from-green-500 to-emerald-500",
                urgent: false,
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Instant messaging support online",
                contact: "Available on website",
                gradient: "from-purple-500 to-pink-500",
                urgent: false,
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card
                  className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full ${method.urgent ? "ring-2 ring-red-500/50" : ""}`}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`mx-auto w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{method.description}</p>
                    <div className="text-lg font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {method.contact}
                    </div>
                    {method.urgent && <Badge className="mt-3 bg-red-500 text-white">Emergency Priority</Badge>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <Send className="h-6 w-6 text-blue-400" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-slate-300">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      />
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2"
                      >
                        <option value="normal">General Inquiry</option>
                        <option value="urgent">Urgent</option>
                        <option value="membership">Membership Question</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                    <Input
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 py-3"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                  <p className="text-xs text-slate-400 text-center">
                    We typically respond within 2 hours during business hours
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Contact{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Information
                  </span>
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Our dedicated team is here to help you with any questions, concerns, or emergency situations. We pride
                  ourselves on responsive, professional customer service.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Emergency Breakdown",
                    info: "0800 123 4567",
                    description: "24/7 emergency assistance",
                    gradient: "from-red-500 to-orange-500",
                  },
                  {
                    icon: Headphones,
                    title: "Customer Support",
                    info: "0800 987 6543",
                    description: "Mon-Fri 8AM-8PM, Sat-Sun 9AM-5PM",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Mail,
                    title: "Email Support",
                    info: "info@fastbreakdownrecovery.co.uk",
                    description: "Response within 2 hours",
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: MapPin,
                    title: "Service Area",
                    info: "UK-Wide Coverage",
                    description: "England, Scotland & Wales",
                    gradient: "from-purple-500 to-pink-500",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">{contact.title}</h4>
                      <p className="text-slate-300 font-medium mb-1">{contact.info}</p>
                      <p className="text-slate-400 text-sm">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-blue-400" />
                    <h4 className="font-semibold text-white text-lg">Operating Hours</h4>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between">
                      <span>Emergency Service:</span>
                      <span className="text-green-400 font-semibold">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customer Support:</span>
                      <span>Mon-Fri 8AM-8PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekend Support:</span>
                      <span>Sat-Sun 9AM-5PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
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
              Quick{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Answers
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find instant answers to common questions before reaching out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                question: "How quickly do you respond?",
                answer: "Average response time is under 30 minutes for emergency calls.",
                icon: Clock,
              },
              {
                question: "What areas do you cover?",
                answer: "We provide UK-wide coverage across England, Scotland, and Wales.",
                icon: MapPin,
              },
              {
                question: "Are you available 24/7?",
                answer: "Yes, our emergency breakdown service operates 24/7, 365 days a year.",
                icon: CheckCircle,
              },
              {
                question: "How do I join a membership?",
                answer: "You can join online, by phone, or through our mobile app instantly.",
                icon: Phone,
              },
              {
                question: "What vehicles do you cover?",
                answer: "We cover cars, vans, motorcycles, and commercial vehicles.",
                icon: Navigation,
              },
              {
                question: "Do you work with insurance?",
                answer: "Yes, we work directly with most major insurance companies.",
                icon: Shield,
              },
            ].map((faq, index) => (
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
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <faq.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-white text-lg leading-tight">{faq.question}</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm"
            >
              View All FAQs
              <CheckCircle className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
