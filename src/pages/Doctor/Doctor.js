import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import SummaryCard from "./Components/SummaryCard/SummaryCard";
import Coupons from "./Components/Coupons/Coupons";
import Framephoto from "./assets/framephoto.png";
import DentalImg from "./assets/DentalImg.png";
import DottedBox from "./assets/dottedBox.png";
import DottedBox2 from "./assets/dottedBox2.png";

import { ReactComponent as Star } from "./assets/Star.svg";
import { ReactComponent as Calender } from "./assets/Calendar.svg";
import { ReactComponent as Awards } from "./assets/Awards.svg";
import { ReactComponent as Best } from "./assets/Best.svg";
import { ReactComponent as BlackStar } from "./assets/BlackStar.svg";
import { ReactComponent as Refresh } from "./assets/Refresh.svg";
import Invoice from "./Components/Invoice/Invoice";
import Slider from "./Components/Slider/Slider";

import {
  CarouselDoctor,
  CarouselDouble,
  CarouselGeneral,
  CarouselOne,
} from "../DoctorDetails/components/Carousel";
import { motion } from "framer-motion";
import { lightTheme, darkTheme } from "../Home/Theme";
import Stack from "../../component/Stack/Stack";
import { globalStateContext } from "../../App";
import { Reload, StarRound } from "../../component/Svgs";
import { BottomNav2 } from "../../component/BottomNav";
import NavbarMain from "../../component/NavbarMain";
const ParentContainer = styled.div`
  max-width: 850px;
  width: 100%;
  background: #f3edf4;
  height: 100%;
  overflow-y: scroll;
  margin: 76px 0px 80px 0px;
  border-top: 1px solid #ffffff40;
`;
const DoctorDetailContainer = styled.div`
  background: ${(props) => props.theme.bg};
  padding-top: 80px;
  padding-bottom: 30px;
  position: relative;
  overflow: hidden;
`;
const DoctorProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-left: 25px;
  margin-right: 25px;
`;

const ProfilePhotoDiv = styled.div`
  width: 141px;
`;
const ProfileDetailDiv = styled.div``;
const ProfilePhoto = styled.img`
  width: 100%;
`;
const DoctorNameCont = styled.span``;
const DoctorName = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 9px;
`;
const DoctorDesignation = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 13px;
  color: #ffffff;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
  position: relative;
`;
const RatingDiv = styled.span`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.bg};
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.15),
    5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 79px;
  padding: 4px 4px;
`;
const RatingIcon = styled.div`
  width: 24px;
  height: 24px;
`;
const Rating = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  align-self: center;
`;
const OtherDetailContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 41px;
  padding: 18px 25px;
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  margin-bottom: 37px;
  border: 1px solid #ffffff30;
`;
const OtherDetailDiv = styled.div``;
const OtherDetailIcon = styled.div`
  max-width: 34px;
  width: 100%;
`;
const OtherDetail = styled.h3`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0;
`;
const CouponMainContainer = styled.div`
  margin-top: 30px;
