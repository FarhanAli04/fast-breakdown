import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fast Breakdown Recovery - Advanced 24/7 UK Roadside Assistance",
  description:
    "Revolutionary breakdown recovery service with cutting-edge technology. 24/7 emergency roadside assistance, vehicle recovery, and membership plans across the UK.",
  keywords:
    "breakdown recovery, roadside assistance, vehicle recovery, UK breakdown service, emergency breakdown, car recovery, advanced technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
