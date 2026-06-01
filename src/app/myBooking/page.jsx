
import { headers } from 'next/headers';
import Image from 'next/image';
import alterPic from '../../../public/alterPic.png';
import Link from 'next/link';
import { Chip } from '@heroui/react';
import CancelBookingButton from '@/components/CancelBookingButton';
import { auth } from '@/lib/auth';

export default async function MyBookingPage() {

  const { token } = await auth.api.getToken({ headers: await headers() });
  const session = await auth.api.getSession({ headers: await headers() });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/booking/${session?.user?.id}`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

  const booking = await res.json();
  console.log(booking)

  const user = session?.user;
  const profileImage = user?.image || alterPic;

  return (
    <div className="p-4 md:p-8 bg-teal-500 min-h-screen">

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Profile Section - Left Side */}
        <div className="md:col-span-3 lg:col-span-2">
          <div className="p-6 bg-[#1E2937] border rounded-2xl sticky top-20">
            <div className="relative w-24 h-24 mx-auto">

              <Image
                src={profileImage}
                alt={user?.name || "Profile"}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover border-4 border-teal-500"
                priority
              />

              {/* First Letter Fallback */}
              {!user?.image && (
                <div className="absolute inset-0 flex items-center justify-center bg-teal-600 text-white text-4xl font-bold rounded-full border-4 border-teal-400">
                  {user?.name?.[0]?.toUpperCase() || '?'}
                </div>
              )}
            </div>

            <div className="text-center mt-4">
              <h3 className="font-semibold text-lg text-white">{session.user.name}</h3>
              <p className="text-sm text-gray-300">{user.email}</p>
            </div>
          </div>
        </div>


        {/* Bookings Section - Right Side */}
        <div className="md:col-span-9 lg:col-span-10">
          <h2 className="text-3xl font-bold mb-6 text-white">My Bookings</h2>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {booking?.length > 0 ? (
              booking.map((b) => (

                <div
                  key={b._id}
                  className="bg-[#1E2937] shadow-md rounded-xl p-5 border border-[#1E2937] shadow 
                hover:shadow-lg hover:scale-105 
                transition-all duration-300 ease-in-out 
                overflow-hidden"
                >
                  <div key={b._id}
                    className='flex gap-4 border rounded-xl'

                  >
                    <Image
                      src={b.image}
                      alt="romm"
                      width={120}
                      height={90}
                      className='rounded-lg '
                    />

                  </div>

                  <div className='space-y-3'>
                    <h3 className="text-lg font-semibold text-primary mb-2 text-white mt-">
                      {b.roomTitle}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">
                      {new Date(b.bookingAt).toDateString()}
                    </p>


                    <div className='flex justify-between items-center '>
                      <Chip color='success' size='sm' className='bg-gray-200 font-bold'>
                        Active

                      </Chip>
                    </div>
                  </div>


                  <CancelBookingButton id={b._id} />

                </div>

              ))
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[60vh] pt-10">
                <div className="p-12 text-center bg-white border rounded-2xl shadow-lg max-w-md w-full">
                  <p className="text-2xl text-gray-600 mb-6">No booking yet</p>
                  <Link
                    href="/rooms"
                    className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-10 py-3 rounded-lg font-medium transition"
                  >
                    Browse Rooms
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}