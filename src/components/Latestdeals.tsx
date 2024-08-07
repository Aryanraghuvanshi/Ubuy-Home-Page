import React from "react";

const data=[
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c7f-pmubeaut-10pcs-nano-tattoo-cartridge.jpg",
        text:"PMUBEAUT 10Pcs NANO Tattoo Cartridge Needles Disposable 1RL..."
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c80-soly-hux-men-s-graphic-short-sleeve-tee.jpg",
        text:"SOLY HUX Men's Graphic Short Sleeve Tee Crew Neck Letter Print T Shirt..."
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c81-ugreen-100w-usb-c-charger-nexode-4-port.jpg",
        text:"UGREEN 100W USB C Charger,Nexode 4-Port Foldable Compact Fast..."
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c82-joah-perfect-complexion-under-eye.jpg",
        text:"JOAH Perfect Complexion Under Eye Concealer and Serum,Korean..."
    },
]

const Latestdeals = () => {
  return (
    <section className=" mb-10">
      <div className=" px-5">
        <div className="flex mb-4">
          <h2 className=" font-bold text-lg pr-6">LATEST DEALS</h2>
          <span className=" w-[88%] h-0 border-t border-gray-200 relative top-4 right-1"></span>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap flex-row ">
          <div className="w-full h-[210px] sm:w-[750px] sm:h-[350px] flex flex-wrap sm:flex-nowrap">


            <div className="w-[172px] h-[200px] sm:w-[360px] sm:h-[350px] bg-white rounded-xl mr-2 sm:mr-4 relative">
            <div className="absolute top-4 left-4">
                
                <img
                  src="/assets/onsale.png"
                  alt="delivery"
                  className="w-5 h-5 sm:w-7 sm:h-7"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c7d-led-face-mask-model-fm-01-7-color.jpg"
                  alt=""
                  className="pt-1 sm:pt-8 h-20 object-contain sm:h-56 sm:w-44 "
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
                <div className="pl-3 sm:pl-10 pt-2  text-xs sm:text-base">
                  <h6 className=" sm:text-sm text-ellipsis">
                    Michael Kors Wonderlust for Women3.4 oz Eau de Parfum Spray
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


            <div className="w-[172px] h-[200px] sm:w-[360px] sm:h-[350px] bg-white rounded-xl mr-0 sm:mr-1 relative">
            <div className="absolute top-4 left-4">
                
                <img
                  src="/assets/onsale.png"
                  alt="delivery"
                  className="w-5 h-5 sm:w-7 sm:h-7"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c7e-18-outlets-surge-protector-power-strip.jpg"
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
                    GRACE KARIN 2024 Womens Tops Summer Elegant Wrap Blouse V
                    Neck...
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

          <div className="relative sm:w-[700px] sm:h-[350px]">
          <div className="absolute top-4 left-4">
                
                <img
                  src="/assets/fire.png"
                  alt="delivery"
                  className="w-5 h-5 sm:w-10 sm:h-10"
                />
              </div>
            <div className="-z-10 rounded-xl absolute ">
              <img
                src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/home_v5/daily-deal/daily-deals.jpg"
                alt=""
                className="rounded-xl h-[200px]  sm:w-[700px] sm:h-[350px] "
              />
            </div>
            <div className="flex gap-5 items-center justify-center pt-8 sm:pt-16 pb-4">
              <div className="sm:pl-0 pl-3 w-72 sm:h-60">
                <h3 className="text-sm sm:text-2xl font-extrabold">Daily Deals</h3>
                <h3 className="text-sm sm:text-2xl pb-1 sm:pb-5 font-extrabold">
                  Best Offers from UBUY
                </h3>
                <p className="font-semibold text-xs sm:text-base">Get Upto 15% off*</p>
                <p className="font-semibold text-xs sm:text-base pb-2 sm:pb-5">USE CODE: UBFIRST</p>
                <button className=" bg-purple-800 text-white font-semibold px-10 rounded  py-2">
                  Shop Now
                </button>
              </div>
              <div className=" sm:w-64 sm:h-60">
                <img
                  src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/home_v5/daily-deal/daily-deals.png.webp?v=1.0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4"> 
            {data.map((val,i)=>(
                     <div key={i} className="w-[172px] h-[200px] sm:w-[360px] sm:h-[350px] bg-white rounded-xl mr-2 sm:mr-4 relative">
                     <div className="absolute top-4 left-4">
                         
                         <img
                           src="/assets/onsale.png"
                           alt="delivery"
                           className="w-5 h-5 sm:w-7 sm:h-7"
                         />
                       </div>
                       <div className="flex items-center justify-center">
                         <img
                           src={val.src}
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
                             {val.text}
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
            ))
            }
       
        </div>
      </div>
    </section>
  );
};

export default Latestdeals;
