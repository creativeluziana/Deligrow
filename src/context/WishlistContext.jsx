import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
  };

  const isInWishlist = (itemId) => {
    return wishlistItems.some(item => item.id === itemId);
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}; 