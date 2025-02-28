import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Globe, Target, Users, ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "../components/header"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
    {/* heder section */}
      < Header/>
      
      <main className="flex-1">
        {/* Hero section with improved gradient and styling */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-green-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                  Our Story
                </div>
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-green-800">About <span className="text-green-600">Earth-Allies</span></h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl lg:text-xl">
                    Earth-Allies is a pioneering Ghanaian startup dedicated to creating a more sustainable future through innovative biodegradable plastic solutions for agriculture, packaging, and various industries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-green-600 hover:bg-green-700" size="lg" asChild>
                      <Link href="/products">
                        Explore Our Products <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" size="lg" asChild>
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/images/about-earth-allians.jpg"
                    alt="Earth-Allies Headquarters"
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-700"
                    style={{ objectPosition: "center" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission section with enhanced visuals */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/images/Earth- Allies Mission .jpg"
                    alt="Sustainable Manufacturing"
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-700"
                    style={{ objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                  Our Purpose
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-green-800">Our Mission</h2>
                  <div className="w-20 h-1 bg-green-600"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    At Earth-Allies, our mission is to promote sustainability and environmental responsibility through
                    innovative biodegradable plastic solutions. We aim to reduce the environmental impact of
                    conventional plastics by providing eco-friendly alternatives that maintain functionality while being
                    kind to our planet.
                  </p>
                  <ul className="space-y-2 pt-4">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Developing eco-friendly plastic alternatives</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Reducing environmental impact and plastic waste</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">Supporting a circular economy in Ghana and beyond</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision section with enhanced layout */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-green-50 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                  Looking Forward
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-green-800">Our Vision</h2>
                  <div className="w-20 h-1 bg-green-600"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We envision a future where biodegradable materials are the standard across all industries, dramatically reducing plastic pollution and environmental harm. Earth-Allies strives to be at the forefront of this transformation, leading Ghana and Africa into a more sustainable future.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Globe className="h-8 w-8 text-green-600 mb-2" />
                      <h3 className="font-medium text-green-800">Global Impact</h3>
                      <p className="text-sm text-gray-600 mt-1">Expanding our solutions worldwide</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Target className="h-8 w-8 text-green-600 mb-2" />
                      <h3 className="font-medium text-green-800">Innovation</h3>
                      <p className="text-sm text-gray-600 mt-1">Continuously improving our technology</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/images/Earth- Allies Vision .jpg"
                    alt="Sustainable Vision"
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-700"
                    style={{ objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-green-600/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team section with improved cards */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                Our People
              </div>
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-green-800">Meet Our Team</h2>
                <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                <p className="text-gray-600 text-lg">
                  The dedicated professionals behind Earth-Allies who are committed to driving sustainability
                  and innovation in the plastics industry.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="group flex flex-col items-center space-y-4 rounded-xl border overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-full h-48 relative overflow-hidden">
                  <Image
                    src="/images/titus.png"
                    alt="Titus Osei-Poku"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800">Titus Osei-Poku</h3>
                  <p className="text-green-600 font-medium mb-3">Co-Founder & CEO</p>
                  <p className="text-gray-600 text-sm">
                    Leading our vision to create sustainable plastic alternatives and driving innovation.
                  </p>
                  <div className="flex justify-center space-x-3 mt-4">
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="group flex flex-col items-center space-y-4 rounded-xl border overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-full h-48 relative overflow-hidden">
                  <Image
                    src="/images/titus.png"
                    alt="Evans Asamoah"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800">Evans Asamoah</h3>
                  <p className="text-green-600 font-medium mb-3">Co-Founder & CTO</p>
                  <p className="text-gray-600 text-sm">
                    Developing innovative biodegradable solutions to meet evolving customer needs.
                  </p>
                  <div className="flex justify-center space-x-3 mt-4">
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="group flex flex-col items-center space-y-4 rounded-xl border overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-full h-48 relative overflow-hidden">
                  <Image
                    src="/images/titus.png"
                    alt="Sarah Mensah"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800">Sarah Mensah</h3>
                  <p className="text-green-600 font-medium mb-3">Head of Operations</p>
                  <p className="text-gray-600 text-sm">
                    Ensuring efficient operations and sustainable manufacturing processes.
                  </p>
                  <div className="flex justify-center space-x-3 mt-4">
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 4 */}
              <div className="group flex flex-col items-center space-y-4 rounded-xl border overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-full h-48 relative overflow-hidden">
                  <Image
                    src="/images/titus.png"
                    alt="Daniel Addo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800">Daniel Addo</h3>
                  <p className="text-green-600 font-medium mb-3">Community Outreach</p>
                  <p className="text-gray-600 text-sm">
                    Building relationships and creating positive social impact through our initiatives.
                  </p>
                  <div className="flex justify-center space-x-3 mt-4">
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.
                      675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values section - new addition */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                Our Values
              </div>
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-green-800">What We Stand For</h2>
                <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                <p className="text-gray-600 text-lg">
                  The core values that drive everything we do at Earth-Allies
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We prioritize environmental health in every product we create, ensuring our solutions reduce the ecological footprint of the industries we serve.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously research and develop new biodegradable solutions to meet the evolving needs of our customers and push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Community</h3>
                <p className="text-gray-600">
                  We believe in supporting local communities and creating positive social impact through our business practices, fostering a more sustainable future for Ghana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats/Impact section - new addition */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                Our Impact
              </div>
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-green-800">Making a Difference</h2>
                <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                <p className="text-gray-600 text-lg">
                  See how our work is creating real environmental change
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-md transition-all">
                <p className="text-4xl font-bold text-green-600 mb-2">5,000+</p>
                <p className="text-green-800 font-medium">Tons of Plastic Waste Reduced</p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-md transition-all">
                <p className="text-4xl font-bold text-green-600 mb-2">200+</p>
                <p className="text-green-800 font-medium">Partner Businesses</p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-md transition-all">
                <p className="text-4xl font-bold text-green-600 mb-2">30+</p>
                <p className="text-green-800 font-medium">Community Projects</p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-md transition-all">
                <p className="text-4xl font-bold text-green-600 mb-2">3</p>
                <p className="text-green-800 font-medium">Innovation Awards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA section with improved design */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                  Get Involved
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-green-800">Join Our Mission</h2>
                  <div className="w-20 h-1 bg-green-600"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Partner with Earth-Allies to make your business more sustainable and environmentally responsible. Together, we can create a cleaner, greener future for Ghana and beyond.
                  </p>
                  
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-800">Email Us</p>
                        <p className="text-gray-600">info@earth-allies.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-800">Call Us</p>
                        <p className="text-gray-600">+233 20 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-800">Visit Us</p>
                        <p className="text-gray-600">123 Innovation Street, Accra, Ghana</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-green-600 hover:bg-green-700" size="lg" asChild>
                    <Link href="/contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" size="lg" asChild>
                    <Link href="/products">
                      Explore Products
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer with enhanced styling */}
      <footer className="w-full bg-green-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">Earth-Allies</span>
              </div>
              <p className="text-green-200">
                Creating sustainable biodegradable plastic solutions for a cleaner planet.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="https://www.linkedin.com/company/earthallies/" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-green-200 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-green-200 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-green-200 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/agriculture" className="text-green-200 hover:text-white transition-colors">
                    Agricultural Films
                  </Link>
                </li>
                <li>
                  <Link href="/products/packaging" className="text-green-200 hover:text-white transition-colors">
                    Biodegradable Packaging
                  </Link>
                </li>
                <li>
                  <Link href="/products/pellets" className="text-green-200 hover:text-white transition-colors">
                    Biodegradable Pellets
                  </Link>
                </li>
                <li>
                  <Link href="/products/custom" className="text-green-200 hover:text-white transition-colors">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-green-200">123 Innovation Street, Accra, Ghana</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-green-200">info@earth-allies.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-green-200">+233 20 123 4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">© 2024 Earth-Allies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-green-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-green-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-green-200 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}