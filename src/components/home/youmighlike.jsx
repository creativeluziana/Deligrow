import React, { useState, useEffect } from 'react';
import ItemCard from '../itemcard';
import { ChevronRight } from 'lucide-react';

const YouMightLike = () => {
  const [displayCount, setDisplayCount] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setDisplayCount(3);
      } else if (width < 700) {
        setDisplayCount(3);
      } else if (width < 1000) {
        setDisplayCount(4);
      } else {
        setDisplayCount(5);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gourmetItems = [
    {
      title: "Extra Virgin Olive Oil",
      packSize: "500ml bottle",
      price: "650.00",
      image: "/products/olive-oil.png"
    },
    {
      title: "Raw Forest Honey",
      packSize: "350g jar",
      price: "450.00",
      image: "/products/honey.png"
    },
    {
      title: "Organic Quinoa",
      packSize: "500g pack",
      price: "299.00",
      image: "/products/quinoa.png"
    },
    {
      title: "Mixed Nuts & Seeds",
      packSize: "400g pack",
      price: "599.00",
      image: "/products/nuts.png"
    },
    {
      title: "Green Tea Matcha",
      packSize: "100g tin",
      price: "599.00",
      image: "/products/matcha.png"
    }
  ];

  const dailyEssentials = [
    {
      title: "Free Range Eggs",
      packSize: "Pack of 6",
      price: "89.00",
      image: "/products/eggs.png"
    },
    {
      title: "Organic Baby Spinach",
      packSize: "200g pack",
      price: "79.00",
      image: "/products/spinach.png"
    },
    {
      title: "Greek Yogurt",
      packSize: "400g tub",
      price: "120.00",
      image: "/products/yogurt.png"
    },
    {
      title: "Almond Milk",
      packSize: "1 Liter",
      price: "189.00",
      image: "/products/almond-milk.png"
    },
    {
      title: "Fresh Avocados",
      packSize: "Pack of 3",
      price: "199.00",
      image: "/products/avocado.png"
    }
  ];

  return (
    <>
      <section className="py-4 sm:py-8 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <h2 className="text-[#064C50] text-xl sm:text-2xl font-montserrat font-bold">
              Premium Pantry Essentials
            </h2>
            <div className="flex-1 min-w-[100px] flex justify-end">
              <a 
                href="#" 
                className="text-[#064C50] text-xs sm:text-sm font-montserrat font-bold hover:underline flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#064C50] focus:ring-offset-2 rounded px-3 py-1 active:transform active:translate-y-0.5 transition-all"
              >
                See More
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
            {gourmetItems.slice(0, displayCount).map((item, index) => (
              <ItemCard
                key={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-8 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <h2 className="text-[#064C50] text-xl sm:text-2xl font-montserrat font-bold">
              Fresh & Organic
            </h2>
            <div className="flex-1 min-w-[100px] flex justify-end">
              <a 
                href="#" 
                className="text-[#064C50] text-xs sm:text-sm font-montserrat font-bold hover:underline flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#064C50] focus:ring-offset-2 rounded px-3 py-1 active:transform active:translate-y-0.5 transition-all"
              >
                See More
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
            {dailyEssentials.slice(0, displayCount).map((item, index) => (
              <ItemCard
                key={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default YouMightLike;
