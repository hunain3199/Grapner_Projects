"use client"
import React, { FC } from 'react'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'




const ProductCart: FC<{item:any}> = ({item}) => {
   
     const src = urlForImage(item.image).url()  
  return (
    <>
      <Image className='max-h-[400px] mt-10' src={src} width={300} height={300} alt='product' />
          <h5>{item.productTypes}</h5>
          <h1 className='pt-3 font-semibold text-lg'>{item.productName}</h1>
          <h2 className='pt-2'>${item.price}</h2>
    </>
  )
}

export default ProductCart
