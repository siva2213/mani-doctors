import React, { useState, useEffect, useContext } from "react";

import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import "./styles.css";
import { ReactComponent as Quotes } from "../assets/Quotes.svg";
import { ReactComponent as StarBlack } from "../assets/Starblack.svg";
import { ReactComponent as Star } from "../assets/Startsmal.svg";
import { ReactComponent as Teeth } from "../assets/teeth.svg";
import { ReactComponent as Braces } from "../assets/braces.svg";
import { ReactComponent as Root } from "../assets/rootsvg.svg";
import { ReactComponent as Plucker } from "../assets/pluckersvg.svg";

import ReviewPic from "../assets/Pexels Photo by Lokman Sevim.png";
import { Nob, NobBig } from "./Nob";
import { globalStateContext } from "../../../App";

export const CarouselOne = (props) => {
  const [position, positionSet] = useState(0);
  const handlersBox = useSwipeable({
    onSwiped: ({ dir, event }) => {
      // NOTE: this stops the propagation of the event
      // from reaching the document swipe listeners
      event.stopPropagation();
      if (dir === "Left") {
        if (position < props.reviews.length - 1) {
          console.log(position);
          positionSet((prevState) => prevState + 1);
          props.setPillPos(position + 1);
          console.log(position);
        }
      }
      if (dir === "Right") {
        if (position > 0) {
          positionSet(position - 1);
          props.setPillPos(position - 1);
        }
      }
    },
    // NOTE: another approach via onSwiping
    // onSwiping: ({ event }) => event.stopPropagation(),
    preventDefaultTouchmoveEvent: true,
  });

  // attach swipeable to document

  return (
    <div className=' carousel-window  py-2 h-[350px] px-5 w-full  rounded-[30px]'>
      <div {...handlersBox}>
        <div className='carousel-row'>
          {props.reviews.map((data, index) => (
            <motion.div
              key={index}
              animate={{
                left: `${(index - position) * 120}vw`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className='carousel-container'
            >
              <div
                className={`drop-shadow-dark-xs  container  px-5 py-4 rounded-[30px] min-w-full bg-gradient-to-r ${
                  props.darkMode
                    ? "from-[#F3EDF4] via-[#F3EDF4] to-[#FFDCFE80] review-shadow-dark"
                    : "from-[#F3EDF4] via-[#F3EDF4] to-[#FFDCFE80] review-shadow"
                }   h-[275px] dark:from-[#30303060] dark:to-[#303030]`}
              >
                <div className='flex  justify-between items-center'>
                  <div className=' flex items-center'>
                    <img
                      src={ReviewPic}
                      className=' rounded-full shadow-sm w-[90px] h-[90px]'
                      alt=''
                    />
                    <div className='ml-4 dark:text-white'>
                      <h5 className='font-bold text-[16px]'>Ruth Frazier</h5>

                      <div
                        className={`mt-2  h-[22px] w-[50px] ${
                          props.darkMode ? "review-star-dark" : "review-star"
                        }  rounded-[20px] flex justify-evenly items-center bg-[#F5D4E7] dark:bg-darkBg`}
                      >
                        {/* <StarBlack fill={"#fff"} /> */}
                        {props.darkMode ? <Star /> : <StarBlack />}

                        <p className='text-black  dark:text-white font-black text-[10px] '>
                          4.5
                        </p>
                      </div>
                    </div>
                  </div>
                  <Quotes />
                </div>
                <div
                  className={`p-5 rounded-[20px] bg-[#F3EDF4] mt-3 dark:bg-darkBg  ${
                    props.darkMode ? "review-comment-dark" : "review-comment"
                  }`}
                >
                  <p className=' leading-[1.1] font-normal text-[13px] dark:text-white'>
                    {data.comment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const CarouselTwo = (props) => {
  const [position, positionSet] = useState(0);
  const handlersBox = useSwipeable({
    onSwiped: ({ dir, event }) => {
      // NOTE: this stops the propagation of the event
      // from reaching the document swipe listeners
      event.stopPropagation();
      if (dir === "Left") {
        if (position < props.items.length - 1) {
          console.log(position);
          positionSet((prevState) => prevState + 1);
          props.setPillPos(position + 1);
          console.log(position);
        }
      }
      if (dir === "Right") {
        if (position > 0) {
          positionSet(position - 1);
          props.setPillPos(position - 1);
        }
      }
    },
    // NOTE: another approach via onSwiping
    // onSwiping: ({ event }) => event.stopPropagation(),
    preventDefaultTouchmoveEvent: true,
  });

  // attach swipeable to document

  return (
    <div className='carousel-window h-[125px] w-full px-5 rounded-[30px]'>
      <div {...handlersBox}>
        <div className='carousel-row'>
          {props.items.map((data, index) => (
            <motion.div
              key={index}
              animate={{
                left: `${(index - position) * 120}vw`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className='carousel-container'
            >
              <div className='flex justify-between mt-4'>
                <Nob
                  darkMode={props.darkMode}
                  title='Implant'
                  icon={<Teeth />}
                  className=' flex flex-col items-center'
                />
                <Nob
                  darkMode={props.darkMode}
                  title='Braces'
                  icon={<Braces />}
                  className=' flex flex-col items-center'
                />
                <Nob
                  darkMode={props.darkMode}
                  title='Root canal'
                  icon={<Root />}
                  className=' flex flex-col items-center'
                />
                <Nob
                  darkMode={props.darkMode}
                  title='Extraction'
                  icon={<Plucker />}
                  className=' flex flex-col items-center'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const CarouselGeneral = (props) => {
  const { darkMode } = useContext(globalStateContext);
  const [position, positionSet] = useState(0);
  const handlersBox = useSwipeable({
    onSwiped: ({ dir, event }) => {
      // NOTE: this stops the propagation of the event
      // from reaching the document swipe listeners
      event.stopPropagation();
      if (dir === "Left") {
        if (position < props.data.length - 1) {
          positionSet((prevState) => prevState + 1);
          props.setPillPos(position + 1);
        }
      }
      if (dir === "Right") {
        if (position > 0) {
          positionSet(position - 1);
          props.setPillPos(position - 1);
        }
      }
    },
    // NOTE: another approach via onSwiping
    // onSwiping: ({ event }) => event.stopPropagation(),
    preventDefaultTouchmoveEvent: true,
  });

  // attach swipeable to document

  return (
    <div
      className={` carousel-window  w-full`}
      style={{
        height: `${props.minHeight}`,
      }}
    >
      <div {...handlersBox}>
        <div className='carousel-row '>
          {props.data.map((data, index) => (
            <motion.div
              key={index}
              animate={{
                left: `${(index - position) * 120}vw`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className='carousel-container '
            >
              {data}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const CarouselHor = (props) => {
  const [position, positionSet] = useState(0);
  const handlersBox = useSwipeable({
    onSwiped: ({ dir, event }) => {
      // NOTE: this stops the propagation of the event
      // from reaching the document swipe listeners
      event.stopPropagation();
      if (dir === "Left") {
        if (position < props.data.length - 1) {
          positionSet((prevState) => prevState + 1);
          props.setPillPos(position + 1);
        }
      }
      if (dir === "Right") {
        if (position > 0) {
          positionSet(position - 1);
          props.setPillPos(position - 1);
        }
      }
    },
    // NOTE: another approach via onSwiping
    // onSwiping: ({ event }) => event.stopPropagation(),
    preventDefaultTouchmoveEvent: true,
  });

  // attach swipeable to document

  return (
    <div
      className={` carousel-window  w-full`}
      style={{
        height: `${props.minHeight}`,
      }}
    >
      <div {...handlersBox}>
        <div className='carousel-row '>
          {props.data.map((data, index) => (
            <motion.div
              key={index}
              animate={{
                left: `${(index - position) * props.left}}px`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className='carousel-container '
            >
              {data}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CarouselDoctor = (props) => {
  const { text } = useContext(globalStateContext);
  const [position, positionSet] = useState(0);
  const handlersBox = useSwipeable({
    onSwiped: ({ dir, event }) => {
      // NOTE: this stops the propagation of the event
      // from reaching the document swipe listeners
      event.stopPropagation();
      if (dir === "Left") {
        if (position < props.items.length - 1) {
          console.log(position);
          positionSet((prevState) => prevState + 1);
          props.setPillPos(position + 1);
          console.log(position);
        }
      }
      if (dir === "Right") {
        if (position > 0) {
          positionSet(position - 1);
          props.setPillPos(position - 1);
        }
      }
    },
    // NOTE: another approach via onSwiping
    // onSwiping: ({ event }) => event.stopPropagation(),
    preventDefaultTouchmoveEvent: true,
  });

  // attach swipeable to document

  return (
    <div className='carousel-window h-[225px] w-full px-5 rounded-[30px]'>
      <div {...handlersBox}>
        <div className='carousel-row'>
          {props.items.map((data, index) => (
            <motion.div
              key={index}
              animate={{
                left: `${(index - position) * 120}vw`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className='carousel-container'
            >
              <div className='flex justify-around mt-4'>
                <NobBig
                  title='Attention'
                  rating={4.2}
                  className=' flex flex-col items-center'
                />
                <NobBig
                  title='Braces'
                  rating={4.5}
                  className=' flex flex-col items-center'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const CarouselDouble = (props) => {
  const { darkMode } = useContext(globalStateContext);
  const [position, positionSet] = useState(0);
  const handlersBox = useSwipeable({
    onSwiped: ({ dir, event }) => {
      // NOTE: this stops the propagation of the event
      // from reaching the document swipe listeners
      event.stopPropagation();
      if (dir === "Left") {
        if (position < props.reviews.length - 1) {
          console.log(position);
          positionSet((prevState) => prevState + 1);
          props.setPillPos(position + 1);
          console.log(position);
        }
      }
      if (dir === "Right") {
        if (position > 0) {
          positionSet(position - 1);
          props.setPillPos(position - 1);
        }
      }
    },
    // NOTE: another approach via onSwiping
    // onSwiping: ({ event }) => event.stopPropagation(),
    preventDefaultTouchmoveEvent: true,
  });

  // attach swipeable to document

  return (
    <div
      className=' carousel-window  py-2 h-[350px] px-5 w-full  rounded-[30px]'
      style={{
        height: `${props.minHeight}`,
      }}
    >
      <div {...handlersBox}>
        <div className='carousel-row'>
          {props.reviews.map((data, index) => (
            <motion.div
              key={index}
              animate={{
                left: `${(index - position) * 120}vw`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className='carousel-container'
            >
              <div
                className={` mb-7 drop-shadow-dark-xs  container  px-5 py-4 rounded-[30px] min-w-full bg-gradient-to-r ${
                  darkMode
                    ? "from-[#F3EDF4] via-[#F3EDF4] to-[#FFDCFE80] review-shadow-dark"
                    : "from-[#F3EDF4] via-[#F3EDF4] to-[#FFDCFE80] review-shadow"
                }   h-[275px] dark:from-[#30303060] dark:to-[#303030]`}
              >
                <div className='flex  justify-between items-center'>
                  <div className=' flex items-center'>
                    <img
                      src={ReviewPic}
                      className=' rounded-full shadow-sm w-[90px] h-[90px]'
                      alt=''
                    />
                    <div className='ml-4 dark:text-white'>
                      <h5 className='font-bold text-[16px]'>Ruth Frazier</h5>

                      <div
                        className={`mt-2  h-[22px] w-[50px] ${
                          darkMode ? "review-star-dark" : "review-star"
                        }  rounded-[20px] flex justify-evenly items-center bg-[#F5D4E7] dark:bg-darkBg`}
                      >
                        {/* <StarBlack fill={"#fff"} /> */}
                        {darkMode ? <Star /> : <StarBlack />}

                        <p className='text-black  dark:text-white font-black text-[10px] '>
                          4.5
                        </p>
                      </div>
                    </div>
                  </div>
                  <Quotes />
                </div>
                <div
                  className={`p-5 rounded-[20px] bg-[#F3EDF4] mt-3 dark:bg-darkBg  ${
                    darkMode ? "review-comment-dark" : "review-comment"
                  }`}
                >
                  <p className=' leading-[1.1] font-normal text-[13px] dark:text-white'>
                    {data.comment}
                  </p>
                </div>
              </div>
              <div
                className={` mb-7 drop-shadow-dark-xs  container  px-5 py-4 rounded-[30px] min-w-full bg-gradient-to-r ${
                  darkMode
                    ? "from-[#F3EDF4] via-[#F3EDF4] to-[#FFDCFE80] review-shadow-dark"
                    : "from-[#F3EDF4] via-[#F3EDF4] to-[#FFDCFE80] review-shadow"
                }   h-[275px] dark:from-[#30303060] dark:to-[#303030]`}
              >
                <div className='flex  justify-between items-center'>
                  <div className=' flex items-center'>
                    <img
                      src={ReviewPic}
                      className=' rounded-full shadow-sm w-[90px] h-[90px]'
                      alt=''
                    />
                    <div className='ml-4 dark:text-white'>
                      <h5 className='font-bold text-[16px]'>Ruth Frazier</h5>

                      <div
                        className={`mt-2  h-[22px] w-[50px] ${
                          darkMode ? "review-star-dark" : "review-star"
                        }  rounded-[20px] flex justify-evenly items-center bg-[#F5D4E7] dark:bg-darkBg`}
                      >
                        {/* <StarBlack fill={"#fff"} /> */}
                        {darkMode ? <Star /> : <StarBlack />}

                        <p className='text-black  dark:text-white font-black text-[10px] '>
                          4.5
                        </p>
                      </div>
                    </div>
                  </div>
                  <Quotes />
                </div>
                <div
                  className={`p-5 rounded-[20px] bg-[#F3EDF4] mt-3 dark:bg-darkBg  ${
                    darkMode ? "review-comment-dark" : "review-comment"
                  }`}
                >
                  <p className=' leading-[1.1] font-normal text-[13px] dark:text-white'>
                    {data.comment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
