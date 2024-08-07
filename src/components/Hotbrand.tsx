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
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2,
                speed:300,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow:2,
                slidesToScroll: 1,
                speed:500,
                autoplaySpeed: 1500,
              }
            }
          ]
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
                <div key={i} className=" cursor-pointer overflow-hidden ">
            <div className="sm:w-52 h-14 mr-2 rounded-lg flex items-center justify-center bg-white">
                <h3 className=" font-semibold text-center">{val}</h3>
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
