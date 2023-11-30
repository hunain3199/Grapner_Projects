import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    
    <div className='bg-red-300 flex flex-col md:flex-row mx-7 md:mx-10 px-10 justify-between pt-10 md:pt-0'>

    <div className="flex  flex-col text-center md:text-left justify-center space-y-5 font-bold ">
      <h5 className='text-xs font-semibold' >WOMEN</h5>
      <h1 className='text-3xl sm:text-5xl'>Slick. Modern. <br /> Awesome.</h1>
      
      <Button>Shop Collection</Button>
    </div>
    <div className="">
        <div className='border-none bg-white rounded-full mt-10 md:mt-[-25px]'>
          <Image src={'/hero.png'} alt='logo' width={600} height={500} />
        </div>
        </div>
    </div>
    
  )
}

export default Hero
