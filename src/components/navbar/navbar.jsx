import React, { useState, useEffect } from 'react';
import {
  faBars,
  faSearch,
  faShoppingCart,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeftNavbar from './LeftNavbar';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1090);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1090);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Left Sidebar */}
      <LeftNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main Navbar */}
      <div className="mx-4 mt-4 mb-0 z-50">
        <nav className="w-full bg-[#064C50] rounded-xl p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left side */}
            <div className={`flex items-center gap-4 ${isMobile ? '' : 'w-[180px]'}`}>
              <button 
                className="text-white hover:text-[#B9EB6F] transition-colors duration-200"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon 
                  icon={faBars} 
                  className={`${isMobile ? 'text-xl' : 'text-2xl'} transition-transform duration-300`}
                />
              </button>
              {!isMobile && (
                <img 
                  src="/Deligrow.png" 
                  alt="Deligrow" 
                  className="h-8 w-auto object-contain"
                />
              )}
            </div>

            {/* Middle - Search */}
            {!isMobile && (
              <div className="flex-1 max-w-2xl relative -ml-8">
                <input
                  type="text"
                  placeholder="Search for product..."
                  className="w-full py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#B9EB6F]"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#B9EB6F] text-[#064C50] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#a8d863] transition-colors duration-200">
                  <FontAwesomeIcon icon={faSearch} className="text-lg" />
                </button>
              </div>
            )}

            {/* Right side - Icons */}
            <div className={`flex items-center ${isMobile ? 'gap-4' : 'gap-6'}`}>
              <div className="relative">
                <FontAwesomeIcon 
                  icon={faShoppingCart} 
                  className={`text-white hover:text-[#B9EB6F] transition-colors duration-200 ${isMobile ? 'text-xl' : 'text-2xl'}`}
                />
                <span className={`absolute -top-2 -right-2 bg-[#B9EB6F] text-[#064C50] ${isMobile ? 'w-4 h-4 text-xs' : 'w-5 h-5 text-sm'} rounded-full flex items-center justify-center font-bold`}>
                  0
                </span>
              </div>
              <div className="relative">
                <FontAwesomeIcon 
                  icon={faHeart} 
                  className={`text-white hover:text-[#B9EB6F] transition-colors duration-200 ${isMobile ? 'text-xl' : 'text-2xl'}`}
                />
                <span className={`absolute -top-2 -right-2 bg-[#B9EB6F] text-[#064C50] ${isMobile ? 'w-4 h-4 text-xs' : 'w-5 h-5 text-sm'} rounded-full flex items-center justify-center font-bold`}>
                  0
                </span>
              </div>
              <FontAwesomeIcon 
                icon={faUser} 
                className={`text-white hover:text-[#B9EB6F] transition-colors duration-200 ${isMobile ? 'text-xl' : 'text-2xl'}`}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
