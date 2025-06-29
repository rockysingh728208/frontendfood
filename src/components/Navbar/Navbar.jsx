// Navbar.jsx
import React from "react";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getCartTotalItems } from "../../redux/cartslice";

const Navbar = ({ onSignInClick }) => {
  const totalItems = useSelector(getCartTotalItems);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex flex-wrap justify-between items-center px-4 md:px-10 py-3 gap-y-3">
        
        <div className="h-[50px] w-[50px]">
          <img
            src={logo}
            alt="Logo"
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-black">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/menu" className="hover:text-yellow-500 transition">Menu</Link>
          <Link to="/mobileapp" className="hover:text-yellow-500 transition">Mobile App</Link>
          <Link to="/contactus" className="hover:text-yellow-500 transition">Contact Us</Link>
        </div>

        {/* Right side icons and sign in */}
        <div className="flex items-center gap-4">
          <CiSearch className="text-xl md:text-2xl text-black" />
          <Link to="/cart" className="relative">
            <FaShoppingBag className="text-xl md:text-2xl text-black" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={onSignInClick}
            className="px-4 py-1.5 text-sm md:text-base border-2 border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
