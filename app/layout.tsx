import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Earth-Allies | Biodegradable Plastic Solutions",
  description:
    "Earth-Allies is a Ghanaian-based startup specializing in producing and distributing biodegradable plastic films and pellets for agriculture, packaging, and various industries.",
    generator: 'Earth-Allies'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'