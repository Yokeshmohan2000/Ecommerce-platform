
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <a href="#" className="inline-block mx-2 hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="inline-block mx-2 hover:text-gray-300">Terms of Service</a>
            <a href="#" className="inline-block mx-2 hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
