import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';

const LeftNavbar = ({ isMenuOpen, toggleMenu }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const location = useLocation();

  const handleCategoryClick = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categories = [
    {
      name: 'Shop by Category',
      items: ['Fruits & Vegetables', 'Dairy & Breakfast', 'Snacks', 'Beverages']
    },
    {
      name: 'Dietary Preferences',
      items: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Organic']
    }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-40 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} pt-20`}>
      <div className="flex flex-col h-full">
        {/* Navigation Links */}
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`block px-4 py-2 rounded-lg font-montserrat transition-colors ${isActivePath('/') ? 'bg-[#B9EB6F] text-[#064C50] font-bold' : 'text-[#064C50] hover:bg-[#B9EB6F]/10'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="pantry.jsx"
                className={`block px-4 py-2 rounded-lg font-montserrat transition-colors ${isActivePath('/pantry') ? 'bg-[#B9EB6F] text-[#064C50] font-bold' : 'text-[#064C50] hover:bg-[#B9EB6F]/10'}`}
              >
                The Pantry
              </Link>
            </li>
            <li>
              <Link
                to="Mybasket.jsx"
                className={`block px-4 py-2 rounded-lg font-montserrat transition-colors ${isActivePath('/MyBasket') ? 'bg-[#B9EB6F] text-[#064C50] font-bold' : 'text-[#064C50] hover:bg-[#B9EB6F]/10'}`}
              >
                My Basket
              </Link>
            </li>

            {/* Categories */}
            {categories.map((category) => (
              <li key={category.name} className="mt-4">
                <button
                  onClick={() => handleCategoryClick(category.name)}
                  className="w-full px-4 py-2 flex items-center justify-between text-[#064C50] hover:bg-[#B9EB6F]/10 rounded-lg font-montserrat transition-colors"
                >
                  {category.name}
                  {expandedCategories[category.name] ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {expandedCategories[category.name] && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {category.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-[#064C50] hover:bg-[#B9EB6F]/10 rounded-lg font-montserrat text-sm transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Box */}
        <div 
          className="p-4 mx-4 mb-4 bg-[#064C50] rounded-lg text-white transition-transform"
          onMouseEnter={() => setIsCtaHovered(true)}
          onMouseLeave={() => setIsCtaHovered(false)}
          style={{
            transform: isCtaHovered ? 'scale(1.02)' : 'scale(1)',
          }}
        >
          <h3 className="font-montserrat font-bold mb-2">Need Help?</h3>
          <p className="text-sm mb-3 font-montserrat">Contact our support team</p>
          <a 
            href="tel:+1234567890" 
            className="flex items-center gap-2 text-[#B9EB6F] font-montserrat"
          >
            <Phone className="w-4 h-4" />
            <span>+1 234 567 890</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar; 