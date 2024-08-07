"use client"
import React, {  useState } from 'react';
 
interface List{
  list:string[]
}

const Dropdown  = ({list} : List ) => {
    
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-white text-sm font-bold text-gray-900 "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
         
        >
          <span className='hidden sm:inline'>Explore</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute  mt-2 w-64 w rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="pt-1" role="none">
            {list.map((val : string,i : number)=>(
              <a
              key={i}
              href="#"
              className=" flex justify-between border-b-2 px-4 py-2 text-sm text-gray-900 hover:bg-yellow-500"
              role="menuitem" 
            >
              {val} <img src="/right.svg" alt="Svg" className=' w-4 h-4 to-gray-700 inline ml-9' />
            </a>  
            )
            )}
              
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;














// import React, { useState } from 'react';
// import Right from '../assets/right.svg'

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <div>
//         <button
//           type="button"
//           className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-white text-sm font-bold text-gray-900 "
//           id="options-menu"
//           aria-haspopup="true"
//           aria-expanded="true"
//           onClick={toggleDropdown}
         
//         >
//           Explore
//           <svg
//             className="-mr-1 ml-2 h-5 w-5"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//         <div
//           className="origin-top-right absolute  mt-2 w-64 w rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
//           role="menu"
//           aria-orientation="vertical"
//           aria-labelledby="options-menu"
//         >
//           <div className="py-1" role="none">
//             <a
//               href="#"
//               className=" flex justify-between border-b-2 px-4 py-2 text-sm text-gray-900 hover:bg-yellow-500"
//               role="menuitem" 
//             >
//               Health & supplement <img src={Right} alt="Svg" className=' w-4 h-4 to-gray-700 inline ml-9' />
//             </a>
//             <a
//               href="#"
//               className=" flex justify-between border-b-2 px-4 py-2 text-sm text-gray-900 hover:bg-yellow-500"
//               role="menuitem" 
//             >
//               Automotive <img src={Right} alt="Svg" className=' w-4 h-4 to-gray-700 inline ml-9' />
//             </a>
//             <a
//               href="#"
//               className=" flex justify-between border-b-2 px-4 py-2 text-sm text-gray-900 hover:bg-yellow-500"
//               role="menuitem" 
//             >
//               Beauty & personal care <img src={Right} alt="Svg" className=' w-4 h-4 to-gray-700 inline ml-9' />
//             </a>
//             <a
//               href="#"
//               className=" flex justify-between border-b-2 px-4 py-2 text-sm text-gray-900 hover:bg-yellow-500"
//               role="menuitem" 
//             >
//               Electronics <img src={Right} alt="Svg" className=' w-4 h-4 to-gray-700 inline ml-9' />
//             </a>
//             <a
//               href="#"
//               className=" flex justify-between border-b-2 px-4 py-2 text-sm text-gray-900 hover:bg-yellow-500"
//               role="menuitem" 
//             >
//               Perfumes & Fragrances <img src={Right} alt="Svg" className=' w-4 h-4 to-gray-700 inline ml-9' />
//             </a>
//             <a
//               href="#"
//               className=" flex justify-between px-4 py-2 text-sm text-gray-900 hover:bg-yellow-500"
//               role="menuitem" 
//             >
//               Grocery & Groumet Food <img src={Right} alt="Svg" className=' w-4 h-4 to-gray-700 inline ml-9' />
//             </a>
           
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

