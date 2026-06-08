"use client";
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Button, FieldError, Input, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { toast } from "react-toastify";

const RoomEditButton = ({ room }) => {
  const {
    _id,
    name,
    description,
    price_per_hour,
    capacity,
    location,
    image,
    amenities: rawAmenities = [],
  } = room;

  // Normalize amenities safely
  const amenities = Array.isArray(rawAmenities) 
    ? rawAmenities 
    : typeof rawAmenities === "string" 
      ? rawAmenities.split(",").map(a => a.trim()).filter(Boolean)
      : [];

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    // Handle amenities properly (comma → array)
    if (updatedData.amenities) {
      updatedData.amenities = updatedData.amenities
        .split(",")
        .map(a => a.trim())
        .filter(Boolean);
    }
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`,updatedData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
        // credentials: "include",
      });

      const data = await res.json();
      console.log(data , "data is commintg..............")

    try {
      


      if (res.ok) {
        setIsOpen(false);
        window.location.reload();
        toast.success("Room updated successfully");
      } else {
        toast.error(data.message || "Failed to update room");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        onPress={() => setIsOpen(true)}
        className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <FaPencilAlt className="text-xl" />
        Edit Room
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl bg-[#1E2937]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-teal-500 font-bold">Edit Room</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default" className="bg-teal-500 text-white rounded-2xl font-semibold">
                <form onSubmit={onSubmit} className="p-8 space-y-6">
                  {/* Room Name */}
                  <TextField defaultValue={name} name="name" isRequired>
                    Room Name
                    <Input placeholder="Deluxe Suite" className="rounded-2xl" />
                    <FieldError />
                  </TextField>

                  {/* Location */}
                  <TextField defaultValue={location} name="location" isRequired>
                    Location
                    <Input placeholder="Downtown, New York" className="rounded-2xl" />
                    <FieldError />
                  </TextField>

                  {/* Price per Hour */}
                  <TextField
                    defaultValue={price_per_hour}
                    name="price_per_hour"
                    type="number"
                    isRequired
                  >
                    Price per Hour (USD)
                    <Input type="number" placeholder="25" className="rounded-2xl" />
                    <FieldError />
                  </TextField>

                  {/* Capacity */}
                  <TextField
                    defaultValue={capacity}
                    name="capacity"
                    type="number"
                    isRequired
                  >
                    Capacity (People)
                    <Input type="number" placeholder="4" className="rounded-2xl" />
                    <FieldError />
                  </TextField>

                  {/* Image URL */}
                  <TextField defaultValue={image} name="image" isRequired>
                    Image URL
                    <Input
                      type="url"
                      placeholder="https://example.com/room.jpg"
                      className="rounded-2xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Amenities - FIXED */}
                  <TextField
                    defaultValue={amenities.join(", ")}
                    name="amenities"
                  >
                    Amenities (comma separated)
                    <Input
                      placeholder="WiFi, AC, TV, Kitchen"
                      className="rounded-2xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Description */}
                  <TextField defaultValue={description} name="description">
                    Description
                    <TextArea
                      placeholder="Describe the room..."
                      className="rounded-3xl min-h-[120px]"
                    />
                    <FieldError />
                  </TextField>

                  <Modal.Footer>
                    <Button
                      type="submit"
                      slot="close"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default RoomEditButton;