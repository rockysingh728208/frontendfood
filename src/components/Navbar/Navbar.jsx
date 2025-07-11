import React, { useContext, useState, useEffect } from "react";
import logo from "../../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useSelector } from "react-redux";
import { getCartTotalItems } from "../../redux/cartslice";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ onSignInClick }) => {
  const totalItems = useSelector(getCartTotalItems);
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // ✅ Debug token changes
  // useEffect(() => {
  //   console.log("🔁 Navbar token updated:", token);
  // }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    window.location.reload(); // ✅ Force UI refresh if token doesn't reflect immediately
  };

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex flex-wrap justify-between items-center px-4 md:px-10 py-3 gap-y-3">

        {/* 🔵 Logo */}
        <div className="h-[50px] w-[50px]">
          <img
            src={logo}
            alt="Logo"
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        {/* 🔗 Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-black">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/menu" className="hover:text-yellow-500 transition">Menu</Link>
          <Link to="/mobileapp" className="hover:text-yellow-500 transition">Mobile App</Link>
          <Link to="/contactus" className="hover:text-yellow-500 transition">Contact Us</Link>
        </div>

        {/* 🔍 & 🛒 & 👤 Buttons */}
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

          {/* ✅ Sign In / Profile Logic */}
          {token ? (
            <div className="relative profile-dropdown">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-xl md:text-2xl text-black"
              >
                <FaUser />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100 w-full"
                  >
                    <LuLogOut />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setToken("");
                onSignInClick(); // ✅ open login popup
              }}
              className="px-4 py-1.5 text-sm md:text-base border-2 border-black rounded-full hover:bg-black hover:text-white transition"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
