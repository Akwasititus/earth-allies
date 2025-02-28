"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

const ImageCarousel = () => {
  const images = [
    {
      src: "/images/home-image.JPEG",
      alt: "Earth-Allies Biodegradable Products",
      caption: "Biodegradable solutions for a sustainable future"
    },
    {
      src: "/images/nursery.jpeg", 
      alt: "Eco-friendly packaging materials",
      caption: "Innovative packaging that protects both products and planet"
    },
    {
      src: "/images/woman-allies.jpeg",
      alt: "Agricultural applications",
      caption: "Sustainable farming practices with biodegradable materials"
    },
    {
        src: "/images/evans-in-farm.jpeg",
        alt: "Agricultural applications",
        caption: "Sustainable farming practices with biodegradable materials"
    }, 
    {
        src: "/images/all.jpeg",
        alt: "Agricultural applications",
        caption: "Sustainable farming practices with biodegradable materials"
    },
    {
        src: "/images/evans-explore.jpeg",
        alt: "Agricultural applications",
        caption: "Sustainable farming practices with biodegradable materials"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    // <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full h-0 pb-[75%] sm:pb-[70%] md:pb-[65%] lg:pb-[60%]">

      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={550}
            height={550}
            className="rounded-lg object-cover w-full h-full"
            priority={index === 0}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600/80 to-transparent p-6">
            <div className="text-white font-medium text-sm sm:text-base md:text-lg">{image.caption}</div>
          </div>
        </div>
      ))}
      
        {/* Navigation dots */}
        <div className="absolute bottom-2 md:bottom-3 left-0 right-0 flex justify-center space-x-1 md:space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;