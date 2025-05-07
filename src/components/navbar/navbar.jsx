import React, { useState, useEffect } from 'react';
import {
  faBars,
  faSearch,
  faShoppingCart,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeftNavbar from './LeftNavbar';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1090);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1090);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsProfileOpen(false);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length;

  return (
    <>
      {/* Left Sidebar */}
      <LeftNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Main Navbar */}
      <div style={{
        marginTop: '15px',
        marginLeft: '15px',
        marginRight: '15px',
        marginBottom: '0px',
        boxSizing: 'border-box',
        zIndex: 50
      }}>
        <nav style={{ 
          backgroundColor: '#064C50',
          padding: '15px',
          borderRadius: '15px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            width: '100%'
          }}>
            {/* Left side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: isMobile ? '0 0 auto' : '0 0 180px' }}>
              <button 
                style={{ 
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '5px'
                }}
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
              {!isMobile && (
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <img 
                    src="/Deligrow.png" 
                    alt="Deligrow" 
                    style={{ 
                      height: '30px',
                      width: 'auto',
                      objectFit: 'contain',
                      cursor: 'pointer'
                    }}
                  />
                </Link>
              )}
            </div>

            {/* Middle - Search */}
            {!isMobile && (
              <div style={{ 
                flex: '0 1 600px',
                position: 'relative',
                marginLeft: '-2rem'
              }}>
                <input
                  type="text"
                  placeholder="Search for product..."
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    border: 'none',
                    outline: 'none'
                  }}
                />
                <button style={{
                  position: 'absolute',
                  right: '6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#B9EB6F',
                  color: '#064C50',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: 'none'
                }}>
                  <FontAwesomeIcon icon={faSearch} style={{ fontSize: '20px' }} />
                </button>
              </div>
            )}

            {/* Right side - Icons */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: isMobile ? '1rem' : '1.5rem',
              flex: '0 0 auto'
            }}>
              <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => navigate('/wishlist')}>
                <FontAwesomeIcon 
                  icon={faHeart} 
                  style={{ 
                    color: 'white', 
                    fontSize: isMobile ? '20px' : '24px' 
                  }} 
                />
                {wishlistItemCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    backgroundColor: '#B9EB6F',
                    color: '#064C50',
                    width: isMobile ? '16px' : '18px',
                    height: isMobile ? '16px' : '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '10px' : '12px',
                    fontWeight: 'bold'
                  }}>
                    {wishlistItemCount}
                  </span>
                )}
              </div>
              <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => navigate('/mybasket')}>
                <FontAwesomeIcon 
                  icon={faShoppingCart} 
                  style={{ 
                    color: 'white', 
                    fontSize: isMobile ? '20px' : '24px' 
                  }} 
                />
                {cartItemCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    backgroundColor: '#B9EB6F',
                    color: '#064C50',
                    width: isMobile ? '16px' : '18px',
                    height: isMobile ? '16px' : '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '10px' : '12px',
                    fontWeight: 'bold'
                  }}>
                    {cartItemCount}
                  </span>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={handleProfileClick}
                  className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <FontAwesomeIcon 
                    icon={faUser} 
                    style={{ 
                      color: 'white', 
                      fontSize: isMobile ? '20px' : '24px' 
                    }} 
                  />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <button
                      onClick={handleLoginClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        navigate('/login');
                        setIsProfileOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Create Account
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-700 block px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/browse"
              className="text-gray-500 hover:text-gray-700 block px-3 py-2 text-base font-medium"
            >
              Browse
            </Link>
            <Link
              to="/pantry"
              className="text-gray-500 hover:text-gray-700 block px-3 py-2 text-base font-medium"
            >
              Pantry
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
