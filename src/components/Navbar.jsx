'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaClock, FaHeart, 
  FaShoppingCart, FaBars, FaTimes 
} from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>

<div className="bg-[#0F766E] text-white py-3 text-sm">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-center items-center gap-5 md:gap-6 flex-wrap">
      
      <a href="tel:+8801234567890" className="flex items-center gap-2 hover:text-teal-200 transition">
        <FaPhone /> +880 1234-567890
      </a>
      
      <span className="hidden md:inline text-white/40">|</span>
      
      <a href="mailto:info@studyroom.com" className="flex items-center gap-2 hover:text-teal-200 transition">
        <FaEnvelope /> info@studyroom.com
      </a>
      
      <span className="hidden md:inline text-white/40">|</span>
      
      <div className="flex items-center gap-2">
        <FaClock /> Sat - Thu: 8:00 AM - 10:00 PM
      </div>
    </div>
  </div>
</div>

      
      <nav className="bg-[#1E2937] sticky top-0 z-50 shadow-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-teal-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                <Image src="/download.png" width={80} height={80} alt="logo"  />


              </div>
              <div className="text-3xl font-bold tracking-tight text-white">
                Study<span className="text-teal-400">Room</span>
              </div>
            </Link>

            
            <div className="hidden md:flex items-center gap-8 text-white font-medium">
              <Link href="/" className="hover:text-teal-400 transition">Home</Link>
              <Link href="/rooms" className="hover:text-teal-400 transition">Rooms</Link>
              <Link href="/addRooms" className="hover:text-teal-400 transition">Add Rooms</Link>
              <Link href="/blog" className="hover:text-teal-400 transition">Blog</Link>
              <Link href="/contact" className="hover:text-teal-400 transition">Contact</Link>
            </div>

            
            <div className="flex items-center gap-5">
             

              

              <div className="flex items-center gap-3">
                <Link href="/register" className="hidden sm:block px-6 py-2.5 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 rounded-xl font-medium transition">
                  Register
                </Link>
                <Link href="/login" className="px-6 py-2.5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition">
                  Login
                </Link>
              </div>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="md:hidden text-white text-3xl"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
    {isMobileMenuOpen && (
  <div className="md:hidden bg-[#1E2937] border-t border-slate-700 py-6 px-6 space-y-6 text-white text-lg">
    <Link 
      href="/" 
      className="block hover:text-teal-400"
      onClick={() => setIsMobileMenuOpen(false)} 
    >
      Home
    </Link>
    <Link 
      href="/rooms" 
      className="block hover:text-teal-400"
      onClick={() => setIsMobileMenuOpen(false)} 
    >
      Rooms
    </Link>
    <Link 
      href="/addRooms" 
      className="block hover:text-teal-400"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Add Rooms
    </Link>
    <Link 
      href="/blog" 
      className="block hover:text-teal-400"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Blog
    </Link>
    <Link 
      href="/contact" 
      className="block hover:text-teal-400"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Contact
    </Link>
  </div>
)}
      </nav>
    </>
  );
}