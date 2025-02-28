"use client";

import { useState } from 'react';
import NextLink from 'next/link';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <NextLink href="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="inline-block font-bold">Earth-Allies</span>
        </NextLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <NextLink href="/" className="text-sm font-medium hover:text-green-600">Home</NextLink>
          <NextLink href="/about" className="text-sm font-medium text-gray-600 hover:text-green-600">About</NextLink>
          <NextLink href="/products" className="text-sm font-medium text-gray-600 hover:text-green-600">Products</NextLink>
          <NextLink href="/contact" className="text-sm font-medium text-gray-600 hover:text-green-600">Contact</NextLink>
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
            <NextLink href="/contact">Get in Touch</NextLink>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-green-600" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 bg-white">
            <NextLink 
              href="/" 
              className="py-2 text-sm font-medium hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NextLink>
            <NextLink 
              href="/about" 
              className="py-2 text-sm font-medium text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NextLink>
            <NextLink 
              href="/products" 
              className="py-2 text-sm font-medium text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NextLink>
            <NextLink 
              href="/contact" 
              className="py-2 text-sm font-medium text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NextLink>
            <div className="pt-4 pb-2">
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full" asChild>
                <NextLink href="/contact" onClick={() => setIsMenuOpen(false)}>Get in Touch</NextLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}