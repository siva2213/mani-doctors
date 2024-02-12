import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as Star } from "./assets/star.svg";
import { ReactComponent as Person } from "./assets/person.svg";
import { ReactComponent as Calender } from "./assets/calender.svg";
import { ReactComponent as Badge } from "./assets/badge.svg";
import { ReactComponent as Teeth } from "./assets/teeth.svg";
import { ReactComponent as Braces } from "./assets/braces.svg";
import { ReactComponent as Root } from "./assets/rootsvg.svg";
import { ReactComponent as Plucker } from "./assets/pluckersvg.svg";
import { ReactComponent as Quotes } from "./assets/Quotes.svg";
import { ReactComponent as StarBlack } from "./assets/Starblack.svg";
import { ReactComponent as Dots } from "./assets/dots.svg";

import map from "./assets/Frame 132.png";
import ReviewPic from "./assets/Pexels Photo by Lokman Sevim.png";
import MarkBigDark from "./assets/markBig.png";
import MarkBig from "./assets/markBigGradient.png";
import { motion, AnimatePresence } from "framer-motion";

import "./styles.css";
import profilePicture from "./assets/portrait-smiling-handsome-man-eyeglasses (1) 1.png";
import { CarouselOne, CarouselTwo } from "./components/Carousel";
import BottomNav from "../../component/BottomNav";
import NavbarMain from "../../component/NavbarMain";
const DoctorDetails = ({ darkMode }) => {
  const reviewsCount = 4;
  const [reviewPos, setReviewPos] = useState(0);
  const specialItems = 3;
  const [specialPos, setSpecialPos] = useState(0);

  return (
    <div className=' bg-[#F3EDF4]  pb-8 dark:bg-darkBg '>
      {/* nav */}
      <NavbarMain darkMode={darkMode} />
      {/* doctorInfo */}
      {/*  */}
      <div
        className={` relative pt-[132px] px-7 py-12 text-white dark:bg-darkModebg  ${
          darkMode ? "" : "bg-gradient-to-r from-gradientPurple to-gradientRed"
        }`}
      >
        <Dots className=' absolute top-60 left-0 ' />
        <Dots className=' absolute right-0 bottom-20 rotate-180 opacity-25' />
        <div className='  relative z-50 '>
          <div className='flex justify-between items-center pl-3'>
            <div className='w-[50%] '>
              <h2 className='text-[24px] font-black leading-6'>
                Dr.Johnathan Gray{" "}
                <span className='text-[11px] font-semibold'>(BDS,MDS)</span>
              </h2>
              <p className='text-[13px] font-semibold'>Dental Speacialist</p>
            </div>
            <div className=' shadow-lg rounded-[30px]'>
              <img
                src={profilePicture}
                className=' w-[113px] h-[108px] rounded-[30px]'
                alt=''
              />
            </div>
          </div>
          <div className='flex justify-between mt-8'>
            <div
              style={{
                boxShadow: " 2px 6px 10px 1px rgba(0,0,0,0.3)",
              }}
              className={`dark:bg-darkBgCon shadow-lg h-[34px] w-[164px]   rounded-[20px] flex justify-center items-center ${
                darkMode
                  ? ""
                  : "bg-gradient-to-r from-gradientPurple via-gradientPurple "
              }`}
            >
              <div className=' mr-2 ml-[-10px] w-[24px] h-[24px] rounded-full flex justify-center items-center border-2 border-white '>
                <Star />
              </div>
              <p className='text-white font-black text-[16px]'>
                4.5 out of 5.0
              </p>
            </div>
            <div
              style={{
                boxShadow: " 2px 6px 10px 1px rgba(0,0,0,0.3)",
              }}
              className='dark:bg-darkBgCon  shadow-lg h-[34px] w-[164px]   rounded-[20px] flex justify-center items-center'
            >
              <div className=' mr-2 ml-[-10px] w-[24px] h-[24px] rounded-full flex justify-center items-center border-2 border-white'>
                <Person />
              </div>
              <p className='text-white font-black text-[16px]'>
                575 <span className='text-[10px]'>Patients review</span>
              </p>
            </div>
          </div>
          {/* about */}
          <div className=' mt-8'>
            <h4 className='mb-[-8px] text-[16px] font-bold'>About</h4>
            <h3 className='text-[40px] font-black'>Doctor</h3>
            <p className=' text-[13px]  font-normal '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan.
            </p>
            <div className=' flex justify-evenly mt-8'>
              <div
                style={{
                  background: "rgba(250,250,250,0.2)",
                  backdropFilter: "blur(10px)",
                }}
                className=' shadow-sm rounded-[20px] px-4 py-2 flex-grow mx-2 min-h-[94px] min-w-[110px] flex flex-col items-center justify-evenly border border-[#ffffff20]'
              >
                <Calender />
                <div className=' flex flex-col items-center mt-[-5px] '>
                  <p className='text-[21px] mb-[-5px] font-black'>6+</p>
                  <p className='text-[10px] font-black'>Year Exp</p>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(250,250,250,0.2)",
                  backdropFilter: "blur(10px)",
                }}
                className=' shadow-sm rounded-[20px] px-4 py-2 flex-grow mx-2 min-h-[94px] min-w-[110px] flex flex-col items-center justify-evenly border border-[#ffffff20]'
              >
                <Person width={25} height={25} />
                <div className=' flex flex-col items-center mt-[-5px] '>
                  <p className='text-[21px] mb-[-5px] font-black'>8K+</p>
                  <p className='text-[10px] font-black'>Patients</p>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(250,250,250,0.2)",
                  backdropFilter: "blur(10px)",
                }}
                className=' shadow-sm rounded-[20px] px-4 py-2 flex-grow mx-2 min-h-[94px] min-w-[110px] flex flex-col items-center justify-evenly border border-[#ffffff20]'
              >
                <Badge />
                <div className=' flex flex-col items-center mt-[-5px] '>
                  <p className='text-[21px] mb-[-5px] font-black'>20+</p>
                  <p className='text-[10px] font-black'>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Speciality*/}
      {/* <div className='p-7'>
        <div className='flex items-end justify-between'>
          <div>
            <p className='text-[16px] mb-[-12px] font-bold'>Doctors</p>
            <h2 className='text-[40px]  font-black'>Speaciality</h2>
          </div>
          <div className='mb-4'>
            <div className=' relative bg-white h-[5px] w-[55px] rounded-[10px]'>
              <div className=' absolute h-[5px] w-[21px] rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '></div>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-4'>
          <div className=' flex flex-col items-center'>
            <div
              style={{
                boxShadow:
                  "-4px -4px 6px 0px #FFFFFF inset, 4px 4px 6px 0px #FFFFFF inset, -4px -4px 6px 0px #E3D7E4, 4px 4px 6px 0px #E3D7E4",
              }}
              className=' w-[80px] h-[80px] bg-[#F3EDF4] rounded-full flex justify-center items-center'
            >
              <div className=' relative bg-gradient-to-r from-gradientPurple to-gradientRed  w-[56px] h-[56px] rounded-full'>
                <div
                  style={{
                    boxShadow: "0px 0px 20px 1px #EE2B3B30",
                  }}
                  className=' absolute right-[1px] w-[55px] h-[55px] bg-gradient-to-br from-[#fff] via-[#fff] to-[#D3D3D3] flex justify-center items-center rounded-full  shadow-gradientRed'
                >
                  <Teeth />
                </div>
              </div>
            </div>
            <h5 className=' mt-2 text-[10px] text-transparent bg-clip-text font-black bg-gradient-to-r from-gradientPurple  to-gradientRed'>
              Implant
            </h5>
          </div>
          <div className=' flex flex-col items-center'>
            <div
              style={{
                boxShadow:
                  "-4px -4px 6px 0px #FFFFFF inset, 4px 4px 6px 0px #FFFFFF inset, -4px -4px 6px 0px #E3D7E4, 4px 4px 6px 0px #E3D7E4",
              }}
              className=' w-[80px] h-[80px] bg-[#F3EDF4] rounded-full flex justify-center items-center'
            >
              <div className=' relative bg-gradient-to-r from-gradientPurple to-gradientRed  w-[56px] h-[56px] rounded-full'>
                <div
                  style={{
                    boxShadow: "0px 0px 20px 1px #EE2B3B30",
                  }}
                  className=' absolute right-[1px] w-[55px] h-[55px] bg-gradient-to-br from-[#fff] via-[#fff] to-[#D3D3D3] flex justify-center items-center rounded-full  shadow-gradientRed'
                >
                  <Root />
                </div>
              </div>
            </div>
            <h5 className=' mt-2 text-[10px] text-transparent bg-clip-text font-black bg-gradient-to-r from-gradientPurple  to-gradientRed'>
              Root Canal
            </h5>
          </div>
          <div className=' flex flex-col items-center'>
            <div
              style={{
                boxShadow:
                  "-4px -4px 6px 0px #FFFFFF inset, 4px 4px 6px 0px #FFFFFF inset, -4px -4px 6px 0px #E3D7E4, 4px 4px 6px 0px #E3D7E4",
              }}
              className=' w-[80px] h-[80px] bg-[#F3EDF4] rounded-full flex justify-center items-center'
            >
              <div className=' relative bg-gradient-to-r from-gradientPurple to-gradientRed  w-[56px] h-[56px] rounded-full'>
                <div
                  style={{
                    boxShadow: "0px 0px 20px 1px #EE2B3B30",
                  }}
                  className=' absolute right-[1px] w-[55px] h-[55px] bg-gradient-to-br from-[#fff] via-[#fff] to-[#D3D3D3] flex justify-center items-center rounded-full  shadow-gradientRed'
                >
                  <Braces />
                </div>
              </div>
            </div>
            <h5 className=' mt-2 text-[10px] text-transparent bg-clip-text font-black bg-gradient-to-r from-gradientPurple  to-gradientRed'>
              Braces
            </h5>
          </div>
          <div className=' flex flex-col items-center'>
            <div
              style={{
                boxShadow:
                  "-4px -4px 6px 0px #FFFFFF inset, 4px 4px 6px 0px #FFFFFF inset, -4px -4px 6px 0px #E3D7E4, 4px 4px 6px 0px #E3D7E4",
              }}
              className=' w-[80px] h-[80px] bg-[#F3EDF4] rounded-full flex justify-center items-center'
            >
              <div className=' relative bg-gradient-to-r from-gradientPurple to-gradientRed  w-[56px] h-[56px] rounded-full'>
                <div
                  style={{
                    boxShadow: "0px 0px 20px 1px #EE2B3B30",
                  }}
                  className=' absolute right-[1px] w-[55px] h-[55px] bg-gradient-to-br from-[#fff] via-[#fff] to-[#D3D3D3] flex justify-center items-center rounded-full  shadow-gradientRed'
                >
                  <Plucker />
                </div>
              </div>
            </div>
            <h5 className=' mt-2 text-[10px] text-transparent bg-clip-text font-black bg-gradient-to-r from-gradientPurple  to-gradientRed'>
              Extraction
            </h5>
          </div>
        </div>
      </div> */}
      <div className='mb-7'>
        <div className='px-7 pt-7 flex items-end justify-between'>
          <div className='dark:text-white'>
            <p className='text-[16px] mb-[-12px] font-bold'>Doctors</p>
            <h2 className='text-[40px]  font-black'>Speaciality</h2>
          </div>
          <div className='mb-4'>
            <div className=' relative bg-white dark:bg-darkBgCon h-[5px] w-[55px] rounded-[10px]'>
              <motion.div
                initial={{ width: "0px" }}
                animate={{
                  width: `${55 / specialItems}px`,
                  translateX: `${specialPos * (55 / specialItems)}px`,
                }}
                className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
              ></motion.div>
            </div>
          </div>
        </div>
        <CarouselTwo
          darkMode={darkMode}
          setPillPos={setSpecialPos}
          items={[{ comment: "1" }, { comment: "2" }, { comment: "3" }]}
        ></CarouselTwo>
      </div>
      {/* Location */}
      <div
        // style={{ backgroundImage: `url(${map})` }}
        className={`h-[235px] ${darkMode ? "map-dark" : "map"} p-7`}
      >
        <div className='dark:text-white'>
          <p className='text-[16px] font-bold mb-[-12px]'>Doctors</p>
          <h4 className='text-[40px] font-black'>Location</h4>
        </div>
        <div className='flex justify-around  px-8'>
          <div className='relative mt-4 mr-2'>
            <img
              src={darkMode ? MarkBigDark : MarkBig}
              alt=''
              className=' w-[46px] h-[55px]'
            />
            <img
              alt=''
              src={profilePicture}
              className=' absolute top-3 left-3 w-[22px] h-[22px] rounded-full'
            />
          </div>
          <div
            className={`w-fit p-5 rounded-[20px]  ${
              darkMode ? "map-board-dark" : "map-board"
            }`}
          >
            <h4 className='  bg-gradient-to-r bg-clip-text text-transparent from-gradientPurple to-gradientRed text-[20px] font-extrabold'>
              Dental Clinic
            </h4>
            <p className='font-semibold text-[11px] w-[160px] dark:text-white'>
              12/2, Mathura Road, Sector 37, Faridabad - Delhi
            </p>
          </div>
        </div>
      </div>
      {/* Review */}

      <div className=''>
        <div className='p-7 pb-0 flex items-end justify-between'>
          <div className='dark:text-white'>
            <p className='text-[16px] mb-[-12px] font-bold'>Read Patients</p>
            <h2 className='text-[40px]  font-black'>Reviews</h2>
          </div>
          <div className='mb-4'>
            <div className=' relative bg-white dark:bg-darkBgCon h-[5px] w-[55px] rounded-[10px]'>
              <motion.div
                initial={{ width: "0px" }}
                animate={{
                  width: `${55 / reviewsCount}px`,
                  translateX: `${reviewPos * (55 / reviewsCount)}px`,
                }}
                className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
              ></motion.div>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className='  '>
          <CarouselOne
            darkMode={darkMode}
            setPillPos={setReviewPos}
            reviews={[
              {
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus",
              },
              {
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus",
              },
              {
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus",
              },
              {
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus",
              },
            ]}
          ></CarouselOne>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