`;
const CouponHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CouponsHeadingDiv = styled.div``;
const RefreshIcon = styled.div`
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.shadowMd};
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
const ParentSaysContainer = styled.div``;
const ParentSaysContent = styled.div`
  margin-top: 40px;
`;
const Heading1 = styled.h2`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
`;
const Heading2 = styled.h1`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 40px;
`;
const ParentSaysCard = styled.div`
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.shadowMd};
  border-radius: 30px;
  margin-top: 20px;
  margin: 20px 20px;
  padding-bottom: 20px;
`;
const ParentSaysContentHead = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 24px;
  background: linear-gradient(90deg, #ad37e0 0%, #ee2b3b 101.91%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  padding: 20px 0px 10px 0px;
`;
const ParentSaysCardRating = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.shadowSm};
  border-radius: 20px;
  padding: 2px 10px 2px 5px;
`;
const BlackStarIcon = styled.div``;
const BlackStarRating = styled.h3`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
`;
const CardHeadContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;
const ParentSaysCardParaDiv = styled.div`
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.innerShadowMd};
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
const ParentSaysCardPara = styled.p`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 113%;

  margin-left: 15px;
  margin-right: 15px;
  margin-top: 0;
  margin-bottom: 0;
`;
const DentalImageDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const DentalImage = styled.img`
  width: 328px;
  height: 181px;
  border-radius: 30px;
`;
const OtherOptionsContainer = styled.div`
  background: ${(props) => props.theme.accordionOneBody};
  margin-top: 20px;
`;
const OtherOptionsContent = styled.div``;
const OtherOptionSlider = styled.div`
  margin-top: 10px;
`;
const DottedImg = styled.img`
  max-width: 193px;
  width: 100%;
  mix-blend-mode: soft-light;
  position: absolute;
  left: -10.51%;
  bottom: 10.37%;
`;
const DottedImg2 = styled.img`
  max-width: 193px;
  width: 100%;
  height: 193px;
  mix-blend-mode: soft-light;
  position: absolute;
  right: -7.48%;
  top: 27.13%;
`;
const Doctor = () => {
  const { darkMode } = React.useContext(globalStateContext);
  const ratingItems = 3;
  const [ratingPos, setRatingPos] = useState(0);
  const reviewsCount = 4;
  const [reviewPos, setReviewPos] = useState(0);
  const parentReviewItems = 3;
  const [parentReviewPos, setParentReviewPos] = useState(0);
  return (
    <ParentContainer className=' dark:bg-darkBg  dark:text-white text-darkBg'>
      <NavbarMain />
      <DoctorDetailContainer>
        <DottedImg src={DottedBox} alt='dottedimage' />
        <DottedImg2 src={DottedBox2} alt='dottedimage2' />
        <DoctorProfileContainer>
          <ProfilePhotoDiv>
            <ProfilePhoto src={Framephoto} alt='doctorImage' />
          </ProfilePhotoDiv>
          <ProfileDetailDiv>
            <DoctorNameCont>
              <DoctorName>
                Dr. Jonathan <br />
                Gray&nbsp;&nbsp;&nbsp;
                <DoctorDesignation>(BDS, MDS)</DoctorDesignation>
              </DoctorName>
              <DoctorDesignation>Dental Specialist</DoctorDesignation>
            </DoctorNameCont>
            <RatingContainer>
              <RatingDiv>
                <RatingIcon>
                  <Star width={24} height={24} />
                </RatingIcon>
                &nbsp;
                <Rating>4.5</Rating>
              </RatingDiv>
            </RatingContainer>
          </ProfileDetailDiv>
        </DoctorProfileContainer>
        <OtherDetailContainer>
          <OtherDetailDiv>
            <OtherDetailIcon>
              <Calender />
            </OtherDetailIcon>
            <OtherDetail>6+</OtherDetail>
          </OtherDetailDiv>
          <OtherDetailDiv>
            <OtherDetailIcon>
              <Awards />
            </OtherDetailIcon>
            <OtherDetail>4.5</OtherDetail>
          </OtherDetailDiv>
          <OtherDetailDiv>
            <OtherDetailIcon>
              <Best />
            </OtherDetailIcon>
            <OtherDetail>20+</OtherDetail>
          </OtherDetailDiv>
        </OtherDetailContainer>
        <div
          style={{
            marginLeft: "25px",
            marginRight: "25px",
            position: "inherit",
          }}
        >
          <Stack
            data={[
              {
                title: "Summary 1",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
            velit, sit amet feugiat lectus`,
              },
              {
                title: "Whateve2",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a, mattis ttum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a, mattis tellusellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
              velit, sit amet feugiat lectus`,
              },
              {
                title: "Some BS3",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risamet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
              velit, sit amet feugiat lectus`,
              },
              {
                title: "Some BS4",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringillcondimentum velit, sit amet
              feugiat lectus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
              velit, sit amet feugiat lectus`,
              },
            ]}
          />
        </div>
      </DoctorDetailContainer>
      <div className=' dark:bg-darkBg '>
        <div className='px-7 pt-7 flex items-end justify-between'>
          <div className='dark:text-white'>
            <p className='text-[16px] mb-[-12px] font-bold'>Doctors</p>
            <h2 className='text-[40px]  font-black'>Ratings</h2>
          </div>
          <div className='mb-4'>
            <div className=' relative bg-white dark:bg-darkBgCon h-[5px] w-[55px] rounded-[10px]'>
              <motion.div
                initial={{ width: "0px" }}
                animate={{
                  width: `${55 / ratingItems}px`,
                  translateX: `${ratingPos * (55 / ratingItems)}px`,
                }}
                className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
              ></motion.div>
            </div>
          </div>
        </div>
        <CarouselDoctor
          setPillPos={setRatingPos}
          items={[{ comment: "1" }, { comment: "2" }, { comment: "3" }]}
        />
      </div>
      <div style={{ marginLeft: "25px", marginRight: "25px" }}>
        <CouponMainContainer>
          <CouponHeadContainer>
            <CouponsHeadingDiv>
              <Heading1>User Your</Heading1>
              <Heading2>Coupons</Heading2>
            </CouponsHeadingDiv>
            <RefreshIcon>
              <Reload fill={darkMode ? "#626262" : "#626262"} />
            </RefreshIcon>
          </CouponHeadContainer>
          <div className='w-full flex justify-center'>
            <Coupons />
          </div>
          <div className='w-full flex justify-center'>
            <Coupons />
          </div>
        </CouponMainContainer>
      </div>

      <div>
        <Invoice />
      </div>
      <ParentSaysContainer>
        <ParentSaysContent>
          <div className='flex items-end justify-between px-5'>
            <div className='dark:text-white'>
              <p className='text-[16px] mb-[-12px] font-bold'>What</p>
              <h2 className='text-[40px]   font-black'>Parents Says</h2>
            </div>
            <div className='mb-4'>
              <div className=' relative bg-white dark:bg-darkBgCon h-[5px] w-[55px] rounded-[10px]'>
                <motion.div
                  initial={{ width: "0px" }}
                  animate={{
                    width: `${55 / parentReviewItems}px`,
                    translateX: `${
                      parentReviewPos * (55 / parentReviewItems)
                    }px`,
                  }}
                  className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
                ></motion.div>
              </div>
            </div>
          </div>
          <CarouselGeneral
            minHeight='500px'
            setPillPos={setParentReviewPos}
            data={[
              <ParentSaysCard>
                <CardHeadContent>
                  <ParentSaysContentHead>
                    Kids Love This Place, Friendly Doctors
                  </ParentSaysContentHead>
                  <ParentSaysCardRating>
                    <BlackStarIcon>
                      <StarRound fill={darkMode ? "#fff" : "#252525"} />
                    </BlackStarIcon>
                    &nbsp;
                    <BlackStarRating>4.5</BlackStarRating>
                  </ParentSaysCardRating>
                </CardHeadContent>
                <ParentSaysCardParaDiv>
                  <ParentSaysCardPara>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus
                  </ParentSaysCardPara>
                </ParentSaysCardParaDiv>
                <DentalImageDiv>
                  <DentalImage src={DentalImg} alt='' />
                </DentalImageDiv>
              </ParentSaysCard>,
              <ParentSaysCard>
                <CardHeadContent>
                  <ParentSaysContentHead>
                    Kids Love This Place, Friendly Doctors
                  </ParentSaysContentHead>
                  <ParentSaysCardRating>
                    <BlackStarIcon>
                      <StarRound fill='#fff' />
                    </BlackStarIcon>
                    &nbsp;
                    <BlackStarRating>4.5</BlackStarRating>
                  </ParentSaysCardRating>
                </CardHeadContent>
                <ParentSaysCardParaDiv>
                  <ParentSaysCardPara>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus
                  </ParentSaysCardPara>
                </ParentSaysCardParaDiv>
                <DentalImageDiv>
                  <DentalImage src={DentalImg} alt='' />
                </DentalImageDiv>
              </ParentSaysCard>,
              <ParentSaysCard>
                <CardHeadContent>
                  <ParentSaysContentHead>
                    Kids Love This Place, Friendly Doctors
                  </ParentSaysContentHead>
                  <ParentSaysCardRating>
                    <BlackStarIcon>
                      <BlackStar />
                    </BlackStarIcon>
                    &nbsp;
                    <BlackStarRating>4.5</BlackStarRating>
                  </ParentSaysCardRating>
                </CardHeadContent>
                <ParentSaysCardParaDiv>
                  <ParentSaysCardPara>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus
                  </ParentSaysCardPara>
                </ParentSaysCardParaDiv>
                <DentalImageDiv>
                  <DentalImage src={DentalImg} alt='' />
                </DentalImageDiv>
              </ParentSaysCard>,
            ]}
          />
        </ParentSaysContent>
      </ParentSaysContainer>
      <OtherOptionsContainer>
        <OtherOptionsContent>
          <div className=' px-5 pt-5'>
            <Heading1>Other</Heading1>
            <Heading2>Options</Heading2>
          </div>
          <OtherOptionSlider>
            <Slider />
          </OtherOptionSlider>
        </OtherOptionsContent>
      </OtherOptionsContainer>
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
          <CarouselDouble
            minHeight='650px'
            // darkMode={darkMode}
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
          ></CarouselDouble>
        </div>
      </div>
      <BottomNav2 btntext='Proceed' />
    </ParentContainer>
  );
};

export default Doctor;
