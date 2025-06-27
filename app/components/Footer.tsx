"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Image src="/logo.png" alt="Fast Breakdown Recovery" width={300} height={100} className="h-16 w-auto" />
            <p className="text-slate-400 leading-relaxed">
              Revolutionary breakdown recovery service with cutting-edge technology. Available 24/7 with expert
              technicians across the UK.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
                  <Icon className="h-5 w-5 text-slate-500 hover:text-blue-400 cursor-pointer transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Membership Plans", "How It Works", "FAQs", "Testimonials"].map(
                (link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                      {link}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                "Emergency Response",
                "Vehicle Recovery",
                "Roadside Assistance",
                "Commercial Vehicles",
                "Motorcycle Recovery",
                "Insurance Work",
              ].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Emergency: 0800 123 4567</div>
                  <div className="text-sm text-slate-400">24/7 Breakdown Service</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white">info@fastbreakdownrecovery.co.uk</div>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-white">UK-Wide Coverage</div>
                  <div className="text-sm text-slate-400">England, Scotland & Wales</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-slate-800"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-white">Stay Connected</h3>
              <p className="text-slate-400">Get the latest updates and breakdown prevention tips</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} Fast Breakdown Recovery. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((link, index) => (
                <motion.div key={index} whileHover={{ y: -1 }}>
                  <Link href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                    {link}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
