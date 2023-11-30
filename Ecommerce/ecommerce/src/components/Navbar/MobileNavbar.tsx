
import React from 'react'
import { CustomLink } from './Navbar'
import { NavbarArray, NavbarItemType } from './NavbarTypes'
import { Button } from '../ui/button'
import { Mail } from 'lucide-react'
import { FaShoppingCart } from 'react-icons/fa'
import Login from '../Login'



const MobileNavbar =  () => {
    
    return (
        <div className='bg-gray-100 px-6 py-4 m-10 space-y-2   lg:hidden '>

            <div className=' '>
                {
                    NavbarArray.map((item: NavbarItemType, index: number) => {
                        return (

                            <CustomLink key={item.key} href={item.href} label={item.label} />


                        )
                    })
                }
            </div>
            <div>
                <FaShoppingCart size={20} />
            </div>
            <div className=''>
               <Login />
            </div>

        </div>
    )
}

export default MobileNavbar
