import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import PopularTshirts from '@/components/PopularTshirts'
import React from 'react'
import Saleproducts from '../../sanity/saleproducts'
import SaleTshirts from '@/components/SaleTshirts'
import BaseCollection from '@/components/BaseCollection'
import SecondHero from '@/components/SecondHero'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import SpringCollection from '@/components/SpringCollection'
import MenWomen from '@/components/MenWomen'


const page = () => {
  return (
    
    <div>
       
      <Navbar />
      <Hero />
      <PopularTshirts />
      <BaseCollection />
      <SecondHero />
      <SpringCollection />
      <SaleTshirts  />
      <Reviews />
      <MenWomen />
      <Footer />

      </div>
      
    
  )
}

export default page
