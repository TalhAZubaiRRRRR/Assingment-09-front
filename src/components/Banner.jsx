import Image from 'next/image';
import bannerImg from "../../public/banner-png1.png";
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';


const Banner = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] flex items-center justify-center text-center">
     
      <Image
        src={bannerImg}
        alt="StudyRoom banner"
        fill
        priority
        className="object-cover object-center w-full h-full"
      />

    
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="absolute z-10 px-4 sm:px-6 w-full max-w-md sm:max-w-2xl md:max-w-3xl">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Elevate Your <span className="text-teal-400">Studying Experience</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-200 text-sm sm:text-lg md:text-xl">
          Find and book the perfect study room for quiet, productive learning.
        </p>

    
        <Link
          href="/rooms"
          className="mt-6 sm:mt-8 inline-flex items-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow hover:bg-teal-600 transition"
        >
          Find study Rooms <FaArrowRight className="ml-2 h-5 w-5"/>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
