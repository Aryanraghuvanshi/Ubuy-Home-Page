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

        <div className="flex flex-row ">
          <div className="w-[750px] h-[350px] flex">
            <div className="w-[360px] h-[350px] bg-white rounded-xl mr-4 relative">
            <div className="absolute top-4 left-4">
                
                <img
                  src="/assets/onsale.png"
                  alt="delivery"
                  className="w-7 h-7"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c7d-led-face-mask-model-fm-01-7-color.jpg"
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
                    Michael Kors Wonderlust for Women3.4 oz Eau de Parfum Spray
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
                  src="/assets/onsale.png"
                  alt="delivery"
                  className="w-7 h-7"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c7e-18-outlets-surge-protector-power-strip.jpg"
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
                    GRACE KARIN 2024 Womens Tops Summer Elegant Wrap Blouse V
                    Neck...
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

          <div className="relative w-[700px] h-[350px]">
          <div className="absolute top-4 left-4">
                
                <img
                  src="/assets/fire.png"
                  alt="delivery"
                  className="w-10 h-10"
                />
              </div>
            <div className="-z-10 rounded-xl absolute ">
              <img
                src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/home_v5/daily-deal/daily-deals.jpg"
                alt=""
                className="rounded-xl w-[700px] h-[350px] "
              />
            </div>
            <div className="flex gap-5 items-center justify-center pt-16 pb-4">
              <div className=" w-72 h-60">
                <h3 className="text-2xl font-extrabold">Daily Deals</h3>
                <h3 className="text-2xl pb-5 font-extrabold">
                  Best Offers from UBUY
                </h3>
                <p className="font-semibold ">Get Upto 15% off*</p>
                <p className="font-semibold pb-5">USE CODE: UBFIRST</p>
                <button className=" bg-purple-800 text-white font-semibold px-10 rounded  py-2">
                  Shop Now
                </button>
              </div>
              <div className="w-64 h-60">
                <img
                  src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/home_v5/daily-deal/daily-deals.png.webp?v=1.0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-4"> 
            {data.map((val,i)=>(
                     <div key={i} className="w-[360px] h-[350px] bg-white rounded-xl mr-4 relative">
                     <div className="absolute top-4 left-4">
                         
                         <img
                           src="/assets/onsale.png"
                           alt="delivery"
                           className="w-7 h-7"
                         />
                       </div>
                       <div className="flex items-center justify-center">
                         <img
                           src={val.src}
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
                             {val.text}
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
            ))
            }
       
        </div>
      </div>
    </section>
  );
};

export default Latestdeals;
