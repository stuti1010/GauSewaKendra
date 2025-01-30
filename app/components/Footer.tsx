'use client';

import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TbArrowBadgeRightFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <div className='container mx-auto mt-28'>
    <motion.footer 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="relative w-full bg-cover bg-center text-white py-12 px-6"
      style={{ backgroundImage: "url('/footer1.jpg')" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:flex md:justify-between">
        {/* Left Section - Gav Raksha Kendra */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start">
          <Image src="/logo1.png" alt="Gav Raksha Kendra Logo" width={150} height={150} className="mb-4" />
          <h2 className="text-xl font-semibold">Jaipur Gau Raksha <br/>Dal Foundation</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white text-2xl hover:text-orange-500"><FaInstagram /></a>
            <a href="#" className="text-white text-2xl hover:text-orange-500"><FaWhatsapp /></a>
            <a href="#" className="text-white text-2xl hover:text-orange-500"><FaGoogle /></a>
          </div>
        </motion.div>

        {/* Middle Section - Quick Links */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-500 transition duration-300 font-bold flex">
              <div className='mt-1.5'><TbArrowBadgeRightFilled /></div>
              Home
            </Link></li>
            <li><Link href="/About" className="hover:text-orange-500 transition duration-300 font-bold flex">
            <div className='mt-1.5'><TbArrowBadgeRightFilled /></div>
            About Us
            </Link></li>
            <li><Link href="/Services" className="hover:text-orange-500 transition duration-300 font-bold flex">
            <div className='mt-1.5'><TbArrowBadgeRightFilled /></div>
            Services
            </Link></li>
            <li><Link href="/Contact" className="hover:text-orange-500 transition duration-300 font-bold flex">
            <div className='mt-1.5'><TbArrowBadgeRightFilled /></div>
            Contact
            </Link></li>
          </ul>
        </motion.div>

        {/* Support Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/FAQs" className="hover:text-orange-500 transition duration-300 font-bold flex">
            <div className='mt-1.5'><TbArrowBadgeRightFilled /></div>
            FAQs
            </Link></li>
            <li><Link href="/Terms&Condition" className="hover:text-orange-500 transition duration-300 font-bold flex">
            <div className='mt-1.5'><TbArrowBadgeRightFilled /></div>
            Terms & Conditions
            </Link></li>
            <li><Link href="/Help" className="hover:text-orange-500 transition duration-300 font-bold flex">
            <div className='mt-1.5'><TbArrowBadgeRightFilled /></div>
            Help
            </Link></li>
            <li><Link href="/Privacy" className="hover:text-orange-500 transition duration-300 font-bold flex">
            <div className='mt-1.5'><TbArrowBadgeRightFilled /></div>
            Privacy Policy
            </Link></li>
            <li><Link href="/Refund" className="hover:text-orange-500 transition duration-300 font-bold flex">
            <div className='mt-1.5'><TbArrowBadgeRightFilled /></div>
            Refund Policy
            </Link></li>
          </ul>
        </motion.div>

        {/* Right Section - Bank Details */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-center md:text-right">
          <h3 className="text-lg font-bold text-center">Bank Details</h3>
          <p className="mt-3 font-semibold">Name: Jaipurgau Raksha Dal Foundation</p>
          <p  className='font-semibold ml-4'>Account Number: 103788700000315</p>
          <p className='font-semibold '>IFSC Code: YESB0001037</p>
          <motion.div className="mt-4 flex justify-center md:justify-end" whileHover={{ scale: 1.1 }}>
            <Image src="/QRcode.jpeg" alt="QR Code" className='pr-6' width={130} height={130} />
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
    </div>
  );
}
