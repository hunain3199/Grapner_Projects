import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const MenWomen = () => {
    return (
        <div className='mt-[100px] mx-10 md:mx-20  flex justify-center items-center md:space-x-5 flex-col md:flex-row '>
            <div className='flex flex-col text-center xl:items-center md:w-1/2'>
                <div>
                    <Image className='' src={"/cat-men.jpg"} alt="men" width={600} height={400} />
                </div>
                <div>
                    <Button className='w-full sm:w-[95%] -translate-y-10  md:-translate-y-20 '>MEN</Button>
                </div>
            </div>
            <div className='flex flex-col text-center xl:items-center md:w-1/2'>
                <div className=''>
                    <Image className='' src={"/cat-women.jpg"} alt="men" width={600} height={400} />
                </div>
                <div>
                    <Button className='w-full sm:w-[95%] -translate-y-10  md:-translate-y-20 '>WOMEN</Button>
                </div>
            </div>
        </div>
    )
}

export default MenWomen
