import React from 'react'

const Topsearch = () => {
  return (
    <section className="mb-3 sm:mb-10">
    <div className=" px-5">
      <div className="flex mb-4">
        <h2 className=" font-bold text-lg pr-6">TOP SEARCHES</h2>
        <span className=" w-[88%] h-0 border-t border-gray-200 relative top-4 right-1"></span>
      </div>

      <div className="flex flex-row flex-wrap sm:flex-nowrap">
        <div className="w-full h-[210px] sm:w-[750px] sm:h-[350px] grid grid-cols-2 gap-1 sm:gap-0 sm:flex  sm:flex-nowrap">

          <div className="w-[172px] h-[200px] sm:w-[360px] sm:h-[350px] overflow-hidden bg-white rounded-xl mr-2 sm:mr-4 relative">
          
            <div className="flex items-center justify-center">
              <img
                src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c8d-apple-airpods-max-wireless-over-ear.jpg"
                alt=""
                className="pt-1 h-20 object-contain sm:pt-8 sm:h-56 sm:w-44"
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
                <h6 className="text-xs sm:text-sm">
                Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancellin...
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
          
            <div className="flex items-center justify-center">
              <img
                src="https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c8e-wireless-lavalier-microphone-portable.jpg"
                alt=""
                className="pt-1 h-20 object-contain sm:pt-8 sm:h-56 sm:w-44"
              />
            </div>
            <div>
              <div className="pl-3 sm:pl-10 pt-3 flex items-center">
                <img
                  src="/assets/flags/us.svg"
                  alt=""
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <span className="pl-3 text-xs">US Store</span>
              </div>
              <div className="pl-3 sm:pl-10 pt-2">
                <h6 className="text-xs sm:text-sm ">
                Wireless Lavalier Microphone, Portable Lapel Wireless Microphone for iPhone...
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

        <div className="relative bg-white rounded-xl w-full h-[200px] sm:w-[755px] sm:h-[350px]">
       
        
          <div className="flex gap-2 sm:gap-5 items-center justify-center ">
           
            <div className="sm:w-[270px] sm:h-60 sm:pt-7">
              <img
                src="https://www.ubuy.co.in/ubuycom/assets/v5/images/form-image-eng.png"
                alt=""
                className='sm:w-auto sm:h-auto w-28 h-28'
              />
            </div>

            <div className="w-[200px] sm:w-[400px] sm:h-60 pt-2">
            <h3 className='font-bold text-gray-500 text-xs sm:text-lg'>Subscribe and receive <strong className='text-black '>Discount upto 15%</strong> on your first purchase.</h3>
              <form action="">
                <input type="text" className='w-48 sm:w-full sm:h-14 pl-3 bg-gray-100 rounded sm:rounded-md mt-5' placeholder='Full Name'/>
                <input type="email" className='w-48 sm:w-full sm:h-14 pl-3 bg-gray-100 rounded sm:rounded-md mt-3' placeholder='Email Address*'/>
                <input type="text" className='w-48 sm:w-full sm:h-14 pl-3 bg-gray-100 rounded sm:rounded-md mt-3' placeholder='Gender'/>
                <input type="submit" value='Subscribe' className='w-48 sm:w-full sm:h-11 bg-gray-900 text-white rounded sm:rounded-md mt-3'/>
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
