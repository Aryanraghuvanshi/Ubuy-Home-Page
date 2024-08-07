import React from 'react'
import Blender from '../assets/luxury/blender.png'

const card = () => {
    return(
        <>
        <div className=' sm:w-56 sm:h-28 flex flex-col items-center justify-center gap-3 rounded-xl border bg-white'>
                <img src="/assets/luxury/blender.png" alt="random" className='w-10  pt-2 sm:pt-0 sm:w-15 sm:h-12' />
                <h3 className=' text-center text-sm font-semibold'>Blenders & Mixers</h3>
               </div>
        </>
    )
}

const Luxury = () => {
  return (
    <>
      <section className=' mb-8'>
      <div className=' px-5'>
            <div className='flex mb-4'>
            <h2 className=" font-bold text-lg pr-6">
              EXPLORE PREMIUM & LUXURY BRANDS & PRODUCTS FROM THE OVERSEAS MARKET IN INDIA
            </h2>
            </div>
            <div className=' grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-5 justify-center' >
               {card()}
               {card()}
               {card()}
               {card()}
               {card()}
               {card()}
               {card()}
               {card()}
               {card()}
               {card()}
               {card()}
               {card()}
               
            </div>
        </div>
      </section>
    </>
  )
}

export default Luxury
