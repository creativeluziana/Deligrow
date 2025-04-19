import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDescription from '../components/ItemDescription';

const ProductPage = () => {
  const { id } = useParams();

  // Combined product data from both gourmet and daily essential items
  const allProducts = {
    'gourmet-1': {
      title: "Extra Virgin Olive Oil",
      packSize: "500ml bottle",
      price: "650.00",
      image: "/products/olive-oil.png",
      rating: 4.8,
      reviews: 24,
      sku: "GO-001",
      categories: ["Oils", "Cooking", "Organic"],
      description: "Premium quality extra virgin olive oil, cold-pressed and perfect for cooking, dressing, and dipping. Rich in antioxidants and healthy fats."
    },
    'gourmet-2': {
      title: "Raw Forest Honey",
      packSize: "350g jar",
      price: "450.00",
      image: "/products/honey.png",
      rating: 4.7,
      reviews: 18,
      sku: "GO-002",
      categories: ["Honey", "Natural", "Sweeteners"],
      description: "Pure, unprocessed forest honey collected from wild flowers. Rich in natural enzymes and antioxidants."
    },
    'gourmet-3': {
      title: "Organic Quinoa",
      packSize: "500g pack",
      price: "299.00",
      image: "/products/quinoa.png",
      rating: 4.6,
      reviews: 15,
      sku: "GO-003",
      categories: ["Grains", "Organic", "Superfoods"],
      description: "Premium organic quinoa, packed with protein and essential amino acids. Perfect for salads, bowls, and side dishes."
    },
    'gourmet-4': {
      title: "Mixed Nuts & Seeds",
      packSize: "400g pack",
      price: "599.00",
      image: "/products/nuts.png",
      rating: 4.9,
      reviews: 32,
      sku: "GO-004",
      categories: ["Nuts", "Snacks", "Healthy"],
      description: "A premium blend of carefully selected nuts and seeds, rich in healthy fats and proteins. Perfect for snacking or adding to your recipes."
    },
    'gourmet-5': {
      title: "Green Tea Matcha",
      packSize: "100g tin",
      price: "599.00",
      image: "/products/matcha.png",
      rating: 4.7,
      reviews: 21,
      sku: "GO-005",
      categories: ["Tea", "Japanese", "Organic"],
      description: "Premium grade Japanese matcha green tea powder. Rich in antioxidants and perfect for lattes, baking, or traditional preparation."
    },
    'daily-1': {
      title: "Free Range Eggs",
      packSize: "Pack of 6",
      price: "89.00",
      image: "/products/eggs.png",
      rating: 4.8,
      reviews: 45,
      sku: "DE-001",
      categories: ["Dairy", "Protein", "Fresh"],
      description: "Farm-fresh free-range eggs from happy hens. Rich in protein and perfect for all your cooking needs."
    },
    'daily-2': {
      title: "Organic Baby Spinach",
      packSize: "200g pack",
      price: "79.00",
      image: "/products/spinach.png",
      rating: 4.6,
      reviews: 28,
      sku: "DE-002",
      categories: ["Vegetables", "Organic", "Fresh"],
      description: "Fresh, tender organic baby spinach leaves. Perfect for salads, smoothies, or cooking."
    },
    'daily-3': {
      title: "Greek Yogurt",
      packSize: "400g tub",
      price: "120.00",
      image: "/products/yogurt.png",
      rating: 4.7,
      reviews: 36,
      sku: "DE-003",
      categories: ["Dairy", "Protein", "Breakfast"],
      description: "Creamy, protein-rich Greek yogurt. Perfect for breakfast, snacks, or as a cooking ingredient."
    },
    'daily-4': {
      title: "Almond Milk",
      packSize: "1 Liter",
      price: "189.00",
      image: "/products/almond-milk.png",
      rating: 4.8,
      reviews: 42,
      sku: "DE-004",
      categories: ["Beverages", "Dairy-Free", "Vegan"],
      description: "Smooth, creamy almond milk made from premium California almonds. Perfect for drinking, coffee, or cereals."
    },
    'daily-5': {
      title: "Fresh Avocados",
      packSize: "Pack of 3",
      price: "199.00",
      image: "/products/avocado.png",
      rating: 4.9,
      reviews: 38,
      sku: "DE-005",
      categories: ["Fruits", "Fresh", "Organic"],
      description: "Perfectly ripened, premium avocados. Rich in healthy fats and perfect for salads, sandwiches, or making guacamole."
    }
  };

  // Get the product data based on the ID
  const productData = allProducts[id] || {
    title: "Product Not Found",
    price: "0.00",
    rating: 0,
    reviews: 0,
    sku: "N/A",
    categories: [],
    description: "This product could not be found.",
    image: "/placeholder.png"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ItemDescription {...productData} id={id} />
    </div>
  );
};

export default ProductPage; 