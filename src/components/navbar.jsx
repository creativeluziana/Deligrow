import React, { useState, useEffect } from 'react';
import {
  faBars,
  faSearch,
  faShoppingCart,
  faHeart,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1090);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      padding: '15px',
      boxSizing: 'border-box',
      zIndex: 1000
    }}>
      <nav style={{ 
        backgroundColor: '#004D40',
        padding: '15px',
        borderRadius: '15px',
        width: 'calc(100% - 30px)',
        margin: '0 auto',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: '0 0 180px' }}>
            <button style={{ color: 'white' }}>
              <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px' }} />
            </button>
            <img 
              src="/Deligrow.png" 
              alt="Deligrow" 
              style={{ 
                height: '30px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
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
                backgroundColor: '#9EE37D',
                color: '#004D40',
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
            gap: '1.5rem',
            flex: '0 0 auto'
          }}>
            <div style={{ position: 'relative' }}>
              <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white', fontSize: '24px' }} />
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#9EE37D',
                color: '#004D40',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>0</span>
            </div>
            <div style={{ position: 'relative' }}>
              <FontAwesomeIcon icon={faHeart} style={{ color: 'white', fontSize: '24px' }} />
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#9EE37D',
                color: '#004D40',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>0</span>
            </div>
            <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '24px' }} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
