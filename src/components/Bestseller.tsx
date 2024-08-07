import React from 'react'

const Bestseller = () => {
  return (
    <section className="mb-5 sm:mb-10">
    <div className=" px-5">
      <div className="flex mb-4">
        <h2 className=" font-bold text-lg pr-6">BEST SELLER</h2>
        <span className=" w-[88%] h-0 border-t border-gray-200 relative top-4 right-1"></span>
      </div>

      <div className="flex flex-row flex-wrap sm:flex-nowrap ">

        <div className="w-full h-[210px] sm:w-[750px] sm:h-[350px] grid grid-cols-2 gap-1 sm:gap-0 sm:flex  sm:flex-nowrap">
          <div className="w-[172px] h-[200px] sm:w-[360px] sm:h-[350px] overflow-hidden bg-white rounded-xl mr-2 sm:mr-4 relative">
          <div className="absolute top-4 left-4">
              
              <img
                src="/assets/bestseller.png"
                alt="delivery"
                className="w-5 h-5 sm:w-7 sm:h-7"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c8b-hong-in-crystal-table-lamp-rose-gold.jpg"
                alt=""
                className="pt-1 h-20 object-contain sm:pt-8 sm:h-56 sm:w-44 "
              />
            </div>
            <div>
              <div className="pl-3 sm:pl-10 pt-3 flex items-center">
                <img
                  src="/assets/flags/us.svg"
                  alt=""
                  className="w-6 h-6 sm:w-7 sm:h-7  "
                />
                <span className="pl-3 text-xs">US Store</span>
              </div>
              <div className="pl-3 sm:pl-10 pt-2">
                <h6 className="text-xs sm:text-sm ">
                Hong-in Crystal Table Lamp, Rose Gold Lamp with USB C+A Ports, 3 Way...
                </h6>
              </div>
            </div>
            <div className="absolute bottom-2 right-4">
              
              <img
                src="/assets/express.png"
                alt="delivery"
                className="w-6 h-6 sm:w-10 sm:h-10"
              />
            </div>
          </div>

          <div className="w-[172px] h-[200px] sm:w-[360px] sm:h-[350px] overflow-hidden bg-white rounded-xl mr-2 sm:mr-4 relative">
          <div className="absolute top-4 left-4">
              
              <img
                src="/assets/bestseller.png"
                alt="delivery"
                className="w-5 h-5 sm:w-7 sm:h-7"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c8c-retro-bluetooth-speaker-mini-wireless.jpg"
                alt=""
                className="pt-1 h-20 object-contain sm:pt-8 sm:h-56 sm:w-44 "
              />
            </div>
            <div>
              <div className="pl-3 sm:pl-10 pt-3 flex items-center">
                <img
                  src="/assets/flags/us.svg"
                  alt=""
                  className="w-6 h-6 sm:w-7 sm:h-7  "
                />
                <span className="pl-3 text-xs">US Store</span>
              </div>
              <div className="pl-3 sm:pl-10 pt-2">
                <h6 className="text-xs sm:text-sm ">
                Retro Bluetooth Speaker Mini Wireless Speaker,Portable Bluetooth Speaker...
                </h6>
              </div>
            </div>
            <div className="absolute bottom-2 right-4">
              
              <img
                src="/assets/express.png"
                alt="delivery"
                className="w-6 h-6 sm:w-10 sm:h-10"
              />
            </div>
          </div>
        </div>

        <div className="relative sm:w-[755px] sm:h-[350px]">
       
          <div className="-z-10 rounded-xl absolute ">
            <img
              src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/home_v5/best-seller/hair-styling-products.jpg"
              alt=""
              className="rounded-xl h-[200px]  sm:w-[700px] sm:h-[350px] "
            />
          </div>
          <div className="flex gap-5 items-center justify-center pt-8 sm:pt-16 pb-4">
            <div className=" sm:pl-0 pl-3 w-72 sm:h-60">
              <h3 className="text-sm sm:text-2xl pb-1 sm:pb-5 font-extrabold">Hair Styling Products</h3>
            
              
              <p className="font-semibold text-xs sm:text-base pb-3 sm:pb-5">Style with total Nourishment & Protection</p>
              <button className=" bg-gray-800 sm:text-base text-sm text-white font-semibold px-4 sm:px-14 rounded py-1 sm:py-2">
                View All
              </button>
            </div>
            <div className=" sm:w-64 sm:h-60">
              <img
                src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/home_v5/best-seller/hair-products.png.webp?v=1.0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

    
    </div>
  </section>
  )
}

export default Bestseller
