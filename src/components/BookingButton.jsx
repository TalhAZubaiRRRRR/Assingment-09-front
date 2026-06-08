'use client'

import { authClient, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { FaCheck } from "react-icons/fa"
import { toast } from "react-toastify"

export default function BookingButton({ room, bookings }) {
  const { data: session } = useSession()
  const router = useRouter()

  const handleBooking = async () => {
    // ✅ Check if this room is already booked by the current user
    const alreadyBooked = bookings?.some(
      (b) => b.roomId === room?._id && b.userId === session?.user?.id
    )

    if (alreadyBooked) {
      toast.warning("You are already booked this room")
      return
    }

    const { data: jwData } = await authClient.token()
    const token = jwData?.token
    if (!token) {
      toast.error("authintication failed . Room not added")
      return
    }

    const updatedData = {
      userId: session?.user?.id,
      studentName: session?.user?.name,
      studentEmail: session?.user?.email,
      roomTitle: room?.name,
      image: room?.image,
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${room?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    })

    const data = await res.json()
    if (!data) {
      toast.error("Something went wrong")
      return
    }

    router.push("/myBooking")
    router.refresh()
  }

  return (
    <button
      onClick={handleBooking}
      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full flex items-center justify-center gap-3 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
    >
      <FaCheck className="text-xl" />
      Book Now
    </button>
  )
}
