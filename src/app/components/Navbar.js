import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-slate-200 p-4 flex justify-between items-center">
        <div className="navbar_logo flex items-center space-x-2">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            className="h-6"
            width={200}
            height={100}
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden px-2 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`lg:hidden absolute top-16 left-0 w-full bg-slate-200 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <Link href="#" className="block p-2 text-black font-semibold">
              HOW IT WORKS
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-2 text-orange-500 font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-2 text-black font-semibold">
              WORK
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-2 text-black font-semibold">
              PRICING
            </Link>
          </li>
          <li>
            <Link href="#" className="block p-2 text-black font-semibold">
              BLOG
            </Link>
          </li>
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link href="#" className="font-semibold leading-18 text-black">
              HOW IT WORKS
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold leading-18 text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold leading-18 text-black">
              WORK
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold leading-18 text-black">
              PRICING
            </Link>
          </li>
          <li>
            <Link href="#" className="font-semibold leading-18 text-black">
              BLOG
            </Link>
          </li>
        </ul>

        <button className="hidden lg:block bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
          Get Started 
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
