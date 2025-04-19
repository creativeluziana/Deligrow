import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Users, Heart, Globe, Leaf } from 'lucide-react';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const values = [
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction in everything we do.'
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: 'Quality & Freshness',
      description: 'We ensure the highest quality and freshness of all our products.'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: 'Sustainability',
      description: 'We are committed to sustainable practices and reducing environmental impact.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Health & Wellness',
      description: 'We promote healthy living through our products and services.'
    }
  ];

  const stats = [
    { number: '1M+', label: 'Happy Customers' },
    { number: '50+', label: 'Cities Served' },
    { number: '10K+', label: 'Products' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      {/* Hero Section */}
      <div className="relative bg-green-700 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            About Deligrow
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            We're on a mission to revolutionize grocery shopping by making it more convenient, sustainable, and enjoyable for everyone.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2020, Deligrow started with a simple idea: make grocery shopping better.
            We believed that people deserved a more convenient way to get their groceries without
            compromising on quality or sustainability. Today, we're proud to serve millions of
            customers across the country, delivering fresh groceries right to their doorstep.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            These core values guide everything we do at Deligrow
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To provide convenient access to quality groceries while promoting sustainable
            practices and healthy living. We strive to make a positive impact on our
            communities and the environment through innovative solutions and exceptional service.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About; 