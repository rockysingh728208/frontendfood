import React from 'react';
import google from "../../assets/google.webp";
import app from "../../assets/app.jpeg";

const AppDownload = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10">
      <p className="text-xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
        For Better Experience Download <br className="hidden md:block" /> Tomato App
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={google}
          alt="Google Play"
          className="h-[60px] md:h-[80px] w-[220px] md:w-[300px] object-contain shadow-md hover:scale-105 transition"
        />
        <img
          src={app}
          alt="App Store"
          className="h-[50px] md:h-[70px] w-[220px] md:w-[300px] object-contain shadow-md hover:scale-105 transition"
        />
      </div>
    </div>
  );
};

export default AppDownload;
