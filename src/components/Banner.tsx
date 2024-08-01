'use client'
import React, { useState, useEffect } from 'react';

type User = {
  images : string[]
}

const Carousel = ({ images } : User) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="  flex  justify-center">
      {images.map((image : string, index : number) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={` absolute w-56 h-56 object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
