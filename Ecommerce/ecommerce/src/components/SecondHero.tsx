import React from 'react'
import Image from "next/image"
const SecondHero = () => {
  return (
    <div className="mt-[50px] lg:mt-[100px] w-full p-10 ">
            <Image className='' src={"/secondhero.webp"} alt='secondhero' width={1400} height={400} />
    </div>
  )
}

export default SecondHero
