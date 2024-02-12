import React from "react";
import Ring from "../../assets/Ellipse 101.svg";
import RingDark from "../../assets/EllipseDak.svg";
import girl from "../../assets/cheerful-curly-business-girl-wearing-glasses 1.png";
import StarLight from "../../assets/StarLight.svg";
import "./styles.css";
const MonthStats = (props) => {
  return (
    <div className=' w-full flex justify-center items-center p-5 py-10'>
      <div
        className={`h-[316px]  w-[378px] relative  p-7   rounded-[30px] ${
          props.darkMode
            ? "chart-container-shadow-dark bg-darkBg"
            : "chart-container-shadow bg-gradient-to-r from-[#FFDCFE] via-[#FFDCFE00] to-[#F3EDF4]"
        } `}
      >
        <div className=' absolute  top-0 bottom-0 right-0 left-0 '>
          <img
            src={props.darkMode ? RingDark : Ring}
            alt=''
            className=' absolute top-0'
          />
        </div>
        <div className='absolute  top-0 bottom-0 right-0 left-0 z-20 text-[#252525] dark:text-white '>
          <div className='flex justify-between p-5 pb-0 '>
            <div>
              <h4 className=' text-[16px] font-bold  '>This Months</h4>
              <h1 className='text-[40px] font-black leading-10'>Stats</h1>
            </div>
          </div>
          <div className='flex justify-end px-8 bg'>
            <div
              className={`bg-gradient-to-tr from-[#C133AD20] rounded-[20px] to-[#EE2B3B20] dark:backdrop-blur-md   flex  flex-col justify-between items-center  p-[1px] `}
            >
              <div className=' py-2 px-5 text-center bg-[#F3EDF4] dark:bg-[#303030] rounded-[20px] h-full w-full  backdrop-blur-sm  '>
                <h5 className='text-[32px] font-black leading-7 bg-gradient-to-tr  from-gradientPurple to-gradientRed bg-clip-text text-transparent'>
                  60+
                </h5>
                <p className='text-[10px] mt-[-4px] font-bold '>Patients</p>
              </div>
            </div>
          </div>
          <div className='  flex flex-col justify-center items-center h-[140px]'>
            <div className=' line-shadow h-[8px] w-full bg-gradient-to-tr from-gradientPurple to-gradientRed '></div>
            {/* <div className=' mt-2 h-[8px] w-full bg-gradient-to-tr from-gradientPurple to-gradientRed '></div> */}
          </div>
          <div className=' pt-2'>
            <div className='flex justify-around w-full'>
              <p className=' uppercase text-[10px] font-extrabold bg-gradient-to-tr from-gradientPurple to-gradientRed bg-clip-text text-transparent'>
                {" "}
                Mon
              </p>
              <p className=' uppercase text-[10px] font-extrabold bg-gradient-to-tr from-gradientPurple to-gradientRed bg-clip-text text-transparent'>
                {" "}
                Tue
              </p>
              <p className=' uppercase text-[10px] font-extrabold bg-gradient-to-tr from-gradientPurple to-gradientRed bg-clip-text text-transparent'>
                {" "}
                Wed
              </p>
              <p className=' uppercase text-[10px] font-extrabold bg-gradient-to-tr from-gradientPurple to-gradientRed bg-clip-text text-transparent'>
                {" "}
                Thu
              </p>
              <p className=' uppercase text-[10px] font-extrabold bg-gradient-to-tr from-gradientPurple to-gradientRed bg-clip-text text-transparent'>
                {" "}
                Fri
              </p>
              <p className=' uppercase text-[10px] font-extrabold bg-gradient-to-tr from-gradientPurple to-gradientRed bg-clip-text text-transparent'>
                {" "}
                Sat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthStats;
