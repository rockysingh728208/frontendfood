import React from 'react';
import AppDownload from '../components/AppDownload/AppDownload';

const Mobileapp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Experience the Best on Your Mobile
      </h1>
      <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-10 max-w-xl">
        Download our Tomato app and enjoy smooth ordering, exclusive deals, faster delivery tracking and much more — all in your pocket.
      </p>
      <AppDownload />
    </div>
  );
};

export default Mobileapp;
