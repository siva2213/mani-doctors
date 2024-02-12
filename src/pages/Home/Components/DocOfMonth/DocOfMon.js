import React from "react";
import Ring from "../../assets/Ellipse 100.svg";
import girl from "../../assets/cheerful-curly-business-girl-wearing-glasses 1.png";
import StarLight from "../../assets/StarLight.svg";
import "./styles.css";
const DocOfMon = (props) => {
  return (
    <div
      className={` h-[454px]  w-full relative  p-7  ${
        props.darkMode
          ? "darkBg drop-shadow-dark-sm"
          : "bg-gradient-to-br from-gradientPurple to-gradientRed"
      }  rounded-[30px]`}
    >
      <div className=' absolute  top-0 bottom-0 right-0 left-0  '>
        <img src={Ring} alt='' className=' absolute top-0' />
      </div>
      <div className='absolute  top-0 bottom-0 right-0 left-0 z-20 text-white'>
        <div className='flex justify-between p-5 py-5 pb-5 pt-7 pr-7'>
          <div>
            <h4 className=' text-[16px] font-bold  '>Doctor of The</h4>
            <h1 className='text-[40px] font-black leading-10'>Month</h1>
          </div>
          <div className=' mt-1'>
            <img src={girl} className=' w-[108px] h-[108px] rounded-[30px]' />
          </div>
        </div>
        <div className='flex justify-between px-8 pr-5'>
          <div className='mt-[-5px] w-[124px] h-[94px] rounded-[20px] flex  flex-col justify-between items-center p-1 backdrop-blur-sm bg-[#FFFFFF15] border border-[#ffffff20]'>
            <p className=' text-[11px] font-semibold'>This Month</p>
            <div className='text-center'>
              <h5 className='text-[32px] font-bold leading-8'>150+</h5>
              <p className='text-[13px] font-bold'>Patients</p>
            </div>
          </div>
          <div className=' flex flex-col  items-center '>
            <div className=' text-center'>
              <h6 className='font-black text-[20px] leading-5 '>
                Dr. Lela Huff
              </h6>
              <p className=' font-semibold text-[11px] uppercase'>BDS, MDS</p>
              <p className=' font-semibold text-[11px]'>Dental Specialist</p>
            </div>
            <div>
              <div
                className={` mt-2   ${
                  props.darkMode ? "drop-shadow-xs-dark" : "drop-shadow-xs"
                } rounded-[20px] flex  w-[79px] h-[32px] items-center pl-1`}
              >
                <img src={StarLight} className=' w-[24px] h-[24px] mr-2' />
                <p className=' font-black text-[16px]'>4.5</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' h-[150px] flex items-center'>
          <div
            className={` h-[8px] w-full  ${
              props.darkMode
                ? "line-shadow-dark gradient"
                : "line-shadow bg-white"
            } `}
          ></div>
        </div>
        <div className=' pt-2'>
          <div className='flex justify-around w-full'>
            <p className=' uppercase text-[10px] font-extrabold'> Mon</p>
            <p className=' uppercase text-[10px] font-extrabold'> Tue</p>
            <p className=' uppercase text-[10px] font-extrabold'> Wed</p>
            <p className=' uppercase text-[10px] font-extrabold'> Thu</p>
            <p className=' uppercase text-[10px] font-extrabold'> Fri</p>
            <p className=' uppercase text-[10px] font-extrabold'> Sat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocOfMon;
