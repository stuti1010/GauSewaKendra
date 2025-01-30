"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";


const carouselImages = [
  "/cow1.jpg",
  "/cow2.jpg",
  "/cow3.jpg",
  "/cow4.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full md:h-screen  bg-cover bg-center"
      style={{
        backgroundImage: "url('/cow.jpg')", 
      }}
    >
      <div className="absolute inset-0 bg-black/25"></div> 

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full w-full container mx-auto px-6 py-10">
        {/* Left Section: Carousel */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-[550px] h-[550px] overflow-hidden rounded-2xl shadow-xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="absolute w-full h-full"
            >
              <img
                src={carouselImages[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl border-4 border-orange-500"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Section: Description */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#FF671F]">
            Welcome to Jaipur Gav Raksha Dal Foundation
          </h1>
          <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
            At Gau Seva Dal Foundation, we are dedicated to protecting and nurturing
            cows, ensuring their welfare, and supporting sustainable agriculture. 
            Our organization works to create awareness about the importance of cows 
            in our culture and ecology. Join us in this mission to make a difference.
          </p>
          <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
            Support our initiatives and help us build a compassionate and caring
            community for our beloved cows.
          </p>
          <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
            Learn More
          </button>
        </div>
      </div>
      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 items-center z-50">
        {/* Scroll-to-top button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition"
          >
            <FaArrowUp size={20} />
          </button>
        )}

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-t from-purple-600 via-pink-600 to-red-600 text-white rounded-full p-3 shadow-lg hover:bg-pink-600 transition"
        >
          <FaInstagram size={20} />
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/9116826992"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>

    </div>
  );
};

export default Hero;
