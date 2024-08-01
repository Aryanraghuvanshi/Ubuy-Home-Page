'use client'
import React from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Names{
    names:string[];
}

const Hotbrand = ({names} : Names) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 3000,
        cssEase: "ease",
        pauseOnHover: false
      };

  return (
    <section className=" pb-8 pt-5 overflow-hidden">
      <div className=" px-5">
        <div className=" flex  mb-4">
          <h1 className=" font-bold text-lg pr-6">
            HOTTEST BRANDS
          </h1>
          <span className=" w-9/12 h-0 border-t border-gray-200 relative top-4 right-1"></span> 
          <span className="ml-20"><button className=" bg-yellow-400 px-3 py-1 rounded font-semibold">View All</button></span>
        </div>


        <Slider {...settings}>
           {
            names.map((val,i)=>(
                <div key={i} className=" cursor-pointer overflow-hidden">
            <div className="w-52 h-14 rounded-lg flex items-center justify-center bg-white">
                <h3 className=" font-semibold">{val}</h3>
            </div>
        </div>
            ))
           }
       
       
        </Slider>
       
     
      </div>
    </section>
  );
};

export default Hotbrand;
