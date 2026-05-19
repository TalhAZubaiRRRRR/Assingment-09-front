"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { fetchRooms } from "@/lib/rooms/data";
import Link from "next/link";

// const fetchRooms = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
//         cache: "no-store",
//     });
//     const data = await res.json();
//     return data || [];
// };

const RoomsPage = () => {
    const [rooms, setRooms] = useState([]);
    const [filters, setFilters] = useState({
        search: "",
        wifi: false,
        projector: false,
        whiteboard: false,
        ac: false,
        minPrice: 0,
        maxPrice: 500,
        hours: 1,
    });

    useEffect(() => {
        fetchRooms().then((data) => setRooms(data));
    }, []);

   
    const filteredRooms = rooms.filter((room) => {
        if (filters.search && !room.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
        if (filters.wifi && !room.amenities.includes("WiFi")) return false;
        if (filters.projector && !room.amenities.includes("Projector")) return false;
        if (filters.whiteboard && !room.amenities.includes("Whiteboard")) return false;
        if (filters.ac && !room.amenities.includes("AC")) return false;
        if (room.price_per_hour < filters.minPrice || room.price_per_hour > filters.maxPrice) return false;
        return true;
    });

    
    const resetFilters = () => {
        setFilters({
            search: "",
            wifi: false,
            projector: false,
            whiteboard: false,
            ac: false,

            hours: 1,
        });
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 px-6 py-10 bg-[#0F766E]">
            {/* Filters Sidebar */}
            <aside className="w-full md:w-1/4 bg-[#1E2937] p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4 text-teal-700">Refine</h2>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    className="w-full mb-4 px-3 py-2 border rounded focus:outline-none"
                />

                {/* Amenities */}
                <div className="space-y-2">
                    {["wifi", "projector", "whiteboard", "ac"].map((key) => (
                        <label key={key} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={filters[key]}
                                onChange={() => setFilters({ ...filters, [key]: !filters[key] })}
                                className="mr-2"
                            />
                            {key === "wifi" && "Wi-Fi"}
                            {key === "projector" && "Projector"}
                            {key === "whiteboard" && "Whiteboard"}
                            {key === "ac" && "Air Conditioning"}
                        </label>
                    ))}
                </div>

                


               
                <div className="mt-6">
                    <label className="block font-semibold mb-2 text-teal-700">Select Hours</label>
                    <input
                        type="text"
                        inputMode="decimal"

                        placeholder="Enter hours..."
                        value={filters.hours}
                        onChange={(e) => {
                            const val = e.target.value;

                            if (val === "") {
                                setFilters({ ...filters, hours: "" });
                                return;
                            }

                            let num = parseFloat(val);
                            if (isNaN(num)) return;
                            if (num < 0) num = 0;
                            if (num > 7) num = 7;
                            setFilters({ ...filters, hours: num });
                        }}
                        className="w-full px-2 py-1 border rounded"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        You can book between 0 and 7 hours .
                    </p>
                </div>



                {/* Reset Button */}
                <button
                    onClick={resetFilters}
                    className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                    Reset Filters
                </button>
            </aside>

            {/* Rooms Listing */}
{/* Rooms Listing */}
<main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
  {filteredRooms.map((room) => {
    const totalPrice =
      room.price_per_hour === 0
        ? "Free"
        : `$${room.price_per_hour * filters.hours} for ${filters.hours}h`;

    return (
      <div
        key={room._id}
        className="bg-[#1E2937] rounded-lg shadow 
                hover:shadow-lg hover:scale-105 
                transition-all duration-300 ease-in-out 
                overflow-hidden"
      >
        <Image
          src={room.image}
          alt={room.name}
          width={400}
          height={250}
          className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-300">{room.name}</h3>
          <p className="text-sm text-gray-300 mt-1 flex-grow">{room.description}</p>
          <p className="mt-2 text-teal-300 font-semibold">{totalPrice}</p>
          <p className="text-sm text-gray-300">Capacity: {room.capacity} people</p>
          <p className="text-sm text-gray-300">Location: {room.location}</p>

          {/* Rating inline */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  room.rating >= i + 1
                    ? "text-yellow-400"
                    : room.rating >= i + 0.5
                    ? "text-yellow-300"
                    : "text-gray-500"
                }
              />
            ))}
            <span>
              {room.rating} ({room.total_reviews} reviews)
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {room.amenities.map((amenity, i) => (
              <span
                key={i}
                className="text-xs bg-teal-700 px-2 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>

          {/* Button pinned to bottom */}
          <Link href={`/rooms/${room._id}`}>
          <button className=" w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition mt-3">
            View Details
          </button>
          </Link>
        </div>
      </div>
    );
  })}
</main>

        </div>
    );
};

export default RoomsPage;
