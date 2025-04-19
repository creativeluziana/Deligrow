import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import {
  Home,
  Store,
  Compass,
  PiggyBank,
  ShoppingBasket,
  Info,
  HelpCircle,
  Crown,
  Truck,
  Newspaper,
  Briefcase,
  ChevronDown,
  Gift,
  Sparkles
} from 'lucide-react';

const LeftNavbar = ({ isMenuOpen, toggleMenu }) => {
  const [activeItem, setActiveItem] = useState('Home');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const location = useLocation();

  const menuCategories = [
    {
      title: 'SHOP',
      emoji: '🛍️',
      color: '#2E7D32',
      items: [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'The Pantry', icon: Store, path: '/pantry' },
        { name: 'Browse', icon: Compass, path: '/browse' },
        { name: 'Smart Savings', icon: PiggyBank, path: '/smart-savings' },
        { name: 'My Basket', icon: ShoppingBasket, path: '/MyBasket' },
      ]
    },
    {
      title: 'EXPLORE',
      emoji: '✨',
      color: '#B7791F',
      items: [
        { name: 'Join Deligrow+', icon: Crown, path: '/deligrow-plus' },
        { name: 'Track Order', icon: Truck, path: '/track-order' },
        { name: 'Blog', icon: Newspaper, path: '/blog' },
      ]
    },
    {
      title: 'INFO',
      emoji: 'ℹ️',
      color: '#4A5568',
      items: [
        { name: 'About Deligrow', icon: Info, path: '/about' },
        { name: 'Help & Support', icon: HelpCircle, path: '/help' },
        { name: 'Careers', icon: Briefcase, path: '/careers' },
      ]
    }
  ];

  const toggleCategory = (categoryTitle) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  // Function to check if a path is active
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Sidebar Menu */}
      <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        height: 'calc(100vh - 30px)',
        width: '280px',
        margin: '15px 0',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1001,
        borderRadius: '24px',
        boxShadow: isMenuOpen ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
        fontFamily: 'Montserrat, sans-serif',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.8)',
        opacity: isMenuOpen ? 1 : 0,
        transform: isMenuOpen ? 'translateX(15px)' : 'translateX(-100%)',
        visibility: isMenuOpen ? 'visible' : 'hidden',
        className: 'custom-scrollbar',
        overflow: 'hidden'
      }}>
        {/* Main Content Container */}
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Scrollable Content */}
          <div style={{
            padding: '25px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            overflowY: 'auto',
            height: '100%',
            paddingBottom: '100px',
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: isMenuOpen ? '0.2s' : '0s'
          }}>
            {/* Logo Section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '5px',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              paddingBottom: '20px'
            }}>
              <img 
                src="/Deligrow.png" 
                alt="Deligrow" 
                style={{ 
                  height: '32px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
              <button
                onClick={toggleMenu}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#004D40',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Menu Categories */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '32px'
            }}>
              {menuCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '12px',
                  marginTop: categoryIndex > 0 ? '8px' : '0'
                }}>
                  <button
                    onClick={() => toggleCategory(category.title)}
                    style={{
                      background: expandedCategories[category.title] ? 'rgba(0,0,0,0.03)' : 'none',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: '800',
                      color: '#444',
                      margin: '0',
                      padding: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      letterSpacing: '1.5px',
                      borderRadius: '8px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      ':hover': {
                        background: 'rgba(0,0,0,0.02)'
                      }
                    }}
                  >
                    {category.title === 'SHOP' && <ShoppingBasket size={16} strokeWidth={2.5} style={{ opacity: 1, color: '#2E7D32' }} />}
                    {category.title === 'INFO' && <Info size={16} strokeWidth={2.5} style={{ opacity: 1, color: '#4A5568' }} />}
                    {category.title === 'EXPLORE' && <Sparkles size={16} strokeWidth={2.5} style={{ opacity: 1, color: '#B7791F' }} />}
                    <span style={{ fontWeight: '900' }}>{category.title}</span>
                    <ChevronDown 
                      size={10}
                      strokeWidth={2.5}
                      style={{
                        color: '#666',
                        marginLeft: 'auto',
                        transform: expandedCategories[category.title] ? 'rotate(-180deg)' : 'rotate(-90deg)',
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: 0.7
                      }}
                    />
                  </button>
                  <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: expandedCategories[category.title] ? '8px' : '0',
                    maxHeight: expandedCategories[category.title] ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: expandedCategories[category.title] ? 1 : 0,
                    transform: expandedCategories[category.title] ? 'translateY(0)' : 'translateY(-10px)'
                  }}>
                    {category.items.map((item, itemIndex) => (
                      <Link 
                        key={itemIndex}
                        to={item.path}
                        onClick={() => {
                          setActiveItem(item.name);
                          if (toggleMenu) toggleMenu();
                        }}
                        style={{
                          color: isActivePath(item.path) ? category.color : '#555',
                          textDecoration: 'none',
                          fontSize: '15px',
                          fontWeight: '500',
                          padding: '10px 12px',
                          paddingLeft: '32px',
                          borderRadius: '12px',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          backgroundColor: isActivePath(item.path) ? `${category.color}15` : 'transparent',
                          border: isActivePath(item.path) ? `1px solid ${category.color}25` : '1px solid transparent',
                          transform: expandedCategories[category.title] ? 'translateX(0)' : 'translateX(-10px)',
                          transitionDelay: `${itemIndex * 0.05}s`,
                          opacity: expandedCategories[category.title] ? 1 : 0,
                        }}
                      >
                        <item.icon 
                          size={16}
                          style={{ 
                            width: '20px',
                            color: isActivePath(item.path) ? category.color : '#666',
                            opacity: 0.9,
                            transition: 'all 0.2s ease'
                          }}
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky CTA Container */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.9) 20%, #ffffff 100%)',
            padding: '20px',
            paddingTop: '40px',
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 2
          }}>
            {/* CTA Box */}
            <div 
              onClick={() => {/* Handle CTA click */}}
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              style={{
                padding: '20px',
                background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
                borderRadius: '16px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: isCtaHovered 
                  ? '0 8px 16px rgba(0,0,0,0.1)' 
                  : '0 4px 12px rgba(0,0,0,0.05)',
                transform: isCtaHovered ? 'translateY(-2px) scale(1.01)' : 'translateY(0) scale(1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isMenuOpen ? 1 : 0
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#2E7D32'
              }}>
                <Gift 
                  size={24}
                  style={{ 
                    animation: isCtaHovered ? 'bounce 1s infinite' : 'none'
                  }} 
                />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '15px' }}>Get ₹200 off</div>
                  <div style={{ fontSize: '13px', opacity: 0.9 }}>Sign up now!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0,0,0,0.15)',
            zIndex: 1000,
            backdropFilter: 'blur(3px)',
            opacity: isMenuOpen ? 1 : 0,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onClick={toggleMenu}
        />
      )}

      {/* Styles */}
      <style>
        {`
          /* Hide scrollbar by default */
          .custom-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }

          .custom-scrollbar::-webkit-scrollbar {
            width: 4px; /* Thinner scrollbar */
            background: transparent;
            opacity: 0;
          }

          /* Hide scrollbar for Chrome, Safari and Opera */
          .custom-scrollbar::-webkit-scrollbar {
            display: none;
          }

          /* Show scrollbar on container hover */
          .custom-scrollbar:hover {
            scrollbar-width: thin; /* Firefox */
            -ms-overflow-style: auto; /* IE and Edge */
          }

          .custom-scrollbar:hover::-webkit-scrollbar {
            display: block;
          }

          .custom-scrollbar:hover::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.02);
            border-radius: 10px;
            margin: 10px 0;
          }

          .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.06);
            border-radius: 10px;
            border: 2px solid transparent;
            background-clip: padding-box;
            transition: all 0.2s ease;
          }

          .custom-scrollbar:hover::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.12);
            border-radius: 10px;
            border: 2px solid transparent;
            background-clip: padding-box;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>
    </>
  );
};

export default LeftNavbar; 