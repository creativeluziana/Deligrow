import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Plus, Minus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Pantry = () => {
  const [searchParams] = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const pantryItems = [
    // Premium Pantry Essentials
    {
      id: 7,
      name: 'Extra Virgin Olive Oil',
      quantity: '500ml bottle',
      category: 'Premium',
      status: 'Good',
      price: 650.00,
      image: 'https://www.cateroils.co.uk/wp-content/uploads/2022/01/olives-with-olive-oil.jpg',
      expiryDate: '2024-12-31'
    },
    {
      id: 8,
      name: 'Raw Forest Honey',
      quantity: '350g jar',
      category: 'Premium',
      status: 'Good',
      price: 450.00,
      image: 'https://lh7-us.googleusercontent.com/docsz/AD_4nXegGI3TiMP1VA7dg9NM9s74UiVjz03ykV6vriPjhueDEFDByeCykWVlt7jQl9_1oXKFwDTTRSONhfuiVYNX6EpBU1I2EaaDIoUuGC2b5NTa4fNYs7o1tTcQ-JDQQyqqAHDAQYmehDfiFW_q4PpjX5_UHQdB?key=sSd4HTTcsx8a0nLkjBPRVA',
      expiryDate: '2024-11-30'
    },
    {
      id: 9,
      name: 'Organic Quinoa',
      quantity: '500g pack',
      category: 'Premium',
      status: 'Good',
      price: 299.00,
      image: 'https://img.livestrong.com/-/clsd/getty/974ca702839d46b09757a3d2fd7a1377.jpg',
      expiryDate: '2024-10-15'
    },
    {
      id: 10,
      name: 'Mixed Nuts & Seeds',
      quantity: '400g pack',
      category: 'Premium',
      status: 'Good',
      price: 599.00,
      image: 'https://nyspiceshop.com/cdn/shop/articles/TYPES_OF_NUTS_AND_SEEDS_AND_THEIR_HEALTH_BENEFITS_4960x.jpeg?v=1730226897',
      expiryDate: '2024-09-30'
    },
    {
      id: 11,
      name: 'Green Tea Matcha',
      quantity: '100g tin',
      category: 'Premium',
      status: 'Good',
      price: 599.00,
      image: 'https://d1fm27ee7pjs8v.cloudfront.net/images/thumbnails/460/460/detailed/141/16_ytov-57.png',
      expiryDate: '2024-08-31'
    },
    // Fresh & Organic
    {
      id: 12,
      name: 'Free Range Eggs',
      quantity: 'Pack of 6',
      category: 'Fresh',
      status: 'Good',
      price: 89.00,
      image: 'https://img.freepik.com/free-photo/organic-brown-egg-wicker-basket-supermarket_23-2148209813.jpg?semt=ais_hybrid&w=740',
      expiryDate: '2024-04-30'
    },
    {
      id: 13,
      name: 'Organic Baby Spinach',
      quantity: '200g pack',
      category: 'Fresh',
      status: 'Good',
      price: 79.00,
      image: 'https://www.bigbasket.com/media/uploads/p/xl/40138448-2_1-fresho-baby-spinach.jpg',
      expiryDate: '2024-04-25'
    },
    {
      id: 14,
      name: 'Greek Yogurt',
      quantity: '400g tub',
      category: 'Fresh',
      status: 'Good',
      price: 120.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_TenSSLIPI0Is0pVdGb-W2Edb8jIh6XW03A&s',
      expiryDate: '2024-05-15'
    },
    {
      id: 15,
      name: 'Almond Milk',
      quantity: '1 Liter',
      category: 'Fresh',
      status: 'Good',
      price: 189.00,
      image: 'https://www.hersheyland.in/content/dam/Hersheyland_India/en_in/brands/sofit/sofit_2023/blog%203-thumbnail.jpg',
      expiryDate: '2024-05-30'
    },
    {
      id: 16,
      name: 'Fresh Avocados',
      quantity: 'Pack of 3',
      category: 'Fresh',
      status: 'Good',
      price: 199.00,
      image: 'https://gourmetgarden.in/cdn/shop/files/Hass_Avocado_43194693-c172-4001-a862-428785cf0a32.png?v=1746198124',
      expiryDate: '2024-04-28'
    },
    // Original pantry items
    {
      id: 1,
      name: 'Rice',
      quantity: '2 kg',
      expiryDate: '2024-06-15',
      category: 'Grains',
      status: 'Good',
      price: 45.99,
      image: 'https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c='
    },
    {
      id: 2,
      name: 'Pasta',
      quantity: '500g',
      expiryDate: '2024-08-20',
      category: 'Grains',
      status: 'Good',
      price: 12.99,
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/439487896/NQ/XQ/JL/43826231/raw-pasta.jpg'
    },
    {
      id: 3,
      name: 'Tomato Sauce',
      quantity: '750ml',
      expiryDate: '2024-05-10',
      category: 'Condiments',
      status: 'Expiring Soon',
      price: 8.99,
      image: 'https://c8.alamy.com/comp/2YM34CD/a-display-of-hunts-brand-tomato-sauce-cans-in-new-york-on-monday-november-11-2024-richard-b-levine-2YM34CD.jpg'
    },
    {
      id: 4,
      name: 'Black Beans',
      quantity: '400g',
      expiryDate: '2024-12-31',
      category: 'Canned Goods',
      status: 'Good',
      price: 6.99,
      image: 'https://india.neelamfoodland.in/cdn/shop/products/IMG_3512_1200x.jpg?v=1734378416'
    },
    {
      id: 5,
      name: 'Olive Oil',
      quantity: '500ml',
      expiryDate: '2024-09-15',
      category: 'Oils',
      status: 'Good',
      price: 24.99,
      image: 'https://images.squarespace-cdn.com/content/v1/60b7e877d7fb3972cffe87a5/1648905765218-5IRV8AEHD6QONDNTOB6S/The+Hub+Olive+Oil.jpg?format=1500w'
    },
    {
      id: 6,
      name: 'Sugar',
      quantity: '1 kg',
      expiryDate: '2025-01-01',
      category: 'Baking',
      status: 'Good',
      price: 9.99,
      image: 'https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg'
    }
  ];

  const categories = [
    { name: 'All', count: 16 },
    { name: 'Premium', count: 5 },
    { name: 'Fresh', count: 5 },
    { name: 'Grains', count: 2 },
    { name: 'Condiments', count: 1 },
    { name: 'Canned Goods', count: 1 },
    { name: 'Oils', count: 1 },
    { name: 'Baking', count: 1 }
  ];

  // Set initial filter based on URL parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedFilter(categoryParam);
    }
  }, [searchParams]);

  const filteredItems = selectedFilter === 'all' 
    ? pantryItems 
    : pantryItems.filter(item => item.category === selectedFilter);

  const handleAdd = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: 1
    }));
    const item = pantryItems.find(i => i.id === itemId);
    if (item) {
      addToCart(item, 1);
    }
  };

  const handleIncrement = (itemId) => {
    setQuantities(prev => {
      const newQuantity = (prev[itemId] || 0) + 1;
      const item = pantryItems.find(i => i.id === itemId);
      if (item) {
        addToCart(item, newQuantity);
      }
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });
  };

  const handleDecrement = (itemId) => {
    setQuantities(prev => {
      if (prev[itemId] === 1) {
        const newQuantities = { ...prev };
        delete newQuantities[itemId];
        return newQuantities;
      }
      const newQuantity = prev[itemId] - 1;
      const item = pantryItems.find(i => i.id === itemId);
      if (item) {
        addToCart(item, newQuantity);
      }
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });
  };

  const handleWishlist = (item) => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Pantry</h1>
          <p className="text-gray-600">
            Keep track of your pantry items and never run out of essentials.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedFilter(category.name === 'All' ? 'all' : category.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex justify-between items-center ${
                      selectedFilter === (category.name === 'All' ? 'all' : category.name)
                        ? 'bg-green-50 text-green-700'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className={`${
                      category.name === 'All' ? 'text-green-700' :
                      category.name === 'Premium' || category.name === 'Fresh' ? 'text-orange-700' :
                      'text-gray-700'
                    }`}>{category.name}</span>
                    <span className="text-gray-400 text-sm">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pantry Items Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="p-4">
                    <div className="aspect-[4/3] bg-[#E5E5E5] w-full rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="px-2 pb-2 sm:px-4 sm:pb-4 flex flex-col flex-1">
                    <h3 className="text-[#064C50] text-base sm:text-lg font-montserrat font-semibold text-center line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-[#064C50]/70 text-xs sm:text-sm font-montserrat text-center mt-0.5 sm:mt-1">
                      {item.quantity}
                    </p>
                    <div className="flex-1 flex flex-col justify-end mt-2 sm:mt-0">
                      <div className="flex justify-between items-center mb-2 sm:mb-3">
                        <span className="text-sm text-gray-500">Expires: {item.expiryDate}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Good' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-[#064C50] text-xl font-semibold text-center mb-3">
                        ₹{item.price.toFixed(2)}
                      </p>
                      {!quantities[item.id] ? (
                        <button 
                          onClick={() => handleAdd(item.id)}
                          className="w-full h-10 bg-[#E5E5E5] rounded-lg flex items-center justify-center hover:bg-[#d9d9d9] transition-colors"
                        >
                          <Plus className="w-5 h-5 text-[#064C50]" strokeWidth={2.5} />
                        </button>
                      ) : (
                        <div className="w-full h-10 flex items-center justify-between bg-[#B9EB6F] rounded-lg px-3">
                          <button 
                            onClick={() => handleDecrement(item.id)}
                            className="w-8 h-10 flex items-center justify-center text-[#064C50] hover:bg-[#a8d964] rounded-lg transition-colors"
                          >
                            <Minus className="w-5 h-5" strokeWidth={2.5} />
                          </button>
                          <span className="font-semibold text-[#064C50] text-lg">
                            {quantities[item.id]}
                          </span>
                          <button 
                            onClick={() => handleIncrement(item.id)}
                            className="w-8 h-10 flex items-center justify-center text-[#064C50] hover:bg-[#a8d964] rounded-lg transition-colors"
                          >
                            <Plus className="w-5 h-5" strokeWidth={2.5} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pantry;
