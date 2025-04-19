import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Check, Star, Clock, Truck, Gift, CreditCard } from 'lucide-react';

const DeligrowPlus = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const benefits = [
    {
      icon: Truck,
      title: 'Free Express Delivery',
      description: 'Get your groceries delivered within 2 hours at no extra cost'
    },
    {
      icon: Star,
      title: 'Exclusive Discounts',
      description: 'Get up to 20% off on selected items every day'
    },
    {
      icon: Clock,
      title: 'Priority Slots',
      description: 'Access to premium delivery slots before others'
    },
    {
      icon: Gift,
      title: 'Special Rewards',
      description: 'Earn 2x points on all purchases and special birthday rewards'
    }
  ];

  const plans = {
    monthly: {
      price: 9.99,
      period: 'month',
      savings: null
    },
    yearly: {
      price: 99.99,
      period: 'year',
      savings: '20%'
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Deligrow+
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get exclusive benefits and save more on your grocery shopping with Deligrow+
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <benefit.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                  <button
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedPlan === 'monthly'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setSelectedPlan('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedPlan === 'yearly'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setSelectedPlan('yearly')}
                  >
                    Yearly
                    <span className="ml-2 text-green-600 text-xs font-bold">SAVE 20%</span>
                  </button>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">$</span>
                  <span className="text-6xl font-bold text-gray-900">
                    {plans[selectedPlan].price}
                  </span>
                  <span className="text-xl text-gray-600 ml-2">
                    /{plans[selectedPlan].period}
                  </span>
                </div>
                {plans[selectedPlan].savings && (
                  <p className="text-green-600 font-medium mt-2">
                    Save {plans[selectedPlan].savings} with yearly billing
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Free express delivery on all orders</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Exclusive discounts up to 20%</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Priority delivery slots</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">2x reward points on all purchases</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Special birthday rewards</span>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-4 px-8 rounded-xl font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Start Your Free Trial
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <CreditCard className="w-4 h-4" />
                <span>Secure payment processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DeligrowPlus; 