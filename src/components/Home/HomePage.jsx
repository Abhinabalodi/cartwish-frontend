import React from 'react'
import iphone from "../../assets/iP-14-p.png"
import mac from '../../assets/Macsystem.png'
import HeroSection from './HeroSection'
import FeaturedProduct from './FeaturedProduct'

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title='Buy iPhone 14 Pro'
        subtitle='Experience the power of the latest iPhone 14 with
        our most Pro camera ever.'
        link='/product/6605581fbf20016058f8a7c8'
        image={iphone} />
      
        <FeaturedProduct/>
      
      <HeroSection
        title='Build the ultimate setup'
        subtitle='You can add Studio Display and colour-matched Magic
        accessories to your bag after configuring your Mac Mini. '
        link='/product/6605581fbf20016058f8a7d0'
        image={mac} />

    </div>
  )
}

export default HomePage
