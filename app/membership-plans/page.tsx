import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Phone, ArrowRight, Star, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Membership Plans - Fast Breakdown Recovery | Choose Your Coverage",
  description:
    "Compare our breakdown recovery membership plans. From basic roadside assistance to comprehensive coverage with vehicle recovery. Choose the plan that suits your needs.",
}

export default function MembershipPlansPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-orange-500 text-white px-4 py-2 mb-6">Flexible Coverage Options</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Choose Your Perfect Membership Plan</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive breakdown coverage tailored to your needs and budget. All plans include 24/7 support and
              UK-wide coverage.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-semibold ml-2">4.9/5 Customer Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Compare Our Membership Plans</h2>
            <p className="text-xl text-gray-600">All plans include 24/7 emergency support and UK-wide coverage</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Basic</CardTitle>
                <CardDescription className="text-lg">Essential roadside assistance</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-blue-600">£4.99</div>
                  <div className="text-gray-500">/month</div>
                  <div className="text-sm text-gray-400 mt-1">or £49.99/year (save 17%)</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>24/7 roadside assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Jump start service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Flat tire assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Lockout service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Emergency fuel delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Minor roadside repairs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    <span className="text-gray-400">Vehicle recovery service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    <span className="text-gray-400">Home start service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    <span className="text-gray-400">Onward travel options</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Choose Basic Plan
                </Button>
                <p className="text-xs text-gray-500 text-center">Perfect for occasional drivers</p>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-2 border-orange-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-6 py-2 text-sm font-semibold">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">Premium</CardTitle>
                <CardDescription className="text-lg">Complete breakdown coverage</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-blue-600">£9.99</div>
                  <div className="text-gray-500">/month</div>
                  <div className="text-sm text-gray-400 mt-1">or £99.99/year (save 17%)</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">Everything in Basic, plus:</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Vehicle recovery service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Home start service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Onward travel options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Alternative transport</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Overnight accommodation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>European breakdown cover</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    <span className="text-gray-400">Commercial vehicle coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    <span className="text-gray-400">Priority response</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
                  Choose Premium Plan
                </Button>
                <p className="text-xs text-gray-500 text-center">Ideal for regular drivers and families</p>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Professional</CardTitle>
                <CardDescription className="text-lg">For commercial vehicles & businesses</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-blue-600">£19.99</div>
                  <div className="text-gray-500">/month</div>
                  <div className="text-sm text-gray-400 mt-1">or £199.99/year (save 17%)</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">Everything in Premium, plus:</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Commercial vehicle coverage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Priority response service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Fleet management support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Business continuity support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Heavy vehicle recovery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>24/7 business support line</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Invoicing & reporting</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline" size="lg">
                  Choose Professional Plan
                </Button>
                <p className="text-xs text-gray-500 text-center">Perfect for businesses and commercial fleets</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include a 30-day money-back guarantee and can be cancelled anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Speak to an Advisor
              </Button>
              <Button size="lg">
                Compare Plans in Detail
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What's Included in Every Plan</h2>
            <p className="text-xl text-gray-600">Core benefits that come standard with all membership levels</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock emergency assistance, 365 days a year</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Fully trained and certified breakdown specialists</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Comprehensive insurance coverage for complete peace of mind</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">Transparent pricing with no surprise charges or call-out fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our membership plans</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-gray-600">
                  Yes, you can change your membership plan at any time. Upgrades take effect immediately, while
                  downgrades take effect at your next billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Is there a minimum contract period?</h3>
                <p className="text-gray-600">
                  No, all our plans are flexible with no minimum contract period. You can cancel anytime with 30 days'
                  notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Do you cover all vehicle types?</h3>
                <p className="text-gray-600">
                  Basic and Premium plans cover cars, motorcycles, and small vans up to 3.5 tonnes. Professional plans
                  include larger commercial vehicles and trucks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">What if I need help immediately after joining?</h3>
                <p className="text-gray-600">
                  Your membership is active immediately upon payment confirmation. You can call for assistance right
                  away with no waiting period.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/faqs">
              <Button variant="outline" size="lg">
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Fast Breakdown Recovery for their roadside assistance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call to Join: 0800 123 4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg"
            >
              Get Online Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
