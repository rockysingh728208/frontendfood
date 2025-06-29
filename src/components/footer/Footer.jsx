// Footer.jsx
import React from 'react';
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import logo from '../../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
    
      <div className="px-6 py-10 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          
       
          <div>
            <img src={logo} alt="Logo" className="h-20 w-20 rounded-full mb-4" />
            <p className="text-sm md:text-base mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta reprehenderit
              provident inventore vel eligendi minus temporibus harum qui veniam.
            </p>
            <div className="flex gap-4 mt-2">
              <FaFacebook className="text-2xl hover:text-yellow-400 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-yellow-400 cursor-pointer" />
              <CiLinkedin className="text-2xl hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <p className="mb-2 hover:text-yellow-400 cursor-pointer">Home</p>
            <p className="mb-2 hover:text-yellow-400 cursor-pointer">About Us</p>
            <p className="mb-2 hover:text-yellow-400 cursor-pointer">Delivery</p>
            <p className="hover:text-yellow-400 cursor-pointer">Privacy Policy</p>
          </div>

     
       <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="mb-2">+7210258631</p>
            <p>sagarkashyap@gmail.com</p>
          </div>

        </div>
      </div>

      <div className="bg-gray-800 text-center py-4 text-xs md:text-sm">
        © 2024 tomato.com — All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
