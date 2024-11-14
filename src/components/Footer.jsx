import React from 'react';
import Logo from '../assets/logo.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-8 md:px-32">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
        
        
        <div className="space-y-4">
          <div>
            <img src={Logo} alt="" className="w-10 h-10" />
          </div>
          <p className="text-gray-600">hello@skillbridge.com</p>
          <p className="text-gray-600">+91 91813 23 2309</p>
          <p className="text-gray-600">Somewhere in the World</p>
        </div>
        
      
        <div className="flex space-x-16">
          <div className="space-y-1">
            <h3 className="font-bold">Home</h3>
            <p className="text-gray-500">Benefits</p>
            <p className="text-gray-500">Our Courses</p>
            <p className="text-gray-500">Our Testimonials</p>
            <p className="text-gray-500">Our FAQ</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold">About Us</h3>
            <p className="text-gray-500">Company</p>
            <p className="text-gray-500">Achievements</p>
            <p className="text-gray-500">Our Goals</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold">Social Profiles</h3>
            <div className="flex space-x-4">
              <FaFacebookF className="text-gray-500 hover:text-gray-900" />
              <FaTwitter className="text-gray-500 hover:text-gray-900" />
              <FaLinkedinIn className="text-gray-500 hover:text-gray-900" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-8 text-center text-gray-500 border-t border-gray-300 pt-4">
        © 2023 Skillbridge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;