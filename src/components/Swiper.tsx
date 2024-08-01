'use client'
import React, { useState,useEffect } from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type  objarr = {
  title: string;
  imgscr: string;
  
}

interface Dta{
  data : {
    title: string,
    imgscr : string
  }[]
}


const swiper = ({ data } : Dta ) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "ease",
    pauseOnHover: false
  };

  const [position, setPosition] = useState(0);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPosition((prevPosition) =>  (prevPosition + 50)% data.length);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <section className=" pb-8 overflow-hidden">
        <div className=" px-5">
          <div className=" flex  mb-4">
            <h1 className=" font-bold text-lg pr-6">
              INTERNATIONAL ONLINE SHOPPING MADE EASY AT UBUY INDIA
            </h1>
            <span className=" w-7/12 h-0 border-t border-gray-200 relative top-4 right-1"></span>
          </div>
          {/* <div className=" flex gap-3 transform transition-transform duration-300"
          style={{ transform: `translateX(-${position * 10}px)` }}  > */}
         
         <Slider {...settings}>
            {data.map((val :objarr , i : number ) => (
              
              <div className=" cursor-pointer  overflow-hidden" key={i}>
              <div className=" px-3 w-60 h-24 rounded-lg bg-white">
                <h2 className=" pb-4 font-semibold">{val.title}</h2>
                <figure className=" flex justify-between">
                  <button className=" opacity-65">{">"}</button>
                  <img
                    src={val.imgscr}
                    alt="car"
                    className=" w-16 h-16 object-contain"
                  />
                </figure>
              </div>
              </div>
              
            ))}
            </Slider>
          {/* </div> */}
         
        </div>
      </section>
    </>
  );
};

export default swiper;
