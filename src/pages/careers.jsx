import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Search, MapPin, Clock, Briefcase, ChevronRight, Building2, Users, Leaf, Heart } from 'lucide-react';

const Careers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = [
    { name: 'All', count: 12 },
    { name: 'Technology', count: 5 },
    { name: 'Operations', count: 3 },
    { name: 'Marketing', count: 2 },
    { name: 'Customer Support', count: 2 },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our engineering team to build and scale our e-commerce platform.'
    },
    {
      id: 2,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Lead and optimize our delivery operations across multiple cities.'
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Drive our digital marketing initiatives and growth strategies.'
    },
    {
      id: 4,
      title: 'Customer Support Lead',
      department: 'Customer Support',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Lead our customer support team and enhance customer satisfaction.'
    }
  ];

  const benefits = [
    {
      icon: Building2,
      title: 'Modern Workspace',
      description: 'State-of-the-art offices with collaborative spaces'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented and passionate individuals'
    },
    {
      icon: Leaf,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote options'
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Comprehensive health insurance for you and family'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredJobs = selectedDepartment === 'All'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      {/* Hero Section */}
      <div className="relative bg-green-700 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Be part of our mission to revolutionize grocery shopping and make a positive impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            </div>
            <div className="w-full md:w-64">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept.name} value={dept.name}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Join Deligrow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{job.description}</p>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Apply Now
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers; 