import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCheck, FaStar } from "react-icons/fa";
import { fetchRooms } from "@/lib/rooms/data";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


export default async function RoomsDetails(props) {
  const { id } = await props.params;
  

  const rooms = await fetchRooms();
  const room = rooms.find((r) => r._id === id);
  if (!room) {
    return (
      <div className="p-10 text-center text-gray-300">
        <h2 className="text-2xl font-bold">Room not found</h2>
        <Link
          href="/rooms"
          className="mt-4 inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
      <section className="bg-[#1E2937] min-h-screen py-12 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-teal-900 rounded-lg shadow-lg overflow-hidden">
        
        {/* Left side: image */}
   <div className="group relative overflow-hidden">
  <Image
    src={room.image}
    alt={room.name}
    width={600}
    height={400}
    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 rounded-2xl p-1"
  />
</div>


        {/* Right side: info box */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{room.name}</h1>
            <p className="text-gray-200 mt-2">{room.description}</p>

            <div className="mt-4 text-teal-200 font-semibold text-xl">
              {room.price_per_hour === 0 ? "Free" : `$${room.price_per_hour}/hr`}
            </div>
            <p className="text-sm text-gray-300 mt-1">
              Capacity: {room.capacity} people
            </p>
            <p className="text-sm text-gray-300">Location: {room.location}</p>

            {/* Amenities list */}
            <div className="mt-4">
              <h3 className="text-white font-semibold mb-2">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#1E2937] text-white px-2 py-1 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
<div className="mt-6 flex flex-col gap-3">
  
 
  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
    <FaCheck className="text-xl" />
    Book Now
  </button>


  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
    <FaPencil className="text-xl" />
    Edit
  </button>


  <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
    <MdDelete className="text-xl" />
    Delete
  </button>

 
  <Link
    href="/rooms"
    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
  >
    <FaArrowLeft className="text-xl" />
    Back to Rooms
  </Link>

</div>

        </div>
      </div>
    </section>
  );
}
