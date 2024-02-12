import React from "react";
import ybell from "../component/assets/yellowBell.svg";
import { ButtonGradientSmall } from "./Button";

export const YellowBell = (props) => {
  return (
    <div className='flex justify-center w-full h-full items-center py-16'>
      <div
        style={{ background: "#cccccc08" }}
        className=' relative p-7 py-16 w-[312px] flex flex-col justify-center items-center bg-gradient-to-b from-[#E2AD205]  to-[#E2AD2001] rounded-[40px] border-[#E2AF2820] border-t-2 border-b border-l border-r  '
      >
        <div className='  left-[50%] translate-x-[-45%] top-[-100px] w-fit absolute before:absolute before:w-[91px] before:h-[21px] before:bg-[#FFB100] before:blur-[50px] before:bottom-[30%] before:right-[40%]  after:w-[50px] after:h-[47px] after:bg-[#4663DD56] after:absolute  after:blur-[15px] after:top-[40%] after:right-[30%]'>
          <img src={ybell} alt='' className='  ' />
        </div>
        <div className='mt-10 mb-10'>{props.children}</div>
        <div>
          <ButtonGradientSmall styles='text-[16px] w-[135px] h-[50px] '>
            Ok
          </ButtonGradientSmall>
        </div>
      </div>
    </div>
  );
};

export const YellowBell2 = (props) => {
  return (
    <div className='flex justify-center w-full h-full items-center py-16'>
      <div
        style={{ background: "#cccccc08" }}
        className=' shadow-lg relative p-7 py-16 w-[312px] flex flex-col justify-center items-center bg-gradient-to-b from-[#E2AD205]  to-[#E2AD2001] rounded-[40px] border-[#E2AF2820] border-t-2 border-b border-l border-r  '
      >
        <div className='  left-[50%] translate-x-[-45%] top-[-100px] w-fit absolute before:absolute before:w-[91px] before:h-[21px] before:bg-[#FFB100] before:blur-[50px] before:bottom-[30%] before:right-[40%]  after:w-[50px] after:h-[47px] after:bg-[#4663DD56] after:absolute  after:blur-[15px] after:top-[40%] after:right-[30%]'>
          <img src={ybell} alt='' className='  ' />
        </div>
        <div className='mt-10 mb-10'>{props.children}</div>
        <div className=' w-full flex justify-between'>
          <ButtonGradientSmall styles='text-[13px] w-[100px]'>
            yes
          </ButtonGradientSmall>
          <ButtonGradientSmall styles='text-[13px] w-[100px] h-[40px]'>
            No
          </ButtonGradientSmall>
        </div>
      </div>
    </div>
  );
};
