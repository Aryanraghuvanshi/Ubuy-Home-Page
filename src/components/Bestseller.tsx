import React from 'react'

const Bestseller = () => {
  return (
    <section className=" mb-10">
    <div className=" px-5">
      <div className="flex mb-4">
        <h2 className=" font-bold text-lg pr-6">BEST SELLER</h2>
        <span className=" w-[88%] h-0 border-t border-gray-200 relative top-4 right-1"></span>
      </div>

      <div className="flex flex-row ">
        <div className="w-[750px] h-[350px] flex">
          <div className="w-[360px] h-[350px] bg-white rounded-xl mr-4 relative">
          <div className="absolute top-4 left-4">
              
              <img
                src="/assets/bestseller.png"
                alt="delivery"
                className="w-7 h-7"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c8b-hong-in-crystal-table-lamp-rose-gold.jpg"
                alt=""
                className="pt-8 h-56 w-44 "
              />
            </div>
            <div>
              <div className="pl-10 pt-3 flex">
                <img
                  src="/assets/flags/us.svg"
                  alt=""
                  className="w-7 h-7  "
                />
                <span className="pl-3 text-xs">US Store</span>
              </div>
              <div className="pl-10 pt-2">
                <h6 className="text-sm ">
                Hong-in Crystal Table Lamp, Rose Gold Lamp with USB C+A Ports, 3 Way...
                </h6>
              </div>
            </div>
            <div className="absolute bottom-2 right-4">
              
              <img
                src="/assets/express.png"
                alt="delivery"
                className="w-10 h-10"
              />
            </div>
          </div>

          <div className="w-[360px] h-[350px] bg-white rounded-xl mr-1 relative">
          <div className="absolute top-4 left-4">
              
              <img
                src="/assets/bestseller.png"
                alt="delivery"
                className="w-7 h-7"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c8c-retro-bluetooth-speaker-mini-wireless.jpg"
                alt=""
                className="pt-8 h-56 w-44 "
              />
            </div>
            <div>
              <div className="pl-10 pt-3 flex">
                <img
                  src="/assets/flags/us.svg"
                  alt=""
                  className="w-7 h-7  "
                />
                <span className="pl-3 text-xs">US Store</span>
              </div>
              <div className="pl-10 pt-2">
                <h6 className="text-sm ">
                Retro Bluetooth Speaker Mini Wireless Speaker,Portable Bluetooth Speaker...
                </h6>
              </div>
            </div>
            <div className="absolute bottom-2 right-4">
              
              <img
                src="/assets/express.png"
                alt="delivery"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>

        <div className="relative w-[755px] h-[350px]">
       
          <div className="-z-10 rounded-xl absolute ">
            <img
              src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/home_v5/best-seller/hair-styling-products.jpg"
              alt=""
              className="rounded-xl w-[755px] h-[350px] "
            />
          </div>
          <div className="flex gap-5 items-center justify-center pt-16 pb-4">
            <div className=" w-80 h-60 pt-10">
              <h3 className="text-3xl pb-5 font-extrabold">Hair Styling Products</h3>
            
              
              <p className="font-semibold pb-3">Style with total Nourishment & Protection</p>
              <button className=" bg-gray-800 text-white font-semibold px-14 rounded  py-2">
                View All
              </button>
            </div>
            <div className="w-64 h-60">
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
