import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Minus, Plus, Trash2, CreditCard, Truck } from 'lucide-react';

const MyBasket = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      name: 'Organic Bananas',
      price: 2.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format'
    },
    {
      id: 2,
      name: 'Fresh Milk',
      price: 3.49,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format'
    },
    {
      id: 3,
      name: 'Whole Wheat Bread',
      price: 4.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format'
    }
  ]);

  const updateQuantity = (id, change) => {
    setBasketItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const subtotal = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Basket</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Items List */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Shopping Basket</h2>
                
                {basketItems.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Your basket is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {basketItems.map((item) => (
                      <div key={item.id} className="flex gap-6 pb-6 border-b border-gray-100">
                        <div className="w-24 h-24 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <p className="text-green-600 font-medium mt-1">${item.price.toFixed(2)}</p>
                          
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 rounded-full hover:bg-gray-100"
                              >
                                <Minus className="w-4 h-4 text-gray-500" />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 rounded-full hover:bg-gray-100"
                              >
                                <Plus className="w-4 h-4 text-gray-500" />
                              </button>
                            </div>
                            <button
                              onClick={() => updateQuantity(item.id, -item.quantity)}
                              className="text-red-500 hover:text-red-600"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Proceed to Checkout
              </button>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Truck className="w-5 h-5" />
                  <span>Free delivery on orders over $50</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <CreditCard className="w-5 h-5" />
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyBasket;
