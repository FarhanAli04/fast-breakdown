"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Truck,
  Clock,
  Shield,
  Phone,
  CheckCircle,
  ArrowRight,
  Zap,
  Car,
  BikeIcon as Motorcycle,
  Settings,
  AlertTriangle,
  Navigation,
  Headphones,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("roadside")

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
              Complete Service Range
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Recovery Services</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              From emergency roadside assistance to complex vehicle recovery, we provide complete solutions powered by
              cutting-edge technology and expert craftsmanship.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-slate-400">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  &lt;30min
                </div>
                <div className="text-slate-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  UK-Wide
                </div>
                <div className="text-slate-400">Coverage</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-800/50 border border-slate-700 mb-12">
              <TabsTrigger
                value="roadside"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500"
              >
                Roadside Assistance
              </TabsTrigger>
              <TabsTrigger
                value="recovery"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500"
              >
                Vehicle Recovery
              </TabsTrigger>
              <TabsTrigger
                value="emergency"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500"
              >
                Emergency Response
              </TabsTrigger>
              <TabsTrigger
                value="specialized"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500"
              >
                Specialized Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="roadside" className="space-y-12">
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
                        Smart Roadside
                      </span>{" "}
                      Assistance
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      Our expert technicians arrive equipped with advanced diagnostic tools and repair equipment to get
                      you back on the road without the need for recovery.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Zap,
                        title: "Jump Start Service",
                        desc: "Advanced battery diagnostics and jump starting",
                      },
                      { icon: Settings, title: "Tire Replacement", desc: "Professional tire changing and repair" },
                      { icon: Car, title: "Fuel Delivery", desc: "Emergency fuel delivery service" },
                      { icon: Shield, title: "Lockout Service", desc: "Safe vehicle entry without damage" },
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{service.title}</h3>
                          <p className="text-slate-400 text-sm">{service.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  >
                    Request Roadside Help
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
                 src="https://www.right2drive.com.au/wp-content/uploads/Road-Assistance-3.jpg"
                    alt="Roadside Assistance Service"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-blue-400" />
                      <div>
                        <div className="font-semibold text-white">Average Response</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          28 Minutes
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="recovery" className="space-y-12">
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
                      src="https://5.imimg.com/data5/ANDROID/Default/2023/1/DL/RK/MD/13048555/product-jpeg-500x500.jpg"
                    alt="Vehicle Recovery Service"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-6 -right-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <Truck className="h-6 w-6 text-orange-400" />
                      <div>
                        <div className="font-semibold text-white">Fleet Size</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                          200+ Vehicles
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                      <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                        Advanced Vehicle
                      </span>{" "}
                      Recovery
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      When roadside repairs aren't possible, our state-of-the-art recovery fleet safely transports your
                      vehicle to your chosen destination with real-time tracking.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Flatbed recovery trucks with hydraulic systems",
                      "Accident and collision recovery specialists",
                      "Long-distance transportation available",
                      "Secure vehicle handling and protection",
                      "Insurance approved recovery methods",
                      "GPS tracking and live updates",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    Book Recovery Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="emergency" className="space-y-12">
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
                        Priority Emergency
                      </span>{" "}
                      Response
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed">
                      Rapid response emergency breakdown service available 24/7, 365 days a year. Our priority system
                      ensures the fastest possible assistance when you need it most.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { icon: AlertTriangle, title: "Priority Dispatch", desc: "Immediate response for emergencies" },
                      { icon: Navigation, title: "GPS Tracking", desc: "Real-time location and ETA updates" },
                      { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock emergency hotline" },
                      { icon: Shield, title: "Safety First", desc: "Trained in motorway safety protocols" },
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{service.title}</h3>
                          <p className="text-slate-400 text-sm">{service.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency: 0800 123 4567
                  </Button>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <Image
                      src="https://pvl.eu/wp-content/uploads/2021/04/Bevan-HART-WAS-59-1024x667.jpg"
                    alt="Emergency Response Service"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-red-400" />
                      <div>
                        <div className="font-semibold text-white">Emergency Response</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                          15 Minutes
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="specialized" className="space-y-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Truck,
                    title: "Commercial Vehicles",
                    description:
                      "Specialized service for vans, trucks, and commercial fleets with heavy-duty equipment",
                    features: [
                      "Heavy-duty recovery",
                      "Fleet management",
                      "Priority business response",
                      "Dedicated account manager",
                    ],
                    gradient: "from-blue-500 to-cyan-500",
                    image: "https://www.riziolawfirm.com/wp-content/uploads/2020/02/Types-of-Commercial-Vehicles.jpg",
                  },
                  {
                    icon: Motorcycle,
                    title: "Motorcycle Recovery",
                    description: "Specialized equipment and expertise for motorcycle breakdowns and accidents",
                    features: [
                      "Specialized bike trailers",
                      "Secure transportation",
                      "Accident recovery",
                      "Insurance approved",
                    ],
                    gradient: "from-orange-500 to-red-500",
                     image: "https://mocktheorytest.com/posts/motorbike-being-loaded-onto-a-tow-truck-in-the-UK-600x327.jpg",
                  },
                  {
                    icon: Shield,
                    title: "Insurance Work",
                    description: "Direct billing and partnerships with major insurance companies",
                    features: [
                      "Direct insurance billing",
                      "Approved supplier network",
                      "Claims support",
                      "Fast processing",
                    ],
                    gradient: "from-green-500 to-emerald-500",
                   image: "https://broker-link.imgix.net/images/Blog/how-to-get-proof-of-insurance-before-buying-a-car-banner.jpg?auto=format&h=630&ixlib=php-4.1.0&w=1200",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={350}
                          height={250}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                        <div
                          className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center`}
                        >
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-slate-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full" variant="outline">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Coverage Area */}
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
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">UK-Wide</span>{" "}
              Coverage
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional breakdown recovery services across England, Scotland, and Wales with local expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                region: "England",
                description:
                  "Complete coverage across all English counties including major cities, motorways, and rural areas.",
                cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
                 image: "https://media.timeout.com/images/106084857/750/422/image.jpg",
              },
              {
                region: "Scotland",
                description:
                  "From the Highlands to the Lowlands, comprehensive Scottish coverage with local knowledge.",
                cities: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Stirling"],
               image: "https://media.gadventures.com/media-server/cache/74/93/7493a191de5a82c29b247c22c088564b.jpg",
              },
              {
                region: "Wales",
                description: "Full Welsh coverage from Cardiff to Anglesey and everywhere in between.",
                cities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor"],
             image: "https://images.ctfassets.net/5dlg82ljiq56/7nP3CUv81viyhcRFU0Tkwj/fd4e2632e01459c774089bbef2727c06/Harlech_Castle__Gwynedd__Wales__UK.jpg?w=800&fm=webp&q=80",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={area.image || "/placeholder.svg"}
                      alt={area.region}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{area.region}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-slate-300 mb-4 leading-relaxed">{area.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white text-sm">Major Cities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.cities.map((city, idx) => (
                          <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300">
                            {city}
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
              Need Professional{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Recovery Service
              </span>
              ?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Don't let a breakdown ruin your day. Our expert team is ready to help you get back on the road quickly and
              safely with our advanced recovery solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-semibold border-0 shadow-2xl"
              >
                <Phone className="mr-3 h-6 w-6" />
                Emergency: 0800 123 4567
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
