import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { fetchFeaturdRooms } from "@/lib/rooms/data";


const TopRatingRooms = async () => {
  const topRooms = await fetchFeaturdRooms();

  return (
    <section className="bg-[#1E2937] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Most Rated Rooms
        </h2>
        <p className="text-center text-gray-300 mb-10">
  Explore the spaces our community loves most, chosen for comfort, amenities, and productivity.
</p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {topRooms.map((room) => (
            <div
              key={room._id}
              className="bg-[#0F766E] rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={room.image}
                alt={room.name}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-bold text-white">{room.name}</h3>
                <p className="text-sm text-gray-200 mt-2">
                  {room.description}
                </p>
                <p className="mt-2 text-teal-200 font-semibold">
                  {room.price_per_hour === 0
                    ? "Free"
                    : `$${room.price_per_hour}/hr`}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-200 mt-2">
                  <FaStar className="text-yellow-400" />
                  <span>
                    {room.rating} ({room.total_reviews} reviews)
                  </span>
                </div>

                <Link
                  href={`/details/${room._id}`}
                  className="mt-3 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-400 transition text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right mt-12">
          <Link
            href="/rooms"
            className="inline-flex px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition"
          >
            See All Rooms <FaArrowRight className="ml-2 h-5 w-5 mt-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRatingRooms;
