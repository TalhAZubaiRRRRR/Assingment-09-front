"use client";

import { addRooms } from "@/lib/rooms/action";
import {
  Button,
  Input,
  TextArea,
  Select,
  SelectTrigger,
  SelectValue,
  SelectIndicator,
  SelectPopover,
  ListBox,
  ListBoxItem,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { CiBoxList } from "react-icons/ci";
import { FaDollarSign, FaImage, FaRegClock } from "react-icons/fa";
import { LuBookPlus } from "react-icons/lu";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CATEGORIES = ["Silent", "Group", "Presentation"];
const AMENITIES = ["WiFi", "Whiteboard", "Power Outlets", "Round Table", "Projector", "AC", "Natural Light"];

const AddRoomsPage = () => {
  const router = useRouter();
  const [pricePerHour, setPricePerHour] = useState(0);
  const [hours, setHours] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleAddRoom = async (formData) => {
    formData.append("amenities", selectedAmenities.join(", "));
    
    const data = await addRooms(formData);
    if (data?.insertedId) {
      toast.success("Room created successfully!");
      router.push("/rooms");
    }
  };

  const totalPrice =
    pricePerHour === 0 ? "Free" : `$${pricePerHour * hours} for ${hours}h`;

  return (
    <div className="px-4 py-16 bg-[#1E2937]">
      <div className="max-w-4xl mx-auto bg-[#0F766E] p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-10">
        <div className="space-y-2 text-center">
          <div className="mx-auto w-16 h-16 bg-[#13b8aa] border rounded-2xl flex items-center justify-center mb-4">
            <LuBookPlus className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-black text-white">
            Create New{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dcdee1] to-[#13b8aa]">
              Room
            </span>
          </h1>
          <p className="text-slate-300 font-medium">Add a study or meeting space</p>
        </div>

        <form action={handleAddRoom} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Room Name */}
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="title" className="text-sm font-bold text-slate-200 ml-1">
                Room Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="e.g. Silent Haven A-101"
                className="w-full h-14 border-2 border-slate-200 hover:border-[#1E2937]"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="description" className="text-sm font-bold text-slate-200 ml-1">
                Description
              </label>
              <TextArea
                id="description"
                name="description"
                required
                placeholder="Describe the room purpose and features"
                className="w-full h-32 border-2 border-slate-200 hover:border-[#1E2937]"
              />
            </div>

            {/* Thumbnail */}
            <div className="space-y-2">
              <label htmlFor="thumbnail" className="text-sm font-bold text-slate-200 ml-1">
                Thumbnail URL (optional)
              </label>
              <div className="flex items-center border-2 border-slate-200 rounded-2xl hover:border-[#1E2937] transition-all duration-300 bg-white">
                <FaImage className="ml-3 text-slate-400" />
                <Input
                  id="thumbnail"
                  name="image"
                  type="url"
                  placeholder="https://i.ibb.co.com/..."
                  className="flex-1 h-14 border-none focus:ring-0 bg-transparent"
                />
              </div>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-100 ml-1">Category</label>
              <Select id="category" name="category" required placeholder="Select a category" className="w-full">
                <SelectTrigger className="h-14 border-2 border-slate-200 hover:border-[#1E2937] data-[focus-within=true]:border-[#13b8aa] rounded-2xl bg-white transition-all duration-300 flex items-center px-4 shadow-none outline-none group">
                  <div className="flex items-center gap-3 w-full">
                    <CiBoxList className="w-5 h-5 text-slate-400 group-data-[focus-within=true]:text-[#13b8aa] transition-colors" />
                    <SelectValue className="font-medium text-slate-600" />
                  </div>
                  <SelectIndicator className="ml-auto">
                    <div className="text-slate-400 group-data-[focus-within=true]:text-[#13b8aa] transition-colors">
                      <CiBoxList className="w-4 h-4" />
                    </div>
                  </SelectIndicator>
                </SelectTrigger>
                <SelectPopover className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-2 mt-2">
                  <ListBox>
                    {CATEGORIES.map((cat) => (
                      <ListBoxItem
                        key={cat}
                        id={cat}
                        className="px-4 py-2 text-slate-600 hover:bg-green-50 hover:text-[#13b8aa] rounded-xl cursor-pointer transition-colors font-medium"
                      >
                        {cat}
                      </ListBoxItem>
                    ))}
                  </ListBox>
                </SelectPopover>
              </Select>
            </div>

            {/* Capacity */}
            <div className="space-y-2">
              <label htmlFor="capacity" className="text-sm font-bold text-slate-100 ml-1">
                Capacity
              </label>
              <Input
                id="capacity"
                name="capacity"
                required
                type="number"
                placeholder="e.g. 4"
                className="w-full h-14 border-2 border-slate-200 hover:border-green-600/50 focus-within:border-green-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-bold text-slate-100 ml-1">
                Location
              </label>
              <Input
                id="location"
                name="location"
                required
                placeholder="e.g. Academic Block A, 2nd Floor"
                className="w-full h-14 border-2 border-slate-200 hover:border-green-600/50 focus-within:border-green-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
              />
            </div>

            {/* Price per Hour */}
            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-bold text-slate-100 ml-1">
                Price per Hour ($)
              </label>
              <div className="flex items-center border-2 border-slate-200 hover:border-green-600/50 focus-within:border-green-600 rounded-2xl bg-white transition-all duration-300 shadow-none">
                <FaDollarSign className="ml-3 text-slate-400" />
                <Input
                  id="price"
                  name="price_per_hour"
                  type="number"
                  placeholder="0.00"
                  value={pricePerHour}
                  onChange={(e) => setPricePerHour(Number(e.target.value))}
                  className="flex-1 h-14 border-none focus:ring-0 bg-transparent"
                />
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-2">
              <label htmlFor="hours" className="text-sm font-bold text-slate-100 ml-1">
                Hours
              </label>
              <Input
                id="hours"
                name="hours"
                type="number"
                min="1"
                max="7"
                value={hours}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value > 7) {
                    toast.error("We don’t serve 8 hours!");
                    return;
                  }
                  setHours(value || 1);
                }}
                placeholder="e.g. 2"
                className="w-full h-14 border-2 border-slate-200 hover:border-green-600/50 focus-within:border-green-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
              />
              <p className="text-sm text-gray-300 mt-1">You can book between 1 and 7 hours.</p>
              <p className="text-sm text-teal-200 mt-1 font-medium">Total Price: {totalPrice}</p>
            </div>

            {/* Amenities - Separate Teal Pills Style */}
            <div className="md:col-span-2 space-y-3">
              <label className="text-sm font-bold text-slate-100 ml-1">Amenities</label>
              <div className="flex flex-wrap gap-3">
                {AMENITIES.map((amenity) => (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => toggleAmenity(amenity)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                      selectedAmenities.includes(amenity)
                        ? "bg-teal-500 text-white border-teal-500"
                        : "bg-[#1E2937] text-slate-300 border-slate-600 hover:border-teal-500"
                    }`}
                  >
                    {amenity}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-900 mt-1 bg-white rounded-2xl p-4 font-bold">
                Selected: {selectedAmenities.length > 0 ? selectedAmenities.join(" ") : "None"}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-4 flex gap-4">
            <Button
              variant="flat"
              size="lg"
              className="flex-1 font-bold rounded-2xl h-14 text-red-300 hover:bg-red-500"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              type="submit"
              size="lg"
              className="flex-1 font-black rounded-2xl h-14 bg-[#13b8aa]"
            >
              Publish Room
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoomsPage;