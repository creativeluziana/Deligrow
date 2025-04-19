import React from 'react'
import Navbar from '../components/navbar/navbar'
import Header from '../components/home/header'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F6] gap-0">
      <Navbar />
      <Header />
      <div className="flex-1">
        {/* Add your home page content here */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
