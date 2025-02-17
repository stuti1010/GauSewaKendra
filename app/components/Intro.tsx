"use client";

import Link from "next/link";
import InteractiveCard from "./Card";
import { motion } from "framer-motion";

const portfolioItems = [
  { title: 'Cow Rescue & Protection', description: 'Rescuing injured, sick, or abandoned cows.24/7 emergency response for cow safety.', image: '/cow1.jpg' },
  { title: 'Gau Seva ', description: 'Providing food, medical treatment, and shelter for rescued cows & Maintaining a Gaushala (cow shelter)', image: '/cow3.jpg' },
  { title: 'Veterinary Care & Treatment', description: 'Regular health checkups  & Emergency medical aid  for injured cows.', image: 'about01.jpeg' },
  { title: 'Community Engagement & Volunteering', description: 'Encouraging people to volunteer in cow care activities and donation drives.', image: '/about03.jpeg' },
];

const Intro = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background14.jpg')" }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url('/footer.jpg')" }}
            ></div>
            <div className="relative z-10 flex justify-center items-center h-full p-8">
              <img
                src="/image.jpg"
                alt="Overlay Image"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-[#FF671F] mb-6">
              Jaipur Gau Raksha Dal Foundation
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Jaipur Gau Raksha Dal Foundation is dedicated to the protection
              and welfare of cows, which hold a sacred place in Indian culture.
              Our mission is to rescue, rehabilitate, and provide a safe haven
              for abandoned, injured, and mistreated cows. Through our efforts,
              we aim to promote awareness about the importance of cow
              conservation and encourage community involvement in our initiatives.
              Join us in making a difference for these gentle creatures.
            </p>

            {/* Interactive Card Positioned Below Paragraph */}
            <InteractiveCard />
          </div>
        </div>
        
      </div>
      {/** Second part */}
      <section id="portfolio" className="py-14 bg-gray-200">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-gray-800"
            >
              See What Our Services <em className="text-orange-500">for Cows</em> &amp; What We <span className="text-orange-500">Provide</span>
            </motion.h2>
          </div>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 * (index + 1) }}
                className="group relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Visible Image (Moves Down on Hover) */}
                <div className="relative overflow-hidden  transition-transform duration-500">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transform transition-all duration-500 "
                  />
                </div>

                {/* Hidden Content (Appears on Hover) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16 group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-white text-center px-6 py-4 rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))} 
          </div>
        </div>
        <div className="flex justify-center pt-6">
        <Link href="/Services">
        <button className="bg-[#FF671F] text-white text-lg text-center rounded-xl px-2 py-2 items-center">Explore More</button>
        </Link>
        </div>
      </section>
    </div>
  );
};

export default Intro;
