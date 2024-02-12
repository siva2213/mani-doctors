import React from "react";
import { globalStateContext } from "../../App";
import { BottomNav } from "../../component/BottomNav";
import { ButtonGradient, ButtonProceed } from "../../component/Button";
import GradientText from "../../component/GradientText";

import Man from "./assets/men.png";
import Party from "./assets/Party.png";

const BkSuccess = () => {
  const { darkMode } = React.useContext(globalStateContext);
  return (
    <div className=' dark:bg-darkBg flex flex-col justify-center items-center   pt-24 pb-32'>
      <div
        className={`w-[378px] h-[369px] relative p-5 py-10 rounded-[40px] text-white ${
          darkMode
            ? " bg-darkBg drop-shadow-dark-sm"
            : "  bg-gradient-to-br from-gradientPurple to-gradientRed"
        } `}
      >
        <div className=' w-[160px] h-full flex flex-col'>
          <h4 className=' text-[30px] font-black leading-8 mb-8  '>
            {darkMode ? (
              <GradientText>Booking Confirmed</GradientText>
            ) : (
              "Booking Confirmed"
            )}
          </h4>
          <p className=' leading-4 font-medium text-[16px]'>
            Go to home page for new booking.
          </p>
          <div className=' flex items-end flex-grow '>
            <ButtonProceed
              selected={darkMode}
              styles='w-[102px] h-[47px] self-end font-black uppercase text-darkBg '
            >
              {darkMode ? <GradientText>Home</GradientText> : "Home"}
            </ButtonProceed>
          </div>
        </div>
        <img
          src={Man}
          alt='singh'
          className=' absolute w-[192px] bottom-0 right-[30px]'
        />
        <img
          src={Party}
          alt='singh'
          className=' absolute w-[76px] top-[30px] right-[30px]'
        />
      </div>
      <div
        className={` mt-5 w-[378px] p-6  py-4 rounded-[30px] bg-grayBg dark:bg-darkBg dark:text-white  bg-gradient-to-r ${
          darkMode
            ? " drop-shadow-dark-sm  "
            : "from-[#FFDCF5] via-[#FFDCFE00] to-[#fff] input-shadow"
        }`}
      >
        <div className=' w-full flex  justify-between my-2 '>
          <p className=' text-[13px] font-medium'>Patients name</p>
          <div className=' w-1/2 '>
            <p className=' text-[13px] font-black'>Wayne Barnes </p>
          </div>{" "}
        </div>
        <div className=' w-full flex  justify-between my-2'>
          <p className=' text-[13px] font-medium'>Patients name</p>
          <div className=' w-1/2'>
            <p className=' text-[13px] font-black'>12 Nov, 11:00 am </p>
          </div>
        </div>
        <div className=' w-full flex  justify-between my-2'>
          <p className=' text-[13px] font-medium'>Patients name</p>
          <div className=' w-1/2'>
            <p className=' text-[13px] font-black'>Wayne Barnes </p>
          </div>
        </div>
        <div className=' w-full flex  justify-between my-2'>
          <p className=' text-[13px] font-medium'>Patients name</p>
          <div className=' w-1/2'>
            <p className=' text-[13px] font-black'>Dental Clinic </p>
            <p className=' text-[11px] font-semibold mr-2 mt-1'>
              12/2, Mathura Road, Sector 37, Faridabad - Delhi{" "}
            </p>
          </div>
        </div>
      </div>
      <ButtonGradient styles='w-[378px] h-[50px] gradient mt-5 '>
        Done
      </ButtonGradient>
      <BottomNav />
    </div>
  );
};

export default BkSuccess;
