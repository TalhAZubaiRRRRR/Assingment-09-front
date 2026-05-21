'use client';

import Image from 'next/image';
import bannerImg from "../../public/banner-png1.png";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] overflow-hidden">
      <Swiper
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        modules={[Pagination,Navigation]}
        slidesPerView={1}
        loop={true}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative w-full h-full">
          <Image
            src={bannerImg}
            alt="StudyRoom banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute z-10 px-4 sm:px-6 w-full max-w-md sm:max-w-2xl md:max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
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
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative w-full h-full">
          {/* You can change the content or image here */}
          <Image
            src={bannerImg}
            alt="StudyRoom banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute z-10 px-4 sm:px-6 w-full max-w-md sm:max-w-2xl md:max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Book Your <span className="text-teal-400">Perfect Room</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-gray-200 text-sm sm:text-lg md:text-xl">
              Flexible options for students and professionals.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative w-full h-full">
          <Image
            src={bannerImg}
            alt="StudyRoom banner"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute z-10 px-4 sm:px-6 w-full max-w-md sm:max-w-2xl md:max-w-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Study Smarter <span className="text-teal-400">With Us</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-gray-200 text-sm sm:text-lg md:text-xl">
              Affordable, quiet, and modern study spaces.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
