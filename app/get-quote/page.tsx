"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import {
  Car,
  Truck,
  Bike,
  MapPin,
  Clock,
  Phone,
  Mail,
  User,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Calculator,
  Shield,
  Zap,
  Calendar,
  CreditCard,
} from "lucide-react"

interface QuoteData {
  serviceType: string
  vehicleType: string
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  issueDescription: string
  pickupLocation: string
  destinationLocation: string
  preferredDate: string
  preferredTime: string
  urgency: string
  firstName: string
  lastName: string
  email: string
  phone: string
  additionalServices: string[]
  membershipType: string
}

const steps = [
  { id: 1, title: "Service Type", description: "What service do you need?" },
  { id: 2, title: "Vehicle Details", description: "Tell us about your vehicle" },
  { id: 3, title: "Location & Time", description: "Where and when?" },
  { id: 4, title: "Contact Info", description: "How can we reach you?" },
  { id: 5, title: "Review", description: "Confirm your details" },
  { id: 6, title: "Quote", description: "Your personalized quote" },
]

const serviceTypes = [
  {
    id: "breakdown",
    name: "Breakdown Recovery",
    icon: Car,
    price: 89,
    description: "Vehicle won't start or has mechanical issues",
  },
  {
    id: "accident",
    name: "Accident Recovery",
    icon: Shield,
    price: 129,
    description: "Vehicle damaged in an accident",
  },
  { id: "transport", name: "Vehicle Transport", icon: Truck, price: 149, description: "Move vehicle from A to B" },
  { id: "emergency", name: "Emergency Towing", icon: Zap, price: 199, description: "Urgent 24/7 emergency service" },
]

const vehicleTypes = [
  { id: "car", name: "Car", icon: Car, multiplier: 1 },
  { id: "van", name: "Van", icon: Truck, multiplier: 1.3 },
  { id: "motorcycle", name: "Motorcycle", icon: Bike, multiplier: 0.8 },
  { id: "truck", name: "Truck", icon: Truck, multiplier: 1.8 },
]

const additionalServices = [
  { id: "fuel", name: "Emergency Fuel Delivery", price: 25 },
  { id: "battery", name: "Jump Start Service", price: 35 },
  { id: "lockout", name: "Vehicle Lockout Service", price: 45 },
  { id: "tire", name: "Tire Change Service", price: 40 },
  { id: "winch", name: "Winching Service", price: 60 },
]

