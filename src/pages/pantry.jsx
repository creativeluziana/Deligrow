import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Search, Filter, RefreshCw } from 'lucide-react';

const Pantry = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const pantryItems = [
    {
      id: 1,
      name: 'Rice',
      quantity: '2 kg',
      expiryDate: '2024-06-15',
      category: 'Grains',
      status: 'Good',
    },
    {
      id: 2,
      name: 'Pasta',
      quantity: '500g',
      expiryDate: '2024-08-20',
      category: 'Grains',
      status: 'Good',
    },
    {
      id: 3,
      name: 'Tomato Sauce',
      quantity: '750ml',
      expiryDate: '2024-05-10',
      category: 'Condiments',
      status: 'Expiring Soon',
    },
    {
      id: 4,
      name: 'Black Beans',
      quantity: '400g',
      expiryDate: '2024-12-31',
      category: 'Canned Goods',
      status: 'Good',
    },
    {
      id: 5,
      name: 'Olive Oil',
      quantity: '500ml',
      expiryDate: '2024-09-15',
      category: 'Oils',
      status: 'Good',
    },
    {
      id: 6,
      name: 'Sugar',
      quantity: '1 kg',
      expiryDate: '2025-01-01',
      category: 'Baking',
      status: 'Good',
    },
  ];

  const categories = [
    { name: 'All', count: pantryItems.length },
    { name: 'Grains', count: pantryItems.filter(item => item.category === 'Grains').length },
    { name: 'Condiments', count: pantryItems.filter(item => item.category === 'Condiments').length },
    { name: 'Canned Goods', count: pantryItems.filter(item => item.category === 'Canned Goods').length },
    { name: 'Oils', count: pantryItems.filter(item => item.category === 'Oils').length },
    { name: 'Baking', count: pantryItems.filter(item => item.category === 'Baking').length },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredItems = selectedFilter === 'all' 
    ? pantryItems 
    : pantryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Pantry</h1>
          <p className="text-gray-600">
            Keep track of your pantry items and never run out of essentials.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search pantry items..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                <Filter className="w-5 h-5 text-gray-500" />
                <span>Filter</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                <RefreshCw className="w-5 h-5 text-gray-500" />
                <span>Sync</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedFilter(category.name === 'All' ? 'all' : category.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedFilter === (category.name === 'All' ? 'all' : category.name)
                        ? 'bg-green-50 text-green-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-gray-400 text-sm ml-2">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pantry Items Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Good' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Quantity:</span>
                      <span className="text-gray-900 font-medium">{item.quantity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Category:</span>
                      <span className="text-gray-900">{item.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Expires:</span>
                      <span className="text-gray-900">{item.expiryDate}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                      Update Stock
                    </button>
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
