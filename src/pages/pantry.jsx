import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar.jsx';
import LeftNavbar from '../components/LeftNavbar.jsx';
import Footer from '../components/footer.jsx';

const Pantry = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar toggleMenu={toggleMenu} />
      <div className="flex">
        <LeftNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <main className="flex-1 p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-montserrat font-bold text-[#064C50] mb-6">
            Pantry
          </h1>
          {/* Add your pantry content here */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Pantry;
