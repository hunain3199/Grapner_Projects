import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const SpringCollection = () => {
  return (
    <div className='lg:flex items-center mx-10 flex-col md:flex-row hidden   '>
      <div className='bg-red-300 pl-10  pr-[150px] mt-[100px]  lg:mt-[200px] w-1/2'>
      <Image className='-translate-y-10 lg:-translate-y-40' src={'/collection-03.jpg'} alt='collection-3'  width={500} height={300}/>
      </div>
      <div className=" text-left w-1/2 sm:-translate-x-20 space-y-3  ">
      <h5 className='text-xs font-semibold  text-gray-800 lg:text-gray-200' >WOMEN</h5>
      <h1 className='text-3xl font-bold sm:text-4xl '>Spring Summer Collection</h1>
      <p className='text-sm text-gray-800 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci. Aliquam venenatis dui lectus, eu convallis turpis convallis et. Pellentesque.</p>
      
      <span className=''><Button className="w-50 p-4">See Whole Collection</Button></span>
      </div>
    </div>
  )
}

export default SpringCollection
