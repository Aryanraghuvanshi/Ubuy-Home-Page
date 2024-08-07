import React from 'react'
import Carousel from '@/components/Brandimg'

const images =[
      {
        logo:"https://d2ati23fc66y9j.cloudfront.net/home/brand-banner/zara-logo.png.webp?v=1.0",
        text:'Latest Trendsetting Styles.Only Available At Ubuy',
        src:'https://d2ati23fc66y9j.cloudfront.net/home/brand-banner/zara-bg.jpg.webp?v=1.0',
      },
      {
        logo:"https://d2ati23fc66y9j.cloudfront.net/home/brand-banner/gucci-logo.png.webp?v=1.0",
        text:"Iconic Luxurious Collection,Available Exclusively at Ubuy.",
        src:"https://d2ati23fc66y9j.cloudfront.net/home/brand-banner/gucci-bg.jpg.webp?v=1.0",
      },
      {
        logo:"https://d2ati23fc66y9j.cloudfront.net/home/brand-banner/dior-logo.png.webp?v=1.0",
        text:"Experience Iconic Parisian Elegance.Exclusive At Ubuy",
        src:"https://d2ati23fc66y9j.cloudfront.net/home/brand-banner/dior-bg.jpg.webp?v=1.0",
      },
      {
        logo:"https://d2ati23fc66y9j.cloudfront.net/home/brand-banner/harley-homepage-logo.png.webp?v=1.0",
        text:"",
        src:"https://d2ati23fc66y9j.cloudfront.net/home/brand-banner/home-page-desktop-banner.jpg.webp?v=1.0",
      },
];

const Brands = () => {
  return (
    <>
      <section className=' mb-8'>
        <div className=' px-5'>
            <div className='flex mb-4'>
            <h2 className=" font-bold text-lg pr-6">
              THE TOP BRANDS OF TOMORROW
            </h2>
            </div>
            <div className='mb-10 h-52 sm:h-full'>
                < Carousel images = {images} />
            </div>
        </div>
      </section>
    </>
  )
}

export default Brands
