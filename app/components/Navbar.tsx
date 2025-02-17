"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";

const Navbar = () => {
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="relative z-[1050]">
      <section className="header bg-[#FF671F] w-full h-[100px] py-4 flex justify-between items-center shadow-lg relative z-[1050]">
        {/* Logo Section */}
        <div className="px-8 flex items-center">
          <img src="/logo1.png" alt="Logo" className="w-24 h-24 pb-2 pt-1" />
          <h1 className="text-white font-bold lg:text-xl text-lg pl-2">
            Jaipur Gau<br />Raksha<br />Dal Foundation
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-white p-3 hover:bg-white rounded-full h-14 w-14 hover:text-black font-bold"
          >
            {showMobileMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`flex items-center ${showMobileMenu ? 'flex-col absolute bg-[#FF671F] w-full top-[100px] left-0 z-[1050] lg:flex lg:static lg:flex-row' : 'hidden lg:flex'}`}>
          <Link href="/" className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold">Home</Link>
          <Link href="/About" className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold">About_US</Link>
          <Link href="/Services" className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold">Services</Link>

          {/* Gallery Dropdown */}
          <div className="relative group" onMouseEnter={() => setShowGalleryDropdown(true)} onMouseLeave={() => setShowGalleryDropdown(false)}>
            <Link href="#" className="text-white px-8 py-4 sm:py-9 hover:bg-white rounded-full hover:py-4 hover:text-black font-bold flex items-center">
              Gallery <RiArrowDropDownFill className="ml-1" />
            </Link>
            {showGalleryDropdown && (
              <ul className="absolute top-full bg-white shadow-md rounded-lg text-black text-left z-[1050] w-[160px]">
                <li className="hover:bg-gray-200 px-4 py-2"><Link href="/Images">Images</Link></li>
                <li className="hover:bg-gray-200 px-4 py-2"><Link href="/Video">Videos</Link></li>
              </ul>
            )}
          </div>
          
          {/* Pages Dropdown */}
          <div className="relative group" onMouseEnter={() => setShowPagesDropdown(true)} onMouseLeave={() => setShowPagesDropdown(false)}>
            <Link href="#" className="text-white px-8 py-4 sm:py-9 hover:bg-white rounded-full hover:py-4 hover:text-black font-bold flex items-center">
              Pages <RiArrowDropDownFill className="ml-1" />
            </Link>
            {showPagesDropdown && (
              <ul className="absolute top-full bg-white shadow-md rounded-lg text-black text-left z-[1050] w-[170px] ">
                <li className="hover:bg-gray-200 px-4 py-2"><Link href="/FAQs">FAQs</Link></li>
                <li className="hover:bg-gray-200 px-4 py-2"><Link href="/Team">Team</Link></li>
                <li className="hover:bg-gray-200 px-4 py-2"><Link href="/Testimonials">Testimonials</Link></li>
              </ul>
            )}
          </div>

          <Link href="/Contact" className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold">Contact US</Link>
          <Link href="/Donation" className='px-8 py-4 rounded-full ' >
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-4 border-gray-100 bg-white hover:bg-[#FF671F]  px-8 font-medium text-[#FF671F] hover:text-white transition-all ">
        Donation
      </button>
</Link>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
