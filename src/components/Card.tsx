'use client'
import React from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = () => {
  return (
    <>
    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/cashback.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">100% Money Back Guarantee</div>
      </div>
    </div>
    
    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/us-dollar.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">Lowest Overall Order Cost</div>
      </div>
    </div>

    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/brand.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">Premium & Luxury Brands</div>
      </div>
    </div>

    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/d-box.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">Worldwide Shipping</div>
      </div>
    </div>

    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden  ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/order.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">300M+ International Products</div>
      </div>
    </div>
    </>
  );
};

const Card2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 2000,
    cssEase: "ease",
    arrows: false,
    pauseOnHover: false
  };
  return (
    <>
    
      
      <div className="w-full">
      <Slider {...settings}>
    <div className=" w-72 h-36 rounded flex flex-col bg-white pt-2 items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-10 h-16 mx-auto object-contain" src="/assets/icons/cashback.png" alt="brand" />
      <div className="px-2 py-4 flex items-center justify-center">
        <div className=" font-semibold text-sm mb-2">100% Money Back Guarantee</div>
      </div>
    </div>
    
    <div className=" w-72 h-36 rounded flex flex-col bg-white pt-2 items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-10 h-16 mx-auto object-contain" src="/assets/icons/us-dollar.png" alt="brand" />
      <div className="px-2 py-4 flex items-center justify-center">
        <div className=" font-semibold text-sm mb-2">Lowest Overall Order Cost</div>
      </div>
    </div>

    <div className=" w-72 h-36 rounded flex flex-col bg-white pt-2 items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-10 h-16 mx-auto object-contain" src="/assets/icons/brand.png" alt="brand" />
      <div className="px-2 py-4 flex items-center justify-center">
        <div className=" font-semibold text-sm mb-2">Premium & Luxury Brands</div>
      </div>
    </div>

    <div className=" w-72 h-36 rounded flex flex-col bg-white pt-2 items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-10 h-16 mx-auto object-contain" src="/assets/icons/d-box.png" alt="brand" />
      <div className="px-2 py-4 flex items-center justify-center">
        <div className=" font-semibold text-sm mb-2">Worldwide Shipping</div>
      </div>
    </div>

    <div className=" w-72 h-36 rounded flex flex-col bg-white pt-2 items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-10 h-16 mx-auto object-contain" src="/assets/icons/order.png" alt="brand" />
      <div className="px-2 py-4 flex items-center justify-center">
        <div className=" font-semibold text-sm mb-2">300M+ International Products</div>
      </div>
    </div>
    </Slider>
    </div>
    

    </>
  );
};

export default Card;
export {Card2};