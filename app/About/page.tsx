"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {

const hindislogan = "न कामये राज्यम् न स्वर्गं न पुनर्भवम् । कामये दुःखतप्तानां प्राणिनामार्तिनाशनम्॥";

  return (
    <div className="container mx-auto">
        {/*first section */}
    <div className="relative w-full h-[30vh]  flex items-center justify-center overflow-hidden pt-10  border-4 border-dotted border-white">
      {/* Closed Banner Animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full  origin-left z-20"
      ></motion.div>

      {/* Open Banner with Content */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        {/* Background Image with proper covering */}
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center relative "
          style={{
            backgroundImage: "url('/about.svg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            height: "100%", 
            width: "100%", 
            opacity: 1,
          }}
        >
            <h1 className="text-white lg:text-5xl text-3xl sm:px-0 px-8">
                {hindislogan}
            </h1>
        </div>
      </motion.div>
    </div>
{/*second section */}
<div className="py-6  px-10 ">
    <h1 className="text-[#FF671F] font-bold text-center text-3xl  underline">About US</h1> 
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-16 py-8 bg-white">
      {/* Left Side: Image with Animation and Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0"
      >
        <div className="relative group">
          {/* Animated Border Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-0 left-0 w-full h-full border-4 border-orange-500 rounded-2xl z-0 group-hover:scale-110 transform transition-transform duration-300 ease-in-out"
          ></motion.div>

          {/* Image */}
          <img
            src="/about6.jpeg"
            alt="Gau Seva Kendra"
            className="w-full md:w-96 h-auto rounded-2xl object-cover shadow-lg relative z-10"
          />
        </div>
      </motion.div>

      {/* Right Side: Description */}
      <div className="w-full md:w-1/2 text-left md:pl-8">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
          Welcome to Jaipur Gau Raksha Dal Foundation
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
         A dedicated NGO
          committed to providing compassionate care and emergency medical
          support to cows in need. Founded with the mission to protect and
          preserve our sacred animals, we specialize in treating injured,
          abandoned, and accidental cows around the clock.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          At our animal hospital, we operate a 24/7 ICU facility, offering
          on-site treatment and critical care services. Our compassionate team
          works tirelessly to ensure that every cow receives the love, support,
          and medical attention it deserves. Whether it&apos;s roadside rescues,
          emergency interventions, or rehabilitation, we are here to make a
          difference in the lives of these gentle beings.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          Through community-driven initiatives and collaborations, we strive to
          spread awareness about the importance of cow welfare. From feeding
          campaigns to medical camps, every action reflects our core belief:
          <strong> &quot; We&apos;re Here When They Need Us Most.&quot;</strong>
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Join us in our journey to create a safer, healthier world for our
          cows. Together, we can build a future where every cow is treated with
          the dignity and care it deserves.
        </p>
      </div>
    </div>
</div>
{/*third part  */}
<div className="relative w-full bg-[#FF671F] bg-opacity-100 text-white py-10 flex flex-col items-center justify-center overflow-hidden rounded-3xl sm:bg-opacity-0 sm:px-4 md:flex-row md:items-start">
  {/* Background Wave Shape */}
  <div className="absolute inset-0 -z-10 sm:hidden lg:block">
    <svg className="absolute w-full h-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF671F" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,122.7C672,117,768,107,864,128C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z" />
    </svg>
  </div>

  {/* Text Section */}
  <div className="relative z-10 max-w-lg text-center sm:text-left sm:w-[450px] md:w-1/2 sm:px-4">
    <h2 className="text-2xl sm:text-3xl font-semibold md:text-orange-500 text-white underline">We&apos;re Here To Help</h2>
    <p className="mt-4 text-sm sm:text-base pt-10">
      Committed to providing compassionate care and emergency medical support to cows in need. 
      Founded with the mission to protect and preserve our sacred animals, we specialize in treating injured, 
      abandoned, and accidental cows around the clock.
    </p>
    <p className="mt-4 font-bold text-ellipsis">Himanshu Yadav - Founder</p>
  </div>

  {/* Image Section */}
  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-56 md:h-56 sm:py-4 rounded-full overflow-hidden border-4 border-white shadow-lg sm:mt-6 md:mt-0 hover:border-dotted">
    <Image 
      src="/about1.jpeg" 
      alt="Person" 
      layout="fill" 
      objectFit="cover"
    />
  </div>
</div>
{/**fourth part  */}
<div className="bg-white py-20 px-6 md:px-16">
      {/* Section 1: What We Do */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Left Side - Text */}
        <motion.div 
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What We Do</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✅ <strong>Rescue & Shelter</strong> – Providing a safe home for abandoned, injured, and stray cows.</li>
            <li>✅ <strong>Medical Care</strong> – Regular health check-ups, treatments, and vaccinations.</li>
            <li>✅ <strong>Nutritious Feeding</strong> – A balanced diet including green fodder, dry fodder, and minerals.</li>
            <li>✅ <strong>Goshala Management</strong> – Clean shelters, grazing areas, and proper hygiene.</li>
            <li>✅ <strong>Panchagavya Products</strong> – Sustainable products made from cow derivatives.</li>
            <li>✅ <strong>Awareness & Gau Raksha</strong> – Spreading awareness about cow protection.</li>
          </ul>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          className="md:w-1/3 bg-[#FF671F] rounded-2xl"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <img 
            src="/about01.jpeg" 
            alt="Gau Seva" 
            className="rounded-2xl shadow-lg w-[300px] h-[500px]"
          />
        </motion.div>
      </div>

      {/* Section 2: How We Care for Our Cows */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Right Side - Text */}
        <motion.div 
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How We Care for Our Cows</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>🔹 <strong>Number of Cows:</strong> We currently shelter <span className="font-bold">[10-15]</span> cows.</li>
            <li>🔹 <strong>Daily Routine:</strong> Cows are fed twice a day and provided fresh water.</li>
            <li>🔹 <strong>Medical Attention:</strong> Regular vet check-ups and homeopathic treatments.</li>
            <li>🔹 <strong>Natural Healing:</strong> Ayurveda and traditional healing methods.</li>
            <li>🔹 <strong>Comfort & Shelter:</strong> Spacious cow sheds with soft bedding.</li>
          </ul>
        </motion.div>

        {/* Left Side - Image */}
        <motion.div 
          className="md:w-1/3 bg-[#FF671F] rounded-2xl "
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <img 
            src="about02.jpeg" 
            alt="Cow Care" 
            className="rounded-2xl shadow-lg w-[300px] h-[500px] left-10"
          />
        </motion.div>
      </div>
    </div>
{/**fifth section  */}
<div className="mx-auto h-full w-full"
 style={{
       backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url('/banner01.jpg')`,
       backgroundRepeat: 'no-repeat',
        backgroundPosition:"center",
        backgroundSize:"contain",
        width:"100%",
        backgroundAttachment:"fixed",
        padding: '20px',
        margin: '0 auto',
        backgroundColor:"orange",
        opacity:'20',
        inset:'0',
       transition: 'background-image 1s ease-in-out',
      }}>
        <div className="py-6 px-6">
          <h1 className="text-3xl underline-[#FF671F] text-white text-center underline py-2">Our Vission & Mission</h1>
          <p className="text-xl text-white py-3 px-8">--&gt; We envision a world where every cow is treated with love, respect, and dignity. Through our efforts in gau seva, we aim to create a sustainable ecosystem where cows are nurtured, protected, and celebrated as an integral part of our culture and environment.</p>
          <p className="text-white text-xl py-3 px-8">--&gt; At [Jaipur GawSewa Dal Foundation], we believe that cows are not just animals; they are sacred beings that sustain life and prosperity. Our vision extends beyond just providing shelter—we aim to create a self-sustaining ecosystem where cows are protected, revered, and nurtured for the well-being of humanity and nature.</p>
        </div>

</div>

    </div>
  );
};

export default About;
