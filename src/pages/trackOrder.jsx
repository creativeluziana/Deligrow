import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const TrackOrder = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const demoOrder = {
    number: 'ORD123456789',
    status: 'In Transit',
    estimatedDelivery: 'Today, 6:00 PM - 8:00 PM',
    items: [
      { id: 1, name: 'Organic Bananas', quantity: 2, price: 5.98 },
      { id: 2, name: 'Fresh Milk', quantity: 1, price: 3.49 },
      { id: 3, name: 'Whole Wheat Bread', quantity: 1, price: 4.99 }
    ],
    timeline: [
      {
        status: 'Order Delivered',
        time: 'Estimated 6:00 PM - 8:00 PM',
        icon: CheckCircle,
        isCompleted: false,
        isCurrent: false
      },
      {
        status: 'Out for Delivery',
        time: '2:30 PM',
        icon: Truck,
        isCompleted: false,
        isCurrent: true
      },
      {
        status: 'Order Packed',
        time: '1:45 PM',
        icon: Package,
        isCompleted: true,
        isCurrent: false
      },
      {
        status: 'Order Confirmed',
        time: '12:30 PM',
        icon: Clock,
        isCompleted: true,
        isCurrent: false
      }
    ]
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTrack = (e) => {
    e.preventDefault();
    setShowDemo(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Order</h1>
            <p className="text-gray-600">
              Enter your order number to track your delivery status
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleTrack} className="mb-12">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Enter order number (e.g., ORD123456789)"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Track Order
              </button>
            </div>
          </form>

          {/* Order Status */}
          {showDemo && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Order Info */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Order #{demoOrder.number}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Estimated Delivery: {demoOrder.estimatedDelivery}
                    </p>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                    {demoOrder.status}
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Delivery Status
                </h3>
                <div className="space-y-8">
                  {demoOrder.timeline.map((event, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            event.isCompleted
                              ? 'bg-green-100'
                              : event.isCurrent
                              ? 'bg-blue-100'
                              : 'bg-gray-100'
                          }`}
                        >
                          <event.icon
                            className={`w-5 h-5 ${
                              event.isCompleted
                                ? 'text-green-600'
                                : event.isCurrent
                                ? 'text-blue-600'
                                : 'text-gray-400'
                            }`}
                          />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <p
                            className={`font-medium ${
                              event.isCompleted || event.isCurrent
                                ? 'text-gray-900'
                                : 'text-gray-500'
                            }`}
                          >
                            {event.status}
                          </p>
                          <p className="text-gray-500">{event.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4">
                  {demoOrder.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex items-center">
                        <span className="text-gray-600">
                          {item.quantity}x {item.name}
                        </span>
                      </div>
                      <span className="text-gray-900">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">
                        ${demoOrder.items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackOrder; 