"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State for mobile menu

  return (
    <div className="container mx-auto z-[1000]">
      <section className="header bg-[#FF671F] w-full h-[100px] py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="px-8 flex items-center">
          <img src="/logo1.png" alt="Logo" className="w-24 h-24 pb-2 pt-1" />
          <h1 className="text-white font-bold lg:text-xl text-lg pl-2">
            Jaipur Gau
            <br />
            Raksha
            <br />
            Dal Foundation
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)} // Toggle mobile menu visibility
            className="text-white p-2  hover:bg-white rounded-full hover:text-black font-bold"
          >
            {showMobileMenu ? (
              // Cross (X) Icon when menu is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon when menu is closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`flex items-center ${showMobileMenu ? 'flex-col absolute bg-[#FF671F] w-full top-[100px] left-0 z-[1000] lg:flex lg:static lg:flex-row' : 'hidden lg:flex'}`}>
          <Link
            href="/"
            className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold"
          >
            About_US
          </Link>
          <Link
            href="/Services"
            className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold"
          >
            Services
          </Link>

          {/* Gallery Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowGalleryDropdown(true)}
            onMouseLeave={() => setShowGalleryDropdown(false)}
          >
            <Link
              href="#"
              className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold"
            >
              Gallery
            </Link>
            {showGalleryDropdown && (
              <ul className="absolute top-[100%] bg-white shadow-md rounded-lg text-black text-left z-10 w-[150px]">
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/Images">Images</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/Videos">Videos</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Pages Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowPagesDropdown(true)}
            onMouseLeave={() => setShowPagesDropdown(false)}
          >
            <Link
              href="#"
              className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold"
            >
              Pages
            </Link>
            {showPagesDropdown && (
              <ul className="absolute top-[100%] bg-white shadow-md rounded-lg text-black text-left z-10 w-[150px]">
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/FAQs">FAQs</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/Team">Team</Link>
                </li>
                <li className="hover:bg-gray-200 px-4 py-2">
                  <Link href="/Testimonials">Testimonials</Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            href="/Contact"
            className="text-white px-8 py-4 hover:bg-white rounded-full hover:text-black font-bold"
          >
            Contact US
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
 