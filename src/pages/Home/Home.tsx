import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <main>
    <header className="swiggy-header">
      <Navbar />
    </header>
    <Carousel />
    </main>
  )
}

export default Home