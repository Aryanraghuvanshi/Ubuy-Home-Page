import React from 'react'

const Topsearch = () => {
  return (
    <section className=" mb-10">
    <div className=" px-5">
      <div className="flex mb-4">
        <h2 className=" font-bold text-lg pr-6">TOP SEARCHES</h2>
        <span className=" w-[88%] h-0 border-t border-gray-200 relative top-4 right-1"></span>
      </div>

      <div className="flex flex-row ">
        <div className="w-[750px] h-[350px] flex">
          <div className="w-[360px] h-[350px] bg-white rounded-xl mr-4 relative">
          
            <div className="flex items-center justify-center">
              <img
                src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c8d-apple-airpods-max-wireless-over-ear.jpg"
                alt=""
                className="pt-8 h-56 w-44 object-contain"
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
                Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancellin...
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
          
            <div className="flex items-center justify-center">
              <img
                src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c8e-wireless-lavalier-microphone-portable.jpg"
                alt=""
                className="pt-8 h-56 w-44 object-contain"
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
                Wireless Lavalier Microphone, Portable Lapel Wireless Microphone for iPhone...
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

        <div className="relative bg-white rounded-xl w-[755px] h-[350px]">
       
        
          <div className="flex gap-5 items-center justify-center ">
           
            <div className="w-[270px] h-60 pt-7">
              <img
                src="https://www.ubuy.co.in/ubuycom/assets/v5/images/form-image-eng.png"
                alt=""
              />
            </div>

            <div className=" w-[400px] h-60 pt-2">
            <h3 className='font-bold text-gray-500 text-lg'>Subscribe and receive <strong className='text-black '>Discount upto 15%</strong> on your first purchase.</h3>
              <form action="">
                <input type="text" className='w-full h-14 bg-gray-100 rounded-md mt-5' placeholder='Full Name'/>
                <input type="email" className='w-full h-14 bg-gray-100 rounded-md mt-3' placeholder='Email Address*'/>
                <input type="text" className='w-full h-14 bg-gray-100 rounded-md mt-3' placeholder='Gender'/>
                <input type="submit" value='Subscribe' className='w-full h-11 bg-gray-900 text-white rounded-md mt-3'/>
              </form>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  </section>
  )
}

export default Topsearch
