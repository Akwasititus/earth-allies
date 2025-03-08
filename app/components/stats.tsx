"use client";

import React, { useState, useEffect, useRef } from 'react';

const AnimatedImpactSection = () => {
  // Stats to display with their final values
  const stats = [
    { value: 5000, label: "Tons of Plastic Waste Reduced", prefix: "", suffix: "+" },
    { value: 200, label: "Partner Businesses", prefix: "", suffix: "+" },
    { value: 30, label: "Community Projects", prefix: "", suffix: "+" },
    { value: 3, label: "Innovation Awards", prefix: "", suffix: "" }
  ];
  
  // State to store current count values during animation
  const [counts, setCounts] = useState(stats.map(() => 0));
  
  // Reference to the section element for intersection observer
  const sectionRef = useRef(null);
  
  // Animation effect that runs when the section comes into view
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Function to handle the counting animation
    const animateCounts = () => {
      const duration = 2000; // Duration in milliseconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      
      let frame = 0;
      const countIncrements = stats.map(stat => stat.value / totalFrames);
      
      const timer = setInterval(() => {
        frame++;
        
        setCounts(prevCounts => 
          prevCounts.map((count, index) => {
            // Calculate new value but don't exceed target
            const newValue = Math.min(
              Math.round(countIncrements[index] * frame),
              stats[index].value
            );
            return newValue;
          })
        );
        
        if (frame === totalFrames) {
          clearInterval(timer);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    };
    
    // Set up intersection observer to trigger animation when element is visible
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animateCounts();
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 lg:py-32 bg-white">
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
          {stats.map((stat, index) => (
            <div key={index} className="bg-green-50 p-8 rounded-xl text-center hover:shadow-md transition-all transform hover:-translate-y-1">
              <p className="text-4xl font-bold text-green-600 mb-2">
                {stat.prefix}{counts[index].toLocaleString()}{stat.suffix}
              </p>
              <p className="text-green-800 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedImpactSection;