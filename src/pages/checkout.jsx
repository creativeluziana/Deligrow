import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { useCart } from '../context/CartContext';
import { Check, ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // Calculate totals from actual cart items
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 49.99; // Free shipping over ₹500
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    setIsProcessing(true);
    setShowPayment(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Do not clear cart or redirect
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/mybasket')}
          className="flex items-center text-[#064C50] hover:text-[#053c3f] mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to basket
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Billing Information */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-[#064C50] mb-4">Billing Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#064C50] mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064C50]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#064C50] mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064C50]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#064C50] mb-1">Address</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064C50]"
                    rows="3"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <span>{item.name} x {item.quantity}</span>
                    </div>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (10%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isProcessing || showSuccess || cartItems.length === 0}
                className={`w-full mt-6 bg-[#B9EB6F] text-[#064C50] py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#a8d964] transition-colors focus:outline-none focus:ring-2 focus:ring-[#064C50] focus:ring-offset-2 ${
                  showSuccess
                    ? 'bg-green-500 text-white'
                    : cartItems.length === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : ''
                }`}
              >
                {isProcessing && showPayment ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-[#064C50]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    Proceeding to Payment...
                  </>
                ) : showSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    Order Confirmed!
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout; 