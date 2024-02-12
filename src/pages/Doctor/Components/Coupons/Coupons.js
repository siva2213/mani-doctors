import React, { useContext, useState } from "react";
import styled from "styled-components";
import { globalStateContext } from "../../../../App";
import {
  ButtonGradientSmall,
  ButtonToggle,
} from "../../../../component/Button";
import GradientText from "../../../../component/GradientText";
import CouponsImg from "../../assets/couponBg.png";
import CouponsImgDark from "../../assets/couponBgDark.png";

const CouponsContainer = styled.div`
  position: relative;
`;
const CouponsImage = styled.img``;
const CouponName = styled.h1`
  position: absolute;
  top: 95px;
  left: 18px;
  background: linear-gradient(90deg, #ad37e0 0%, #ee2b3b 101.91%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transform: rotate(-90deg);
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 16px;
`;

const Coupons = () => {
  const [applied, setApplied] = useState(false);

  const { darkMode } = useContext(globalStateContext);
  return (
    <div>
      <CouponsContainer className='relative min-w-[378px] max-w-[378px]  ml-[-20px]'>
        <CouponsImage src={darkMode ? CouponsImgDark : CouponsImg} alt='' />

        <div className='  absolute top-0 left-0 right-0 bottom-0 '>
          <div className='flex w-full h-full items-center '>
            <div className=' w-24 mr-10'>
              <CouponName>CONSULT100</CouponName>
            </div>
            <div className=' w-[200px] text-white flex flex-col pr-5 pl-2 '>
              <h4 className=' font-black text-[26px] leading-8 '>
                Rs. 100 OFF
              </h4>
              <p className=' font-medium text-[10px] leading-4'>
                Get Rs. 100 OFF Discount On Technology Fee
              </p>
              <ButtonToggle
                selected={applied}
                onClick={() => {
                  setApplied(!applied);
                }}
                styles=' h-[34px] uppercase w-[98px] mt-2  text-[12px] px-3  self-end font-black'
              >
                {darkMode ? (
                  <GradientText>{applied ? "applied" : "apply"}</GradientText>
                ) : (
                  <p>{applied ? "applied" : "apply"}</p>
                )}
              </ButtonToggle>
            </div>
          </div>
        </div>
      </CouponsContainer>
    </div>
  );
};

export default Coupons;
