const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const products = [
  'olive-oil',
  'honey',
  'quinoa',
  'nuts',
  'matcha',
  'eggs',
  'spinach',
  'yogurt',
  'almond-milk',
  'avocado',
  'placeholder'
];

// Create products directory if it doesn't exist
const productsDir = path.join(__dirname, '../public/products');
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// Generate a placeholder image for each product
products.forEach(product => {
  const canvas = createCanvas(300, 300);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, 300, 300);

  // Add product name
  ctx.fillStyle = '#333333';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(product, 150, 150);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(productsDir, `${product}.png`), buffer);
  console.log(`Generated ${product}.png`);
}); 