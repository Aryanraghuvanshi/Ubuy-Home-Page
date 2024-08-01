'use client'
import React, { useEffect, useState } from 'react';



const ImageSlider = () => {
  const [position, setPosition] = useState(0);

  const handleLeftClick = () => {

    setPosition((prevPosition) => prevPosition === -160? prevPosition : prevPosition - 80);
  };

  const handleRightClick = () => {
    setPosition((prevPosition) => prevPosition === 0 ? prevPosition : prevPosition + 80);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleLeftClick();
    }, 1500);

    const inter = setInterval( () =>{
      handleRightClick();
    },3000)

    return () =>{  clearInterval(interval); }
  }, []);


  return (
    <div className=' absolute top-16 right-12 w-9/12'>
    <div className="flex mt-3 w-12/12 items-center justify-center h-12">
      <button 
        onClick={handleLeftClick} 
        className="text-2xl p-2  mx-2"
      >
        {'<'}
      </button>
      <div className='  overflow-hidden ' >
        <div 
          className=" flex gap-5 w-4/12   transform transition-transform duration-300"
          style={{ transform: `translateX(${position}px)` }}
        >
          <img 
            src="/assets/flags/us.svg" 
            alt="Sliding" 
            className=" h-8  rounded-md"
            
          />
          <img 
            src="/assets/flags/uk.svg" 
            alt="Sliding" 
            className=" h-8  rounded-md"
            
          />
          <img 
            src="/assets/flags/ch.svg" 
            alt="Sliding" 
            className=" h-8  rounded-md"
            
          />
          <img 
            src="/assets/flags/kr.svg" 
            alt="Sliding" 
            className=" h-8  rounded-md"
            
          />
          <img 
            src="/assets/flags/jp.svg" 
            alt="Sliding" 
            className=" h-8  rounded-md"
            
          />
          <img 
            src="/assets/flags/hk.svg" 
            alt="Sliding" 
            className=" h-8  rounded-md"
            
          />
          <img 
            src="/assets/flags/tr.svg" 
            alt="Sliding" 
            className=" h-8  rounded-md"
            
          />
          <img 
            src="/assets/flags/eu.svg" 
            alt="Sliding" 
            className=" h-8  rounded-md"
            
          />
          
        </div>
      </div>
      <button 
        onClick={handleRightClick} 
        className="text-2xl p-2 mx-2"
      >
        {'>'}
      </button>
    </div>
    </div>
  );
};

export default ImageSlider;
