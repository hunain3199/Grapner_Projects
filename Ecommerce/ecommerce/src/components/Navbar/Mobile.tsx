
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Mail, Menu, Sidebar } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import MobileNavbar from './MobileNavbar'


const Mobile = () => {
  
    
  return (
    <Sheet >
      <SheetTrigger className='mt-7 md:mt-0'>
        <Button variant="ghost" size="icon" className="lg:hidden ">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0">
        <MobileNavbar />
      </SheetContent>
    </Sheet>
  )
}

export default Mobile
