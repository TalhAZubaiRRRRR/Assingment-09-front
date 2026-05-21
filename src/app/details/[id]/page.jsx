import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { FaArrowLeft, FaCheck, FaPencil } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { headers } from "next/headers";
import { auth } from "@/lib/rooms/auth";
import { FaArrowLeft, FaCheck, FaPencilAlt } from "react-icons/fa";


const fetchSingleRooms = async (id, token) => {
  if (!id || !token) {
    throw new Error("Missing room ID or token");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch room: ${res.statusText}`);
  }

  return await res.json();
};

export default async function RoomsDetails({ params }) {
  const { id } = await params;   

  
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  console.log("Token from auth:", token);

  let room;
  try {
    room = await fetchSingleRooms(id, token);
  } catch (error) {
    console.error(error);
    return (
      <div className="p-10 text-center text-red-400">
        <h2 className="text-2xl font-bold">Failed to load room</h2>
        <p className="mt-2">{error.message}</p>
        <Link
          href="/rooms"
          className="mt-4 inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500"
        >
          Go Back
        </Link>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="p-10 text-center text-gray-300">
        <h2 className="text-2xl font-bold">Room not found</h2>
        <Link
          href="/rooms"
          className="mt-4 inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#1E2937] min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-teal-900 rounded-lg shadow-lg overflow-hidden">

        {/* Left side: Image */}
        <div className="group relative overflow-hidden">
          <Image
            src={room.image}
            alt={room.name}
            width={600}
            height={400}
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 rounded-2xl p-1"
          />
        </div>

        {/* Right side: Info */}
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

            {/* Amenities */}
            <div className="mt-4">
              <h3 className="text-white font-semibold mb-2">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {room.amenities?.map((amenity, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#1E2937] text-white px-3 py-1 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
              <FaCheck className="text-xl" />
              Book Now
            </button>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
              <FaPencilAlt className="text-xl" />
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