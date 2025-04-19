import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        "About Deligrow",
        "Careers",
        "Blog",
        "Join Deligrow+",
        "Track Order"
      ]
    },
    {
      title: "Categories",
      links: [
        "Fresh Vegetables",
        "Organic Fruits",
        "Dairy & Milks",
        "Breads & Snacks",
        "Pantry Essentials",
        "Smart Savings"
      ]
    },
    {
      title: "Support",
      links: [
        "Help & FAQs",
        "Contact Us",
        "Delivery Info",
        "Returns & Refunds",
        "Payment Options",
        "Terms & Conditions",
        "Privacy Policy"
      ]
    }
  ];

  return (
    <footer style={{
      backgroundColor: '#064C50',
      color: 'white',
      padding: '60px 20px 40px',
      fontFamily: 'Montserrat, sans-serif',
      marginTop: 'auto',
      flexShrink: 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px'
      }}>
        {/* Logo and Contact Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <img 
            src="/Deligrow.png" 
            alt="Deligrow" 
            style={{ 
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              marginBottom: '10px'
            }}
          />
          <div style={{ fontSize: '15px', lineHeight: '1.6' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '12px'
            }}>
              <Phone size={18} />
              <span>+91 98XXXXXX12</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '12px'
            }}>
              <Mail size={18} />
              <span>support@deligrow.in</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '12px'
            }}>
              <MapPin size={18} />
              <span>Mumbai, India</span>
            </div>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#25D366',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                marginTop: '20px',
                transition: 'transform 0.2s ease',
                ':hover': {
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <MessageCircle size={18} />
              Chat with us
            </button>
          </div>
        </div>

        {/* Footer Sections */}
        {footerSections.map((section, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '700',
              marginBottom: '5px',
              color: '#9EE37D'
            }}>
              {section.title}
            </h3>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href="#"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      ':hover': {
                        color: '#9EE37D',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <ChevronRight size={14} style={{ opacity: 0.7 }} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright Section */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: '40px',
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: '14px',
        opacity: 0.8
      }}>
        © {new Date().getFullYear()} Deligrow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
