'use client'
import React from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Names{
    brands:string[];
}

const Topcategory = ({brands} : Names) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
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
                autoplaySpeed: 1800,
              }
            }
          ]
      };

  return (
    <section className=" pb-8 pt-3 overflow-hidden">
      <div className=" px-5">
        <div className=" flex  mb-4">
          <h1 className=" font-bold text-lg pr-6">
            TOP CATEGORIES
          </h1>
          <span className=" w-9/12 h-0 border-t border-gray-200 relative top-4 right-1"></span> 
          <span className="ml-20"><button className=" bg-yellow-400 px-3 py-1 rounded font-semibold">View All</button></span>
        </div>


        <Slider {...settings}>
           {
            brands.map((val,i)=>(
                <div key={i} className=" cursor-pointer overflow-hidden">
            <div className="sm:w-52 h-14 mr-2 sm:mr-4 rounded-lg flex items-center justify-center bg-white">
                <h3 className=" text-center font-semibold">{val}</h3>
            </div>
        </div>
            ))
           }
       
       
        </Slider>
       
     
      </div>
    </section>
  );
};

export default Topcategory;
