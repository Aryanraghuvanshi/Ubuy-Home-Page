import React from "react";



interface XXXT{
    Xtent: {
        src: string;
        text: string;
    }[]
}

const Merch = ({data} : any) => {
  return (
    <section className=" pb-8  overflow-hidden">
      <div className=" px-5">
        <div className=" flex relative mb-4 w-[340px]">
          <h3 className=" font-bold text-lg text-nowrap ">
            XXXTENTACION MERCH STROE
          </h3>
          <span className=" w-10/12 h-0 border-t border-gray-200 absolute top-[14px] -right-60"></span>
          <span className=" ml-[340px]">
            <button className=" bg-yellow-400 px-4 py-1 rounded font-semibold text-nowrap">
              View All
            </button>
          </span>
        </div>

        <div className=" grid grid-cols-3  ">
            {data.map((val :{src:string , text:string},i :number)=>(
                <div key={i} className="w-56 h-24 rounded-xl flex bg-white mb-2">
            <div className=" inline-block w-24  rounded-l-xl">
              <img
                src={val.src}
                alt=""
                className="rounded-l-xl h-24 w-28 object-cover"
              />
            </div>
            <div className="pl-5 text-sm font-semibold flex items-center justify-center">
              {val.text}
            </div>
          </div>
            ))
            }
          

        </div>

      </div>
    </section>
  );
};

export default Merch;
