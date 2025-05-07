import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'

const Home = React.lazy(() => import('./pages/home.jsx'))
const Pantry = React.lazy(() => import('./pages/pantry.jsx'))
const MyBasket = React.lazy(() => import('./pages/Mybasket.jsx'))
const Browse = React.lazy(() => import('./pages/browse.jsx'))
const SmartSavings = React.lazy(() => import('./pages/smartSavings.jsx'))
const DeligrowPlus = React.lazy(() => import('./pages/deligrowPlus.jsx'))
const TrackOrder = React.lazy(() => import('./pages/trackOrder.jsx'))
const Blog = React.lazy(() => import('./pages/blog.jsx'))
const About = React.lazy(() => import('./pages/about.jsx'))
const Help = React.lazy(() => import('./pages/help.jsx'))
const Careers = React.lazy(() => import('./pages/careers.jsx'))
const Cart = React.lazy(() => import('./pages/cart.jsx'))
const Checkout = React.lazy(() => import('./pages/checkout.jsx'))
const Wishlist = React.lazy(() => import('./pages/wishlist.jsx'))
const Login = React.lazy(() => import('./pages/login.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pantry" element={<Pantry />} />
              <Route path="/MyBasket" element={<MyBasket />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/smart-savings" element={<SmartSavings />} />
              <Route path="/deligrow-plus" element={<DeligrowPlus />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<Help />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  </React.StrictMode>
)
