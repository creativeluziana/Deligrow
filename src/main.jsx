import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

const Home = React.lazy(() => import('./pages/home.jsx'))
const Pantry = React.lazy(() => import('./pages/pantry.jsx'))
const MyBasket = React.lazy(() => import('./pages/Mybasket.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pantry" element={<Pantry />} />
          <Route path="/MyBasket" element={<MyBasket />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
