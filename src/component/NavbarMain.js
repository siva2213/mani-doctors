import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "./assets/leftArrow.svg";
import { ReactComponent as Settings } from "./assets/settings.svg";
import { ReactComponent as MenuIcon } from "./assets/gg_menu-motion.svg";
import { ReactComponent as MenuIconWhite } from "./assets/gg_menu-motionw.svg";
import { ReactComponent as Bell } from "./assets/mi_notification.svg";
import { ReactComponent as BellWhite } from "../pages/Home/assets/bell.svg";
import { ReactComponent as DownArrow } from "./assets/downArrow.svg";
import { AnimatePresence, motion } from "framer-motion";

import { ReactComponent as Nurse } from "./assets/nurse.svg";
import NavRing from "../component/assets/NavRing.png";
import { ReactComponent as PinGradient } from "./assets/pinGrdient.svg";
import { globalStateContext } from "../App";
import Serarchbar from "../pages/Home/Components/SearchBar/Serarchbar";
import SearchTrans from "./SearchTrans";

const NavbarMain = (props) => {
  const { darkMode, toggleDarkMode } = useContext(globalStateContext);

  const [pillState, setPillState] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setPillState(!pillState);
    }, 3500);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div
      className={` z-[10000] fixed w-full ${
        darkMode ? "" : " nav-bar-gradient"
      }   dark:bg-darkBgCon top-0  `}
    >
      {/* border-b border-b-[#ffffff20] */}
      <div className={` relative  ${darkMode ? "text-white" : "text-white"} `}>
        <div className='flex justify-between px-7 pt-7 pb-6'>
          {!true ? <MenuIconWhite /> : <MenuIcon />}
          <i class='fa fa-bell-o  text-[22px]' aria-hidden='true'></i>
        </div>
        <div
          className={` absolute top-5 overflow-visible left-[50%]  translate-x-[-50%] h-[150px] flex flex-col items-center pb-4`}
        >
          <div className='font-extrabold flex items-center mb-2 '>
            Delhi{" "}
            <i className='ml-2 font-black text-[12px] fa fa-chevron-down'></i>
          </div>
          {/* shadow-xl drop-shadow-xl */}
          <div
            className={`  bg-grayBg overflow-hidden overflow-y-visible relative  h-[60px] mb-12 w-[200px] text-black   dark:bg-darkBg rounded-[40px] ${
              darkMode ? "pill-drop-shadow-dark" : " drop-shadow-lg"
            }    `}
            style={{}}
          >
            <AnimatePresence>
              {Number(pillState) === 0 && (
                <motion.div
                  key='clinic'
                  initial={{ translateX: "300px" }}
                  animate={{ translateX: 0 }}
                  exit={{ translateX: "-300px" }}
                  transition={{
                    duration: 1,
                  }}
                  className={` cli absolute w-full h-full flex justify-evenly items-center '`}
                >
                  <div className='flex items-center'>
                    <div
                      // style={{
                      //   boxShadow: " 0px 0px 2px  #eee inset, 2px 2px 5px 1px gray",
                      // }}
                      // shadow-md
                      className={`mr-2   w-[30px] h-[30px] flex justify-center items-center  rounded-full dark:bg-darkBgCon ${
                        darkMode ? "drop-shadow-dark-sm" : "shadow-md"
                      } `}
                    >
                      <PinGradient />
                    </div>
                    <div>
                      <p className=' text-transparent text-[13px] bg-gradient-to-br from-gradientPurple  to-gradientRed bg-clip-text font-black'>
                        50
                      </p>
                      <p className=' text-[11px] font-bold dark:text-white'>
                        Cities
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div
                      className={` mr-2 w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                        darkMode ? "drop-shadow-dark-sm" : "shadow-md"
                      }`}
                    >
                      <Nurse />
                    </div>
                    <div>
                      <p className=' text-transparent text-[13px] bg-gradient-to-br from-gradientPurple  to-gradientRed bg-clip-text font-black'>
                        60
                      </p>
                      <p className=' text-[11px] font-bold dark:text-white'>
                        Clinics
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
              {Number(pillState) === 1 && (
                <motion.div
                  key='treated'
                  initial={{ translateX: "300px" }}
                  animate={{
                    translateX: 0,
                  }}
                  exit={{ translateX: "-300px" }}
                  transition={{
                    duration: 1,
                  }}
                  className='pat absolute w-full h-full flex justify-evenly items-center'
                >
                  <div className='flex items-center'>
                    <div
                      className={` mr-2 w-[30px] h-[30px] flex justify-center items-center  rounded-full ${
                        darkMode ? "drop-shadow-dark-sm" : "shadow-md"
                      }`}
                    >
                      <Nurse />
                    </div>
                    <div>
                      <p className=' text-transparent text-[13px] bg-gradient-to-br from-gradientPurple  to-gradientRed bg-clip-text font-black'>
                        1 Lakh
                      </p>
                      <p className=' text-[11px] font-bold dark:text-white'>
                        Patients treated
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export const NavbarFull = (props) => {
  const { darkMode, toggleDarkMode } = useContext(globalStateContext);
  const [active, setActive] = useState(1);

  const [pillState, setPillState] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setPillState(!pillState);
    }, 3500);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div
      className={` z-[100] fixed w-full rounded-bl-[30px] ${
        darkMode ? "" : "bg-gradient-to-br from-gradientPurple to-gradientRed"
      }   dark:bg-darkBgCon top-0  border-b border-[#ffffff20]`}
    >
      {/* border-b border-b-[#ffffff20] */}

      <div
        className={` relative  ${
          darkMode ? "text-white" : "text-white"
        } mb-12    `}
      >
        <div className='flex justify-between px-7 pt-7 pb-6'>
          {!true ? <MenuIconWhite /> : <MenuIcon />}
          {!true ? <BellWhite /> : <Bell />}
        </div>
        <div
          className={` absolute top-5 overflow-visible left-[50%]  translate-x-[-50%] h-[150px] flex flex-col items-center pb-4`}
        >
          <div className='font-extrabold flex items-center mb-2 '>
            Delhi{" "}
            <i className='ml-2 font-black text-[12px] fa fa-chevron-down'></i>
          </div>
          {/* shadow-xl drop-shadow-xl */}
          <div
            className={`  bg-grayBg overflow-hidden overflow-y-visible relative  h-[50px] w-[200px] text-black   dark:bg-darkBg rounded-[40px] ${
              darkMode ? "pill-drop-shadow-dark" : " drop-shadow-lg"
            }    `}
            style={{}}
          >
            <AnimatePresence>
              {Number(pillState) === 0 && (
                <motion.div
                  key='clinic'
                  initial={{ translateX: "300px" }}
                  animate={{ translateX: 0 }}
                  exit={{ translateX: "-300px" }}
                  transition={{
                    duration: 1,
                  }}
                  className={` cli absolute w-full h-full flex justify-evenly items-center '`}
                >
                  <div className='flex items-center'>
                    <div
                      // style={{
                      //   boxShadow: " 0px 0px 2px  #eee inset, 2px 2px 5px 1px gray",
                      // }}
                      // shadow-md
                      className={`mr-2   w-[30px] h-[30px] flex justify-center items-center  rounded-full dark:bg-darkBgCon ${
                        darkMode ? "drop-shadow-dark-sm" : "shadow-md"
                      } `}
                    >
                      <PinGradient />
                    </div>
                    <div>
                      <p className=' text-transparent text-[13px] bg-gradient-to-br from-gradientPurple  to-gradientRed bg-clip-text font-black'>
                        50
                      </p>
                      <p className=' text-[11px] font-bold dark:text-white'>
                        Cities
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div
                      className={` mr-2 w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                        darkMode ? "drop-shadow-dark-sm" : "shadow-md"
                      }`}
                    >
                      <Nurse />
                    </div>
                    <div>
                      <p className=' text-transparent text-[13px] bg-gradient-to-br from-gradientPurple  to-gradientRed bg-clip-text font-black'>
                        60
                      </p>
                      <p className=' text-[11px] font-bold dark:text-white'>
                        Clinics
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
              {Number(pillState) === 1 && (
                <motion.div
                  key='treated'
                  initial={{ translateX: "300px" }}
                  animate={{
                    translateX: 0,
                  }}
                  exit={{ translateX: "-300px" }}
                  transition={{
                    duration: 1,
                  }}
                  className='pat absolute w-full h-full flex justify-evenly items-center'
                >
                  <div className='flex items-center'>
                    <div
                      className={` mr-2 w-[30px] h-[30px] flex justify-center items-center  rounded-full ${
                        darkMode ? "drop-shadow-dark-sm" : "shadow-md"
                      }`}
                    >
                      <Nurse />
                    </div>
                    <div>
                      <p className=' text-transparent text-[13px] bg-gradient-to-br from-gradientPurple  to-gradientRed bg-clip-text font-black'>
                        1 Lakh
                      </p>
                      <p className=' text-[11px] font-bold dark:text-white'>
                        Patients treated
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NavMenu = () => {
  const { darkMode, toggleDarkMode } = useContext(globalStateContext);
  const [active, setActive] = useState(1);
  return (
    <div
      className={`relative h-[155px]    w-full  mb-5 rounded-bl-[30px] ${
        darkMode ? "" : "nav-menu-gradient"
      }     `}
    >
      <div
        className={` z-[0] absolute top-0 left-4 right-0 -bottom-4 rounded-bl-[30px] ${
          darkMode ? "" : "bg-gradient-to-br from-gradientPurple to-gradientRed"
        }   dark:bg-darkBgCon   opacity-50`}
      ></div>
      <div
        className={`z-[1]   absolute top-0 left-2 right-0 -bottom-2 rounded-bl-[30px] ${
          darkMode ? "" : "bg-gradient-to-br from-gradientPurple to-gradientRed"
        }   dark:bg-darkBgCon   opacity-70`}
      ></div>

      <div
        className={`z-[10] absolute pt-10  top-0 bottom-0 left-0 right-0 rounded-bl-[30px] dark:bg-darkBgCon  ${
          darkMode ? "" : "nav-menu-gradient"
        }`}
      >
        <img
          src={NavRing}
          alt='ring'
          className=' w-[180px] absolute right-0 bottom-0'
        />
        <SearchTrans />

        <div
          className=' flex relative overflow-x-scroll  items-center  pt-2 pb-5 scroll-hide ml-2 pl-4 rounded-bl-[20px]'
          style={{}}
        >
          <div
            onClick={() => setActive(1)}
            className={`mr-1   relative  w-fit font-bold text-[14px] py-1 px-5  rounded-[20px] bg-transparent ${
              active === 1
                ? "text-white nav-menu-active-shadow after:w-[6px] after:h-[6px] after:bg-white after:absolute after:rounded-full after:-bottom-3 after:left-1/2 after:-translate-x-1/2"
                : " text-[#ffffff50] "
            }  ${
              active === 1 && darkMode ? "nav-menu-active-shadow-dark" : ""
            } `}
          >
            Top
          </div>

          <div
            onClick={() => setActive(2)}
            className={`mr-1   relative  w-fit font-bold text-[14px] py-1 px-5  rounded-[20px]  ${
              active === 2
                ? "text-white nav-menu-active-shadow after:w-[6px] after:h-[6px] after:bg-white after:absolute after:rounded-full after:-bottom-3 after:left-1/2 after:-translate-x-1/2"
                : " text-[#ffffff50]   "
            }  ${
              active === 2 && darkMode
                ? "nav-menu-active-shadow-dark bg-darkBgCon"
                : ""
            } `}
          >
            Booking
          </div>
          <div
            onClick={() => setActive(3)}
            className={`mr-1   relative  w-fit font-bold text-[14px] py-1 px-5  rounded-[20px]  ${
              active === 3
                ? "text-white nav-menu-active-shadow after:w-[6px] after:h-[6px] after:bg-white after:absolute after:rounded-full after:-bottom-3 after:left-1/2 after:-translate-x-1/2"
                : " text-[#ffffff50] "
            }  ${
              active === 3 && darkMode ? "nav-menu-active-shadow-dark" : ""
            } `}
          >
            Services
          </div>
          <div
            onClick={() => setActive(4)}
            className={`mr-1   relative  w-fit font-bold text-[14px] py-1 px-5  rounded-[20px]  ${
              active === 4
                ? "text-white nav-menu-active-shadow after:w-[6px] after:h-[6px] after:bg-white after:absolute after:rounded-full after:-bottom-3 after:left-1/2 after:-translate-x-1/2"
                : " text-[#ffffff50] "
            }  ${
              active === 4 && darkMode ? "nav-menu-active-shadow-dark" : ""
            } `}
          >
            Insurance
          </div>
          <div
            onClick={() => setActive(5)}
            className={`mr-1   relative  w-fit font-bold text-[14px] py-1 px-5  rounded-[20px]  ${
              active === 5
                ? "text-white nav-menu-active-shadow after:w-[6px] after:h-[6px] after:bg-white after:absolute after:rounded-full after:-bottom-3 after:left-1/2 after:-translate-x-1/2"
                : " text-[#ffffff50] "
            }  ${
              active === 5 && darkMode ? "nav-menu-active-shadow-dark" : ""
            } `}
          >
            Doctor
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarMain;
