import React from 'react'
import Blender from '../assets/luxury/blender.png'

const card = () => {
    return(
        <>
        <div className=' w-56 h-28 flex flex-col items-center justify-center gap-3 rounded-xl border bg-white'>
                <img src="/assets/luxury/blender.png" alt="random" className=' w-15 h-12' />
                <h3 className=' text-sm font-semibold'>Blenders & Mixers</h3>
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
            <div className='flex flex-wrap gap-5 justify-center' >
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
