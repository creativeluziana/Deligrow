import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item, 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-2 sm:p-4">
                  <div className="aspect-[4/3] bg-[#E5E5E5] w-full rounded-lg sm:rounded-xl overflow-hidden">
                    <img 
                      src={`/products/${item.category.toLowerCase()}.png`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="px-2 pb-2 sm:px-4 sm:pb-4">
                  <h3 className="text-[#064C50] text-base sm:text-lg font-montserrat font-semibold text-center line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-[#064C50]/70 text-xs sm:text-sm font-montserrat text-center mt-0.5 sm:mt-1">
                    {item.quantity}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-[#064C50] text-xl font-semibold">
                      ${item.price}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="p-2 text-[#064C50] hover:bg-[#B9EB6F]/20 rounded-lg transition-colors"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist; 