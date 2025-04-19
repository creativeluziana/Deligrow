import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProductPage from './pages/ProductPage';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F6F6]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
    </div>
  );
}

export default App; 