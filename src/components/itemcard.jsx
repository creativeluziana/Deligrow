import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({ id = "1", title, packSize, price, image }) => {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.stopPropagation();
    setQuantity(1);
  };
  
  const handleIncrement = (e) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrement = (e) => {
    e.stopPropagation();
    if (quantity === 1) {
      setQuantity(0);
    } else {
      setQuantity(prev => prev - 1);
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Image */}
      <div className="p-2 sm:p-4">
        <div className="aspect-[4/3] bg-[#E5E5E5] w-full rounded-lg sm:rounded-xl overflow-hidden">
          {image && (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-2 pb-2 sm:px-4 sm:pb-4 flex flex-col flex-1">
        <h3 className="text-[#064C50] text-base sm:text-lg font-montserrat font-semibold text-center line-clamp-1 hover:text-[#064C50]/80">
          {title}
        </h3>
        <p className="text-[#064C50]/70 text-xs sm:text-sm font-montserrat text-center mt-0.5 sm:mt-1">
          {packSize}
        </p>
        <div className="flex-1 flex flex-col justify-end mt-2 sm:mt-0">
          <p className="text-[#064C50] text-xl sm:text-2xl font-semibold text-center mb-2 sm:mb-3">
            ₹{price}
          </p>
          {quantity === 0 ? (
            <button 
              onClick={handleAdd}
              className="w-full h-8 sm:h-10 bg-[#E5E5E5] rounded-lg flex items-center justify-center hover:bg-[#d9d9d9] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#064C50] focus:ring-offset-2 active:transform active:scale-95"
            >
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#064C50]" strokeWidth={2.5} />
            </button>
          ) : (
            <div className="w-full h-8 sm:h-10 flex items-center justify-between bg-[#B9EB6F] rounded-lg px-3">
              <button 
                onClick={handleDecrement}
                className="w-8 h-8 sm:h-10 flex items-center justify-center text-[#064C50] hover:bg-[#a8d964] rounded-lg transition-colors"
              >
                <Minus className="w-5 h-5" strokeWidth={2.5} />
              </button>
              <span className="font-semibold text-[#064C50] text-lg">
                {quantity}
              </span>
              <button 
                onClick={handleIncrement}
                className="w-8 h-8 sm:h-10 flex items-center justify-center text-[#064C50] hover:bg-[#a8d964] rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
