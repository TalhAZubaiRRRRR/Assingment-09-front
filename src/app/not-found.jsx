import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        
        {/* 404 Illustration */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-[100px] md:text-[160px] font-bold text-teal-500/10 select-none tracking-tighter">
            404
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white -mt-8 md:-mt-12">
            Oops!
          </h2>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-md mx-auto mb-10">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved to another location.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-2xl transition flex items-center justify-center gap-2 text-base"
          >
            ← Back to Homepage
          </Link>

          <Link
            href="/rooms"
            className="w-full sm:w-auto px-8 py-4 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950 font-medium rounded-2xl transition text-base"
          >
            Browse Study Rooms
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-3">You might want to visit:</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/rooms" className="hover:text-teal-600 transition">Study Rooms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}