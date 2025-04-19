import React, { useState } from 'react';
import { CircleArrowRight, CircleArrowLeft } from 'lucide-react';

const CategoryCard = ({ title, subtitle, image, isAction, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300
        ${isAction ? 'bg-[#B9EB6F] hover:bg-[#a8d964]' : ''}
        transform hover:scale-[1.02] cursor-pointer flex flex-col justify-between p-4
        h-full
      `}
    >
      {isAction ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          {title}
        </div>
      ) : (
        <>
          <div>
            <h3 className="text-[#064C50] text-[18px] font-montserrat font-semibold mb-[6px]">
              {title}
            </h3>
            {subtitle && (
              <p className="text-[#064C50]/70 text-[14px] font-montserrat">
                {subtitle}
              </p>
            )}
          </div>
          {image && (
            <div className="flex items-center justify-end w-full">
              <img
                src={image}
                alt={title}
                className="w-[60px] h-[60px] object-contain"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const Categories = () => {
  const [showMore, setShowMore] = useState(false);

  const initialCategories = [
    { title: "Vegetables", subtitle: "Local Market", image: "/categories/vegetables.png" },
    { title: "Fresh Fruits", subtitle: "Local Market", image: "/categories/fruits.png" },
    { title: "Snacks & Bread", subtitle: "Local Market", image: "/categories/bread.png" },
    { title: "Milk & Dairy", subtitle: "Local Market", image: "/categories/milk.png" },
    { title: "Pantry Essentials", subtitle: "Local Market", image: "/categories/pantry.png" }
  ];

  const moreCategories = [
    { title: "Beverages", subtitle: "Local Market", image: "/categories/beverages.png" },
    { title: "Personal Care", subtitle: "Local Market", image: "/categories/personal-care.png" },
    { title: "Household", subtitle: "Local Market", image: "/categories/household.png" },
    { title: "Baby Care", subtitle: "Local Market", image: "/categories/baby-care.png" },
    { title: "Baby Care", subtitle: "Local Market", image: "/categories/baby-care.png" }
  ];

  const toggleView = () => setShowMore(!showMore);

  const categoriesToRender = showMore ? moreCategories : initialCategories;

  return (
    <section className="font-montserrat py-6">
      <div className="w-full px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {showMore && (
            <CategoryCard
              title={
                <div className="flex flex-col items-center justify-center w-full h-full gap-2">
                  <div className="flex justify-center w-full">
                    <CircleArrowLeft className="w-8 h-8 text-[#064C50]" />
                  </div>
                  <span className="text-[16px] font-semibold text-center w-full">Back</span>
                </div>
              }
              isAction={true}
              onClick={toggleView}
            />
          )}

          {categoriesToRender.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}

          {!showMore && (
            <CategoryCard
              title={
                <div className="flex flex-col items-center justify-center w-full h-full gap-2">
                  <div className="flex justify-center w-full">
                    <CircleArrowRight className="w-8 h-8 text-[#064C50]" />
                  </div>
                  <span className="text-[16px] font-semibold text-center w-full">See More</span>
                </div>
              }
              isAction={true}
              onClick={toggleView}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
