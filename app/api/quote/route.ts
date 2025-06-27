import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const quoteData = await request.json()

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Calculate quote based on the data
    const basePrice = getBasePrice(quoteData.serviceType)
    const vehicleMultiplier = getVehicleMultiplier(quoteData.vehicleType)
    const urgencyMultiplier = getUrgencyMultiplier(quoteData.urgency)
    const additionalServicesPrice = calculateAdditionalServices(quoteData.additionalServices)
    const membershipDiscount = getMembershipDiscount(quoteData.membershipType)

    let totalPrice = basePrice * vehicleMultiplier * urgencyMultiplier + additionalServicesPrice
    totalPrice = totalPrice * (1 - membershipDiscount)

    const quote = {
      quoteId: `FBR-${Date.now()}`,
      totalPrice: Math.round(totalPrice),
      validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      estimatedArrival: getEstimatedArrival(quoteData.urgency),
      breakdown: {
        basePrice,
        vehicleMultiplier,
        urgencyMultiplier,
        additionalServicesPrice,
        membershipDiscount: membershipDiscount * 100,
      },
      serviceDetails: quoteData,
    }

    // In a real app, you would save this to a database
    console.log("Quote generated:", quote)

    return NextResponse.json({ success: true, quote })
  } catch (error) {
    console.error("Error generating quote:", error)
    return NextResponse.json({ success: false, error: "Failed to generate quote" }, { status: 500 })
  }
}

function getBasePrice(serviceType: string): number {
  const prices = {
    breakdown: 89,
    accident: 129,
    transport: 149,
    emergency: 199,
  }
  return prices[serviceType as keyof typeof prices] || 89
}

function getVehicleMultiplier(vehicleType: string): number {
  const multipliers = {
    car: 1,
    van: 1.3,
    motorcycle: 0.8,
    truck: 1.8,
  }
  return multipliers[vehicleType as keyof typeof multipliers] || 1
}

function getUrgencyMultiplier(urgency: string): number {
  const multipliers = {
    standard: 1,
    urgent: 1.5,
    emergency: 2,
  }
  return multipliers[urgency as keyof typeof multipliers] || 1
}

function calculateAdditionalServices(services: string[]): number {
  const prices = {
    fuel: 25,
    battery: 35,
    lockout: 45,
    tire: 40,
    winch: 60,
  }

  return services.reduce((total, service) => {
    return total + (prices[service as keyof typeof prices] || 0)
  }, 0)
}

function getMembershipDiscount(membershipType: string): number {
  const discounts = {
    none: 0,
    premium: 0.15,
    gold: 0.25,
  }
  return discounts[membershipType as keyof typeof discounts] || 0
}

function getEstimatedArrival(urgency: string): string {
  const times = {
    standard: "2-4 hours",
    urgent: "30-60 minutes",
    emergency: "15-30 minutes",
  }
  return times[urgency as keyof typeof times] || "2-4 hours"
}
