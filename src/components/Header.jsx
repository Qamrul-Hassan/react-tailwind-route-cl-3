import React from 'react';
import { FaBolt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="max-w-4xl mx-auto mt-10 p-6 border border-gray-300 rounded-tl-lg">
      <div className="flex items-center space-x-4 mb-6">
        
        
        <div className="bg-orange-100 w-[62px] h-[62px] p-[14px] rounded-tl-md flex items-center justify-center">
          <FaBolt className="text-500 text-2xl" />
        </div>
        
        
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold" style={{ width: "732px", height: "72px" }}>
            <span className="text-orange-500">Unlock</span> Your Creative Potential
          </h1>
          <p className="text-xl text-gray-700 mt-2">
            with Online Design and Development Courses.
          </p>
        </div>
      </div>

      
      <p className="text-gray-500 text-center mt-4">
        Learn from Industry Experts and Enhance Your Skills.
      </p>
    </header>
  );
};

export default Header;