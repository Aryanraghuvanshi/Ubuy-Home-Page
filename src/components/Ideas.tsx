import React from "react";

const Ideas = () => {
  return (
    <section className=" mb-10">
      <div className=" px-5">
        <div className="flex mb-4">
          <h2 className=" font-bold text-lg pr-6">GIFT IDEAS</h2>
          <span className=" w-[90%] h-0 border-t border-gray-200 relative top-4 right-1"></span>
        </div>

        <div className="flex flex-row gap-3">
          <div className="relative w-[750px] h-[350px]">
            <div className="-z-10 rounded-xl absolute  ">
              <img
                src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/home_v5/gift-ideas/international-gifting-store.jpg"
                alt=""
                className="rounded-xl w-[750px] h-[350px] "
              />
            </div>
            <div className="flex gap-5 items-center justify-center pt-16 pb-4">
              <div className="w-64 h-60">
                <h3 className="text-2xl pb-5 font-extrabold ">
                  International Gifting Store
                </h3>
                <p className="font-semibold pb-5">
                  Buy Your Favorite Gifts Online & Send Abroad to Your Loved
                  Ones
                </p>
                <button className="bg-blue-800 text-white font-semibold px-10 rounded  py-2">
                  Gift Now
                </button>
              </div>
              <div className="w-64 h-60">
                <img
                  src="https://d2ati23fc66y9j.cloudfront.net/ubuycom/home_v5/gift-ideas/international-gifting-store.png.webp?v=1.0"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="w-[750px] h-[350px] flex gap-4">
            <div className="w-[340px] h-[350px] bg-white rounded-xl  relative">
              <div className="flex items-center justify-center">
                <img
                  src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c7b-michael-kors-wonderlust-for-women-3-4-oz.jpg"
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
                {" "}
                <img
                  src="/assets/express.png"
                  alt="delivery"
                  className="w-10 h-10"
                />
              </div>
            </div>

            <div className="w-[340px] h-[350px] bg-white rounded-xl  relative">
              <div className="flex items-center justify-center">
                <img
                  src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c7c-grace-karin-2024-womens-tops-summer.jpg"
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
                {" "}
                <img
                  src="/assets/express.png"
                  alt="delivery"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ideas;
