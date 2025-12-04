import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
          Exciting services are on the way!
        </p>
        <p className="text-sm sm:text-base text-gray-500">
          Check back soon to discover comprehensive psychiatric and mental health services tailored for you.
        </p>
      </div>
    </div>
  );
};

export default Services;
