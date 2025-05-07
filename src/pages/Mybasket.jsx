import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Minus, Plus, Trash2, CreditCard, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

// Product image mapping
const productImages = {
  'Rice': '/products/rice.png',
  'Pasta': '/products/pasta.png',
  'Tomato Sauce': '/products/sauce.png',
  'Black Beans': '/products/beans.png',
  'Olive Oil': '/products/oil.png',
  'Sugar': '/products/sugar.png',
  // Default images by category
  'Grains': '/products/grains.png',
  'Condiments': '/products/condiments.png',
  'Canned Goods': '/products/canned.png',
  'Oils': '/products/oils.png',
  'Baking': '/products/baking.png'
};

const getProductImage = (item) => {
  // Try to get specific product image first
  if (productImages[item.name]) {
    return productImages[item.name];
  }
  // Fallback to category image
  if (item.category && productImages[item.category]) {
    return productImages[item.category];
  }
  // Final fallback
  return '/products/default.png';
};

const MyBasket = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  const updateQuantity = (item, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(item.id);
    } else {
      addToCart(item, newQuantity);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 49.99; // Free shipping over ₹500
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-[#064C50] mb-8">My Basket</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Items List */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#064C50] mb-6">Shopping Basket</h2>
                
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Your basket is empty</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cartItems.map((item) => (
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
                        <div className="px-4 pb-4 flex flex-col flex-1">
                          <h3 className="text-[#064C50] text-lg font-montserrat font-semibold text-center line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-[#064C50]/70 text-sm font-montserrat text-center mt-1">
                            {item.packSize}
                          </p>
                          <div className="flex-1 flex flex-col justify-end mt-2">
                            <p className="text-[#064C50] text-2xl font-semibold text-center mb-3">
                              ₹{item.price.toFixed(2)}
                            </p>
                            <div className="w-full h-10 flex items-center justify-between bg-[#B9EB6F] rounded-lg px-3">
                              <button 
                                onClick={() => updateQuantity(item, item.quantity - 1)}
                                className="w-8 h-10 flex items-center justify-center text-[#064C50] hover:bg-[#a8d964] rounded-lg transition-colors"
                              >
                                <Minus className="w-5 h-5" strokeWidth={2.5} />
                              </button>
                              <span className="font-semibold text-[#064C50] text-lg">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item, item.quantity + 1)}
                                className="w-8 h-10 flex items-center justify-center text-[#064C50] hover:bg-[#a8d964] rounded-lg transition-colors"
                              >
                                <Plus className="w-5 h-5" strokeWidth={2.5} />
                              </button>
                            </div>
                          </div>
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
              <h2 className="text-xl font-semibold text-[#064C50] mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[#064C50]/70">Subtotal</span>
                  <span className="text-[#064C50]">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#064C50]/70">Shipping</span>
                  <span className="text-[#064C50]">{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#064C50]/70">Tax</span>
                  <span className="text-[#064C50]">₹{tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-[#064C50]">Total</span>
                    <span className="text-lg font-semibold text-[#064C50]">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full mt-6 bg-[#064C50] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#053c3f] focus:outline-none focus:ring-2 focus:ring-[#064C50] focus:ring-offset-2 transition-colors"
              >
                Proceed to Checkout
              </button>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#064C50]/70">
                  <Truck className="w-5 h-5" />
                  <span>Free delivery on orders over ₹500</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#064C50]/70">
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
