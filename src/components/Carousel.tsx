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
    <div className="sm:w-full sm:max-h-screen">
      {images.map((image : string, index : number) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={` absolute  h-[90%] w-[100vw]  sm:w-full sm:h-full sm:object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
