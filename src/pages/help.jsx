import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { ChevronDown, Phone, Mail, MessageCircle, Clock, Search } from 'lucide-react';

const Help = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: 'How do I track my order?',
      answer: 'You can track your order by visiting the Track Order page and entering your order number. You\'ll receive real-time updates on your delivery status.'
    },
    {
      question: 'What are your delivery hours?',
      answer: 'We deliver from 8:00 AM to 10:00 PM, 7 days a week. You can choose your preferred delivery slot during checkout.'
    },
    {
      question: 'How do I cancel or modify my order?',
      answer: 'You can cancel or modify your order within 1 hour of placing it. Go to My Orders and select the order you wish to modify.'
    },
    {
      question: 'What is Deligrow+?',
      answer: 'Deligrow+ is our premium membership program that offers benefits like free delivery, exclusive discounts, and priority customer support.'
    },
    {
      question: 'What is your return policy?',
      answer: 'If you\'re not satisfied with your products, you can return them within 24 hours of delivery. We offer full refunds for eligible items.'
    },
    {
      question: 'How do I report a problem with my order?',
      answer: 'You can report issues through the Help Center or contact our customer support team directly. We\'re available 24/7 to assist you.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 customer service',
      contact: '1-800-DELIGROW',
      action: 'Call now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Response within 24 hours',
      contact: 'support@deligrow.com',
      action: 'Send email'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support',
      contact: 'Available 24/7',
      action: 'Start chat'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the support you need. We're here to help.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <channel.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{channel.title}</h3>
                  <p className="text-gray-500">{channel.description}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-900 font-medium">{channel.contact}</p>
                <button className="text-green-600 font-medium hover:text-green-700">
                  {channel.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Hours */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Clock className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Operating Hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Customer Support</h3>
              <p className="text-gray-600">24 hours / 7 days</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Delivery Hours</h3>
              <p className="text-gray-600">8:00 AM - 10:00 PM</p>
              <p className="text-gray-500 text-sm">7 days a week</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help; 