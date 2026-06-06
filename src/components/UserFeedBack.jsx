"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "University Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    feedback: "StudyRoom has completely transformed my group study sessions. The rooms are quiet.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahim Khan",
    role: "Final Year Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    feedback: "Best place for focused study. The booking system is super smooth.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Masters Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    feedback: "The ambiance is perfect for deep work. I love the ergonomic chairs!",
    rating: 5
  },
  {
    id: 4,
    name: "Tanvir Hasan",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    feedback: "Excellent for coding sessions with my team. Fast WiFi and power outlets everywhere.",
    rating: 5
  },
  {
    id: 5,
    name: "Nadia Islam",
    role: "Medical Student",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    feedback: "Very professional environment. Helped me a lot during exam season.",
    rating: 5
  },
  {
    id: 6,
    name: "Arif Khan",
    role: "College Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    feedback: "The location is convenient and the rooms are always clean.",
    rating: 5
  },
  {
    id: 7,
    name: "Meherun Nisa",
    role: "Researcher",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    feedback: "Perfect for long study hours. The whiteboard and projector are game changers.",
    rating: 5
  },
  {
    id: 8,
    name: "Fahim Ahmed",
    role: "MBA Student",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    feedback: "Great for group discussions. Comfortable and professional setup.",
    rating: 5
  }
  
];

const UserFeedBack = () => {
  return (
    <section className="py-16 bg-[#1E2937] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-white">
            Experiences Shared 
          </h2>
          <p className="text-gray-400 text-lg">
            Real feedback from real users
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="testimonial-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#0F172A] rounded-3xl p-8 h-full flex flex-col items-center text-center border border-teal-900 hover:border-teal-500 transition-all duration-300 min-h-[420px]">
                
                
                <div className="mb-6">
                  <Image
                  src={item.image}
                  alt='pople images'
                  height={100}
                  width={100}
                  className='className="w-28 h-28 rounded-full object-cover border-4 border-teal-500 shadow-xl"'
                  
                  />
                </div>

                
                <div className="flex gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>

                
                <p className="text-gray-300 italic mb-8 flex-1 text-[17px] leading-relaxed">
                  {item.feedback}
                </p>

                
                <div className="mt-auto">
                  <h4 className="font-semibold text-xl text-white">{item.name}</h4>
                  <p className="text-teal-400 text-sm mt-1">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UserFeedBack;