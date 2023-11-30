import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Reviews = () => {
    
  return (
    <div className='mt-[100px] flex mx-10  sm:mx-0 flex-col items-center text-center space-y-8  '>
        <div className='space-y-8'>
      <h1 className='text-3xl font-bold '>Reviews</h1>
      <p className='font-semibold underline '>“ Very good quality T-shirts and lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua quis ipsum! ”</p>
      </div>
      <div className=''><Image src={"/review.jpg"} className=' ' alt={'review'} width={150} height={40}/>
      <h5 className='text-xs text-gray-600 font-medium'>HUNAIN IRFAN</h5>
      </div>
      </div>
  )
}

export default Reviews
