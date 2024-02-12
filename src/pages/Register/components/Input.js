import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Warning } from "../assets/Warning.svg";
import Cross from "../assets/cross.svg";

import Upload from "../assets/cloud-upload.svg";

import downArrow from "../assets/downArrow.svg";
import { InputError, InputError2 } from "../../../component/InputError";
import { AnimatePresence, motion } from "framer-motion";
export const Input = (props) => {
  const [inFocus, setInFocus] = useState(false);
  const [errorInput, setErrorInput] = useState(false);
  return (
    <div className={" overflow-visible" + props.className}>
      {inFocus && props.helperText && (
        <div className=' relative p-4 py-5 mb-4'>
          <div className='bg-clip-text text-transparent bg-gradient-to-br from-gradientPurple to-gradientRed font-extrabold  text-[10px]'>
            <ul
              style={{}}
              className='list-disc  marker:text-sm marker:leading-3 marker:m-0 marker:text-gradientPurple'
            >
              <li className=' '>
                You can either mention Dr. or just write your name.
              </li>
              <li>
                Name will appear in the app exactly how you write here. You can
                write like Rajiv Lal, Dr. Rajiv Lal or you can just write Rajiv.{" "}
              </li>
              <li>
                Dont worry about the mistakes you make , it can be edited later
                wheN you see in the app.
              </li>
            </ul>
          </div>
          <img src={Cross} className='absolute top-2 right-4' />
          <div className=' absolute z-[0] opacity-40 top-0 left-0 right-0 bottom-0 rounded-[25px] p-5 text-[10px] bg-gradient-to-br from-gradientPurple to-gradientRed '></div>
        </div>
      )}
      <div className=' relative'>
        {inFocus && (
          <label
            for={props.title}
            className=' bg-darkBg top-[-8px] left-9 pl-3 pr-2 text-[13px] font-semibold text-white absolute'
          >
            {props.title}
          </label>
        )}
        <div
          className={`p-[2px] rounded-full ${
            !inFocus
              ? "bg-grayBorder"
              : " bg-gradient-to-r from-gradientPurple to-gradientRed"
          }`}
        >
          <input
            id={props.title}
            className='text-white font-semibold bg-darkBg w-full h-[56px] p-6 rounded-full  border-0 text-[16px] focus:outline-none '
            placeholder={inFocus ? "" : props.title}
            onFocus={() => {
              setInFocus(true);
            }}
            onBlur={() => {
              setInFocus(false);
            }}
          />
        </div>
        {errorInput && (
          <InputError styles={props.errorStyles + " "}>
            {props.errorMsg}
          </InputError>
        )}
      </div>
    </div>
  );
};
export const Input2 = (props) => {
  const [inFocus, setInFocus] = useState(false);
  const [errorInput, setErrorInput] = useState(true);
  return (
    <div className={"overflow-visible " + props.className}>
      {inFocus && props.helperText && (
        <div className=' relative p-4 py-5 mb-4'>
          <div className='bg-clip-text text-transparent bg-gradient-to-br from-gradientPurple to-gradientRed font-extrabold  text-[10px]'>
            <ul
              style={{}}
              className='list-disc  marker:text-sm marker:leading-3 marker:m-0 marker:text-gradientPurple'
            >
              <li className=' '>
                You can either mention Dr. or just write your name.
              </li>
              <li>
                Name will appear in the app exactly how you write here. You can
                write like Rajiv Lal, Dr. Rajiv Lal or you can just write Rajiv.{" "}
              </li>
              <li>
                Dont worry about the mistakes you make , it can be edited later
                wheN you see in the app.
              </li>
            </ul>
          </div>
          <img src={Cross} className='absolute top-2 right-4' />
          <div className=' absolute z-[0] opacity-40 top-0 left-0 right-0 bottom-0 rounded-[25px] p-5 text-[10px] bg-gradient-to-br from-gradientPurple to-gradientRed '></div>
        </div>
      )}
      <div className=' relative'>
        {inFocus && (
          <label
            for={props.title}
            className=' bg-darkBg top-[-8px] left-9 pl-3 pr-2 text-[13px] font-semibold text-white absolute'
          >
            {props.title}
          </label>
        )}
        <div
          className={`p-[2px] rounded-full ${
            !inFocus
              ? "bg-grayBorder"
              : " bg-gradient-to-r from-gradientPurple to-gradientRed"
          }`}
        >
          <input
            id={props.title}
            className='text-white font-semibold bg-darkBg w-full h-[56px] p-6 rounded-full  border-0 text-[16px] focus:outline-none '
            placeholder={inFocus ? "" : props.title}
            onFocus={() => {
              setInFocus(true);
            }}
            onBlur={() => {
              setInFocus(false);
            }}
          />
        </div>
        {errorInput && (
          <InputError2 styles={props.errorStyles + " "}>
            {props.errorMsg}
          </InputError2>
        )}
      </div>
    </div>
  );
};
export const InputNumb = (props) => {
  const [errorInput, setErrorInput] = useState(true);
  const [inFocus, setInFocus] = useState(false);
  return (
    <div className={"overflow-visible " + props.className}>
      {inFocus && props.noHelperText && (
        <div className=' relative p-4 py-5 mb-4'>
          <div className='bg-clip-text text-transparent bg-gradient-to-br from-gradientPurple to-gradientRed font-extrabold  text-[10px]'>
            <ul
              style={{}}
              className='list-disc  marker:text-sm marker:leading-3 marker:m-0 marker:text-gradientPurple'
            >
              <li className=' '>
                You can either mention Dr. or just write your name.
              </li>
              <li>
                Name will appear in the app exactly how you write here. You can
                write like Rajiv Lal, Dr. Rajiv Lal or you can just write Rajiv.{" "}
              </li>
              <li>
                Dont worry about the mistakes you make , it can be edited later
                wheN you see in the app.
              </li>
            </ul>
          </div>
          <img src={Cross} className='absolute top-2 right-4' />
          <div className=' absolute z-[0] opacity-40 top-0 left-0 right-0 bottom-0 rounded-[25px] p-5 text-[10px] bg-gradient-to-br from-gradientPurple to-gradientRed '></div>
        </div>
      )}

      <div className='flex w-full justify-between'>
        <div
          className=' w-[80px] h-[60px] bg-darkBg rounded-full flex justify-center items-center'
          style={{
            filter:
              "drop-shadow(-10px -10px 20px #cccccc20) drop-shadow(10px 10px 20px #00000080) ",
          }}
        >
          <p className='text-white text-[16px] font-black flex'>
            +91
            <img src={downArrow} className='ml-1' alt='' />
          </p>
        </div>
        <div className=' relative'>
          {inFocus && (
            <label
              for={props.title}
              className=' bg-darkBg top-[-8px] left-9 pl-3 pr-2 text-[13px] font-semibold text-white absolute'
            >
              {props.title}
            </label>
          )}
          <div
            className={`p-[2px] rounded-full ${
              !inFocus
                ? "bg-grayBorder"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed"
            }`}
          >
            <input
              id={props.title}
              className='text-white font-semibold bg-darkBg w-full h-[56px] p-6 rounded-full  border-0 text-[16px] focus:outline-none '
              placeholder={inFocus ? "" : props.title}
              onFocus={() => {
                setInFocus(true);
              }}
              onBlur={() => {
                setInFocus(false);
              }}
            />
          </div>
          {errorInput && (
            <InputError styles={props.errorStyles + " "}>
              {props.errorMsg}
            </InputError>
          )}
        </div>
      </div>
    </div>
  );
};
export const InputNumb2 = (props) => {
  const [errorInput, setErrorInput] = useState(true);
  const [inFocus, setInFocus] = useState(false);
  return (
    <div className={"overflow-visible " + props.className}>
      {inFocus && props.noHelperText && (
        <div className=' relative p-4 py-5 mb-4'>
          <div className='bg-clip-text text-transparent bg-gradient-to-br from-gradientPurple to-gradientRed font-extrabold  text-[10px]'>
            <ul
              style={{}}
              className='list-disc  marker:text-sm marker:leading-3 marker:m-0 marker:text-gradientPurple'
            >
              <li className=' '>
                You can either mention Dr. or just write your name.
              </li>
              <li>
                Name will appear in the app exactly how you write here. You can
                write like Rajiv Lal, Dr. Rajiv Lal or you can just write Rajiv.{" "}
              </li>
              <li>
                Dont worry about the mistakes you make , it can be edited later
                wheN you see in the app.
              </li>
            </ul>
          </div>
          <img src={Cross} className='absolute top-2 right-4' />
          <div className=' absolute z-[0] opacity-40 top-0 left-0 right-0 bottom-0 rounded-[25px] p-5 text-[10px] bg-gradient-to-br from-gradientPurple to-gradientRed '></div>
        </div>
      )}

      <div className='flex w-full justify-between'>
        <div
          className=' w-[80px] h-[60px] bg-darkBg rounded-full flex justify-center items-center'
          style={{
            filter:
              "drop-shadow(-10px -10px 20px #cccccc20) drop-shadow(10px 10px 20px #00000080) ",
          }}
        >
          <p className='text-white text-[16px] font-black flex'>
            +91
            <img src={downArrow} className='ml-1' alt='' />
          </p>
        </div>
        <div className=' relative w-full ml-3'>
          {inFocus && (
            <label
              for={props.title}
              className=' bg-darkBg top-[-8px] left-9 pl-3 pr-2 text-[13px] font-semibold text-white absolute'
            >
              {props.title}
            </label>
          )}
          <div
            className={`p-[2px] rounded-full ${
              !inFocus
                ? "bg-grayBorder"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed"
            }`}
          >
            <input
              id={props.title}
              className='text-white font-extrabold bg-darkBg w-full h-[56px] p-6 rounded-full  border-0 text-[16px] focus:outline-none '
              placeholder={inFocus ? "" : props.title}
              onFocus={() => {
                setInFocus(true);
              }}
              onBlur={() => {
                setInFocus(false);
              }}
            />
          </div>
        </div>
      </div>
      {errorInput && (
        <InputError2 styles={props.errorStyles + " "}>
          {props.errorMsg}
        </InputError2>
      )}
    </div>
  );
};
export const InputDrop = (props) => {
  const [errorInput, setErrorInput] = useState(false);
  const [inFocus, setInFocus] = useState(false);

  const variants = {
    open: {
      padding: "20px",

      minHeight: "290px",

      boxShadow:
        "-10px -10px 20px 0px #2e2e2e inset,10px 10px 20px 0px #1d1d1d inset",
    },
    close: {},
  };
  return (
    <div className={`overflow-visible bg-transparent ${props.styles}`}>
      <AnimatePresence>
        {inFocus && (
          <motion.div
            exit={{
              opacity: 0,
              transition: {
                delay: 0.2,
              },
            }}
            className=' overflow-visible rounded-[25px] relative p-5 pl-6 py-5 mb-4 bg-transparent'
          >
            <div className='bg-clip-text text-transparent bg-gradient-to-br from-gradientPurple to-gradientRed font-extrabold  text-[10px]'>
              <ul
                style={{}}
                className='list-disc  marker:text-sm marker:leading-3 marker:m-0 marker:text-gradientPurple'
              >
                <li className=' '>
                  You can either mention Dr. or just write your name.
                </li>
                <li>
                  Name will appear in the app exactly how you write here. You
                  can write like Rajiv Lal, Dr. Rajiv Lal or you can just write
                  Rajiv.{" "}
                </li>
                <li>
                  Dont worry about the mistakes you make , it can be edited
                  later wheN you see in the app.
                </li>
              </ul>
            </div>
            <img src={Cross} className='absolute top-2 right-4' />
            <div className=' absolute z-[0] opacity-40 top-0 left-0 right-0 bottom-0 rounded-[25px] p-5 text-[10px] bg-gradient-to-br from-gradientPurple to-gradientRed '></div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          variants={variants}
          animate={inFocus ? "open" : "close"}
          style={{
            WebkitAppearance: "none",
          }}
          className={`overflow-visible relative bg-transparent rounded-[40px]   w-full`}
        >
          <div
            onClick={() => {
              setInFocus(!inFocus);
            }}
            className=' transition-all w-full px-7   h-[60px] bg-darkBg rounded-full flex justify-between items-center'
            style={{
              filter:
                "drop-shadow(-5px -5px 10px #cccccc20) drop-shadow(10px 10px 10px #00000080) ",
            }}
          >
            <p className='text-white text-[16px] font-black flex'>
              {props.title}
            </p>
            <img src={downArrow} className='ml-1' alt='' />
          </div>
          {inFocus && (
            <textarea
              rows={8}
              className={` bg-transparent resize-none w-full
           px-5 py-2 m-2 mt-4 bg-darkBg rounded-[30px] font-semibold text-[12px] text-white placeholder:text-white  focus:outline-none border-none outline-none `}
              placeholder='Write here..'
            ></textarea>
          )}
        </motion.div>
      </AnimatePresence>

      {errorInput && (
        <div className='flex justify-end mt-2'>
          <p className=' flex items-center w-[139px] px-2 text-center py-1 rounded-[18px] font-semibold text-[10px] text-[#FF0000] bg-[#FF000020]'>
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 4.0625V5.3125'
                stroke='#FF0000'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M4.45908 1.5619L1.02251 7.4991C0.967521 7.5941 0.938522 7.70191 0.938431 7.81168C0.93834 7.92145 0.967161 8.02931 1.02199 8.1244C1.07683 8.21949 1.15573 8.29847 1.25078 8.35338C1.34583 8.40829 1.45366 8.4372 1.56343 8.4372H8.43658C8.54635 8.4372 8.65418 8.40829 8.74923 8.35338C8.84428 8.29847 8.92319 8.2195 8.97802 8.1244C9.03285 8.02931 9.06167 7.92145 9.06158 7.81168C9.06149 7.70191 9.03249 7.5941 8.9775 7.4991L5.54092 1.5619C5.48602 1.46705 5.40715 1.38831 5.31221 1.33356C5.21726 1.27882 5.1096 1.25 5 1.25C4.89041 1.25 4.78274 1.27882 4.6878 1.33356C4.59286 1.38831 4.51398 1.46705 4.45908 1.5619V1.5619Z'
                stroke='#FF0000'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M5 7.5C5.34518 7.5 5.625 7.22018 5.625 6.875C5.625 6.52982 5.34518 6.25 5 6.25C4.65482 6.25 4.375 6.52982 4.375 6.875C4.375 7.22018 4.65482 7.5 5 7.5Z'
                fill='#FF0000'
              />
            </svg>{" "}
            <span className='ml-2'>This feild is required</span>
          </p>
        </div>
      )}
    </div>
  );
};
export const InputFile = (props) => {
  const [errorInput, setErrorInput] = useState(true);
  const [inFocus, setInFocus] = useState(false);
  return (
    <div className={" " + props.className}>
      {inFocus && (
        <div className=' relative p-4 py-5 mb-4'>
          <div className='bg-clip-text text-transparent bg-gradient-to-br from-gradientPurple to-gradientRed font-extrabold  text-[10px]'>
            <ul
              style={{}}
              className='list-disc  marker:text-sm marker:leading-3 marker:m-0 marker:text-gradientPurple'
            >
              <li className=' '>
                You can either mention Dr. or just write your name.
              </li>
              <li>
                Name will appear in the app exactly how you write here. You can
                write like Rajiv Lal, Dr. Rajiv Lal or you can just write Rajiv.{" "}
              </li>
              <li>
                Dont worry about the mistakes you make , it can be edited later
                wheN you see in the app.
              </li>
            </ul>
          </div>
          <img src={Cross} className='absolute top-2 right-4' />
          <div className=' absolute z-[0] opacity-40 top-0 left-0 right-0 bottom-0 rounded-[25px] p-5 text-[10px] bg-gradient-to-br from-gradientPurple to-gradientRed '></div>
        </div>
      )}

      <div className={" bg-darkBg   w-full flex justify-between "}>
        <div
          onClick={() => {
            setInFocus(!inFocus);
          }}
          className=' mr-2 min-w-[160px] px-4 text-center   h-[158px] bg-darkBg rounded-[40px] flex flex-col justify-center items-center'
          style={{
            filter:
              "drop-shadow(-10px -10px 20px #cccccc20) drop-shadow(10px 10px 20px #00000080) ",
          }}
        >
          <img src={Upload} className='ml-1' alt='' />
          <p className=' mt-3 text-white text-[16px] font-black flex'>
            {props.title}
          </p>
          <p className='mt-2 text-white text-[10px] font-black flex'>
            Documents can be PDF, DOCX, JPEG, PNG
          </p>
        </div>

        <div
          onClick={() => {
            setInFocus(!inFocus);
          }}
          className='ml-2 min-w-[160px] px-4 text-center   h-[158px] bg-darkBg rounded-[40px] flex flex-col justify-center items-center'
          style={{
            filter:
              "drop-shadow(-10px -10px 20px #cccccc20) drop-shadow(10px 10px 20px #00000080) ",
          }}
        >
          <img src={Upload} className='ml-1' alt='' />
          <p className=' mt-3 text-white text-[16px] font-black flex'>
            {props.title}
          </p>
          <p className='mt-2 text-white text-[10px] font-black flex'>
            Documents can be PDF, DOCX, JPEG, PNG
          </p>
        </div>
      </div>
      <div className='flex justify-end mt-2'>
        {errorInput && (
          <div className='flex justify-end mt-2 mr-2'>
            <p className=' flex items-center w-fit px-4 text-center py-1 rounded-[18px] font-semibold text-[10px] text-[#FF0000] bg-[#FF000020]'>
              <svg
                width='10'
                height='10'
                viewBox='0 0 10 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5 4.0625V5.3125'
                  stroke='#FF0000'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M4.45908 1.5619L1.02251 7.4991C0.967521 7.5941 0.938522 7.70191 0.938431 7.81168C0.93834 7.92145 0.967161 8.02931 1.02199 8.1244C1.07683 8.21949 1.15573 8.29847 1.25078 8.35338C1.34583 8.40829 1.45366 8.4372 1.56343 8.4372H8.43658C8.54635 8.4372 8.65418 8.40829 8.74923 8.35338C8.84428 8.29847 8.92319 8.2195 8.97802 8.1244C9.03285 8.02931 9.06167 7.92145 9.06158 7.81168C9.06149 7.70191 9.03249 7.5941 8.9775 7.4991L5.54092 1.5619C5.48602 1.46705 5.40715 1.38831 5.31221 1.33356C5.21726 1.27882 5.1096 1.25 5 1.25C4.89041 1.25 4.78274 1.27882 4.6878 1.33356C4.59286 1.38831 4.51398 1.46705 4.45908 1.5619V1.5619Z'
                  stroke='#FF0000'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M5 7.5C5.34518 7.5 5.625 7.22018 5.625 6.875C5.625 6.52982 5.34518 6.25 5 6.25C4.65482 6.25 4.375 6.52982 4.375 6.875C4.375 7.22018 4.65482 7.5 5 7.5Z'
                  fill='#FF0000'
                />
              </svg>{" "}
              <span className='ml-2'>Wrong Format</span>
            </p>
          </div>
        )}
        {errorInput && (
          <div className='flex justify-end mt-2'>
            <p className=' flex items-center w-[139px] px-2 text-center py-1 rounded-[18px] font-semibold text-[10px] text-[#FF0000] bg-[#FF000020]'>
              <svg
                width='10'
                height='10'
                viewBox='0 0 10 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5 4.0625V5.3125'
                  stroke='#FF0000'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M4.45908 1.5619L1.02251 7.4991C0.967521 7.5941 0.938522 7.70191 0.938431 7.81168C0.93834 7.92145 0.967161 8.02931 1.02199 8.1244C1.07683 8.21949 1.15573 8.29847 1.25078 8.35338C1.34583 8.40829 1.45366 8.4372 1.56343 8.4372H8.43658C8.54635 8.4372 8.65418 8.40829 8.74923 8.35338C8.84428 8.29847 8.92319 8.2195 8.97802 8.1244C9.03285 8.02931 9.06167 7.92145 9.06158 7.81168C9.06149 7.70191 9.03249 7.5941 8.9775 7.4991L5.54092 1.5619C5.48602 1.46705 5.40715 1.38831 5.31221 1.33356C5.21726 1.27882 5.1096 1.25 5 1.25C4.89041 1.25 4.78274 1.27882 4.6878 1.33356C4.59286 1.38831 4.51398 1.46705 4.45908 1.5619V1.5619Z'
                  stroke='#FF0000'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M5 7.5C5.34518 7.5 5.625 7.22018 5.625 6.875C5.625 6.52982 5.34518 6.25 5 6.25C4.65482 6.25 4.375 6.52982 4.375 6.875C4.375 7.22018 4.65482 7.5 5 7.5Z'
                  fill='#FF0000'
                />
              </svg>{" "}
              <span className='ml-2'>This feild is required</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const InputOTP = () => {
  const [error, setError] = useState(false);

  const inputRef = useRef([]);

  const onInput = (e) => {
    if (e.target.value.length >= 1) {
      inputRef.current[Number(e.target.name) + 1].focus();
    }
  };
  return (
    <div className=''>
      <div className='flex justify-evenly'>
        <div
          className=' w-[80px] h-[65px]  bg-darkBg rounded-[20px] flex justify-center items-center'
          style={{
            filter:
              "drop-shadow(-10px -10px 20px #cccccc20) drop-shadow(10px 10px 20px #00000080) ",
          }}
        >
          <input
            onChange={(e) => onInput(e)}
            maxLength='1'
            name='0'
            ref={(el) => (inputRef.current[0] = el)}
            className={` block w-full border-none pt-2 px-7 text-[32px] text-transparent font-bold bg-clip-text ${
              error
                ? "text-[#EE2B3B]"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed "
            } focus:outline-none`}
          />
        </div>
        <div
          className=' w-[80px] h-[65px]  bg-darkBg rounded-[20px] flex justify-center items-center'
          style={{
            filter:
              "drop-shadow(-10px -10px 20px #cccccc20) drop-shadow(10px 10px 20px #00000080) ",
          }}
        >
          <input
            name='1'
            onChange={(e) => onInput(e)}
            maxLength='1'
            ref={(el) => (inputRef.current[1] = el)}
            className={` block w-full border-none pt-2 px-7 text-[32px] text-transparent font-bold bg-clip-text ${
              error
                ? "text-[#EE2B3B]"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed "
            } focus:outline-none`}
          />
        </div>
        <div
          className=' w-[80px] h-[65px]  bg-darkBg rounded-[20px] flex justify-center items-center'
          style={{
            filter:
              "drop-shadow(-10px -10px 20px #cccccc20) drop-shadow(10px 10px 20px #00000080) ",
          }}
        >
          <input
            name='2'
            onChange={(e) => onInput(e)}
            maxLength='1'
            ref={(el) => (inputRef.current[2] = el)}
            className={` block w-full border-none pt-2 px-7 text-[32px] text-transparent font-bold bg-clip-text ${
              error
                ? "text-[#EE2B3B]"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed "
            } focus:outline-none`}
          />
        </div>
        <div
          className=' w-[80px] h-[65px]  bg-darkBg rounded-[20px] flex justify-center items-center'
          style={{
            filter:
              "drop-shadow(-10px -10px 20px #cccccc20) drop-shadow(10px 10px 20px #00000080) ",
          }}
        >
          <input
            name='3'
            onChange={(e) => onInput(e)}
            maxLength='1'
            ref={(el) => (inputRef.current[3] = el)}
            className={` block w-full border-none pt-2 px-7 text-[32px] text-transparent font-bold bg-clip-text ${
              error
                ? "text-[#EE2B3B]"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed "
            } focus:outline-none`}
          />
        </div>
      </div>
      <div className='w-full px-2 flex justify-end mt-2'>
        {error && <InputError>Wrong OTP</InputError>}
      </div>
    </div>
  );
};
export const InputOTP2 = () => {
  const [error, setError] = useState(false);

  const inputRef = useRef([]);

  const onInput = (e) => {
    if (e.target.value.length >= 1) {
      inputRef.current[Number(e.target.name) + 1].focus();
    }
  };
  return (
    <div className=''>
      <div className='flex justify-evenly'>
        <div
          className=' w-[60px] h-[60px]  bg-[#F3EDF4] rounded-[20px] flex justify-center items-center'
          style={{
            boxShadow: "-10px -10px  20px #FAF6FB ,10px 10px 20px #DFD3E1",
          }}
        >
          <input
            onChange={(e) => onInput(e)}
            maxLength='1'
            name='0'
            ref={(el) => (inputRef.current[0] = el)}
            className={` block w-full border-none pt-1 px-5 text-[32px] text-transparent font-bold bg-clip-text ${
              error
                ? "text-[#EE2B3B]"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed "
            } focus:outline-none`}
          />
        </div>
        <div
          className=' w-[60px] h-[60px]  bg-[#F3EDF4] rounded-[20px] flex justify-center items-center'
          style={{
            boxShadow: "-10px -10px  20px #FAF6FB ,10px 10px 20px #DFD3E1",
          }}
        >
          <input
            name='1'
            onChange={(e) => onInput(e)}
            maxLength='1'
            ref={(el) => (inputRef.current[1] = el)}
            className={` block w-full border-none pt-1 px-5 text-[32px] text-transparent font-bold bg-clip-text ${
              error
                ? "text-[#EE2B3B]"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed "
            } focus:outline-none`}
          />
        </div>
        <div
          className=' w-[60px] h-[60px]  bg-[#F3EDF4] rounded-[20px] flex justify-center items-center'
          style={{
            boxShadow: "-10px -10px  20px #FAF6FB ,10px 10px 20px #DFD3E1",
          }}
        >
          <input
            name='2'
            onChange={(e) => onInput(e)}
            maxLength='1'
            ref={(el) => (inputRef.current[2] = el)}
            className={` block w-full border-none pt-1 px-5 text-[32px] text-transparent font-bold bg-clip-text ${
              error
                ? "text-[#EE2B3B]"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed "
            } focus:outline-none`}
          />
        </div>
        <div
          className=' w-[60px] h-[60px]  bg-[#F3EDF4] rounded-[20px] flex justify-center items-center'
          style={{
            boxShadow: "-10px -10px  20px #FAF6FB ,10px 10px 20px #DFD3E1",
          }}
        >
          <input
            name='3'
            onChange={(e) => onInput(e)}
            maxLength='1'
            ref={(el) => (inputRef.current[3] = el)}
            className={` block w-full border-none pt-1 px-5 text-[32px] text-transparent font-bold bg-clip-text ${
              error
                ? "text-[#EE2B3B]"
                : " bg-gradient-to-r from-gradientPurple to-gradientRed "
            } focus:outline-none`}
          />
        </div>
      </div>
      <div className='w-full px-2 flex justify-end mt-2'>
        {error && <InputError>Wrong OTP</InputError>}
      </div>
    </div>
  );
};
