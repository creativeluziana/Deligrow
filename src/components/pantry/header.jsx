import React from 'react';

const Header = () => {
  return (
    <div className="px-4 py-3 font-montserrat">
      <div className="bg-[#064C50] rounded-2xl p-6 sm:p-10 text-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">
          {/* Left side - Text Content */}
          <div className="flex-1 pr-0 md:pr-5 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 leading-tight">
              Your Everyday Luxury,
              <br />
              right at your doorstep.
            </h1>
            <p className="text-base sm:text-lg text-white/100 mb-6 sm:mb-8 leading-relaxed">
              Get fresh vegetables and fruits delivered to your doorstep with the best quality and prices.
            </p>
            <button className="bg-[#B9EB6F] text-[#064C50] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#A8DA5E] hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto">
              Shop Now
            </button>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 flex justify-center items-end relative -mb-6 sm:-mb-10 w-full md:w-auto">
            <img
              src="/home/header.webp"
              alt="Fresh vegetables in a bag"
              className="max-w-full h-auto object-contain w-4/5 md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 