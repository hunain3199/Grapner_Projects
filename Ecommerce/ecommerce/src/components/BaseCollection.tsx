import React from 'react'
import Image from "next/image"
import { Button } from './ui/button'
const BaseCollection = () => {
  return (
    <div className='flex justify-center mt-[100px] space-x-5 flex-col md:flex-row w-full items-center'>
        <div className="flex  flex-col   md:text-left justify-center space-y-2 font-semibold ">
      <Image src={'/collection-1.jpg'} className='max-h-[400px] mb-5' alt="base" width={550} height={300}/>
      <h5 className='text-xs font-semibold text-center text-gray-400' >MEN</h5>
      <h1 className='text-3xl sm:text-4xl text-center'>The base collection - Ideal <br /> every day.</h1>
      
      <span className='text-center'><Button className="w-28 p-2">Shop Now</Button></span>
      </div>
      <div className='hidden lg:flex'>
      <Image src={'/tshirt_22.jpg'} alt="base" width={550} height={200} />
      </div>
    </div>
  )
}

export default BaseCollection
