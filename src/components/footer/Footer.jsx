
import React from 'react';
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import logo from '../../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-6 py-10 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
        
          <div className="flex-1">
            <img src={logo} alt="Logo" className="h-20 w-20 rounded-full mb-4" />
            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta reprehenderit
              provident inventore vel eligendi minus temporibus harum qui veniam.
            </p>
            <div className="flex gap-4 mt-2">
              <FaFacebook className="text-2xl hover:text-yellow-400 cursor-pointer transition" />
              <FaTwitter className="text-2xl hover:text-yellow-400 cursor-pointer transition" />
              <CiLinkedin className="text-2xl hover:text-yellow-400 cursor-pointer transition" />
            </div>
          </div>

         
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-400 cursor-pointer">Home</li>
              <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-400 cursor-pointer">Delivery</li>
              <li className="hover:text-yellow-400 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="mb-2">📞 +91 7210258631</p>
            <p>✉️ sagarkashyap@gmail.com</p>
          </div>
        </div>
      </div>

    
      <div className="bg-gray-800 text-center py-4 border-t border-gray-700 text-xs md:text-sm">
        © 2024 <span className="font-semibold text-yellow-400">tomato.com</span> — All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
