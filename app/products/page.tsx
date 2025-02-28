import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="inline-block font-bold">Earth-Allies</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground">
                Home
              </Link>
              <Link href="/about" className="flex items-center text-sm font-medium text-muted-foreground">
                About
              </Link>
              <Link href="/products" className="flex items-center text-sm font-medium text-foreground">
                Products
              </Link>
              <Link href="/contact" className="flex items-center text-sm font-medium text-muted-foreground">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our range of biodegradable plastic solutions designed for agriculture, packaging, and various
                  industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="agriculture" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
                  <TabsTrigger value="packaging">Packaging</TabsTrigger>
                  <TabsTrigger value="pellets">Biodegradable Pellets</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="agriculture" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Plant Nursery Bags"
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Plant Nursery Bags</CardTitle>
                      <CardDescription className="mt-2">
                        Biodegradable bags for plant nurseries that break down naturally after use, reducing plastic
                        waste.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Inquire <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Mulch Film"
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Biodegradable Mulch Film</CardTitle>
                      <CardDescription className="mt-2">
                        Eco-friendly mulch film for water retention, weed suppression, and soil temperature regulation.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Inquire <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Pest Control Film"
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Pest Control Films</CardTitle>
                      <CardDescription className="mt-2">
                        Specialized biodegradable films for pest and insecticide control that protect crops while being
                        environmentally friendly.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Inquire <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="packaging" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Food Packaging"
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Food Packaging</CardTitle>
                      <CardDescription className="mt-2">
                        Biodegradable food packaging solutions that maintain food safety while reducing environmental
                        impact.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Inquire <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Shopping Bags"
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Shopping Bags</CardTitle>
                      <CardDescription className="mt-2">
                        Eco-friendly shopping bags that provide durability while being fully biodegradable.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Inquire <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Product Wrapping"
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Product Wrapping</CardTitle>
                      <CardDescription className="mt-2">
                        Biodegradable wrapping films for various products that offer protection while being
                        environmentally responsible.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Inquire <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="pellets" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Standard Pellets"
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Standard Pellets</CardTitle>
                      <CardDescription className="mt-2">
                        Biodegradable plastic pellets for general manufacturing purposes, suitable for a wide range of
                        applications.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Inquire <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Specialized Pellets"
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Specialized Pellets</CardTitle>
                      <CardDescription className="mt-2">
                        Custom formulated biodegradable pellets designed for specific industry requirements and
                        applications.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Inquire <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Industrial Pellets"
                        width={400}
                        height={200}
                        className="rounded-lg object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>Industrial Pellets</CardTitle>
                      <CardDescription className="mt-2">
                        High-performance biodegradable pellets for industrial applications requiring durability and
                        reliability.
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/contact">
                          Inquire <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Custom Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Need a specialized biodegradable solution for your specific requirements? We can help.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/contact">
                    Request Custom Solution <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            <p className="text-sm text-muted-foreground">© 2024 Earth-Allies. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link
              href="https://www.linkedin.com/company/earthallies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

