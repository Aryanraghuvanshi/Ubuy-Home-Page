import React from 'react'
import Dropdown from '@/components/Dropdown'
import Image from 'next/image'


const list =[
  "Health & Supplements",
  "Automotive",
  "Beauty & personal care",
  "Electronics",
  "Perfumes & Fragrances",
  "Grocery & Gourmet Food"
]


const Nav  = () => {
  
    return (
        <nav className="p-3 z-50 bg-white shadow-lg  sm:sticky sm:top-0 ">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold z-10"><Dropdown list={list} /></div>
            <ul className="flex space-x-4 items-center">
              <li><button className=' hidden sm:inline sm:bg-gray-900 sm:font-bold sm:text-white sm:p-2 sm:mt-1 sm:mr-2 sm:rounded sm:pr-3 sm:text-sm'>
              <Image src="/assets/smartphone.png" alt="phone" width="25" height="25" className='inline p-1 '/> Shope with Apps</button></li>
              <li className='text-nowrap text-xs sm:text-sm sm:font-semibold sm:text-end sm:cursor-pointer'><Image src="/assets/package.png"  width="30" height="20" alt="packages" className=' h-3 w-3 inline mr-3 sm:inline sm:p-1 sm:my-3 sm:mx-4 sm:h-7 sm:w-7 sm:mr-1 ' /><span className='hidden sm:inline'>Delivery : India</span></li>
              <li className='text-nowrap text-xs sm:text-sm sm:font-semibold sm:text-end sm:cursor-pointer'><Image src="/assets/earth.png"  width="27" height="20" alt="earth" className=' h-3 w-3 inline mr-3 sm:inline sm:p-1 sm:my-3 sm:mx-4 sm:h-7 sm:w-7 sm:mr-1 ' /><span className='hidden sm:inline'> English</span> </li>
              <li className='text-nowrap text-xs sm:text-sm sm:font-semibold sm:text-end sm:cursor-pointer'><Image src="/assets/person.png"  width="25" height="20" alt="person" className=' h-3 w-3 inline mr-3 sm:inline sm:p-1 sm:my-3 sm:mx-4 sm:h-7 sm:w-7 sm:mr-1 ' /><span className='hidden sm:inline'>  Account</span></li>
              <li className=' cursor-pointer'><Image src="/assets/cart.png" width="40" height="20" alt="cart" className='h-5 w-5 sm:p-2 sm:h-10 sm:w-10' /><div className='w-3 h-3 flex items-center justify-center top-4 right-2 text-xs bg-gray-900 text-center sm:text-sm font-bold sm:w-5 sm:h-5 text-white absolute sm:top-4 sm:right-3 rounded-3xl '>0</div></li>
            </ul>
          </div>
        </nav>
      );
}

export default Nav
