import React from "react";


const Card = () => {
  return (
    <>
    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/cashback.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">100% Money Back Guarantee</div>
      </div>
    </div>
    
    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/us-dollar.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">Lowest Overall Order Cost</div>
      </div>
    </div>

    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/brand.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">Premium & Luxury Brands</div>
      </div>
    </div>

    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden border-r-2 ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/d-box.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">Worldwide Shipping</div>
      </div>
    </div>

    <div className=" w-72 rounded flex flex-col items-center justify-center overflow-hidden  ">
      <img className=" w-16 h-16 object-contain" src="/assets/icons/order.png" alt="brand" />
      <div className="px-6 py-4">
        <div className=" font-semibold text-md mb-2">300M+ International Products</div>
      </div>
    </div>
    </>
  );
};

export default Card;
