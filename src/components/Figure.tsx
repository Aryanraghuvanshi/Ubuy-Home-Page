import React from "react";

interface Type{
  title:string;
  imgscr:string;
}

const figure = ({ hero } : any) => {
  return (
    <>
      <section className=" pb-8 overflow-hidden">
        <div className=" px-5">
          <div className=" flex  mb-4">
            <h1 className=" font-bold text-lg pr-6">
              INTERNATIONAL ONLINE SHOPPING MADE EASY AT UBUY INDIA
            </h1>
            <span className=" w-7/12 h-0 border-t border-gray-200 relative top-4 right-1"></span>
          </div>
          <div className=" flex gap-3 transform ">
            {hero.map((val : Type, i:number) => (
              <div className=" overflow-hidden" key={i}>
                <div className=" px-3 w-60 h-24 rounded-lg bg-white">
                  <div className="flex  items-center">
                    <figure>
                      <img
                        src={val.imgscr}
                        alt="hero"
                        className=" object-cover w-36 h-24 rounded-l-lg "
                      />
                    </figure>
                    <h3 className="pl-3 text-sm font-bold">{val.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default figure;
