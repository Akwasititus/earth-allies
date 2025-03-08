"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
    loading: false,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        loading: false, 
        submitted: true 
      }));
    }, 1500);
  };

  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-green-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="flex flex-col justify-center space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm"
              variants={fadeIn}
            >
              Contact Us
            </motion.div>
            
            <div className="space-y-4">
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-900"
                variants={fadeIn}
              >
                Get In Touch With Us
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 md:text-xl/relaxed max-w-prose"
                variants={fadeIn}
              >
                Interested in our biodegradable solutions? Contact us today to learn how we can help your
                business become more sustainable and significantly reduce environmental impact.
              </motion.p>
            </div>
            
            <motion.div 
              className="space-y-5 mt-6"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-start space-x-4 group"
                variants={fadeIn}
              >
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900">Email Us</h4>
                  {/* <a href="mailto:contact@earth-allies.com" className="text-gray-600 text-sm hover:text-green-600 transition-colors">
                    contact@earth-allies.com
                  </a> */}
                  <p className="text-gray-600 text-sm">
                  contact@earth-allies.com
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4 group"
                variants={fadeIn}
              >
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900">Call Us</h4>
                  {/* <a href="tel:+233201234567" className="text-gray-600 text-sm hover:text-green-600 transition-colors">
                    +233 20 123 4567
                  </a> */}
                  <p className="text-gray-600 text-sm">
                  +233 20 123 4567
                  </p>
                  
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4 group"
                variants={fadeIn}
              >
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900">Visit Us</h4>
                  <p className="text-gray-600 text-sm">
                    123 Sustainability Avenue, Accra, Ghana
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4 group"
                variants={fadeIn}
              >
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900">Business Hours</h4>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4 mt-6"
              variants={fadeIn}
            >
              {/* Social Media Icons */}
              <a href="#" className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-green-200 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            <div className="relative w-full max-w-md mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-xl">
              {formState.submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full text-green-600 mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you shortly.</p>
                  <Button 
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white" 
                    onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-green-800 mb-6">Send Us a Message</h3>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        id="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                      <input
                        id="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        id="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors" 
                      size="lg"
                      disabled={formState.loading}
                    >
                      {formState.loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;