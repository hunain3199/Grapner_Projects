
import React, { cache } from 'react'
import { client } from '../../sanity/lib/client'
import Image, { StaticImageData } from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import { Image as image} from 'sanity'
import ProductCart from './ProductCart'

export const ProductData = async()=>{
  const res = await client.fetch(`*[_type == "products" ]{
    price,
    _id,
    title,
    image,
    productTypes
  }`)
  return res
}


interface IProduct {
  title:string,
  _id:string,
  description:string,
  price:number,
  image:image,
  productTypes:string
  
}



const PopularTshirts = async () => {
  const data:IProduct[] = await ProductData()
   
  console.log(data)
  return (
    <div className='w-full'>
      <div className='text-center mt-[100px]  flex flex-col '>
      <h5 className='text-xs text-gray-600 '>SUMMER COLLECTION</h5>
      <h1 className='text-4xl font-bold mt-1 '>Popular T-Shirts</h1>
      </div>
      <div className=' justify-center gap-x-1 md:gap-x-5   flex flex-col sm:flex-row items-center'>
      {
        
      data.map((item)=>(
        
        <div key={item._id} className='space-y-1  '>
          <Image className='max-h-[800px] mt-10' src={urlForImage(item.image).url()} width={265} height={300} alt='product' />
          <h5 className='text-xs pl-3 text-gray-400'>{item.productTypes}</h5>
          <h1 className=' font-bold text-lg pl-3'>{item.title}</h1>
          <h2 className='pl-3  text-sm'>${item.price}</h2>
        </div>
        
      ))}
    

    </div>
    </div>
  )
}

export default PopularTshirts
