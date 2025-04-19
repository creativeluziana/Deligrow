import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', count: 12 },
    { name: 'Recipes', count: 5 },
    { name: 'Health & Wellness', count: 3 },
    { name: 'Sustainability', count: 2 },
    { name: 'Tips & Tricks', count: 2 },
  ];

  const featuredPost = {
    title: 'The Ultimate Guide to Sustainable Grocery Shopping',
    excerpt: 'Learn how to make eco-friendly choices while grocery shopping and reduce your environmental impact.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format',
    author: 'Sarah Johnson',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    category: 'Sustainability'
  };

  const posts = [
    {
      id: 1,
      title: '10 Quick and Healthy Breakfast Ideas',
      excerpt: 'Start your day right with these nutritious and delicious breakfast recipes.',
      image: 'https://images.unsplash.com/photo-1533442719733-eb5d81130e96?w=500&auto=format',
      author: 'Mike Chen',
      date: 'Mar 20, 2024',
      readTime: '5 min read',
      category: 'Recipes'
    },
    {
      id: 2,
      title: 'Understanding Food Labels: A Complete Guide',
      excerpt: 'Learn how to read and understand nutrition labels to make better food choices.',
      image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=500&auto=format',
      author: 'Emily White',
      date: 'Mar 18, 2024',
      readTime: '6 min read',
      category: 'Health & Wellness'
    },
    {
      id: 3,
      title: 'Meal Prep Tips for Busy Professionals',
      excerpt: 'Save time and eat healthy with these meal preparation strategies.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format',
      author: 'Alex Thompson',
      date: 'Mar 16, 2024',
      readTime: '7 min read',
      category: 'Tips & Tricks'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleMenu={toggleMenu} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Deligrow Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover recipes, tips, and insights for a healthier lifestyle
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Post */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium">
                    Featured
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>By {featuredPost.author}</span>
                  </div>
                  <button className="text-green-600 font-medium flex items-center gap-2 hover:text-green-700">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>By {post.author}</span>
                      </div>
                      <button className="text-green-600 font-medium flex items-center gap-2 hover:text-green-700">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === category.name
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog; 