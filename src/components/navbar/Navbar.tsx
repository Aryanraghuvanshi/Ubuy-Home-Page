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
        <nav className="p-3 z-50 bg-white shadow-lg  sticky top-0 ">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold z-10"><Dropdown list={list} /></div>
            <ul className="flex space-x-4 items-center">
              <li><button className=' bg-gray-900 font-bold text-white p-2 mt-1 mr-2 rounded pr-3 text-sm'>
              <Image src="/assets/smartphone.png" alt="phone" width="25" height="25" className='inline p-1 '/> Shope with Apps</button></li>
              <li className=' font-semibold text-end cursor-pointer'><Image src="/assets/package.png"  width="30" height="20" alt="packages" className=' inline p-1 my-3 mx-4 h-7 mr-1' />Delivery : India</li>
              <li className=' font-semibold text-end cursor-pointer'><Image src="/assets/earth.png"  width="27" height="20" alt="earth" className=' inline p-1 my-3 mx-4 h-7 mr-1' />English</li>
              <li className=' font-semibold text-end cursor-pointer'><Image src="/assets/person.png"  width="25" height="20" alt="person" className=' inline p-1 my-3 mx-4 h-7 mr-1' />Account</li>
              <li className=' cursor-pointer'><Image src="/assets/cart.png" width="40" height="20" alt="cart" className='p-2 h-10' /><div className=' bg-gray-900 text-center text-sm font-bold w-5 h-5 text-white absolute top-4 right-3 rounded-3xl '>0</div></li>
            </ul>
          </div>
        </nav>
      );
}

export default Nav
