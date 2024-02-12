import React, { useState, useEffect } from "react";
import { ButtonGradient, ButtonGradientSmall } from "../component/Button";
import PlayStore from "../assets/play store.png";
import AppleStore from "../assets/Apple store.png";
import mobile1 from "../assets/red1.png";
import mobile2 from "../assets/red3.png";
import GradientText from "../component/GradientText";
import { Input, InputOTP2 } from "./Register/components/Input";
import { ReactComponent as Reload } from "../assets/ReloadBlack.svg";
import { ReactComponent as Alert } from "../assets/AlertGradient.svg";
import Objects from "../assets/OBJECTS.png";
import { motion } from "framer-motion";

const RegistrationPopup = () => {
  const [popUp, setPopUp] = useState(!false);
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
  const openPopUp = () => {
    console.log("ffs");
    setPopUp(!popUp);
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
    <div className=' relative bg-darkBg w-screen h-screen'>
      <div className=' h-full flex justify-center items-center'>
        <ButtonGradient onClick={() => openPopUp()}>Pop Up</ButtonGradient>

        {popUp && (
          <div className=' absolute h-screen w-screen  '>
            <div className=' absolute h-screen w-screen blur-md top-0 left-0 bottom-0 right-0 '></div>
            <div className=' relative z-10 w-full h-full p-5 flex flex-col justify-center items-center'>
              <div className=' p-5 bg-[#F3EDF4] w-full h-[487px] rounded-[40px]'>
                {page == 1 && (
                  <div className=' w-full'>
                    <div className='flex  h-[165px] justify-between  px-5 py-7 bg-gradient-to-br from-gradientPurple  to-gradientRed w-full rounded-[30px]'>
                      <div className=' w-[60%]' onClick={() => handleClick()}>
                        <h4 className=' text-lg font-extrabold text-white leading-5'>
                          Download app to unlock all features.
                        </h4>
                        <p className=' text-[0.5rem] text-white font-normal'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam eu turpis molestie.
                        </p>
                        <div className='flex '>
                          <img src={PlayStore} className='w-[70px] mr-5' />
                          <img src={AppleStore} className='w-[70px]' />
                        </div>
                      </div>
                      <div className=' relative h-full basis-1/4 right-1'>
                        <img
                          src={mobile2}
                          alt=''
                          className=' absolute   max-w-[67px] top-[50%] translate-y-[-50%] right-7 '
                        />
                        <img
                          alt=''
                          src={mobile1}
                          className=' absolute  max-w-[77px] top-[50%] translate-y-[-50%]'
                        />
                      </div>
                    </div>
                    <div className=' p-5'>
                      <GradientText styles=' font-black text-base leading-4'>
                        Hello There.
                      </GradientText>
                      <h4 className=' font-black text-[#252525] text-2xl '>
                        Register now
                      </h4>
                    </div>
                    <div>
                      <div className='mb-5 '>
                        <input
                          style={{
                            boxShadow:
                              "-10px -10px 20px 0px #FAF6FB  , 10px 10px 20px 0px #DFD3E1",
                          }}
                          className=' bg-[#F3EDF4] w-full h-[45px] block border-none outline-none focus:outline-gray-300 rounded-[30px] px-5 placeholder:text-[#636363] placeholder:font-semibold  text-base'
                          placeholder='Enter email'
                        />
                      </div>
                      <div className='mb-6'>
                        <input
                          style={{
                            boxShadow:
                              "-10px -10px 20px 0px #FAF6FB  , 10px 10px 20px 0px #DFD3E1",
                          }}
                          className=' bg-[#F3EDF4] w-full h-[45px] block border-none outline-none focus:outline-gray-300 rounded-[30px] px-5 placeholder:text-[#636363] placeholder:font-semibold  text-base'
                          placeholder='Enter city'
                        />
                      </div>
                    </div>
                    <ButtonGradientSmall styles='w-full h-[50px]'>
                      Register
                    </ButtonGradientSmall>
                  </div>
                )}
                {page === 2 && (
                  <div className=' w-full '>
                    <div
                      onClick={() => handleClick()}
                      className='flex  h-[165px] justify-between  px-5 py-7 bg-gradient-to-br from-gradientPurple  to-gradientRed w-full rounded-[30px]'
                    >
                      <div className=' w-[60%]'>
                        <h4 className=' text-lg font-extrabold text-white leading-5'>
                          Download app to unlock all features.
                        </h4>
                        <p className=' text-[0.5rem] text-white font-normal'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam eu turpis molestie.
                        </p>
                        <div className='flex '>
                          <img src={PlayStore} className='w-[70px] mr-5' />
                          <img src={AppleStore} className='w-[70px]' />
                        </div>
                      </div>
                      <div className=' relative h-full basis-1/4 right-1'>
                        <img
                          src={mobile2}
                          alt=''
                          className=' absolute   max-w-[67px] top-[50%] translate-y-[-50%] right-7 '
                        />
                        <img
                          alt=''
                          src={mobile1}
                          className=' absolute  max-w-[77px] top-[50%] translate-y-[-50%]'
                        />
                      </div>
                    </div>
                    <div className=' p-5 flex justify-between items-center'>
                      <div>
                        <GradientText styles=' font-black text-base leading-4'>
                          OTP
                        </GradientText>
                        <h4 className=' font-black text-[#252525] text-2xl '>
                          Verification
                        </h4>
                      </div>
                      <div
                        className=' bg-[#F3EDF4] w-[40px] h-[40px] rounded-full flex justify-center items-center '
                        style={{
                          boxShadow:
                            " -5px -5px 10px 0px #FAF6FB , 5px 5px 10px 0px #DFD3E1",
                        }}
                      >
                        <Reload />
                      </div>
                    </div>
                    <div>
                      <InputOTP2 />
                    </div>
                    <div className='w-full flex justify-between mb-2 mt-5 px-5'>
                      <p className='  font-medium text-[10px] text-[#252525]'>
                        Resend OTP in{" "}
                      </p>
                      <p className='  font-extrabold text-[10px] text-[#252525]'>
                        00:{String(sec).padStart(2, 0)}
                      </p>
                    </div>
                    <div className=' px-5 mb-4'>
                      <div className=' relative w-full h-[5px] bg-white rounded-[20px] '>
                        <motion.div
                          variants={variants}
                          initial='initial'
                          animate='move'
                          className={` absolute left-0  h-full bg-gradient-to-r from-gradientPurple to-gradientRed rounded-[20px]`}
                        ></motion.div>
                      </div>
                    </div>
                    <ButtonGradientSmall styles='w-full h-[50px]'>
                      Verify
                    </ButtonGradientSmall>
                  </div>
                )}
                {page === 3 && (
                  <div className=' w-full '>
                    <div className='flex  relative h-[206px] justify-between   px-5 py-7 bg-gradient-to-br from-gradientPurple  to-gradientRed w-full rounded-[30px]'>
                      <div className=' w-full flex flex-col  items-center'>
                        <h4 className=' text-base font-extrabold text-white leading-5'>
                          Registration
                        </h4>
                        <p className=' text-2xl text-[#252525] font-black'>
                          Successful
                        </p>
                      </div>

                      <img
                        src={Objects}
                        alt=''
                        className=' absolute   max-w-[240px] top-[40%] left-[50%] translate-x-[-50%]  '
                      />
                    </div>
                    <div className='  mt-24 mb-4 p-1 px-5 bg-[#F5E0EC] rounded-[20px] flex justify-between items-center'>
                      <div>
                        <p className=' text-[10px] text-[#252525] font-semibold'>
                          Download app to unlock all features.
                        </p>
                      </div>
                      <div className='flex '>
                        <img src={PlayStore} className='w-[57px] mr-2' />
                        <img src={AppleStore} className='w-[57px]' />
                      </div>
                    </div>

                    <ButtonGradientSmall styles='w-full h-[50px]'>
                      Get STarted
                    </ButtonGradientSmall>
                  </div>
                )}
              </div>
              <div className='flex  justify-center items-center px-5 mt-4'>
                <Alert width={24} height={24} />
                <p className='text-white font-bold text-sm ml-2'>
                  OTP will be sent to email you registered in last process.{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationPopup;
