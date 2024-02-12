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

import React, { useState } from "react";
import {
  Input,
  InputDrop,
  InputFile,
  InputNumb,
} from "./Register/components/Input";
import leftArrow from "../assets/leftArrow.svg";
import edit from "../assets/edit-2.svg";
import camera from "../assets/camera.svg";
import mark from "../assets/mark.svg";
import markActive from "../assets/markActive.svg";
import downArrow from "../assets/downArrow.svg";
import MarkBig from "./DoctorDetails/assets/markBig.png";
import Tick from "./Register/assets/right.svg";
import profilePicture from "./DoctorDetails/assets/portrait-smiling-handsome-man-eyeglasses (1) 1.png";
import "./Register/styles.css";
import { ButtonGradient } from "../component/Button";
const Register = () => {
  const [page, setPage] = useState(1);

  const [termsAgree, setTermsAgree] = useState(false);
  const handleClick = (e) => {
    console.log(page);

    setPage((prevState) => prevState + 1);
  };

  return (
    <div className=' bg-darkBg w-screen h-full'>
      <div className=' overflow-visible p-5 py-5'>
        {/* Start of Navbar */}
        <div className='p-1 flex justify-between items-center'>
          <img src={leftArrow} alt='left' />
          <div
            // This is the Profile picture round box
            //   // Use the API data to provide url for the background for this div
            //   // use the format bg-[url(<img source url>)] or style ={{background-image : url(<img source url>)}}
            style={{
              filter:
                "drop-shadow(-10px -10px 20px #cccccc20) drop-shadow(10px 10px 20px #00000080) ",
            }}
            className=' flex  w-[150px] h-[50px] px-2 py-[10px] bg-darkBg  rounded-full items-center'
          >
            <div className=' mr-3 bg-white w-[38px] h-[38px] rounded-full flex justify-center items-center'>
              <img src={edit} alt='left' />
            </div>
            <p className=' leading-[1.1]  w-20 text-white font-semibold text-[10px]'>
              Continue with previous saved profile
            </p>
          </div>
        </div>
        {/* End of Navbar */}
        {/* Start profile section */}
        {page === 1 && (
          <div className='flex justify-center mt-12'>
            <div className=' relative flex justify-center items-center  w-[180px] h-[180px] bg-gradient-to-t from-gradientPurple to-gradientRed rounded-full '>
              <div className=' absolute w-[146px] h-[146px] rounded-full bg-darkBg '></div>
              <div className='w-[38px] h-[38px] bg-white absolute shadow-xl rounded-full p-2 flex justify-center items-center bottom-3 right-3'>
                <img src={camera} alt='camera' />
              </div>
            </div>
          </div>
        )}
        {/* End profile section */}
        {/* progress */}
        <div className=' mt-8'>
          {/* marks */}
          <div className='flex justify-between'>
            <div className='flex justify-center items-center'>
              <img src={page >= 1 ? markActive : mark} alt='mark' />
              {/* Progress bubble */}
              <span
                className={`absolute font-semibold text-[9px] ${
                  page >= 1 ? "text-white" : ""
                }`}
              >
                1
              </span>
            </div>
            <div className='flex justify-center items-center'>
              <img src={page >= 2 ? markActive : mark} alt='mark' />
              {/* Progress bubble */}
              <span
                className={`absolute font-semibold text-[9px] ${
                  page >= 2 ? "text-white" : ""
                }`}
              >
                2
              </span>
            </div>
            <div className='flex justify-center items-center'>
              <img src={page >= 3 ? markActive : mark} alt='mark' />
              {/* Progress bubble */}
              <span
                className={`absolute font-semibold text-[9px] ${
                  page >= 3 ? "text-white" : ""
                }`}
              >
                3
              </span>
            </div>
          </div>
          {/* progress */}

          <div
            className=' mx-2 mt-1 relative h-[10px] rounded-full'
            style={{
              boxShadow:
                " 5px -5px 10px #303030 inset,-5px 5px 10px #181818 inset",
            }}
          >
            <div
              className={`${page === 1 ? "w-[60px]" : ""} ${
                page == 2 ? "w-[50%]" : ""
              } ${
                page === 3 ? "w-full" : ""
              } absolute h-[10px] rounded-full  bg-gradient-to-br from-gradientPurple  to-gradientRed`}
            ></div>
          </div>
          {/* progress */}
          {/* Start Steps */}
          <div className=' mt-2 mx-1 flex justify-between'>
            <p
              className={`${
                !page <= 1
                  ? "text-transparent bg-clip-text bg-gradient-to-br  from-gradientPurple to-gradientRed "
                  : "text-white"
              } text-[10px] font-semibold  `}
            >
              Personal Info
            </p>
            <p
              className={` ${
                page >= 2
                  ? "text-transparent bg-clip-text bg-gradient-to-br  from-gradientPurple to-gradientRed "
                  : "text-white"
              } ml-[-16px] text-[10px] font-semibold `}
            >
              Expertise
            </p>
            <p
              className={`${
                page >= 3
                  ? "text-transparent bg-clip-text bg-gradient-to-br  from-gradientPurple to-gradientRed "
                  : "text-white"
              } text-[10px] font-semibold  `}
            >
              Address
            </p>
          </div>
          {/* Start Steps */}
        </div>
        {/* Template */}
        <div onClick={() => handleClick()} className='flex justify-end mt-10'>
          {/* Add anchor tag of onClick event here */}
          <div className=' w-max flex flex-col items-center '>
            <p className='uppercase text-white font-semibold text-[10px] '>
              click for reference
            </p>
            <button className='w-[128px] h-[35px] rounded-full font-bold text-[14px] text-white bg-gradient-to-br from-gradientPurple to-gradientRed'>
              Template
            </button>
          </div>
        </div>
        {/* Details */}
        <div className=' mt-10 overflow-visible'>
          <h2 className='text-white font-extrabold text-[20px]'>
            Personal Details
          </h2>

          {/*STart Page 1 */}
          {page === 1 && (
            <div
              className='overflow-visible'
              style={{ WebkitAppearance: "none" }}
            >
              <Input
                className=' mt-5'
                title='Name*'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>

              <Input
                className=' mt-5'
                title='Email*'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>

              <InputNumb
                className=' mt-5 w-full pl-1'
                title='Number 1*'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></InputNumb>
              <InputNumb
                className=' mt-5 w-full pl-1'
                title='Number 2'
                errorStyles=' hidden'
              ></InputNumb>
              <InputNumb
                className=' mt-5 w-full pl-1'
                title='Whatsapp Number*'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></InputNumb>

              <Input
                className=' mt-5'
                title='Experience'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>
              <div className='px-2 mt-7 flex justify-between'>
                <ButtonGradient styles='  px-12 '>Save</ButtonGradient>
                <ButtonGradient styles='  px-12 '>Next</ButtonGradient>
              </div>
            </div>
          )}
          {/*End Page 1 */}
          {/*Start Page 2 */}
          {page === 2 && (
            <div
              className='overflow-visible'
              style={{ WebkitAppearance: "none" }}
            >
              <Input
                className=' my-4'
                title='Degree*'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>

              <Input
                className=' my-4'
                title='Specialization*'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>
              <h2 className='text-white font-extrabold text-[20px]'>
                Personal Details
              </h2>
              <InputDrop
                styles='my-4'
                title='About'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></InputDrop>
              <InputDrop
                styles='my-4'
                title='Education'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></InputDrop>
              <InputDrop
                styles='my-4'
                title='Specialization'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></InputDrop>
              <InputDrop
                styles='my-4'
                title='Experience'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></InputDrop>
              <InputDrop
                styles='my-4  '
                title='Achievements'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></InputDrop>
              <InputDrop
                styles='my-4'
                title='Membership'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></InputDrop>

              <div className='px-2 mt-7 flex justify-between'>
                <ButtonGradient styles='  px-12 '>Save</ButtonGradient>
                <ButtonGradient styles='  px-12 '>Next</ButtonGradient>
              </div>
            </div>
          )}
          {/*End Page 2 */}
          {/*Start Page 2 */}
          {page === 3 && (
            <div style={{ WebkitAppearance: "none" }}>
              <Input
                className=' mt-5'
                title='Address Line 1*'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
                helperText
              ></Input>

              <Input
                helperText
                className=' mt-5'
                title='Address Line 2*'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>
              <Input
                helperText
                className=' mt-5'
                title='Address Line 3*'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>
              <Input
                helperText
                className=' mt-5'
                title='City'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>
              <Input
                helperText
                className=' mt-5'
                title='Zip Code'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>
              <Input
                helperText
                className=' mt-5'
                title='State'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>
              <Input
                helperText
                className=' mt-5'
                title='Country'
                errorMsg='This feild is required'
                errorStyles='flex justify-end mt-2'
              ></Input>
              {/* Location */}
              <div
                // style={{ backgroundImage: `url(${map})` }}
                className='  relative h-[235px] map p-7 mx-[-20px] my-4 bg-[#00000080]'
              >
                <div>
                  <p className=' text-white text-[16px] font-bold mb-[-12px]'>
                    Clinic
                  </p>
                  <h4 className=' text-white text-[40px] font-black'>Map</h4>
                </div>
                <div className='flex justify-end p-2 px-0'>
                  <div className=' absolute scale-90  top-[100px] left-[90px] mt-2 mr-2'>
                    <img src={MarkBig} alt='' className=' w-[46px] h-[55px]' />
                    <img
                      alt=''
                      src={profilePicture}
                      className=' absolute top-3 left-3 w-[22px] h-[22px] rounded-full'
                    />
                  </div>
                  <div className=' absolute scale-50  top-[80px] left-[-20px] mt-2 mr-2'>
                    <img src={MarkBig} alt='' className=' w-[46px] h-[55px]' />
                    <img
                      alt=''
                      src={profilePicture}
                      className=' absolute top-3 left-3 w-[22px] h-[22px] rounded-full'
                    />
                  </div>
                  <div className=' absolute scale-50  top-[20px] right-[100px] mt-2 mr-2'>
                    <img src={MarkBig} alt='' className=' w-[46px] h-[55px]' />
                    <img
                      alt=''
                      src={profilePicture}
                      className=' absolute top-3 left-3 w-[22px] h-[22px] rounded-full'
                    />
                  </div>
                  <div className=' absolute scale-50  top-[70px] right-[20px] mt-2 mr-2'>
                    <img src={MarkBig} alt='' className=' w-[46px] h-[55px]' />
                    <img
                      alt=''
                      src={profilePicture}
                      className=' absolute top-3 left-3 w-[22px] h-[22px] rounded-full'
                    />
                  </div>

                  <div
                    className='w-fit p-5 rounded-[20px] border border-[#ffffff40]'
                    style={{
                      background: "rgba(0,0,0,0.2)",
                      backdropFilter: "blur(5px)",
                    }}
                  >
                    <p className=' text-white font-semibold text-[11px] w-[200px]'>
                      You can send location via Whatsapp to +91 9876543210, so
                      that we can add your map location in the app for patients
                      reference.
                    </p>
                  </div>
                </div>
              </div>
              {/* Location */}
              <InputFile
                className=' mt-5'
                title='Document 1'
                title2='Document 2'
              ></InputFile>
              <div className=' flex items-center mt-4 '>
                <div
                  onClick={() => {
                    setTermsAgree(!termsAgree);
                  }}
                  style={{
                    boxShadow:
                      "3px 3px 5px 0px #303030 inset, -3px -3px 5px 0px #181818 inset",
                  }}
                  className=' mr-2 flex justify-center items-center bg-[#252525] w-[20px] h-[20px] rounded-[3]  '
                >
                  {termsAgree && (
                    <img src={Tick} alt='' className=' absolute' />
                  )}
                  <input
                    className='invisible'
                    type='checkbox'
                    id='terms'
                    name='terms'
                  />
                </div>
                <label
                  for='terms'
                  className=' text-white text-[12px] font-semibold '
                >
                  I agree to the terms and conditions and the privacy policy.
                </label>
              </div>
              <div className='px-2 mt-7 flex justify-between'>
                <ButtonGradient styles='  px-12 '>Save</ButtonGradient>
                <ButtonGradient styles='  px-12 '>Next</ButtonGradient>
              </div>
            </div>
          )}
          {/*End Page 2 */}
        </div>
      </div>
    </div>
  );
};

export default Register;
