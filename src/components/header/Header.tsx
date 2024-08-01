import React from "react";
import Carousel from "@/components/Carousel";
import Banner from "@/components/Banner";
import Search from "@/components/Search";
import Slider from "@/components/Slider";
import Card from "@/components/Card";

const images = [
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171636231812.jpg.webp?v=1.0",
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171592385142.jpg.webp?v=1.0",
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171568970824.jpg.webp?v=1.0",
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171334749814.jpg.webp?v=1.0",
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171836809548.jpg.webp?v=1.0",
];

const titals = [
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171636232369.png.webp?v=1.0",
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171592385599.png.webp?v=1.0",
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171594805047.png.webp?v=1.0",
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171411011423.png.webp?v=1.0",
  "https://d2ati23fc66y9j.cloudfront.net/ubuydeals-v2/banner-171836809841.png.webp?v=1.0",
];

const data : string[] = [];

const Header = () => {
  return (
    <header >
      <div>
        <div className=" max-h-screen ">
          <Carousel images={images} />
        </div>
        <div className="h-full w-full p-0 pt-32">
          <Banner images ={titals} />
        </div>
      </div>

      <div className=" relative top-80 left-1/4 border border-gray-300 bg-gray-50 w-1/2 h-36 rounded-3xl">
        <Search data={data} />
        <div className=" mt-3">
          <h3 className=" pl-10 pt-4  text-lg inline">Order From</h3>
          <Slider />
        </div>
      </div>

      <div className=" relative top-96 mt-9">
        <img
          src="https://d2ati23fc66y9j.cloudfront.net/d2c_2024/d2c_banner_web_eng.gif"
          alt="image"
          className=" object-cover"
        />
      </div>

      <div className="mt-96"></div>
      <section className=" bg-white mb-10">
        <div className=" py-7">
          <div className=" px-7">
            <div className="flex justify-between">
            <Card />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
