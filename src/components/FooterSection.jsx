import React from 'react';
import { FaClock, FaPhone } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const FooterSection = () => {
    return (
        <div>
             <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
       
        <div>
          <h2 className="text-2xl font-bold text-white">
            Study<span className="text-teal-400">Room</span>
          </h2>
          <p className="mt-3 text-sm">
            Your trusted place for learning and collaboration.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-teal-400">Home</li>
            <li className="hover:text-teal-400">Rooms</li>
            <li className="hover:text-teal-400">Locations</li>
            <li className="hover:text-teal-400">Blog</li>
            <li className="hover:text-teal-400">Contact </li>
            <li></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className='flex'><FaPhone className='mr-2 mt-0.5' /> <a href="tel:+8801234567890" className="hover:text-teal-400">+880 1234-567890</a></p>
          <p className='flex'><MdEmail className='mr-2 mt-0.5'/> <a href="mailto:info@studyroom.com" className="hover:text-teal-400">info@studyroom.com</a></p>
          <p className='flex'><FaClock className='mr-2 mt-1'/> Sat - Thu: 8:00 AM - 10:00 PM</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} StudyRoom. All rights reserved.
      </div>
    </footer>
        </div>
    );
};

export default FooterSection;