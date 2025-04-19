import React, { useState } from 'react';
import { Star, Heart, Building2, Clock, Award, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItemDescription = ({ 
  title,
  price,
  rating = 0,
  reviews = 0,
  sku,
  categories = [],
  description,
  image,
  packSize,
  id = ""
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [image, image, image, image, image];
  
  // Check if this is a gourmet product
  const isGourmet = id.startsWith('gourmet-');
  
  // Get the main category for breadcrumb
  const mainCategory = categories[0] || 'All Categories';

  // Special labels for gourmet products
  const gourmetLabels = {
    'gourmet-1': ['Imported', 'Chef\'s Pick'],
    'gourmet-2': ['Limited Edition', 'Organic'],
    'gourmet-3': ['Organic', 'Superfood'],
    'gourmet-4': ['Premium Selection'],
    'gourmet-5': ['Japanese Import', 'Limited Edition']
  };

  // Special offers for gourmet products
  const gourmetOffers = {
    'gourmet-1': 'Free premium oil dispenser with purchase',
    'gourmet-2': 'Buy 2 get a free wooden honey dipper',
    'gourmet-3': 'Free recipe book with purchase',
    'gourmet-4': 'Free premium storage jar included',
    'gourmet-5': 'Authentic bamboo whisk included'
  };

  // Stock status for urgency (you would typically get this from a backend)
  const stockStatus = {
    'gourmet-1': 'Only 5 bottles left',
    'gourmet-2': 'Limited batch available',
    'gourmet-3': 'Only 8 packs left',
    'gourmet-4': 'Selling fast - 10 left',
    'gourmet-5': 'Last 6 tins in stock'
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-[#004D3D] mb-6">
        <Link to="/" className="hover:underline cursor-pointer">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/category/${mainCategory.toLowerCase()}`} className="hover:underline cursor-pointer">
          {isGourmet ? 'Gourmet Collection' : mainCategory}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">{title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Images */}
        <div>
          {/* Premium Badges for Gourmet Products */}
          {isGourmet && gourmetLabels[id] && (
            <div className="flex gap-2 mb-4">
              {gourmetLabels[id].map((label, index) => (
                <div key={index} className="inline-flex items-center bg-[#004D3D] text-white px-4 py-2 rounded-lg">
                  {label === "Chef's Pick" && <ChefHat className="w-4 h-4 mr-2" />}
                  {label === "Limited Edition" && <Award className="w-4 h-4 mr-2" />}
                  {label}
                </div>
              ))}
            </div>
          )}

          {/* Main Image */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <img 
              src={images[selectedImage]} 
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-5 gap-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`bg-gray-50 rounded-lg p-2 border-2 ${
                  selectedImage === index ? 'border-[#004D3D]' : 'border-transparent'
                }`}
              >
                <img src={img} alt={`${title} ${index + 1}`} className="w-full h-auto" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          {/* Top Section */}
          <div className="mb-6">
            {isGourmet && (
              <div className="text-[#B9975B] font-semibold mb-2">
                Premium Gourmet Selection
              </div>
            )}
            <h1 className="text-3xl font-semibold text-[#004D3D] mb-3">{title}</h1>
            <p className="text-gray-600 text-lg mb-4">{packSize}</p>
          </div>

          {/* Rating Section */}
          <div className="flex items-center mb-6">
            <div className="flex items-center text-[#B9975B]">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-current' : 'stroke-current'}`} 
                />
              ))}
              <span className="ml-2 text-lg">{rating}</span>
            </div>
            <span className="ml-2 text-gray-500">({reviews} reviews)</span>
          </div>

          {/* Price Section */}
          <div className="mb-6">
            <div className="text-4xl font-bold text-[#004D3D]">
              ₹{price}
            </div>
            {isGourmet && (
              <div className="text-sm text-gray-500 mt-1">
                Including import duties and taxes
              </div>
            )}
          </div>

          {/* Gourmet Offer */}
          {isGourmet && gourmetOffers[id] && (
            <div className="bg-[#F8F3E9] border border-[#B9975B] rounded-lg p-4 mb-6">
              <div className="flex items-center text-[#B9975B]">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">{gourmetOffers[id]}</span>
              </div>
            </div>
          )}

          {/* Stock Status */}
          {isGourmet && stockStatus[id] && (
            <div className="text-red-600 font-medium mb-6">
              {stockStatus[id]}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-[#004D3D] hover:bg-[#003D2D] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Add to Basket
            </button>
            <button className="flex-1 bg-[#B9975B] hover:bg-[#A88749] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Buy Now
            </button>
          </div>

          <div className="flex gap-6 mb-8">
            <button className="flex items-center text-[#004D3D] hover:text-[#003D2D] transition-colors">
              <Heart className="w-5 h-5 mr-2" />
              Add to Wishlist
            </button>
            <button className="flex items-center text-[#004D3D] hover:text-[#003D2D] transition-colors">
              <Building2 className="w-5 h-5 mr-2" />
              Compare
            </button>
          </div>

          {/* Product Meta */}
          <div className="border-t border-gray-200 pt-6">
            <div className="mb-4">
              <span className="text-gray-600">SKU:</span>
              <span className="ml-2 font-medium">{sku}</span>
            </div>
            <div className="mb-4">
              <span className="text-gray-600">Categories:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <span 
                    key={index}
                    className="bg-[#F8F3E9] text-[#B9975B] px-3 py-1 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#004D3D] mb-2">Product Description</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Additional Gourmet Information */}
          {isGourmet && (
            <div className="mt-8 bg-[#F8F3E9] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#B9975B] mb-4">Premium Product Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#B9975B] mr-3 mt-1" />
                  <span>Sourced from premium suppliers worldwide</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#B9975B] mr-3 mt-1" />
                  <span>Rigorous quality control and testing</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#B9975B] mr-3 mt-1" />
                  <span>Exclusive to Deligrow's Gourmet Collection</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDescription; 