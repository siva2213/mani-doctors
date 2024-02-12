import React, { useContext } from "react";
import { globalStateContext } from "../App";
import { ButtonProceed, ButtonToggle } from "./Button";
import GradientText from "./GradientText";
import { CenterCross, Home, Phone, Whatsapp, Booking } from "./Svgs";

export const BottomNav = (props) => {
  const { darkMode, toggleDarkMode } = useContext(globalStateContext);
  return (
    //
    <div
      className={`  z-[100] w-full flex justify-around   h-[80px]  fixed bottom-0 dark:bg-[#1d1d1d] ${
        darkMode ? "" : "bg-gradient-to-br from-gradientPurple to-gradientRed"
      }`}
    >
      <div className=' h-full flex flex-col  justify-end items-center pb-3'>
        <Home fill={darkMode ? "url(#gradient-stops)" : "#fff"} />
        <span
          className={`font-bold text-[10px]  pt-1 ${
            darkMode ? "gradient-text" : "text-white"
          } `}
        >
          Home
        </span>
      </div>
      <div className=' h-full flex flex-col justify-end items-center pb-3'>
        <Booking fill={darkMode ? "#737373" : "#fff"} />
        <span className='font-bold text-[10px] text-white pt-1 dark:text-darkModeTextSecondary '>
          Booking
        </span>
      </div>
      <div
        className=' h-full flex flex-col justify-end items-center  pb-1'
        onClick={toggleDarkMode}
      >
        <div className=' bg-white rounded-full p-3  dark:bg-gradient-to-br dark:from-gradientPurple dark:to-gradientRed'>
          <CenterCross fill={darkMode ? "#fff" : "url(#gradient-stops)"} />
        </div>
        <span className='font-bold text-[10px] text-white pt-1 dark:text-white'>
          Dark Mode
        </span>
      </div>
      <div className=' h-full flex flex-col justify-end items-center pb-3'>
        <Phone fill={darkMode ? "#737373" : "#fff"} />
        <span className='font-bold text-[10px] text-white pt-1 dark:text-darkModeTextSecondary '>
          Call
        </span>
      </div>
      <div className=' h-full flex flex-col justify-end items-center pb-3'>
        <Whatsapp fill={darkMode ? "#737373" : "#fff"} />
        <span className='font-bold text-[10px] text-white pt-1  dark:text-darkModeTextSecondary'>
          Whatsapp{" "}
        </span>
      </div>
    </div>
  );
};
export const BottomNav2 = (props) => {
  const { darkMode, toggleDarkMode } = useContext(globalStateContext);
  return (
    //
    <div
      className={`  z-[100] w-full flex px-5   h-[80px]  fixed bottom-0 dark:bg-[#1d1d1d] ${
        darkMode ? "" : "bg-gradient-to-br from-gradientPurple to-gradientRed"
      }`}
    >
      <div className=' min-w-[55%] flex justify-between'>
        <div className=' h-full flex flex-col  justify-end items-center pb-3'>
          <Home fill={darkMode ? "url(#gradient-stops)" : "#fff"} />
          <span
            className={`font-bold text-[10px]  pt-1 ${
              darkMode ? "gradient-text" : "text-white"
            } `}
          >
            Home
          </span>
        </div>
        <div className=' h-full flex flex-col justify-end items-center pb-3'>
          <Phone fill={darkMode ? "#737373" : "#fff"} />
          <span className='font-bold text-[10px] text-white pt-1 dark:text-darkModeTextSecondary '>
            Call
          </span>
        </div>
        <div
          className=' h-full flex flex-col justify-end items-center  pb-1'
          onClick={toggleDarkMode}
        >
          <div className=' bg-white rounded-full p-3  dark:bg-gradient-to-br dark:from-gradientPurple dark:to-gradientRed'>
            <CenterCross fill={darkMode ? "#fff" : "url(#gradient-stops)"} />
          </div>
          <span className='font-bold text-[10px] text-white pt-1 dark:text-white'>
            Dark Mode
          </span>
        </div>
      </div>

      <div className=' h-full flex  justify-end items-center flex-grow  '>
        <ButtonProceed
          onClick={props.onClick}
          styles=' font-black uppercase text-[16px] w-[114px] h-[36px]'
          selected={true}
        >
          <GradientText>{props.btntext}</GradientText>
        </ButtonProceed>
      </div>
    </div>
  );
};
