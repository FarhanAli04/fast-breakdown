"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Car,
  Truck,
  Users,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Zap,
  Settings,
  Navigation,
  Headphones,
  CreditCard,
  BarChart3,
  FileText,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SolutionsPage() {
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
              Tailored Solutions
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Complete</span>
              <br />
              <span className="text-white">Recovery Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              From individual drivers to large commercial fleets, we provide comprehensive breakdown recovery solutions
              tailored to your specific needs and requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Individual
                </div>
                <div className="text-slate-400">Personal Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Business
                </div>
                <div className="text-slate-400">Fleet Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Enterprise
                </div>
                <div className="text-slate-400">Custom Plans</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-slate-800/50 border border-slate-700 mb-12">
              <TabsTrigger
                value="individual"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500"
              >
                <Car className="mr-2 h-4 w-4" />
                Individual Drivers
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500"
              >
                <Building2 className="mr-2 h-4 w-4" />
                Business Fleets
              </TabsTrigger>
              <TabsTrigger
                value="enterprise"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500"
              >
                <Truck className="mr-2 h-4 w-4" />
                Enterprise Solutions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="individual" className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Personal
                      </span>{" "}
                      Breakdown Cover
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      Comprehensive breakdown coverage designed for individual drivers and families. Get peace of mind
                      knowing help is just a phone call away, 24/7.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Clock,
                        title: "24/7 Emergency Response",
                        description: "Round-the-clock assistance whenever you need it",
                      },
                      {
                        icon: Shield,
                        title: "UK-Wide Coverage",
                        description: "Complete coverage across England, Scotland & Wales",
                      },
                      {
                        icon: Car,
                        title: "Multiple Vehicle Types",
                        description: "Cars, motorcycles, vans, and motorhomes covered",
                      },
                      {
                        icon: Users,
                        title: "Family Protection",
                        description: "Cover for you and your family members",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                          <p className="text-slate-400 text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">What's Included:</h3>
                    {[
                      "Roadside assistance and minor repairs",
                      "Vehicle recovery to destination of choice",
                      "Home start service",
                      "Alternative transport arrangements",
                      "European breakdown cover (Premium plans)",
                      "Mobile app with GPS tracking",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/membership-plans">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                    >
                      View Personal Plans
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <Image
                    src="https://www.forcesmutual.org/app/uploads/sites/2/2025/01/breakdown-banner-min-e1747320985563.png"
                    alt="Personal Breakdown Cover"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-blue-400" />
                      <div>
                        <div className="font-semibold text-white">Response Time</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          &lt;30 mins
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Personal Plans Comparison */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Basic",
                    price: "£4.99/month",
                    description: "Essential roadside assistance",
                    features: [
                      "24/7 roadside assistance",
                      "Jump start & tire change",
                      "Emergency fuel delivery",
                      "Lockout service",
                    ],
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    name: "Premium",
                    price: "£9.99/month",
                    description: "Complete breakdown coverage",
                    features: [
                      "Everything in Basic",
                      "Vehicle recovery service",
                      "Home start service",
                      "European breakdown cover",
                      "Alternative transport",
                    ],
                    gradient: "from-orange-500 to-red-500",
                    popular: true,
                  },
                  {
                    name: "Family",
                    price: "£14.99/month",
                    description: "Coverage for the whole family",
                    features: [
                      "Everything in Premium",
                      "Cover for all family vehicles",
                      "Additional driver coverage",
                      "Priority response",
                    ],
                    gradient: "from-green-500 to-emerald-500",
                  },
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
                      </div>
                    )}
                    <Card
                      className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full ${plan.popular ? "ring-2 ring-orange-500/50" : ""
                        }`}
                    >
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                        <div className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                          {plan.price}
                        </div>
                        <p className="text-slate-400">{plan.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                        <Button
                          className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white border-0 mt-6`}
                        >
                          Choose {plan.name}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative lg:order-first"
                >
                  <Image
                    src="https://miro.medium.com/v2/resize:fit:1400/1*v6uX6-uovFhVn9lq_IoOjw.png"
                    alt="Business Fleet Solutions"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-6 -left-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-6 w-6 text-orange-400" />
                      <div>
                        <div className="font-semibold text-white">Fleet Size</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                          5-500 Vehicles
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                      <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        Business Fleet
                      </span>{" "}
                      Solutions
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      Comprehensive breakdown coverage designed for businesses with vehicle fleets. Minimize downtime
                      and keep your operations running smoothly with our dedicated business solutions.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: BarChart3,
                        title: "Fleet Management",
                        description: "Centralized management and reporting dashboard",
                      },
                      {
                        icon: Headphones,
                        title: "Dedicated Support",
                        description: "Priority business support line and account manager",
                      },
                      {
                        icon: CreditCard,
                        title: "Flexible Billing",
                        description: "Monthly invoicing and detailed cost breakdowns",
                      },
                      {
                        icon: Navigation,
                        title: "Real-time Tracking",
                        description: "Live tracking of all fleet breakdown incidents",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                          <p className="text-slate-400 text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Business Benefits:</h3>
                    {[
                      "Reduced vehicle downtime and operational costs",
                      "Priority response for business-critical vehicles",
                      "Comprehensive reporting and analytics",
                      "Dedicated account management",
                      "Flexible payment terms and invoicing",
                      "24/7 business support hotline",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    Get Business Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>

              {/* Business Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Detailed Reporting",
                    description: "Comprehensive breakdown reports and analytics for fleet optimization",
                  },
                  {
                    icon: Users,
                    title: "Driver Training",
                    description: "Educational resources and training for your drivers",
                  },
                  {
                    icon: Settings,
                    title: "Custom Solutions",
                    description: "Tailored packages to meet your specific business needs",
                  },
                  {
                    icon: Shield,
                    title: "Insurance Integration",
                    description: "Seamless integration with your existing insurance policies",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                        >
                          <feature.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="enterprise" className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        Enterprise
                      </span>{" "}
                      Solutions
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      Comprehensive, scalable breakdown recovery solutions for large enterprises and organizations.
                      Custom-built packages designed to meet the unique requirements of major fleet operators.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Zap,
                        title: "Scalable Infrastructure",
                        description: "Solutions that grow with your business needs",
                      },
                      {
                        icon: Settings,
                        title: "Custom Integration",
                        description: "API integration with your existing systems",
                      },
                      {
                        icon: BarChart3,
                        title: "Advanced Analytics",
                        description: "Detailed insights and predictive maintenance",
                      },
                      {
                        icon: Shield,
                        title: "SLA Guarantees",
                        description: "Service level agreements with performance guarantees",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                          <p className="text-slate-400 text-sm">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Enterprise Features:</h3>
                    {[
                      "Custom SLA agreements with guaranteed response times",
                      "Dedicated enterprise support team",
                      "API integration for seamless system connectivity",
                      "Advanced fleet analytics and reporting",
                      "Predictive maintenance recommendations",
                      "Multi-location coverage coordination",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  >
                    Contact Enterprise Sales
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <Image
                    src="https://teleportone.com/wp-content/uploads/2016/09/software.jpg"
                    alt="Enterprise Solutions"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <Truck className="h-6 w-6 text-green-400" />
                      <div>
                        <div className="font-semibold text-white">Fleet Capacity</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                          500+ Vehicles
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enterprise Tiers */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Corporate",
                    description: "For large businesses with substantial fleets",
                    features: [
                      "500+ vehicle coverage",
                      "Dedicated account manager",
                      "Custom SLA agreements",
                      "Advanced reporting suite",
                      "API integration available",
                    ],
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    name: "Government",
                    description: "Specialized solutions for public sector",
                    features: [
                      "Public sector pricing",
                      "Compliance with government standards",
                      "Emergency services priority",
                      "Multi-department coordination",
                      "Detailed audit trails",
                    ],
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    name: "Global",
                    description: "International coverage for multinational operations",
                    features: [
                      "Worldwide coverage network",
                      "Multi-currency billing",
                      "Local language support",
                      "International compliance",
                      "24/7 global coordination",
                    ],
                    gradient: "from-orange-500 to-red-500",
                  },
                ].map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                        <p className="text-slate-400">{tier.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {tier.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                          </div>
                        ))}
                        <Button
                          className={`w-full bg-gradient-to-r ${tier.gradient} hover:opacity-90 text-white border-0 mt-6`}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industry Solutions */}
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
              Industry{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Specialists
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored solutions for specific industries with unique requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Logistics & Transport",
                description: "Specialized support for delivery and transport companies",
                features: ["Priority response", "Route optimization", "Load protection"],
              },
              {
                icon: Building2,
                title: "Construction",
                description: "Heavy vehicle recovery and site-specific solutions",
                features: ["Heavy machinery", "Site access", "Equipment transport"],
              },
              {
                icon: Car,
                title: "Rental Companies",
                description: "Fleet management solutions for vehicle rental businesses",
                features: ["Customer support", "Replacement vehicles", "Damage assessment"],
              },
              {
                icon: Users,
                title: "Emergency Services",
                description: "Priority support for police, fire, and ambulance services",
                features: ["Emergency priority", "Specialized equipment", "24/7 availability"],
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.features.map((feature, idx) => (
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
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Whether you're an individual driver, business owner, or enterprise fleet manager, we have the perfect
              breakdown recovery solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-semibold border-0 shadow-2xl"
              >
                <Phone className="mr-3 h-6 w-6" />
                Speak to an Expert
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-12 py-6 text-xl backdrop-blur-sm"
                >
                  Get Custom Quote
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
