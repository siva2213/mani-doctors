import React, { useEffect, useState } from "react";
import { ButtonGradient, ButtonGradientSmall } from "../../component/Button";
import GradientText from "../../component/GradientText";
import leftArrow from "../../assets/leftArrow.svg";
import {
  RingsTwo,
  RingsThree,
  RingsOne,
  RingsFour,
  RingsFive,
  RingsSix,
  RingsSeven,
  RingsEight,
} from "../../component/Rings";
import {
  Input,
  Input2,
  InputNumb,
  InputNumb2,
  InputOTP,
} from "../Register/components/Input";
import { InputError } from "../../component/InputError";
import { YellowBell, YellowBell2 } from "../../component/YellowBell";
import { motion } from "framer-motion";
import { Transition } from "style-components";

const DoctorOnboarding = () => {
  const [page, setPage] = useState(1);
  const [over, setOver] = useState(false);
  const [sec, setSec] = useState([30]);
  const tick = () => {
    if (over) return;
    if (sec === 0) setOver(true);
    else {
      setSec((sec) => sec - 1);
    }
  };

  const reset = () => {
    setSec(30);
    setOver(false);
  };

  useEffect(() => {
    if (page === 2) {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    }
  });

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  const variants = {
    initial: {
      width: "100%",
    },
    move: {
      width: "0%",
      transition: {
        duration: 30,
      },
    },
  };

  return (
    <div className=' relative  bg-darkBg w-screen h-[926px] overflow-hidden'>
      {page === 1 && (
        <div className='w-full h-full flex flex-col justify-center '>
          <RingsEight styles=' w-44 h-44 absolute top-0 left-0 rotate ' />
          <RingsThree styles=' absolute bottom-[-1px] right-[-1px] rotate-[0deg] ' />
          <RingsFive styles='    absolute  right-0 top-[20%] ' />
          <div className=' absolute  flex      flex-col justify-center  top-0 bottom-0 right-0 left-0'>
            <div className=' p-5 py-5 '>
              <div className=' mb-6 mt-12'>
                <GradientText styles=' text-4xl  font-black '>
                  Hello Doctor,
                </GradientText>
                <GradientText styles=' text-4xl font-black leading-7 '>
                  Welcome abroad
                </GradientText>
              </div>
              <div className=' mb-4'>
                <Input2
                  title='Username'
                  errorStyles=' w-full text-left mt-2'
                  errorMsg='Use the same email ID on which you have recieved onboarding invitation from the company.'
                />
                <div className=' mt-4'></div>
                <InputNumb2
                  title='Number'
                  errorStyles=' w-full text-left mt-2'
                  errorMsg='Use the same email ID on which you have recieved onboarding invitation from the company.'
                />
              </div>
              <InputError styles='flex justify-end mt-0 mb-5 '>
                10 Digits required
              </InputError>
              <div onClick={() => handleClick()}>
                <ButtonGradient styles='w-full'>Submit</ButtonGradient>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === 2 && (
        <div>
          <div className='p-5 py-5'>
            <img src={leftArrow} />
          </div>
          <RingsSix styles=' absolute top-[-1px] right-[0px]  ' />
          <RingsSeven styles=' absolute bottom-[-1px] left-[-1px] rotate-[0deg] ' />

          <div className=' p-5 py-5 mt-24 absolute  flex      flex-col justify-center  top-0 bottom-0 right-0 left-0'>
            <div className=' mb-16 mt-[-50px]'>
              <GradientText styles='text-[48px] font-black leading-[1.1] mb-1'>
                Enter your code
              </GradientText>
              <p className='text-[16px] font-normal text-white'>
                Enter the 4 digit code sent to you at Waynebarnes28@gmail.com &
                +91 98765 43210
              </p>
            </div>
            <div className=' mb-12 '>
              <InputOTP />
              <div className='px-10 mt-16'>
                <GradientText styles=' text-[14px] font-extrabold'>
                  OTP Processing
                </GradientText>
                <div className='w-full flex justify-between mb-2 mt-1'>
                  <p className='  font-medium text-[10px] text-white'>
                    Resend OTP in{" "}
                  </p>
                  <p className='  font-extrabold text-[10px] text-white'>
                    00:{sec}
                  </p>
                </div>
                <div className=' relative w-full h-[5px] bg-white rounded-[20px]'>
                  <motion.div
                    variants={variants}
                    initial='initial'
                    animate='move'
                    className={` absolute left-0  h-full bg-gradient-to-r from-gradientPurple to-gradientRed rounded-[20px]`}
                  ></motion.div>
                </div>
              </div>
            </div>
            <div onClick={() => handleClick()}>
              <ButtonGradient styles='w-full'>Verify</ButtonGradient>
            </div>
            <p className='text-white text-[14px] flex justify-center mt-10 '>
              Didn't recieve?{" "}
              <GradientText styles='font-extrabold ml-1'>
                Resend Code
              </GradientText>
            </p>
          </div>
        </div>
      )}
      {page === 3 && (
        <div
          onClick={() => handleClick()}
          className='h-full flex justify-center'
        >
          <YellowBell>
            <p className='text-white  font-bold text-[16px] text-center'>
              Kindly go through the given instructions and understand how to
              fill the form in given format
            </p>
          </YellowBell>
        </div>
      )}
      {page === 4 && (
        <div className='h-full flex justify-center items-center'>
          <YellowBell2>
            <p className='text-white  font-bold text-[16px] text-center'>
              Verification is not finished. You will loose your data if you
              leave now. Verification is complete when to enter correct OTP and
              hit <GradientText styles=' inline'>VERIFY</GradientText>
            </p>
            <p className='text-white  font-bold text-[16px] text-center mt-5 mb-[-10px] px-4 '>
              Are you sure you want to leave?
            </p>
          </YellowBell2>
        </div>
      )}
    </div>
  );
};

export default DoctorOnboarding;
