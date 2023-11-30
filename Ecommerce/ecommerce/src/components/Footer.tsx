import React from 'react'
import { Button } from './ui/button'
import { NavbarArray, NavbarItemType } from './Navbar/NavbarTypes'
import { CustomLink } from './Navbar/Navbar'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
    return (
        <div className='flex flex-col text-center px-10 mb-[50px]'>
            <div className='bg-red-300  mt-[100px] flex flex-col items-center gap-20 p-20  '>
                <div>
                    <h2 className='font-semibold text-xl'>Subscribe To Get Offers In Your Inbox</h2>
                    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum</p>
                </div>
                <div className='space-y-3 sm:space-y-0 sm:space-x-2 '>
                    <input className='p-[10px] text-sm md:pr-20 text-gray-800' type="text" placeholder='Your email address...' />
                    <Button className='px-10'>Subscribe</Button>
                </div>

                <div className=' text-sm sm:text-xs '>
                    <ul className='flex gap-7 flex-col sm:flex-row '>
                        {NavbarArray.map((item: NavbarItemType, index: number) => (
                            <li key={item.key} >
                                <CustomLink href={item.href} label={item.label} />
                            </li>
                        ))}
                    </ul>

                </div>
                <div className='space-y-3 sm:space-y-0 sm:space-x-3 flex flex-col sm:flex-row'>
                    <button className='bg-white p-2 hover:bg-gray-200'><FaFacebookF size={20} className="text-black" /></button>
                    <button className='bg-white p-2 hover:bg-gray-200'><FaTwitter size={20} className="text-black" /></button>
                    <button className='bg-white p-2 hover:bg-gray-200'><IoLogoInstagram size={20} className="text-black" /></button>
                </div>


            </div>
            <div className='bg-black pt-4 pb-20 px-10'>
                <p className='text-white text-sm'>Copyright © 2023 T-Shirts Store | Powered by T-Shirts Store</p>
            </div>
        </div>
    )
}

export default Footer
