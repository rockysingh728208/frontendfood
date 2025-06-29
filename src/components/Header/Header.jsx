import React from 'react';
import foodimage from '../../assets/foodimage.jpg';

const Header = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <img
        src={foodimage}
        alt="Food"
        className="absolute top-0 left-0 w-full h-full  object-cover"
      />

      
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-start px-6 md:px-20 gap-6 bg-black/30">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Order your <br /> favourite food here
        </h2>

        <p className="text-white text-sm md:text-lg max-w-xl">
          Choose from a delivery menu featuring a delectable array of dishes crafted
          with the finest ingredients and culinary skill. Satisfy your craving and
          elevate your dining experience, one delicious meal at a time.
        </p>

        <button className="px-5 py-2 rounded-2xl bg-blue-600 text-white text-sm md:text-base">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
