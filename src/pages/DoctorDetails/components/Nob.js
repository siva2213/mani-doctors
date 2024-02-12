import React from "react";
import { globalStateContext } from "../../../App";
import GradientText from "../../../component/GradientText";

export const Nob = (props) => {
  return (
    <div className=' flex flex-col items-center'>
      <div
        className={` w-[80px] h-[80px] bg-[#F3EDF4] dark:bg-darkBg rounded-full flex justify-center items-center ${
          props.darkMode ? "nob-shadow-dark" : "nob-shadow"
        } `}
      >
        {/* w-[56px] h-[56px] */}
        <div
          style={{
            boxShadow: "0px 0px 16px 0px #DD2E6660",
          }}
          className=' relative bg-gradient-to-r from-gradientPurple to-gradientRed w-[57px] h-[57px]   rounded-full'
        >
          <div
            // style={{
            //   boxShadow: "0px 0px 20px 1px #EE2B3B30",
            // }}

            // right-[1px]
            className=' absolute   top-[1px] bottom-[1px] left-[1px] right-[1px]  bg-gradient-to-br from-[#fff] via-[#fff] to-[#D3D3D3] dark:from-[#131313] dark:to-[#131313] flex justify-center items-center rounded-full  shadow-gradientRed'
          >
            {props.icon}
          </div>
        </div>
      </div>
      <h5 className=' mt-2 text-[10px] text-transparent bg-clip-text font-black bg-gradient-to-r from-gradientPurple  to-gradientRed'>
        {props.title}
      </h5>
    </div>
  );
};
export const NobBig = (props) => {
  const { darkMode } = React.useContext(globalStateContext);

  return (
    <div className=' flex flex-col items-center mx-2'>
      <div
        className={` w-40 h-40 bg-[#F3EDF4] dark:bg-darkBg rounded-full flex justify-center items-center ${
          darkMode ? "nob-shadow-dark" : "nob-shadow"
        } `}
      >
        {/* w-[56px] h-[56px] */}
        <div
          style={{
            boxShadow: "0px 0px 16px 0px #DD2E6660",
          }}
          className=' relative bg-gradient-to-r from-gradientPurple to-gradientRed w-28 h-28   rounded-full'
        >
          <div
            // style={{
            //   boxShadow: "0px 0px 20px 1px #EE2B3B30",
            // }}

            // right-[1px]
            className=' absolute   top-[1px] bottom-[1px] left-[1px] right-[1px]  bg-gradient-to-br from-[#fff] via-[#fff] to-[#D3D3D3] dark:from-[#131313] dark:to-[#131313] flex justify-center items-center rounded-full  shadow-gradientRed'
          >
            <h4 className=' text-[40px] font-black '>
              {" "}
              <GradientText>{props.rating}</GradientText>
            </h4>
          </div>
        </div>
      </div>
      <h5 className=' mt-4  text-[16px] text-transparent bg-clip-text font-black bg-gradient-to-r from-gradientPurple  to-gradientRed'>
        {props.title}
      </h5>
    </div>
  );
};
