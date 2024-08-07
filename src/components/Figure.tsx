import React from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Type{
  title:string;
  imgscr:string;
}

const figure = ({ hero } : any) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "ease",
    pauseOnHover: false,
    arrows:false,
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
          speed:300,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed:300,
          autoplay: true,
        }
      }
    ]
  };
  return (
    <>
      <section className=" pb-8 overflow-hidden">
        <div className=" px-5">
          <div className=" flex  mb-4">
            <h1 className=" text-sm font-bold sm:text-lg sm:pr-6">
              ACTION FIGURES STORE
            </h1>
            <span className=" hidden sm:inline sm:w-7/12 sm:h-0 sm:border-t sm:border-gray-200 sm:relative sm:top-4 sm:right-1"></span>
          </div>

          {/* <div className=" flex gap-3 transform "> */}
          <Slider {...settings}>
            {hero.map((val : Type, i:number) => (
              <div className=" overflow-hidden" key={i}>
                <div className=" sm:pr-3 w-40 sm:w-60 sm:h-24 rounded-lg bg-white">
                  <div className="flex  items-center">
                    <figure>
                      <img
                        src={val.imgscr}
                        alt="hero"
                        className=" object-cover w-36 h-24 rounded-l-lg "
                      />
                    </figure>
                    <h3 className="pl-3 text-sm font-bold">{val.title}</h3>
                  </div>
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

export default figure;
