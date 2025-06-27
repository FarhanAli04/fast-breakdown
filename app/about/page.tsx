"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Clock,
  Award,
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Calendar,
  Target,
  Lightbulb,
  Heart,
  Globe,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3">
                Established 2008
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Your Trusted
                </span>
                <br />
                <span className="text-white">Recovery Partner</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                For over 15 years, Fast Breakdown Recovery has been revolutionizing roadside assistance across the UK.
                We combine cutting-edge technology with expert craftsmanship to deliver unmatched service when you need
                it most.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    50,000+
                  </div>
                  <div className="text-slate-400">Customers Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
               src="https://www.theaa.com/~/media/the-aa/smart-breakdown-landing/patrolcontentblock-2x-lighthouse-version.png?rev=f7990e85e51643f4ac971ec0291c59ef&hash=34E563E0FCCFF91C48A0AD3B3476F1DA"
                alt="Fast Breakdown Recovery Team"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-yellow-400" />
                  <div>
                    <div className="font-semibold text-white text-lg">Industry Leader</div>
                    <div className="text-slate-300">Award-Winning Service</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mission</span>{" "}
              & Vision
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Driving the future of breakdown recovery with innovation and excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg mb-6">
                    To revolutionize breakdown recovery services through cutting-edge technology, exceptional customer
                    service, and unwavering commitment to safety. We strive to be the most trusted partner for drivers
                    across the UK.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Provide 24/7 reliable emergency assistance",
                      "Deliver industry-leading response times",
                      "Maintain highest safety standards",
                      "Continuously innovate our services",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg mb-6">
                    To be the UK's leading breakdown recovery service, setting new standards for innovation, customer
                    satisfaction, and environmental responsibility. We envision a future where no driver is ever
                    stranded.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Lead the industry in technological innovation",
                      "Achieve carbon-neutral operations by 2030",
                      "Expand coverage to every corner of the UK",
                      "Set new benchmarks for customer satisfaction",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
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
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built on a foundation of innovation, reliability, and customer care
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-white">From Vision to Reality</h3>
                <p className="text-slate-300 leading-relaxed">
                  Fast Breakdown Recovery was founded in 2008 by a team of automotive industry veterans who recognized
                  the need for a more advanced, technology-driven approach to breakdown services. What started as a
                  small operation with a big vision has grown into one of the UK's most trusted names in roadside
                  assistance.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Our commitment to innovation and customer satisfaction has driven our expansion across England,
                  Scotland, and Wales, while maintaining the personal touch and attention to detail that set us apart
                  from day one.
                </p>
                <div className="space-y-4">
                  {[
                    "Founded by automotive industry veterans",
                    "Continuous investment in cutting-edge technology",
                    "Customer-first approach to service delivery",
                    "Commitment to environmental sustainability",
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="https://www.bridgewaterstudio.net/hubfs/Blog_Images/Campaign%203/company-history-walls.jpg"
                  alt="Company History"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-6 -right-6 bg-slate-800/90 backdrop-blur-sm p-4 rounded-xl border border-slate-700">
                  <div className="text-center">
                    <Calendar className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <div className="font-semibold text-white">Founded</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      2008
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>

              <div className="space-y-12">
                {[
                  {
                    year: "2008",
                    title: "Company Founded",
                    description: "Started with a vision to revolutionize breakdown recovery services",
                    side: "left",
                  },
                  {
                    year: "2012",
                    title: "Technology Integration",
                    description: "Introduced GPS tracking and mobile app for real-time updates",
                    side: "right",
                  },
                  {
                    year: "2016",
                    title: "National Expansion",
                    description: "Extended coverage to all major UK cities and motorways",
                    side: "left",
                  },
                  {
                    year: "2020",
                    title: "AI-Powered Diagnostics",
                    description: "Launched advanced diagnostic tools and predictive maintenance",
                    side: "right",
                  },
                  {
                    year: "2024",
                    title: "Future Ready",
                    description: "Leading the industry with sustainable and innovative solutions",
                    side: "left",
                  },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: milestone.side === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${milestone.side === "right" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-5/12 ${milestone.side === "right" ? "text-right" : ""}`}>
                      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                            {milestone.year}
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">{milestone.title}</h4>
                          <p className="text-slate-300">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full border-4 border-slate-900"></div>
                    </div>
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Core{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Reliability",
                description:
                  "We're there when you need us, 24/7, 365 days a year. Your breakdown doesn't wait for business hours, and neither do we.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Expertise",
                description:
                  "Our technicians are highly trained professionals with years of experience and continuous education in the latest automotive technologies.",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: Shield,
                title: "Safety",
                description:
                  "Safety is our top priority - for our customers, our technicians, and other road users. We follow strict safety protocols in every situation.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Heart,
                title: "Care",
                description:
                  "We genuinely care about our customers' wellbeing and peace of mind. Every interaction is handled with empathy and professionalism.",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((value, index) => (
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
                      className={`mx-auto w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-white text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-center leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Meet Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Leadership
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experienced professionals leading our mission to revolutionize breakdown recovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "John Smith",
                position: "Founder & CEO",
                bio: "With over 20 years in the automotive industry, John founded Fast Breakdown Recovery with a vision to provide technology-driven, customer-focused roadside assistance.",
               image: "https://www.lawsonlundell.com/images/default-source/team/john-smith.tmb-cfthumb_fb.png?Culture=en&sfvrsn=f6c5198_1",
                expertise: ["Strategic Leadership", "Automotive Industry", "Technology Innovation"],
              },
              {
                name: "Sarah Johnson",
                position: "Operations Director",
                bio: "Sarah oversees our nationwide operations, ensuring consistent service quality and rapid response times across all regions while driving operational excellence.",
                image: "https://www.charlesrussellspeechlys.com/globalassets/CMSManaged/PeopleImages/sarah-johnson.jpg?width=730",
                expertise: ["Operations Management", "Quality Assurance", "Process Optimization"],
              },
              {
                name: "Mike Thompson",
                position: "Technical Director",
                bio: "Mike leads our technical innovation and training programs, ensuring our team stays current with the latest automotive technologies and diagnostic tools.",
                image: "https://www.mckinsey.com/~/media/mckinsey/our%20people/mike%20thompson/mike-thompson-profile-circle-hero_1536x1152.jpg?cq=50&mw=480&car=1:1&cpy=Center",
                expertise: ["Technical Innovation", "Team Training", "Automotive Technology"],
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-orange-400 font-semibold mb-3">{member.position}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
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
              Our{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Making a difference in communities across the UK through innovation and service excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "50,000+",
                label: "Lives Helped",
                icon: Users,
                description: "Customers safely assisted on their journeys",
              },
              {
                number: "99.8%",
                label: "Customer Satisfaction",
                icon: Star,
                description: "Based on verified customer reviews",
              },
              {
                number: "28min",
                label: "Average Response",
                icon: Clock,
                description: "Fastest response times in the industry",
              },
              {
                number: "200+",
                label: "Expert Technicians",
                icon: Shield,
                description: "Certified professionals across the UK",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 text-center h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-4 border border-slate-700"
                    >
                      <stat.icon className="h-8 w-8 text-blue-400" />
                    </motion.div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white font-semibold mb-2">{stat.label}</div>
                    <div className="text-slate-400 text-sm">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
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
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Awards
              </span>{" "}
              & Recognition
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted by industry bodies and recognized for excellence in service delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "AA Approved",
                description: "Certified by the Automobile Association for professional standards",
                year: "2023",
              },
              {
                icon: Shield,
                title: "Fully Insured",
                description: "Comprehensive insurance coverage for complete peace of mind",
                year: "Current",
              },
              {
                icon: Users,
                title: "IMI Certified",
                description: "Institute of the Motor Industry certified technicians",
                year: "2022",
              },
              {
                icon: CheckCircle,
                title: "ISO 9001",
                description: "Quality management system certification for service excellence",
                year: "2021",
              },
            ].map((cert, index) => (
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
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4"
                    >
                      <cert.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                    <p className="text-slate-300 text-sm mb-3 leading-relaxed">{cert.description}</p>
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">{cert.year}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
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
              Environmental{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Commitment
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leading the way towards sustainable breakdown recovery services
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                 src="https://www.mainzu.com/src/image/mainzu-medio-ambiente/banner-compromiso-ambiental.jpg"
                alt="Environmental Commitment"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">Sustainable Future</h3>
              <p className="text-slate-300 leading-relaxed">
                We're committed to reducing our environmental impact while maintaining the highest service standards.
                Our green initiatives include electric vehicle integration, carbon offset programs, and sustainable
                operational practices.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Globe,
                    title: "Carbon Neutral by 2030",
                    description: "Committed to achieving net-zero emissions",
                  },
                  {
                    icon: Lightbulb,
                    title: "Electric Fleet",
                    description: "Transitioning to electric recovery vehicles",
                  },
                  {
                    icon: Heart,
                    title: "Community Impact",
                    description: "Supporting local environmental initiatives",
                  },
                  {
                    icon: Shield,
                    title: "Sustainable Practices",
                    description: "Eco-friendly operations and recycling programs",
                  },
                ].map((initiative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <initiative.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{initiative.title}</h4>
                      <p className="text-slate-400 text-sm">{initiative.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
                Excellence
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Join thousands of satisfied customers who trust Fast Breakdown Recovery for their roadside assistance
              needs. Experience the difference that 15+ years of expertise and innovation can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-semibold border-0 shadow-2xl"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call Now: 0800 123 4567
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
