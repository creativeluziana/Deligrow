import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'All',
      count: 16,
      image: 'https://www.thespruceeats.com/thmb/B82cqHuzy2lCet8X7aG51cTi9jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pantry-master-list-1389303-hero-01-9ffad227ac094f91911d33c508686919.jpg',
      description: 'Browse our complete collection of pantry items',
      color: 'bg-green-50 text-green-700'
    },
    {
      name: 'Premium',
      count: 5,
      image: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-keep-pantry-items-fresh-2022-step-1.jpg',
      description: 'High-quality premium pantry essentials',
      color: 'bg-orange-50 text-orange-700'
    },
    {
      name: 'Fresh',
      count: 5,
      image: 'https://content.jdmagicbox.com/comp/def_content/vegetable-vendors/shutterstock-130707287-vegetable-vendors-3-bils7.jpg',
      description: 'Fresh and organic produce',
      color: 'bg-orange-50 text-orange-700'
    },
    {
      name: 'Grains',
      count: 2,
      image: 'https://content.jdmagicbox.com/quickquotes/images_main/truefarm-organic-mixed-food-grain-802587962-1t51rfgt.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit',
      description: 'Essential grains and cereals',
      color: 'bg-gray-50 text-gray-700'
    },
    {
      name: 'Condiments',
      count: 1,
      image: 'https://m.media-amazon.com/images/I/81gafi7PSBL.jpg',
      description: 'Sauces and condiments',
      color: 'bg-gray-50 text-gray-700'
    },
    {
      name: 'Canned Goods',
      count: 1,
      image: 'https://www.thespruceeats.com/thmb/U_Jl4KSukouhfsmTyvpR0A8UGx8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cannedfoodsWarren_Price-2d07bf3a98814f7b8f061e800a509627.jpg',
      description: 'Long-lasting canned products',
      color: 'bg-gray-50 text-gray-700'
    },
    {
      name: 'Oils',
      count: 1,
      image: 'https://content.hy-vee.com/remote.axd/3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/18025/cookingoils-hero.jpg?v=1&mode=crop&width=800&height=640&upscale=false',
      description: 'Cooking oils and vinegars',
      color: 'bg-gray-50 text-gray-700'
    },
    {
      name: 'Baking',
      count: 1,
      image: 'https://www.fairtrade.org.uk/wp-content/uploads/2020/06/Baking-ingredients-resized-small-file-size.png',
      description: 'Essential baking ingredients',
      color: 'bg-gray-50 text-gray-700'
    }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/pantry?category=${category.name.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h1>
          <p className="text-gray-600">
            Explore our wide selection of pantry items by category
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-left">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                      <span className={`${category.color} px-2 py-1 rounded-full text-sm font-medium`}>
                        {category.count}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm mt-2">{category.description}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Browse; 