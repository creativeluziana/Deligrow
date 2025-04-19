import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Tag, Clock, Gift, Percent } from 'lucide-react';

const SmartSavings = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const deals = [
    {
      id: 1,
      type: 'deal',
      title: "Weekend Special",
      discount: "20% OFF",
      description: "Get 20% off on all fresh vegetables",
      validUntil: "2024-04-30",
      code: "FRESH20",
      minPurchase: 50,
      category: "Vegetables"
    },
    {
      id: 2,
      type: 'deal',
      title: "Bulk Buy Offer",
      discount: "Buy 2 Get 1",
      description: "On all dairy products",
      validUntil: "2024-04-25",
      code: "DAIRY3",
      minPurchase: 30,
      category: "Dairy"
    },
    {
      id: 3,
      type: 'coupon',
      title: "First Time User",
      discount: "$10 OFF",
      description: "On your first order above $50",
      validUntil: "2024-05-01",
      code: "WELCOME10",
      minPurchase: 50,
      category: "All Categories"
    },
    {
      id: 4,
      type: 'promotion',
      title: "Healthy Start",
      discount: "15% OFF",
      description: "On all organic products",
      validUntil: "2024-04-28",
      code: "ORGANIC15",
      minPurchase: 40,
      category: "Organic"
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filterDeals = (type) => {
    if (type === 'all') return deals;
    return deals.filter(deal => deal.type === type);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Smart Savings</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the best deals, coupons, and promotions to save more on your favorite products.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'all' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Offers
            </button>
            <button
              onClick={() => setActiveTab('deal')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'deal' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Deals
            </button>
            <button
              onClick={() => setActiveTab('coupon')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'coupon' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Coupons
            </button>
            <button
              onClick={() => setActiveTab('promotion')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'promotion' ? 'bg-green-50 text-green-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Promotions
            </button>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDeals(activeTab).map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      deal.type === 'deal' ? 'bg-blue-50 text-blue-600' :
                      deal.type === 'coupon' ? 'bg-purple-50 text-purple-600' :
                      'bg-orange-50 text-orange-600'
                    }`}>
                      {deal.type.charAt(0).toUpperCase() + deal.type.slice(1)}
                    </span>
                  </div>
                  <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg font-bold">
                    {deal.discount}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag className="w-4 h-4 mr-2" />
                    <span>Category: {deal.category}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Valid until: {deal.validUntil}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Gift className="w-4 h-4 mr-2" />
                    <span>Min. Purchase: ${deal.minPurchase}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="bg-gray-50 p-3 rounded-lg flex items-center justify-between">
                    <code className="text-sm font-mono font-medium">{deal.code}</code>
                    <button className="text-green-600 text-sm font-medium hover:text-green-700">
                      Copy Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SmartSavings; 