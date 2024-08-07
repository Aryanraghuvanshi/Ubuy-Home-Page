'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imgsrc=[
    {
        title:"Buy Imported Products From US",
        src:"https://d2ati23fc66y9j.cloudfront.net/2023/homepage/product-store/us.jpg.webp?v=1.0",
    },
    {
        title:"Buy Imported Products From UK",
        src:"https://d2ati23fc66y9j.cloudfront.net/2023/homepage/product-store/uk.jpg.webp?v=1.0"
    },
    {
        title:"Buy Imported Products From JAPAN",
        src:"https://d2ati23fc66y9j.cloudfront.net/2023/homepage/product-store/japan.jpg.webp?v=1.0"
    },
    {
        title:"Buy Imported Products From Europe",
        src:"https://d2ati23fc66y9j.cloudfront.net/2023/homepage/product-store/europe.jpg.webp?v=1.0"
    },
    {
        title:"Buy Imported Products From Hong Kong",
        src:"https://d2ati23fc66y9j.cloudfront.net/2023/homepage/product-store/hong-kong.jpg.webp?v=1.0"
    },
    {
        title:"Buy Imported Products From Korea",
        src:"https://d2ati23fc66y9j.cloudfront.net/2023/homepage/product-store/korea.jpg.webp?v=1.0"
    },
    {
        title:"Buy Imported Products From China",
        src:"https://d2ati23fc66y9j.cloudfront.net/2023/homepage/product-store/china.jpg.webp?v=1.0"
    },
    {
        title:"Buy Imported Products From Turkey",
        src:"https://d2ati23fc66y9j.cloudfront.net/2023/homepage/product-store/turkey.jpg.webp?v=1.0"
    },

]


const Worldstore = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 3000,
        cssEase: "ease",
        pauseOnHover: false,
        arrows:false
      };

  return (
    <section className=" pb-8 pt-5 overflow-hidden">
      <div className=" px-5">
        <div className=" flex  mb-4">
          <h1 className=" font-bold text-lg pr-6">
          PREMIUM PRODUCTS FROM WORLDWIDE STORES IN India
          </h1>
          <span className=" w-7/12 h-0 border-t border-gray-200 relative top-4 right-1"></span> 
        </div>


        <div className='grid sm:grid-cols-6 grid-cols-2 gap-4'>

            {imgsrc.map((val ,i)=>(
                 <div key={i} className='w-44  sm:w-56 sm:h-52 bg-white rounded-xl'>
                 <div>
                     <img src={val.src} alt="" className='h-32 w-full rounded-t-xl ' />
                 </div>
                 <div>
                     <p className='text-gray-700 text-sm font-semibold text-center pt-1 sm:pt-5'> {val.title}</p>
                 </div>
             </div>
            ))
            }

            <div className='w-[700px]'>
            <Slider {...settings}>
           <div >
            <div className='w-[360px] sm:w-[700px] h-52 bg-white rounded-xl'>
            <div>
                     <img src="https://d2ati23fc66y9j.cloudfront.net/2024/homepage/product-store/korean-beauty.jpg.webp" alt="" className='h-32 w-full rounded-t-xl object-cover' />
                 </div>
                 <div>
                     <p className='px-3 text-sm font-semibold text-center pt-3 text-gray-500'> Say Goodbuy To Dull Skin & Hello To</p>
                 </div>
                 <div><p className=' text-center font-bold'>Korean Beauty</p></div>
            </div>
            </div> 


           <div  >
            <div className='w-[360px] sm:w-[700px] h-52 bg-white rounded-xl'>
                 <div>
                     <img src="https://d2ati23fc66y9j.cloudfront.net/2024/homepage/product-store/harley.jpg.webp" alt="" className='h-32 w-full rounded-t-xl object-cover' />
                 </div>
                 <div>
                     <p className='px-3 text-sm font-semibold text-center pt-3 text-gray-500'> Gear Up & Join The Ride With <span className='text-black font-bold'>Harley</span></p>
                 </div>
                 <div><p className=' text-center font-bold'>Davidson</p></div></div>
                
            </div>
            </Slider>
            </div>
        </div>
       
       
       
       
       
     
      </div>
    </section>
  )
}

export default Worldstore
