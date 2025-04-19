import React from 'react'
import Navbar from '../components/navbar/navbar'
import Header from '../components/home/home_header'
import Categories from '../components/home/categories'
import YouMightLike from '../components/home/youmighlike'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F6] gap-0">
      <Navbar />
      <Header />
      <Categories />
      <YouMightLike />
      <div className="flex-1">
        {/* Add your home page content here */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
