import React from 'react'

const data=[
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c83-calvin-klein-women-s-leonie-loafer.jpg",
        text:"Calvin Klein Women's Leonie Loafer"
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c84-skinn-luminous-facial-oil-face-oil-to.jpg",
        text:"SKINN Luminous Facial Oil - Face Oil to Visibly Brighten,Firm,and Hydrate -..."
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c85-2024-upgraded-accessories-tesla-model-y.jpg",
        text:"2024 Upgraded accessories Tesla Model Y Windshield SunShale [OEM..."
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c86-jackery-solar-generator-1000-v2-with.jpg",
        text:"Jackery Solar Generator 1000 v2 with 200W Solar Panel(2024 New),1070WH..."
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c87-ecovacs-deebot-t30s-robot-vacuum-and.jpg",
        text:"ECOVACS DEEBOT T30 Robot Vacuum and Mop, 11000Pa,Zero Tangle.."
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c88-black-radiance-scrub-it-off-dual-action.jpg",
        text:"Black Radiance Scrub It off! Dual Action Exfoliator,1.41 Ounces"
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c89-govee-smart-led-light-bars-work-with.jpg",
        text:"Govee Smart LED Light Bars,Work with Alexa and Google Assistant,RGBICW..."
    },
    {
        src:"https://images-cdn.ubuy.co.in/669a337f0e37fe227e291c8a-aquasense-pro-cordless-robotic-pool.jpg",
        text:"AquaSense Pro Cordless Robotic Pool Vacuum Cleaner with Hook-  Clarifies..."
    },
]

const Newlaunch = () => {
  return (
    <section className=" mb-10">
    <div className=" px-5">
      <div className="flex mb-4">
        <h2 className=" font-extrabold text-lg pr-6">NEW LAUNCHES</h2>
        <span className=" w-[88%] h-0 border-t border-gray-200 relative top-4 right-1"></span>
      </div>

      

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-4"> 
          {data.map((val,i)=>(
                   <div key={i} className="w-[172px] h-[200px] sm:w-[360px] sm:h-[350px] overflow-hidden bg-white rounded-xl mr-2 sm:mr-4 relative">
                   <div className="absolute top-4 left-4">
                       
                       <img
                         src="/assets/tag.png"
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
                       <div className="pl-3 sm:pl-10 pt-2 ">
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
  )
}

export default Newlaunch
