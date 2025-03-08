
// import Link from "next/link"
// import Image from "next/image"
// import { ArrowRight, Leaf, Package, Recycle, Send, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import ImageCarousel from "./components/image_carosel"
// import Header from "./components/header"
// import SolutionsSection from "./components/solution_card"


// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//    < Header/>
//       <main className="flex-1 sm:text-4xl md:text-5xl lg:text-6xl/none">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-green-100 to-white">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
//               <div className="flex flex-col justify-center space-y-6">
//                 <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium ">
//                   Eco-Friendly Solutions
//                 </div>
//                 <div className="space-y-4">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl/none">
//                     <span className="text-green-600">Sustainable</span> Plastic Solutions for a Greener Future
//                   </h1>
//                   <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
//                     Earth-Allies produces innovative biodegradable plastic films and pellets for agriculture, packaging, and
//                     various plastic-dependent industries, reducing environmental impact without compromising performance.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-3 min-[400px]:flex-row">
//                   <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
//                     <Link href="/products">
//                       Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
//                     </Link>
//                   </Button>
//                   <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" size="lg" asChild>
//                     <Link href="/about">Learn More</Link>
//                   </Button>
//                 </div>
//               </div>


//               {/* image corosel */}
//               <ImageCarousel />
            
//             </div>
//           </div>
//         </section>


//         {/* Solutions Section */}
//         <SolutionsSection />



//         <section className="w-full py-20 md:py-28 lg:py-32 bg-green-50">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
//               <div className="flex items-center justify-center order-2 lg:order-1">
//                 <div className="relative">
//                   <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-green-100 z-0"></div>
//                   <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-green-200 z-0"></div>
//                   <Image
//                     src="/images/Earth-Allies-logo.png"
//                     alt="Earth-Allies Team"
//                     width={600}
//                     height={400}
//                     className="rounded-lg object-cover shadow-xl relative z-10"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
//                 <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
//                   Our Story
//                 </div>
//                 <div className="space-y-4">
//                   <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Earth-Allies</h2>
//                   <p className="text-gray-600 md:text-xl/relaxed">
//                     Earth-Allies is a Ghanaian-based startup specializing in producing and distributing biodegradable
//                     plastic films and pellets. Our mission is to provide sustainable alternatives to conventional
//                     plastics while supporting local economies and protecting the environment.
//                   </p>
//                   <p className="text-gray-600 md:text-xl/relaxed">
//                     Founded in 2022, we combine traditional knowledge with cutting-edge technology to create products
//                     that decompose naturally, leaving no harmful residues.
//                   </p>
//                 </div>
//                 <div>
//                   <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
//                     <Link href="/about">Learn More About Us</Link>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="w-full py-20 md:py-28 lg:py-32 bg-white">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
//               <div className="flex flex-col justify-center space-y-6">
//                 <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
//                   Contact Us
//                 </div>
//                 <div className="space-y-4">
//                   <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
//                   <p className="text-gray-600 md:text-xl/relaxed">
//                     Interested in our biodegradable solutions? Contact us today to learn more about how we can help your
//                     business become more sustainable and reduce environmental impact.
//                   </p>
//                 </div>
//                 <div className="space-y-4 mt-4">
//                   <div className="flex items-center space-x-3">
//                     <Mail className="h-5 w-5 text-green-600" />
//                     <span className="text-gray-600">contact@earth-allies.com</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <Phone className="h-5 w-5 text-green-600" />
//                     <span className="text-gray-600">+233 20 123 4567</span>
//                   </div>
//                   <div className="flex items-center space-x-3">
//                     <MapPin className="h-5 w-5 text-green-600" />
//                     <span className="text-gray-600">Accra, Ghana</span>
//                   </div>
//                 </div>
//                 <div className="pt-4">
//                   <Button className="bg-green-600 hover:bg-green-700 text-white" size="lg" asChild>
//                     <Link href="/contact">
//                       Send Us a Message <Send className="ml-2 h-4 w-4" />
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center bg-green-50 rounded-xl p-8">
//                 <div className="w-full max-w-md space-y-6">
//                   <div className="space-y-2">
//                     <h3 className="text-xl font-semibold">Quick Contact Form</h3>
//                     <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you soon</p>
//                   </div>
//                   <div className="grid grid-cols-1 gap-4">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="text-sm font-medium">Full Name</label>
//                       <input
//                         id="name"
//                         placeholder="Your name"
//                         className="w-full rounded-md border border-green-200 px-3 py-2 text-sm"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-sm font-medium">Email</label>
//                       <input
//                         id="email"
//                         type="email"
//                         placeholder="your.email@example.com"
//                         className="w-full rounded-md border border-green-200 px-3 py-2 text-sm"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="message" className="text-sm font-medium">Message</label>
//                       <textarea
//                         id="message"
//                         placeholder="How can we help you?"
//                         className="w-full rounded-md border border-green-200 px-3 py-2 text-sm min-h-[100px]"
//                       ></textarea>
//                     </div>
//                     <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Submit</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="w-full bg-green-900 text-white py-12">
//         <div className="container px-4 md:px-6">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <Leaf className="h-6 w-6 text-green-300" />
//                 <span className="text-xl font-bold text-white">Earth-Allies</span>
//               </div>
//               <p className="text-green-200 text-sm">
//                 Biodegradable plastic solutions for a sustainable future. Made in Ghana, impacting the world.
//               </p>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-green-200 hover:text-white">
//                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="text-green-200 hover:text-white">
//                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="https://www.linkedin.com/company/earthallies/" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white">
//                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/" className="text-green-200 hover:text-white transition-colors">Home</Link>
//                 </li>
//                 <li>
//                   <Link href="/about" className="text-green-200 hover:text-white transition-colors">About Us</Link>
//                 </li>
//                 <li>
//                   <Link href="/products" className="text-green-200 hover:text-white transition-colors">Products</Link>
//                 </li>
//                 <li>
//                   <Link href="/contact" className="text-green-200 hover:text-white transition-colors">Contact</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium">Products</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/products/agricultural" className="text-green-200 hover:text-white transition-colors">Agricultural Films</Link>
//                 </li>
//                 <li>
//                   <Link href="/products/packaging" className="text-green-200 hover:text-white transition-colors">Packaging Solutions</Link>
//                 </li>
//                 <li>
//                   <Link href="/products/pellets" className="text-green-200 hover:text-white transition-colors">Biodegradable Pellets</Link>
//                 </li>
//                 <li>
//                   <Link href="/products/custom" className="text-green-200 hover:text-white transition-colors">Custom Solutions</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="space-y-4">
//               <h3 className="text-lg font-medium">Contact Us</h3>
//               <ul className="space-y-2">
//                 <li className="flex items-start space-x-2">
//                   <MapPin className="h-5 w-5 text-green-300 mt-0.5" />
//                   <span className="text-green-200">123 Sustainability St., Accra, Ghana</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <Mail className="h-5 w-5 text-green-300" />
//                   <span className="text-green-200">contact@earth-allies.com</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <Phone className="h-5 w-5 text-green-300" />
//                   <span className="text-green-200">+233 20 123 4567</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-green-200">© 2024 Earth-Allies. All rights reserved.</p>
//             <div className="flex gap-6">
//               <Link href="#" className="text-sm text-green-200 hover:text-white transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="#" className="text-sm text-green-200 hover:text-white transition-colors">
//                 Terms of Service
//               </Link>
//               <Link href="#" className="text-sm text-green-200 hover:text-white transition-colors">
//                 Sustainability Policy
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// } 































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
                    Founded in 2022, we combine traditional knowledge with cutting-edge technology to create products
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