export default function GetQuotePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [quoteData, setQuoteData] = useState<QuoteData>({
    serviceType: "",
    vehicleType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    issueDescription: "",
    pickupLocation: "",
    destinationLocation: "",
    preferredDate: "",
    preferredTime: "",
    urgency: "standard",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalServices: [],
    membershipType: "none",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [quoteResult, setQuoteResult] = useState<any>(null)

  const progress = (currentStep / steps.length) * 100

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateQuote = () => {
    const baseService = serviceTypes.find((s) => s.id === quoteData.serviceType)
    const vehicle = vehicleTypes.find((v) => v.id === quoteData.vehicleType)

    if (!baseService || !vehicle) return 0

    let total = baseService.price * vehicle.multiplier

    // Add urgency multiplier
    if (quoteData.urgency === "urgent") total *= 1.5
    if (quoteData.urgency === "emergency") total *= 2

    // Add additional services
    quoteData.additionalServices.forEach((serviceId) => {
      const service = additionalServices.find((s) => s.id === serviceId)
      if (service) total += service.price
    })

    // Apply membership discount
    if (quoteData.membershipType === "premium") total *= 0.85
    if (quoteData.membershipType === "gold") total *= 0.75

    return Math.round(total)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const quote = calculateQuote()
    setQuoteResult({
      quoteId: `FBR-${Date.now()}`,
      totalPrice: quote,
      validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      estimatedArrival: "30-45 minutes",
      serviceDetails: quoteData,
    })

    setIsSubmitting(false)
    nextStep()
  }

  const updateQuoteData = (field: keyof QuoteData, value: any) => {
    setQuoteData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Get Your Quote
            </h1>
            <p className="text-xl text-slate-300 mb-8">Fast, accurate quotes in just a few steps</p>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex justify-between items-center mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        currentStep >= step.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-slate-700 text-slate-400"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                    </motion.div>
                    <span className="text-xs text-slate-400 mt-2 hidden md:block">{step.title}</span>
                  </div>
                ))}
              </div>
              <Progress value={progress} className="h-2 bg-slate-700" />
            </div>
          </motion.div>

          {/* Quote Form */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <span className="text-blue-400">Step {currentStep}:</span>
                {steps[currentStep - 1]?.title}
              </CardTitle>
              <p className="text-slate-400">{steps[currentStep - 1]?.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Service Type */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {serviceTypes.map((service) => (
                        <motion.div key={service.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Card
                            className={`cursor-pointer transition-all duration-300 ${
                              quoteData.serviceType === service.id
                                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500"
                                : "bg-slate-700/50 border-slate-600 hover:border-slate-500"
                            }`}
                            onClick={() => updateQuoteData("serviceType", service.id)}
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4 mb-3">
                                <service.icon className="w-8 h-8 text-blue-400" />
                                <div>
                                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                                  <p className="text-sm text-slate-400">{service.description}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-2xl font-bold text-green-400">£{service.price}</span>
                                <span className="text-sm text-slate-400 ml-1">from</span>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Vehicle Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {vehicleTypes.map((vehicle) => (
                        <motion.div key={vehicle.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Card
                            className={`cursor-pointer transition-all duration-300 ${
                              quoteData.vehicleType === vehicle.id
                                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500"
                                : "bg-slate-700/50 border-slate-600 hover:border-slate-500"
                            }`}
                            onClick={() => updateQuoteData("vehicleType", vehicle.id)}
                          >
                            <CardContent className="p-4 text-center">
                              <vehicle.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                              <p className="text-sm font-medium text-white">{vehicle.name}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="make" className="text-white mb-2 block">
                          Vehicle Make
                        </Label>
                        <Input
                          id="make"
                          placeholder="e.g., Toyota"
                          value={quoteData.vehicleMake}
                          onChange={(e) => updateQuoteData("vehicleMake", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="model" className="text-white mb-2 block">
                          Vehicle Model
                        </Label>
                        <Input
                          id="model"
                          placeholder="e.g., Corolla"
                          value={quoteData.vehicleModel}
                          onChange={(e) => updateQuoteData("vehicleModel", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="year" className="text-white mb-2 block">
                          Year
                        </Label>
                        <Input
                          id="year"
                          placeholder="e.g., 2020"
                          value={quoteData.vehicleYear}
                          onChange={(e) => updateQuoteData("vehicleYear", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="issue" className="text-white mb-2 block">
                        Describe the Issue
                      </Label>
                      <Textarea
                        id="issue"
                        placeholder="Please describe what happened or what service you need..."
                        value={quoteData.issueDescription}
                        onChange={(e) => updateQuoteData("issueDescription", e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Location & Time */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pickup" className="text-white mb-2 block flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Pickup Location
                        </Label>
                        <Input
                          id="pickup"
                          placeholder="Enter pickup address or postcode"
                          value={quoteData.pickupLocation}
                          onChange={(e) => updateQuoteData("pickupLocation", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="destination" className="text-white mb-2 block flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Destination (Optional)
                        </Label>
                        <Input
                          id="destination"
                          placeholder="Where should we take your vehicle?"
                          value={quoteData.destinationLocation}
                          onChange={(e) => updateQuoteData("destinationLocation", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="text-white mb-2 block flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Preferred Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={quoteData.preferredDate}
                          onChange={(e) => updateQuoteData("preferredDate", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-white mb-2 block flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Preferred Time
                        </Label>
                        <Select
                          value={quoteData.preferredTime}
                          onValueChange={(value) => updateQuoteData("preferredTime", value)}
                        >
                          <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As Soon As Possible</SelectItem>
                            <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 6PM)</SelectItem>
                            <SelectItem value="evening">Evening (6PM - 10PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-white mb-4 block">Service Urgency</Label>
                      <RadioGroup
                        value={quoteData.urgency}
                        onValueChange={(value) => updateQuoteData("urgency", value)}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div className="flex items-center space-x-2 p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="text-white cursor-pointer flex-1">
                            <div>
                              <p className="font-medium">Standard</p>
                              <p className="text-sm text-slate-400">Within 2-4 hours</p>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent" className="text-white cursor-pointer flex-1">
                            <div>
                              <p className="font-medium">Urgent (+50%)</p>
                              <p className="text-sm text-slate-400">Within 1 hour</p>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                          <RadioGroupItem value="emergency" id="emergency" />
                          <Label htmlFor="emergency" className="text-white cursor-pointer flex-1">
                            <div>
                              <p className="font-medium">Emergency (+100%)</p>
                              <p className="text-sm text-slate-400">Within 30 minutes</p>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Info */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white mb-2 block flex items-center gap-2">
                          <User className="w-4 h-4" />
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          value={quoteData.firstName}
                          onChange={(e) => updateQuoteData("firstName", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white mb-2 block">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          value={quoteData.lastName}
                          onChange={(e) => updateQuoteData("lastName", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-white mb-2 block flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={quoteData.email}
                          onChange={(e) => updateQuoteData("email", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white mb-2 block flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="07123 456789"
                          value={quoteData.phone}
                          onChange={(e) => updateQuoteData("phone", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-white mb-4 block">Additional Services</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {additionalServices.map((service) => (
                          <div
                            key={service.id}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/50 border border-slate-600"
                          >
                            <Checkbox
                              id={service.id}
                              checked={quoteData.additionalServices.includes(service.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  updateQuoteData("additionalServices", [...quoteData.additionalServices, service.id])
                                } else {
                                  updateQuoteData(
                                    "additionalServices",
                                    quoteData.additionalServices.filter((s) => s !== service.id),
                                  )
                                }
                              }}
                            />
                            <Label
                              htmlFor={service.id}
                              className="text-white cursor-pointer flex-1 flex justify-between"
                            >
                              <span>{service.name}</span>
                              <span className="text-green-400 font-semibold">+£{service.price}</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-white mb-4 block">Membership Status</Label>
                      <Select
                        value={quoteData.membershipType}
                        onValueChange={(value) => updateQuoteData("membershipType", value)}
                      >
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select membership" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Membership</SelectItem>
                          <SelectItem value="premium">Premium Member (15% discount)</SelectItem>
                          <SelectItem value="gold">Gold Member (25% discount)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Review */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="bg-slate-700/50 border-slate-600">
                        <CardHeader>
                          <CardTitle className="text-white text-lg">Service Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Service:</span>
                            <span className="text-white">
                              {serviceTypes.find((s) => s.id === quoteData.serviceType)?.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Vehicle:</span>
                            <span className="text-white">
                              {quoteData.vehicleMake} {quoteData.vehicleModel} ({quoteData.vehicleYear})
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Urgency:</span>
                            <span className="text-white capitalize">{quoteData.urgency}</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-slate-700/50 border-slate-600">
                        <CardHeader>
                          <CardTitle className="text-white text-lg">Contact & Location</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Name:</span>
                            <span className="text-white">
                              {quoteData.firstName} {quoteData.lastName}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Phone:</span>
                            <span className="text-white">{quoteData.phone}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Location:</span>
                            <span className="text-white text-right text-sm">{quoteData.pickupLocation}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/50">
                      <CardHeader>
                        <CardTitle className="text-white text-lg flex items-center gap-2">
                          <Calculator className="w-5 h-5" />
                          Quote Calculation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-300">Base Service:</span>
                            <span className="text-white">
                              £{serviceTypes.find((s) => s.id === quoteData.serviceType)?.price}
                            </span>
                          </div>
                          {quoteData.urgency !== "standard" && (
                            <div className="flex justify-between">
                              <span className="text-slate-300">Urgency Surcharge:</span>
                              <span className="text-orange-400">
                                +{quoteData.urgency === "urgent" ? "50%" : "100%"}
                              </span>
                            </div>
                          )}
                          {quoteData.additionalServices.length > 0 && (
                            <div className="flex justify-between">
                              <span className="text-slate-300">Additional Services:</span>
                              <span className="text-white">
                                +£
                                {quoteData.additionalServices.reduce((total, serviceId) => {
                                  const service = additionalServices.find((s) => s.id === serviceId)
                                  return total + (service?.price || 0)
                                }, 0)}
                              </span>
                            </div>
                          )}
                          {quoteData.membershipType !== "none" && (
                            <div className="flex justify-between">
                              <span className="text-slate-300">Membership Discount:</span>
                              <span className="text-green-400">
                                -{quoteData.membershipType === "premium" ? "15%" : "25%"}
                              </span>
                            </div>
                          )}
                          <div className="border-t border-slate-600 pt-3">
                            <div className="flex justify-between text-xl font-bold">
                              <span className="text-white">Total Estimate:</span>
                              <span className="text-green-400">£{calculateQuote()}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Step 6: Quote Result */}
                {currentStep === 6 && quoteResult && (
                  <motion.div
                    key="step6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>

                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">Quote Generated!</h2>
                      <p className="text-slate-400">Your personalized quote is ready</p>
                    </div>

                    <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/50 max-w-md mx-auto">
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          <div>
                            <p className="text-sm text-slate-400">Quote ID</p>
                            <p className="text-lg font-mono text-white">{quoteResult.quoteId}</p>
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">Total Price</p>
                            <p className="text-4xl font-bold text-green-400">£{quoteResult.totalPrice}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-slate-400">Valid Until</p>
                              <p className="text-white">{quoteResult.validUntil}</p>
                            </div>
                            <div>
                              <p className="text-slate-400">Est. Arrival</p>
                              <p className="text-white">{quoteResult.estimatedArrival}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Book Now
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                        Save Quote
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                        Share Quote
                      </Button>
                    </div>

                    <div className="text-sm text-slate-400 space-y-2">
                      <p>✓ No hidden fees or charges</p>
                      <p>✓ 24/7 customer support</p>
                      <p>✓ Fully insured and licensed</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {currentStep < 6 && (
                <div className="flex justify-between pt-6 border-t border-slate-700">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="border-slate-600 text-slate-300 hover:bg-slate-800"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep === 5 ? (
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Generating Quote...
                        </>
                      ) : (
                        <>
                          <Calculator className="mr-2 h-4 w-4" />
                          Get Quote
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
