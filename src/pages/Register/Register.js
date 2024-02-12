import React from "react";

import { Input, InputNumb } from "../component/Input";
import leftArrow from "../assets/leftArrow.svg";
import edit from "../assets/edit-2.svg";
import camera from "../assets/camera.svg";
import mark from "../assets/mark.svg";
import markActive from "../assets/markActive.svg";
import downArrow from "../assets/downArrow.svg";

const Register = () => {
  return (
    <div className=' bg-darkBg w-screen h-full'>
      <div className=' p-5 py-5'>
        {/* nav */}
        <div className='p-1 flex justify-between items-center'>
          <img src={leftArrow} alt='left' />
          <div
            style={{
              filter: "drop-shadow(2px 5px 5px #111)",
            }}
            className=' flex  w-[150px] h-[50px] px-2 py-[8px] bg-darkBg  rounded-full items-center'
          >
            <div className=' mr-3 bg-white w-[38px] h-[38px] rounded-full flex justify-center items-center'>
              <img src={edit} alt='left' />
            </div>
            <p className=' leading-[1.1]  w-20 text-white font-semibold text-[10px]'>
              Continue with previous saved profile
            </p>
          </div>
        </div>
        {/* profile */}
        <div className='flex justify-center mt-12'>
          <div className=' relative flex justify-center items-center  w-[180px] h-[180px] bg-gradient-to-t from-gradientPurple to-gradientRed rounded-full '>
            <div className=' absolute w-[146px] h-[146px] rounded-full bg-darkBg '></div>
            <div className='w-[38px] h-[38px] bg-white absolute shadow-xl rounded-full p-2 flex justify-center items-center bottom-3 right-3'>
              <img src={camera} alt='camera' />
            </div>
          </div>
        </div>
        {/* progress */}
        <div className=' mt-6'>
          {/* marks */}
          <div className='flex justify-between'>
            <div className='flex justify-center items-center'>
              <img src={markActive} alt='mark' />
              <span className=' absolute font-semibold text-[9px] text-white'>
                1
              </span>
            </div>
            <div className='flex justify-center items-center'>
              <img src={mark} alt='mark' />
              <span className=' absolute font-semibold text-[9px]'>2</span>
            </div>
            <div className='flex justify-center items-center'>
              <img src={mark} alt='mark' />
              <span className=' absolute font-semibold text-[9px]'>3</span>
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
            <div className=' absolute h-[10px] rounded-full w-[60px] bg-gradient-to-br from-gradientPurple  to-gradientRed'></div>
          </div>
          {/* Steps */}
          <div className=' mt-2 mx-1 flex justify-between'>
            <p className=' text-transparent text-[10px] font-semibold  bg-clip-text bg-gradient-to-br  from-gradientPurple to-gradientRed'>
              Personal Info
            </p>
            <p className=' ml-[-16px] text-[10px] font-semibold text-white'>
              Expertise
            </p>
            <p className='text-[10px] font-semibold text-white'>Address</p>
          </div>
        </div>
        {/* Template */}
        <div className='flex justify-end mt-10'>
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
        <div className=' mt-10'>
          <h2 className='text-white font-extrabold text-[20px]'>
            Personal Details
          </h2>
          <form>
            <Input
              className=' mt-5'
              title='Name*'
              errorMsg='This feild is required'
            ></Input>

            <Input className=' mt-5' title='Email*'></Input>

            <InputNumb
              className=' mt-5 w-full pl-1'
              title='Number 1*'
            ></InputNumb>
            <InputNumb
              className=' mt-5 w-full pl-1'
              title='Number 2'
            ></InputNumb>
            <InputNumb
              className=' mt-5 w-full pl-1'
              title='Whatsapp Number*'
            ></InputNumb>

            <Input className=' mt-5' title='Experience'></Input>
            <div className=' mt-7 flex justify-between'>
              <button className=' shadow-2xl text-white w-[170px] h-[60px] font-black text-[20px]  rounded-full uppercase bg-gradient-to-br from-gradientPurple via-gradientRed to-gradientRed '>
                Save
              </button>
              <button className=' shadow-2xl text-white w-[170px] h-[60px] font-black text-[20px]  rounded-full uppercase bg-gradient-to-br from-gradientPurple via-gradientRed to-gradientRed '>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
