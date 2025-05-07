import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../itemcard';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const YouMightLike = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
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
      id: 7,
      name: "Extra Virgin Olive Oil",
      title: "Extra Virgin Olive Oil",
      packSize: "500ml bottle",
      price: 650.00,
      image: 'https://www.cateroils.co.uk/wp-content/uploads/2022/01/olives-with-olive-oil.jpg'
    },
    {
      id: 8,
      name: "Raw Forest Honey",
      title: "Raw Forest Honey",
      packSize: "350g jar",
      price: 450.00,
      image: 'https://lh7-us.googleusercontent.com/docsz/AD_4nXegGI3TiMP1VA7dg9NM9s74UiVjz03ykV6vriPjhueDEFDByeCykWVlt7jQl9_1oXKFwDTTRSONhfuiVYNX6EpBU1I2EaaDIoUuGC2b5NTa4fNYs7o1tTcQ-JDQQyqqAHDAQYmehDfiFW_q4PpjX5_UHQdB?key=sSd4HTTcsx8a0nLkjBPRVA'
    },
    {
      id: 9,
      name: "Organic Quinoa",
      title: "Organic Quinoa",
      packSize: "500g pack",
      price: 299.00,
      image: 'https://img.livestrong.com/-/clsd/getty/974ca702839d46b09757a3d2fd7a1377.jpg'
    },
    {
      id: 10,
      name: "Mixed Nuts & Seeds",
      title: "Mixed Nuts & Seeds",
      packSize: "400g pack",
      price: 599.00,
      image: 'https://nyspiceshop.com/cdn/shop/articles/TYPES_OF_NUTS_AND_SEEDS_AND_THEIR_HEALTH_BENEFITS_4960x.jpeg?v=1730226897'
    },
    {
      id: 11,
      name: "Green Tea Matcha",
      title: "Green Tea Matcha",
      packSize: "100g tin",
      price: 599.00,
      image: 'https://d1fm27ee7pjs8v.cloudfront.net/images/thumbnails/460/460/detailed/141/16_ytov-57.png'
    }
  ];

  const dailyEssentials = [
    {
      id: 12,
      name: "Free Range Eggs",
      title: "Free Range Eggs",
      packSize: "Pack of 6",
      price: 89.00,
      image: 'https://img.freepik.com/free-photo/organic-brown-egg-wicker-basket-supermarket_23-2148209813.jpg?semt=ais_hybrid&w=740'
    },
    {
      id: 13,
      name: "Organic Baby Spinach",
      title: "Organic Baby Spinach",
      packSize: "200g pack",
      price: 79.00,
      image: 'https://www.bigbasket.com/media/uploads/p/xl/40138448-2_1-fresho-baby-spinach.jpg'
    },
    {
      id: 14,
      name: "Greek Yogurt",
      title: "Greek Yogurt",
      packSize: "400g tub",
      price: 120.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_TenSSLIPI0Is0pVdGb-W2Edb8jIh6XW03A&s'
    },
    {
      id: 15,
      name: "Almond Milk",
      title: "Almond Milk",
      packSize: "1 Liter",
      price: 189.00,
      image: 'https://www.hersheyland.in/content/dam/Hersheyland_India/en_in/brands/sofit/sofit_2023/blog%203-thumbnail.jpg'
    },
    {
      id: 16,
      name: "Fresh Avocados",
      title: "Fresh Avocados",
      packSize: "Pack of 3",
      price: 199.00,
      image: 'https://gourmetgarden.in/cdn/shop/files/Hass_Avocado_43194693-c172-4001-a862-428785cf0a32.png?v=1746198124'
    }
  ];

  const handleSeeMore = (category) => {
    navigate(`/pantry?category=${category}`);
  };

  const handleCardClick = (item) => {
    addToCart(item, 1);
  };

  return (
    <>
      <section className="py-4 sm:py-8 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <h2 className="text-[#064C50] text-xl sm:text-2xl font-montserrat font-bold">
              Premium Pantry Essentials
            </h2>
            <div className="flex-1 min-w-[100px] flex justify-end">
              <button 
                onClick={() => handleSeeMore('Oils')}
                className="text-[#064C50] text-xs sm:text-sm font-montserrat font-bold hover:underline flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#064C50] focus:ring-offset-2 rounded px-3 py-1 active:transform active:translate-y-0.5 transition-all"
              >
                See More
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
            {gourmetItems.slice(0, displayCount).map((item, index) => (
              <div key={item.id} onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                <ItemCard {...item} />
              </div>
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
              <button 
                onClick={() => handleSeeMore('Fresh')}
                className="text-[#064C50] text-xs sm:text-sm font-montserrat font-bold hover:underline flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#064C50] focus:ring-offset-2 rounded px-3 py-1 active:transform active:translate-y-0.5 transition-all"
              >
                See More
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
            {dailyEssentials.slice(0, displayCount).map((item, index) => (
              <div key={item.id} onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                <ItemCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default YouMightLike;
