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

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1090);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <FontAwesomeIcon 
                  icon={faBars} 
                  style={{ 
                    fontSize: isMobile ? '20px' : '24px',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </button>
              {!isMobile && (
                <img 
                  src="/Deligrow.png" 
                  alt="Deligrow" 
                  style={{ 
                    height: '30px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
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
              <div style={{ position: 'relative' }}>
                <FontAwesomeIcon 
                  icon={faShoppingCart} 
                  style={{ 
                    color: 'white', 
                    fontSize: isMobile ? '20px' : '24px' 
                  }} 
                />
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
                }}>0</span>
              </div>
              <div style={{ position: 'relative' }}>
                <FontAwesomeIcon 
                  icon={faHeart} 
                  style={{ 
                    color: 'white', 
                    fontSize: isMobile ? '20px' : '24px' 
                  }} 
                />
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
                }}>0</span>
              </div>
              <FontAwesomeIcon 
                icon={faUser} 
                style={{ 
                  color: 'white', 
                  fontSize: isMobile ? '20px' : '24px' 
                }} 
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
