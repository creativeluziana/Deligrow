import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';

const Browse = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: 1, name: 'Fruits & Vegetables', count: 150 },
    { id: 2, name: 'Dairy & Eggs', count: 89 },
    { id: 3, name: 'Bread & Bakery', count: 45 },
    { id: 4, name: 'Meat & Seafood', count: 78 },
    { id: 5, name: 'Pantry Items', count: 200 },
    { id: 6, name: 'Beverages', count: 120 },
    { id: 7, name: 'Snacks', count: 180 },
    { id: 8, name: 'Household', count: 95 },
  ];

  const products = [
    {
      id: 1,
      name: 'Fresh Organic Bananas',
      price: 2.99,
      unit: 'dozen',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format'
    },
    {
      id: 2,
      name: 'Whole Milk',
      price: 3.49,
      unit: 'gallon',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format'
    },
    {
      id: 3,
      name: 'Whole Wheat Bread',
      price: 4.99,
      unit: 'loaf',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format'
    },
    {
      id: 4,
      name: 'Fresh Eggs',
      price: 5.99,
      unit: 'dozen',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&auto=format'
    },
    {
      id: 5,
      name: 'Red Apples',
      price: 1.99,
      unit: 'lb',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format'
    },
    {
      id: 6,
      name: 'Organic Honey',
      price: 8.99,
      unit: 'jar',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&auto=format'
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="text-gray-400 text-sm ml-2">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Browse Products</h1>
              <div className="flex items-center gap-4">
                <select className="rounded-lg border-gray-300 text-sm">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A to Z</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-lg font-semibold text-green-600">${product.price}</span>
                        <span className="text-sm text-gray-500 ml-1">/ {product.unit}</span>
                      </div>
                      <button className="bg-green-50 text-green-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                        Add to Cart
                      </button>
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

export default Browse; 