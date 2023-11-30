export interface NavbarItemType{
    label:string,
    href:string,
    key:number
    
}

export const NavbarArray:Array<NavbarItemType> = [
    {
        label:"BUY T-SHIRTS",
        href:"/tshirts",
        key:1,
        
       
    
        
    },
    {
        label:"WOMEN",
        href:"/women",
        key:2,
        
        
    },
    {
        label:"MEN",
        href:"/men",
        key:3,
        
        
    },
    {
        label:"ABOUT",
        href:"/about",
        key:4,
        
    },
    {
        label:"CONTACT",
        href:"/contact",
        key:5,
        
    },
]