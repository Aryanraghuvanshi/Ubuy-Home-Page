"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const names = [
  "https://ubuykw.s3.amazonaws.com/ubuycom/featuredIn/featuredIn-169710768658.svg",
  "https://ubuykw.s3.amazonaws.com/ubuycom/featuredIn/featuredIn-169710770712.svg",
  "https://ubuykw.s3.amazonaws.com/ubuycom/featuredIn/featuredIn-169710773623.svg",
  "https://ubuykw.s3.amazonaws.com/ubuycom/featuredIn/featuredIn-169710775736.svg",
  "https://ubuykw.s3.amazonaws.com/ubuycom/featuredIn/featuredIn-169710778558.svg",
  "https://ubuykw.s3.amazonaws.com/ubuycom/featuredIn/featuredIn-169710753175.svg",
  "https://ubuykw.s3.amazonaws.com/ubuycom/featuredIn/featuredIn-169710758418.svg",
  "https://ubuykw.s3.amazonaws.com/ubuycom/featuredIn/featuredIn-169710765354.svg",
];

const Featured = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: "ease",
    pauseOnHover: false,
    arrows:false,
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
      <div className=" px-5 mb-10">
        <div className=" flex  mb-4">
          <h1 className=" font-bold text-xl pr-6">Featured In</h1>
          <span className=" w-[90%] h-0 border-t border-gray-200 relative top-4 right-1"></span>
        </div>

        <Slider {...settings}>
          {names.map((val, i) => (
            <div key={i}>
              <div
              className="  sm:w-[270px] sm:h-28 mr-1 flex justify-center items-center bg-white rounded-xl"
            >
              <img src={val} alt="" className="w-40 h-20 object-contain sm:w-72 sm:h-20 sm:mt-4 sm:object-cover" />
            </div>
            </div>
            
          ))}
        </Slider>
      </div>

      <div className="px-5">
        <div >
          <h4 className="text-2xl pl-5 pb-1 font-extrabold">Ubuy India</h4>
          <p className="text-gray-600 font-bold pl-5">
            A Leading International Online Shopping Store for Luxury Brands &
            Premium Products in India
          </p>
          <div className="w-[100%] h-1 mt-5 border-t border-gray-400"></div>
        </div>

        <div className="mt-7">

        <p className="pl-5 mb-4 text-sm text-gray-500">With a legacy of brilliance going back 13 years, Ubuy India is a major online shopping player today. Crowned as the “Best Cross-Border Shopping Brand” for the second time in a row in 2024, Ubuy is one of the top international online shopping platforms worldwide. Explore an extensive range of imported products and experience seamless cross border shopping with Ubuy!</p>
        <p className="pl-5 mb-4 text-sm text-gray-500">Ubuy makes top brands accessible with its numerous categories and brands. From International online shopping stores to global online brands, our platform fulfils all your needs. As one of the best international online shopping websites, Ubuy ensures the best in quality and efficacy.</p>
        <p className="pl-5 mb-4 text-sm text-gray-500">Indulge in luxury as you shop from Dior and Gucci, or experience your childhood again with toys and games from Lego and Funky Pops. Our multi-store eCommerce platform has everything you want, wherever you want it from, all under one roof. Ubuy ensures robust payment security procedures with PCI DSS and SSL certification.</p>
        <p className="pl-5 mb-4 text-sm text-gray-500">You can also download our international shopping app for an even more seamless cross-border experience! Our user-friendly, dynamic, and trusted platform has received numerous positive testimonials and industry accolades. With the finest products in the market, Ubuy is a one-stop shop for all your desires.</p>
        <p className="pl-5 mb-4 text-sm text-gray-500">Get products from any Ubuy store, whether browsing <a href="https://www.ubuy.co.in/shop-import-products-from-uk" rel="noopener noreferrer" target="_blank">automotive parts in the UK store</a> or selecting <a href="https://www.ubuy.co.in/korean-beauty-products" rel="noopener noreferrer" target="_blank">Korean beauty products</a> to get the best deals and discounts. From skincare, baby food, and electronics to toys and home essentials, we have it all!</p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
