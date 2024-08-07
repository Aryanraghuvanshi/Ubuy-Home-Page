"use client"
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data=[
    {
        src:'https://images-cdn.ubuy.co.in/63bd279dd0b9721c3347eea3-prime-hydration-sports-drink-variety.jpg',
        text:'Prime Hydration Drink'
    },
    {
        src:'https://images-cdn.ubuy.co.in/63bce24daee2275edf2990b3-energy-drink-bang-potent-brain-and.jpg',
        text:'Bang Energy Drink'
    },
    {
        src:'https://images-cdn.ubuy.co.in/63866e5fdb5c442b6c675f13-zoa-energy-drink-bundle-all-16oz.jpg',
        text:'ZOA Energy Drink'
    },
    {
        src:'https://images-cdn.ubuy.co.in/636f86c30f560537a67c5b42-c4-energy-drink-superhuman-performance.jpg',
        text:'C4 Energy Drink'
    },
    {
        src:'https://images-cdn.ubuy.co.in/63aaabc7faa144030519881b-nos-high-performance-energy-drink.jpg',
        text:'NOS Energy Drink'
    },
    {
        src:'https://images-cdn.ubuy.co.in/65d825a8f144fd6b2747b87c-lucozade-alert-cherry-blast-energy-drink.jpg',
        text:'Lucozade Energy Drink'
    },
    {
        src:'https://images-cdn.ubuy.co.in/633bbf2f7cbe3356726285a2-rockstar-xdurance-variety-pack-16oz-12pk.jpg',
        text:'Rockstar Energy Drink'
    },
    {
        src:'https://images-cdn.ubuy.co.in/63bd2917065af0316d2be569-reign-total-body-fuel-zero-sugar-veriety.jpg',
        text:'Reign Energy Drink'
    },
    {
        src:'https://images-cdn.ubuy.co.in/63bd293d8dd10570537d312c-energy-drinks-16-ounce-cans-4-flavor.jpg',
        text:'Ghost Energy Drink'
    },
    {
        src:'https://images-cdn.ubuy.co.in/63bd295f880ecc00360e0be2-nocco-bcaa-energy-drink-summer-variety.jpg',
        text:'Nocco Energy Drink'
    },
]

const Drinks = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "ease",
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                speed:300,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed:500,
                autoplaySpeed: 1500,
              }
            }
          ]
      };

  return (
    <section className=' mb-12'>
    <div className='px-5'>
        <div className='flex mb-4'>
        <h2 className=" font-bold text-lg pr-4">
          MOST POPULAR ENERGY DRINK BRANDS NOW AVAILABLE IN INDIA
        </h2>
        <span className=" w-[47%] h-0 border-t border-gray-200 relative top-4 right-1"></span> 
        <span className="ml-20"><button className=" bg-yellow-400 px-3 py-1 rounded font-semibold">View All</button></span>
        </div>

          
      <Slider {...settings}>
       {data.map((val,i)=>(
        <div key={i}  >
         <div  className='w-[173px] sm:w-[186] h-44 md:w-[340px] sm:h-[340px] bg-white rounded-xl mx-auto sm:mx-auto relative'>
         <div className='flex items-center justify-center'>
             <img src={val.src} alt="" className='pt-8 h-24 w-20 sm:h-56 sm:w-44 '/>
         </div>
         <div>
             <div className='pl-4 sm:pl-10 pt-3 flex items-center'>
                 <img src="/assets/flags/us.svg" alt="" className='w-6 h-6 sm:w-7 sm:h-7  ' />
                 <span className='pl-3 text-xs'>US Store</span>
             </div>
             <div className='pl-4 sm:pl-10 pt-2 text-xs sm:text-lg'>
                 <h6 >{val.text}</h6>
             </div>
         </div>
         <div className='absolute bottom-1 right-2 sm:bottom-2 sm:right-4'> <img src="/assets/express.png" alt="delivery" className='w-6 h-6 sm:w-10 sm:h-10' /></div>
     </div>
     </div>
       ))
       }
       
       </Slider>
        
  
       
    </div>
  </section>
  )
}

export default Drinks
