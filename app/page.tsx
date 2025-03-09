"use client";
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Package, Recycle, Send, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ImageCarousel from "./components/image_carosel"
import Header from "./components/header"
import SolutionsSection from "./components/solution_card"
import ContactSection from "./components/get_in_touch";
import { DayPickerProvider, Footer } from "react-day-picker";
import Footerx from "./components/footer";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 sm:text-4xl md:text-5xl lg:text-6xl/none">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-green-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <motion.div 
                className="flex flex-col justify-center space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div 
                  className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium"
                  variants={fadeIn}
                >
                  Eco-Friendly Solutions
                </motion.div>
                <div className="space-y-4">
                  <motion.h1 
                    className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl/none"
                    variants={fadeIn}
                  >
                    <span className="text-green-600">Sustainable</span> Plastic Solutions for a Greener Future
                  </motion.h1>
                  <motion.p 
                    className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed"
                    variants={fadeIn}
                  >
                    Earth-Allies produces innovative biodegradable plastic films and pellets for agriculture, packaging, and
                    various plastic-dependent industries, reducing environmental impact without compromising performance.
                  </motion.p>
                </div>
                <motion.div 
                  className="flex flex-col gap-3 min-[400px]:flex-row"
                  variants={fadeIn}
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
                    <Link href="/products">
                      Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" size="lg" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Image carousel with animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ImageCarousel />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <SolutionsSection />

        <section className="w-full py-20 md:py-28 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div 
                className="flex items-center justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-green-100 z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-green-200 z-0"></div>
                  <Image
                    src="/images/Earth-Allies-logo.png"
                    alt="Earth-Allies Team"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-xl relative z-10"
                  />
                </div>
              </motion.div>
              <motion.div 
                className="flex flex-col justify-center space-y-6 order-1 lg:order-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div 
                  className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium"
                  variants={fadeIn}
                >
                  Our Story
                </motion.div>
                <div className="space-y-4">
                  <motion.h2 
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    variants={fadeIn}
                  >
                    About Earth-Allies
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 md:text-xl/relaxed"
                    variants={fadeIn}
                  >
                    Earth-Allies is a Ghanaian-based startup specializing in producing and distributing biodegradable
                    plastic films and pellets. Our mission is to provide sustainable alternatives to conventional
                    plastics while supporting local economies and protecting the environment.
                  </motion.p>
                  <motion.p 
                    className="text-gray-600 md:text-xl/relaxed"
                    variants={fadeIn}
                  >
                    Founded in 2024, we combine traditional knowledge with cutting-edge technology to create products
                    that decompose naturally, leaving no harmful residues.
                  </motion.p>
                </div>
                <motion.div variants={fadeIn}>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* contact Section */}
        <ContactSection />

      </main>
      
      {/* Footer */}
 
    <Footerx />
     
    </div>
  )
}