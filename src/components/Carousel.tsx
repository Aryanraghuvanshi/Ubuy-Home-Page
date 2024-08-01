'use client'
import React, { useState, useEffect } from 'react';

interface Img {
  images: string[]
}

const Carousel = ({ images } : Img) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=" w-full max-h-screen">
      {images.map((image : string, index : number) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={` absolute -z-10 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
