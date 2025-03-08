'use client';

import React from 'react';
import Link from 'next/link';
import { Leaf, MapPin, Mail, Phone, Instagram, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const Footerx = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-green-900 to-green-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Newsletter Signup - New Addition */}
        <motion.div
          className="mb-12 p-6 bg-green-800/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">Join Our Sustainability Journey</h3>
            <p className="text-green-200 mb-4">Sign up for our newsletter to receive updates on our latest innovations and environmental initiatives.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md bg-green-700/50 border border-green-700 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <button type="submit" className="px-5 py-2 rounded-md bg-green-500 hover:bg-green-400 transition-colors font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
          >
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-300" />
              <span className="text-xl font-bold text-white">Earth-Allies</span>
            </div>
            <p className="text-green-200 text-sm">
              Biodegradable plastic solutions for a sustainable future. Made in Ghana, impacting the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-all hover:scale-110" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-all hover:scale-110" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/earthallies/" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-all hover:scale-110" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-all hover:scale-110" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
          >
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
          >
            <h3 className="text-lg font-medium text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/agricultural" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Agricultural Films</span>
                </Link>
              </li>
              <li>
                <Link href="/products/packaging" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Packaging Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/products/pellets" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Biodegradable Pellets</span>
                </Link>
              </li>
              <li>
                <Link href="/products/custom" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Custom Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/products/ecofriendly" className="text-green-200 hover:text-white transition-colors flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Eco-Friendly Materials</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="space-y-4"
            variants={fadeIn}
          >
            <h3 className="text-lg font-medium text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span className="text-green-200">123 Sustainability St., Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-300 flex-shrink-0" />
                <a href="mailto:contact@earth-allies.com" className="text-green-200 hover:text-white transition-colors">
                  contact@earth-allies.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-300 flex-shrink-0" />
                <a href="tel:+233201234567" className="text-green-200 hover:text-white transition-colors">
                  +233 20 123 4567
                </a>
              </li>
            </ul>

            {/* Award/Certification Badges - New Addition */}
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="bg-green-800/40 p-2 rounded-md flex items-center gap-2" title="Certified B Corporation">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold">B</div>
                <span className="text-xs text-green-200">Certified</span>
              </div>
              <div className="bg-green-800/40 p-2 rounded-md flex items-center gap-2" title="Climate Neutral">
                <Heart className="h-4 w-4 text-green-300" />
                <span className="text-xs text-green-200">Climate Neutral</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-green-200">© 2024 Earth-Allies. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="text-sm text-green-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-green-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sustainability" className="text-sm text-green-200 hover:text-white transition-colors">
              Sustainability Policy
            </Link>
            <Link href="/sitemap" className="text-sm text-green-200 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footerx;