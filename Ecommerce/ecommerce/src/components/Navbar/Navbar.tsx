
import Image from 'next/image'
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Mail, Menu } from "lucide-react"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NavbarArray, NavbarItemType } from '@/components/Navbar/NavbarTypes';
import Login from '../Login';


import dynamic from "next/dynamic";
const Mobile = dynamic(() => import("@/components/Navbar/Mobile"), { ssr: false })


export interface CustomLinkProps {
  href: string;
  label: string;
  className?: string;
}

export const CustomLink = ({ href, label, className = "" }: CustomLinkProps) => {


  return (
    <Link href={href} className={`${className} group`}>
      {label}
      <span className='h-[2px] w-0 bg-black block
          group-hover:w-full transition-[width] ease duration-300
          
          '>&nbsp;</span>
    </Link>

  )
}


const navbar =  () => {
 
  

  
  return (
    <div className=' flex justify-around lg:justify-between w-full mb-7 md:mb-0'>
      <div className='p-14 text-sm hidden lg:flex'>
        <ul className='flex gap-7'>
          {NavbarArray.map((item: NavbarItemType, index: number) => (
            <li key={item.key}>
              <CustomLink href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
      </div>


      <div className=' ml-7 md:ml-0 lg:p-10 pt-10  '>
        <Image src={'/logo-regular.png'} alt='logo' width={120} height={80} />
      </div>



      <div className=' gap-10 p-12 flex  '>
        <div className='hidden md:flex'>
          <IoSearchOutline size={20} />
        </div>
        <div className='hidden lg:flex'>
          <FaShoppingCart size={20} />
        </div>
        <div className='hidden lg:flex'>
          <Login />
          

        </div>
      </div>

      {/* <div className='lg:hidden' onClick={()=> setNavbarOpen(!isNavbarOpen)}>
       {isNavbarOpen ?
       <div className='flex lg:hidden p-10 '>
       
     </div> 
         
      :

      <div className='flex lg:hidden p-10'>
        <Mobile />
      </div>
      
      }
      </div> */}
      <div className='flex lg:hidden mr-7  lg:p-10'>
        <Mobile />
      </div>
      {/* {
        isNavbarOpen && <Mobile />
      } */}
    </div>
  )
}

export default navbar
