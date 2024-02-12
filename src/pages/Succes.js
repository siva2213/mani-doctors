// Author: Manikanta
// email: manikantaksi2@gmail.com
// "React Component"
// //React V 18
// //Node v18
// //SET UP
// devDependencies{
//   "tailwindcss": "^3.2.3"
//   // Please add this below code to your tailwind.config.js file in the root directory
//    //Start of the cofing file
//     /** @type {import('tailwindcss').Config} */
//   module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {
//         colors: {
//           darkBg: "#252525",
//           grayBorder: "#2E2E2E"
//         },
//       },
//     },
//     plugins: [],
//   };
//   //End of the cofing file

//   //Add below code to App.css
//   //Start of code
//     @tailwind base;
//     @tailwind components;
//     @tailwind utilities;
//   //End of code

// }

import React from "react";
import Group from "./Group.png";

const Success = () => {
  return (
    <div className=' bg-darkBg w-screen h-screen'>
      <div className=' p-8 py-24  h-full'>
        <h1 className=' mb-8 text-[48px] font-black bg-clip-text bg-gradient-to-r from-gradientPurple to-gradientRed text-transparent leading-[1.1]'>
          Registration Success
        </h1>
        <img src={Group} alt='' className='mb-6' />
        <p className='text-[20px] mb-12 font-extrabold text-center text-white'>
          You Are Now One Among Our 10,000+ Family
        </p>
        <div className='  mt-7 flex justify-between'>
          <button className=' shadow-2xl text-white w-full h-[60px] font-black text-[20px]  rounded-full uppercase bg-gradient-to-br from-gradientPurple via-gradientRed to-gradientRed '>
            Thank you
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
