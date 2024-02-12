import React, { useState } from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import Serarchbar from "./Components/SearchBar/Serarchbar";
import StoreBackground from "./assets/storeBackground.png";
import DownloadStorebg from "./assets/downloadStorebg.png";
import DoctorImage1 from "./assets/DoctorImage1.png";
import DoctorImage2 from "./assets/DoctorImage2.png";
import DoctorImage3 from "./assets/DoctorImage3.png";
import PhoneImg from "./assets/phoneImg.png";
import ReviewImg1 from "./assets/reviewImg1.png";
import ReviewImg2 from "./assets/reviewImg2.png";
import Rating from "./Components/Rating/Rating";
import VolunteersHoldingBoxes from "./assets/volunteers-holding-boxes-containing-donations-charity.png";
import VolunteerSmiling from "./assets/close-up-volunteer-smiling.png";
import ServiesImg1 from "./assets/portrait-young-woman.png";
import ServiesImg2 from "./assets/caucasian-man-suffers.png";
import ServiesImg3 from "./assets/posing-camera-with-positive-happy.png";
import ServiesImg4 from "./assets/expressive-young-woman-posing.png";
import LocationImage from "./assets/locationImg.png";
import SbiIcon from "./assets/SBI_Life.svg";
import HdfcIcon from "./assets/HDFC_Life_Logo 1.svg";
import RealselfLogo from "./assets/realself-inc-logo.svg";
import Seek from "./assets/seek.svg";
import DoctorCard from "./Components/DoctorCard/DoctorCard";
import ReviewCard from "./Components/ReviewCard/ReviewCard";
import DonateNgoCard from "./Components/DonateNgoCard/DonateNgoCard";
import GetInsuranceCard from "./Components/GetInsuranceCard/GetInsuranceCard";
import ServicesCard from "./Components/ServicesCard/ServicesCard";
import FooterNavigation from "./Components/FooterNavigation/FooterNavigation";
import Accordion from "../../component/Accordion";
import { GlobalStyles, lightTheme, darkTheme } from "./Theme";
import MobilePoster from "./assets/Mockup 1.png";
import Ring from "./assets/Ellipse 110.svg";
import RingGradient from "./assets/Ellipse 74g.svg";
import Apple from "./assets/appl.png";
import Play from "./assets/Pstr.png";
import {
  CarouselGeneral,
  CarouselHor,
} from "../DoctorDetails/components/Carousel";
import Ring2 from "./assets/Ellipse 80.svg";
import Ring2g from "./assets/Ellipsedgg.svg";
import Ring3 from "./assets/Ellipse 81.svg";
import MobilePoster2 from "./assets/poster2.png";
import DocOfMon from "./Components/DocOfMonth/DocOfMon";
import MonthStats from "./Components/MonthStats/MonthStats";
import NavbarMain, { NavbarFull, NavMenu } from "../../component/NavbarMain";
import MarkBigDark from "./assets/markBig.png";
import MarkBig from "./assets/markBigGradient.png";

import profilePicture from "./assets/portrait-smiling-handsome-man-eyeglasses (1) 1.png";
import { BottomNav } from "../../component/BottomNav";
const MainContainer = styled.div`
  max-width: 850px;
  width: 100%;
  background: ${(props) => props.theme.body};
  overflow-y: scroll;
  padding: 75px 0px 80px 0px;
`;
const BookAppointmentContainer = styled.div``;
const HeadingCont = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  color: ${(props) => props.theme.text};
`;
const Heading1 = styled.h2`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  @media only screen and (max-width: 360px) {
    font-size: 14px;
  }
`;
const Heading2 = styled.h1`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 40px;
  @media only screen and (max-width: 360px) {
    font-size: 36px;
  }
`;
const AppointmentInputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 20px;
`;

const InputField = styled.input`
  background: ${(props) => props.theme.body};
  -webkit-appearance: none;
  box-shadow: ${(props) => props.theme.shadowMd};
  -webkit-box-shadow: ${(props) => props.theme.shadowMd};

  border-radius: 30px;
  border: none;
  outline: none;
  padding-left: 25px;
  padding-top: 14px;
  padding-bottom: 14px;
  &::placeholder {
    font-family: "Metropolis";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #636363;
  }
`;
const BookButton = styled.button`
  background: linear-gradient(122.62deg, #ad37e0 0%, #ee2b3b 100%);
  border-radius: 30px;
  border: none;
  outline: none;
  font-style: normal;
  font-family: "Metropolis";
  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
  &::before {
    content: "";
    width: 80%;
    position: absolute;
    background: linear-gradient(122.62deg, #ad37e0 0%, #ee2b3b 100%);
    left: 50%;
    transform: translateX(-50%);
    bottom: -20%;
    height: 50%;
    border-radius: 100%;
    filter: blur(20px);
  }
`;
const AppStoreContainer = styled.div`
  background: ${(props) => props.theme.appStoreBg};
  height: 270px;
  margin-top: 50px;
  background-size: cover;
  display: flex;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
`;
const BackGroundContainer = styled.div`
  position: relative;
  top: 0;

  height: 185px;
  width: 100%;
  img:first-child {
    position: absolute;
    right: 0;
  }
  img:last-child {
    position: absolute;
    left: 0px;
    bottom: -90px;
  }
  background: ${(props) =>
    props.theme.buttonTextColor === "#fff"
      ? "linear-gradient(122.62deg, #ad37e0 0%, #ee2b3b 100%)"
      : "#303030"};
`;
const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding: 0px 25px;
  display: flex;
  justify-content: center;
`;
const LeftContainer = styled.div`
  padding: 40px 10px 10px 10px;
  color: #fff;
  position: relative;
`;
const RightContainer = styled.div`
  min-width: 138px;
  img {
    width: 138px;
    height: 261px;
  }
`;
const LeftContentHeading = styled.h1`
  margin: 0;
  font-style: normal;
  font-family: "Metropolis";
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
`;
const StoreContent = styled.div``;

const LeftContentPara = styled.p`
  margin: 0;
  margin-top: 20px;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const AppDownloadButton = styled.div`
  width: 100%;
  position: absolute;
  bottom: 35px;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`;

const DownloadButton = styled.button`
  background: linear-gradient(122.62deg, #ad37e0 0%, #ee2b3b 100%);
  border-radius: 30px;
  width: 90px;
  height: 29px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 54px;
  }
  &::before {
    content: "";
    width: 60%;
    position: absolute;
    background: linear-gradient(122.62deg, #ad37e0 0%, #ee2b3b 100%);
    left: 50%;
    transform: translateX(-50%);
    bottom: -10%;
    height: 10%;
    border-radius: 100%;
    filter: blur(10px);
  }
`;
const ButtonIconCont = styled.div``;

const RatingMainContainer = styled.div``;

const RatingCardContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ServicesMainDiv = styled.div`
  padding-top: 40px;
  background: ${(props) => props.theme.servicesBg};
`;
const ServiceContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 25px;
  margin-top: 1.2rem;
`;
const ServiceContentDiv = styled.div`
  width: 44.5%;
  @media only screen and (max-width: 360px) {
    width: 100%;
    margin-right: 25px;
  }
`;

const TopDoctorMainDiv = styled.div`
  padding-top: 40px;
`;

const DoctorsCardDiv = styled.div`
  margin: 20px 25px 0 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const DownloadStoreContainer = styled.div`
  margin-top: 0px;
  position: relative;
  height: 232px;
`;
const StoreBgImage = styled.div`
  width: 100%;
  height: 232px;

  background: ${(props) => props.theme.bg};
  img:first-child {
    position: absolute;
    left: 0;

    top: 0;
  }
  img:last-child {
    position: absolute;
    bottom: 0;

    right: 0;
  }
`;
const StoreContentDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  text-align: end;
  overflow: hidden;
  height: 100%;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 30px;
  color: #fff;
`;
const PointContainer = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
`;

const PointsDiv = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Points = styled.li`
  list-style-type: none;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 11px;
  text-align: right;
  color: #fff;
`;
const InsuranceIconsDiv = styled.div`
  background: #f3edf4;
  border-radius: 30px;
  display: flex;
  width: 87px;
  height: 23px;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  position: absolute;
  left: 50%;
  top: 30px;
  z-index: 10;
  transform: translateX(-50%);
`;
const InsuranceIcon = styled.div`
  width: 32px;
`;
const DownloadHeading = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  text-transform: uppercase;
  text-align: right;
  background: linear-gradient(90deg, #ad37e0 0%, #ee2b3b 101.91%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
const DownloadButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #252525;
  width: 135px;
  border-radius: 50px;
  height: 27px;
  text-align: right;
  position: absolute;
  right: 20px;
  bottom: 40px;
`;

const MajorReviewContainer = styled.div`
  margin-top: 50px;
`;
const MajorReviewContent = styled.div`
  margin-left: 25px;
  margin-right: 25px;
`;
const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 1.3rem;
`;
const DonateNgoContainer = styled.div`
  padding-top: 50px;
`;
const DonateNgoContent = styled.div``;
const DonateCardDiv = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const GetInsuranceContainer = styled.div`
  margin-top: 20px;
  background: ${(props) => props.theme.servicesBg};
  padding-top: 20px;
`;
const GetInsuranceContent = styled.div``;
const GetInsuranceCardDiv = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 20px;
`;
const LocationMainContainer = styled.div``;
const LocationImgDiv = styled.div`
  position: relative;
`;

const LocationImg = styled.img`
  width: 100%;
`;
const LocationHeadDiv = styled.div`
  position: absolute;
  top: 20px;
`;
const LocationValueDiv = styled.div`
  width: 100%;
  position: absolute;
  bottom: 16px;
  right: 25px;
  display: flex;
  justify-content: end;
  // padding: 17px 22px;
`;

const LocationValueContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  max-width: 200px;
  width: 100%;
  padding: 17px 22px;
  @media only screen and (max-width: 360px) {
    padding: 10px 13px;
  }
`;
const LocationName = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  background: linear-gradient(91.15deg, #b136d6 0%, #e82c4a 99.6%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 0;
`;
const LocaPara = styled.p`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 150%;
  color: #252525;
`;
// const Accrodian = styled.div`
//   background: #f3edf4;
//   box-shadow: -10px -10px 20px #faf6fb, 10px 10px 20px #dfd3e1;
//   border-radius: 30px;
//   border: none;
//   outline: none;
//   padding-left: 25px;
//   padding-top: 14px;
//   padding-bottom: 14px;
// `;

const Home = (props) => {
  const [active, setActive] = useState(null);
  const servicesCount = 4;
  const [servicesPos, setServicesPos] = useState(0);
  const doctorsCount = 3;
  const [doctorsPos, setDoctorsPos] = useState(0);
  const ratingsCount = 3;
  const [ratingsPos, setRatingsPos] = useState(0);
  const cityCount = 3;
  const [cityPos, setCityPos] = useState(0);
  const ngoCount = 3;
  const [ngoPos, setNgoPos] = useState(0);
  const insuranceCount = 4;
  const [insurancePos, setInsurancePos] = useState(0);
  const handleToggle = (index) => {
    console.log("sf");
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  console.log(props.darkMode);
  return (
    <ThemeProvider theme={props.darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <NavbarMain />
      <MainContainer className=''>
        <NavMenu />
        {/* <Serarchbar darkMode={props.darkMode} /> */}
        <div
          className={` relative after:w-[80%] after:h-[15px]  mt-8 ${
            props.darkMode
              ? "after:bg-darkBg"
              : "after:bg-gradient-to-br after:from-gradientPurple after:to-gradientRed"
          }  after:absolute after:left-[50%] after:translate-x-[-50%] after:blur-[20px] after:rounded-full after:bottom-[-20px]  `}
          style={{
            padding: "0px 20px",
            marginBottom: "50px",
          }}
        >
          <DocOfMon darkMode={props.darkMode} />
        </div>
        <BookAppointmentContainer>
          <HeadingCont>
            <Heading1>Book</Heading1>
            <Heading2>Appointment</Heading2>
          </HeadingCont>
          <AppointmentInputFields>
            <InputField type='text' placeholder='Enter name' />
            <InputField type='text' placeholder='Choose Date & Time' />

            <Accordion
              darkMode={props.darkMode}
              active={active}
              key={1}
              handleToggle={handleToggle}
              faq={{
                id: 1,
                header: "Choose Services",
                text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
              }}
            />
            <Accordion
              darkMode={props.darkMode}
              key={2}
              active={active}
              handleToggle={handleToggle}
              faq={{
                id: 2,
                header: "Choose Medicine",
                text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
              }}
            />
            <Accordion
              darkMode={props.darkMode}
              key={3}
              active={active}
              handleToggle={handleToggle}
              faq={{
                id: 3,
                header: "Choose Medicine",
                text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
              }}
            />

            <BookButton>BOOK NOW</BookButton>
          </AppointmentInputFields>
        </BookAppointmentContainer>
        <AppStoreContainer>
          <BackGroundContainer>
            <img src={props.darkMode ? RingGradient : Ring} alt='' />
            <img src={Ring} alt='' />
          </BackGroundContainer>
          <ContentContainer>
            <LeftContainer>
              <StoreContent>
                <LeftContentHeading>
                  Find you doctor and make appointment
                </LeftContentHeading>
                <LeftContentPara>
                  Best Healthcare in your City is made most easily with
                  Health500. With a click , now you can find the best doctors
                  nearby. Forget Worries, embraces Health500.
                </LeftContentPara>
              </StoreContent>
              <AppDownloadButton>
                <DownloadButton>
                  <img src={Apple} />
                </DownloadButton>
                <DownloadButton>
                  <img src={Play} />
                </DownloadButton>
              </AppDownloadButton>
            </LeftContainer>
            <RightContainer>
              <img src={MobilePoster} />
            </RightContainer>
          </ContentContainer>
        </AppStoreContainer>
        <RatingMainContainer>
          <HeadingCont>
            <div className=' flex items-end justify-between'>
              <div className='dark:text-white'>
                <p className='text-[16px] mb-[-12px] font-bold'>Doctors</p>
                <h2 className='text-[40px]  font-black'>Ratings</h2>
              </div>
              <div className='mb-4'>
                <div className=' relative bg-white dark:bg-darkBgCon h-[5px] w-[55px] rounded-[10px]'>
                  <motion.div
                    initial={{ width: "0px" }}
                    animate={{
                      width: `${55 / ratingsCount}px`,
                      translateX: `${ratingsPos * (55 / ratingsCount)}px`,
                    }}
                    className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
                  ></motion.div>
                </div>
              </div>
            </div>
          </HeadingCont>
          <CarouselGeneral
            setPillPos={setRatingsPos}
            minHeight='450px'
            data={[
              <RatingCardContainer>
                <Rating
                  ratingOutOf={5}
                  rating={4.5}
                  ratingLogo={RealselfLogo}
                />
                <Rating ratingOutOf={10} rating={8} ratingLogo={Seek} />
              </RatingCardContainer>,
              <RatingCardContainer>
                <Rating
                  ratingOutOf={5}
                  rating={4.5}
                  ratingLogo={RealselfLogo}
                />
                <Rating ratingOutOf={10} rating={8} ratingLogo={Seek} />
              </RatingCardContainer>,
              <RatingCardContainer>
                <Rating
                  ratingOutOf={5}
                  rating={4.5}
                  ratingLogo={RealselfLogo}
                />
                <Rating ratingOutOf={10} rating={8} ratingLogo={Seek} />
              </RatingCardContainer>,
            ]}
          />
        </RatingMainContainer>
        <ServicesMainDiv>
          <div className='px-7 pb-0 flex items-end justify-between'>
            <div className='dark:text-white'>
              <p className='text-[16px] mb-[-12px] font-bold'>Our</p>
              <h2 className='text-[40px]  font-black'>Services</h2>
            </div>
            <div className='mb-4'>
              <div className=' relative bg-white dark:bg-darkBg h-[5px] w-[55px] rounded-[10px]'>
                <motion.div
                  initial={{ width: "0px" }}
                  animate={{
                    width: `${55 / servicesCount}px`,
                    translateX: `${servicesPos * (55 / servicesCount)}px`,
                  }}
                  className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
                ></motion.div>
              </div>
            </div>
          </div>
          <CarouselGeneral
            setPillPos={setServicesPos}
            minHeight='520px'
            data={[
              <ServiceContentContainer>
                <ServiceContentDiv>
                  <ServicesCard
                    item={1}
                    cardImg={ServiesImg1}
                    Serviceheading={"Dental Braces"}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    item={2}
                    cardImg={ServiesImg2}
                    Serviceheading={"Decayed Tooth"}
                    heightt={true}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    item={3}
                    cardImg={ServiesImg3}
                    Serviceheading={"Dental Crown"}
                    heightt={true}
                    marginn={true}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    item={4}
                    cardImg={ServiesImg4}
                    Serviceheading={"Root Canal "}
                  />
                </ServiceContentDiv>
              </ServiceContentContainer>,
              <ServiceContentContainer>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg1}
                    Serviceheading={"Dental Braces"}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg2}
                    Serviceheading={"Decayed Tooth"}
                    heightt={true}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg3}
                    Serviceheading={"Dental Crown"}
                    heightt={true}
                    marginn={true}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg4}
                    Serviceheading={"Root Canal "}
                  />
                </ServiceContentDiv>
              </ServiceContentContainer>,
              <ServiceContentContainer>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg1}
                    Serviceheading={"Dental Braces"}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg2}
                    Serviceheading={"Decayed Tooth"}
                    heightt={true}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg3}
                    Serviceheading={"Dental Crown"}
                    heightt={true}
                    marginn={true}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg4}
                    Serviceheading={"Root Canal "}
                  />
                </ServiceContentDiv>
              </ServiceContentContainer>,
              <ServiceContentContainer>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg1}
                    Serviceheading={"Dental Braces"}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg2}
                    Serviceheading={"Decayed Tooth"}
                    heightt={true}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg3}
                    Serviceheading={"Dental Crown"}
                    heightt={true}
                    marginn={true}
                  />
                </ServiceContentDiv>
                <ServiceContentDiv>
                  <ServicesCard
                    cardImg={ServiesImg4}
                    Serviceheading={"Root Canal "}
                  />
                </ServiceContentDiv>
              </ServiceContentContainer>,
            ]}
          />
        </ServicesMainDiv>
        <TopDoctorMainDiv>
          <HeadingCont>
            <div className=' flex items-end justify-between'>
              <div className='dark:text-white'>
                <p className='text-[16px] mb-[-12px] font-bold'>Our Top</p>
                <h2 className='text-[40px]  font-black'>Doctors</h2>
              </div>
              <div className='mb-4'>
                <div className=' relative bg-white dark:bg-darkBgCon h-[5px] w-[55px] rounded-[10px]'>
                  <motion.div
                    initial={{ width: "0px" }}
                    animate={{
                      width: `${55 / doctorsCount}px`,
                      translateX: `${doctorsPos * (55 / doctorsCount)}px`,
                    }}
                    className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
                  ></motion.div>
                </div>
              </div>
            </div>
          </HeadingCont>
          <CarouselGeneral
            setPillPos={setDoctorsPos}
            minHeight='690px'
            data={[
              <DoctorsCardDiv>
                <DoctorCard
                  darkMode={props.darkMode}
                  doctorImage={DoctorImage1}
                  doctorName={"Dr. Julie Smith"}
                />
                <DoctorCard
                  darkMode={props.darkMode}
                  doctorImage={DoctorImage2}
                  doctorName={"Dr. Brian Stanley"}
                />
                <DoctorCard
                  darkMode={props.darkMode}
                  doctorImage={DoctorImage3}
                  doctorName={"Dr. Karen Lane"}
                />
              </DoctorsCardDiv>,
              <DoctorsCardDiv>
                <DoctorCard
                  darkMode={props.darkMode}
                  doctorImage={DoctorImage1}
                  doctorName={"Dr. Julie Smith"}
                />
                <DoctorCard
                  darkMode={props.darkMode}
                  doctorImage={DoctorImage2}
                  doctorName={"Dr. Brian Stanley"}
                />
                <DoctorCard
                  darkMode={props.darkMode}
                  doctorImage={DoctorImage3}
                  doctorName={"Dr. Karen Lane"}
                />
              </DoctorsCardDiv>,
              <DoctorsCardDiv>
                <DoctorCard
                  darkMode={props.darkMode}
                  doctorImage={DoctorImage1}
                  doctorName={"Dr. Julie Smith"}
                />
                <DoctorCard
                  darkMode={props.darkMode}
                  doctorImage={DoctorImage2}
                  doctorName={"Dr. Brian Stanley"}
                />
                <DoctorCard
                  darkMode={props.darkMode}
                  doctorImage={DoctorImage3}
                  doctorName={"Dr. Karen Lane"}
                />
              </DoctorsCardDiv>,
            ]}
          />
        </TopDoctorMainDiv>
        <LocationMainContainer>
          <div
            // style={{ backgroundImage: `url(${map})` }}
            className={`h-[235px] ${
              props.darkMode ? "map-dark" : "map"
            } p-7 pb-0 relative`}
          >
            <div className='dark:text-white'>
              <p className='text-[16px] font-bold mb-[-12px]'>Doctors</p>
              <h4 className='text-[40px] font-black'>Location</h4>
            </div>
            <div className='flex justify-end pt-5  px-8 pr-0 relative'>
              <div
                className={`w-fit py-4 px-5 rounded-[20px] absolute z-10 ${
                  props.darkMode ? "map-board-dark" : "map-board"
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
            <div className=' absolute   left-28 top-28  '>
              <img
                src={props.darkMode ? MarkBigDark : MarkBig}
                alt=''
                className=' w-[46px] h-[55px]'
              />
              <img
                alt=''
                src={profilePicture}
                className=' absolute top-3 left-3 w-[22px] h-[22px] rounded-full'
              />
              <div className=' absolute w-full h-4 bg-[#A590A320]  blur-sm bottom-[-15px] rounded-full'></div>
            </div>
            <div className=' absolute   left-[-15px] top-24 scale-[0.5] '>
              <img
                src={props.darkMode ? MarkBigDark : MarkBig}
                alt=''
                className=' w-[46px] h-[55px]'
              />
              <img
                alt=''
                src={profilePicture}
                className=' absolute top-3 left-3 w-[22px] h-[22px] rounded-full'
              />
              <div className=' absolute w-full h-4 bg-[#A590A320]  blur-sm bottom-[-15px] rounded-full'></div>
            </div>
            <div className=' absolute   right-[30%] top-12  scale-[0.5] '>
              <img
                src={props.darkMode ? MarkBigDark : MarkBig}
                alt=''
                className=' w-[46px] h-[55px]'
              />
              <img
                alt=''
                src={profilePicture}
                className=' absolute top-3 left-3 w-[22px] h-[22px] rounded-full'
              />
              <div className=' absolute w-full h-4 bg-[#A590A320]  blur-sm bottom-[-15px] rounded-full'></div>
            </div>
            <div className=' absolute  z-0  right-[25px] top-[40%]  scale-[0.8] '>
              <img
                src={props.darkMode ? MarkBigDark : MarkBig}
                alt=''
                className=' w-[46px] h-[55px]'
              />
              <img
                alt=''
                src={profilePicture}
                className=' absolute top-3 left-3 w-[22px] h-[22px] rounded-full'
              />
              <div className=' absolute w-full h-4 bg-[#A590A320]  blur-sm bottom-[-15px] rounded-full'></div>
            </div>
          </div>
        </LocationMainContainer>
        <MonthStats darkMode={props.darkMode} />
        <DownloadStoreContainer>
          <InsuranceIconsDiv>
            <InsuranceIcon>
              <img src={SbiIcon} />
            </InsuranceIcon>
            <InsuranceIcon>
              <img src={HdfcIcon} />
            </InsuranceIcon>
          </InsuranceIconsDiv>
          <StoreBgImage>
            <img src={props.darkMode ? Ring2g : Ring2} alt='' />
            <img src={Ring3} />
          </StoreBgImage>
          <StoreContentDiv>
            <div
              style={{
                alignSelf: "flex-end",
              }}
            >
              <img
                src={MobilePoster2}
                alt=''
                style={{
                  width: "190px",
                }}
              />
            </div>
            <div>
              <PointContainer>
                <PointsDiv>
                  <Points>100+ Doctors</Points>
                  <Points>Cities Best Healthcare Sevice</Points>
                  <Points>Health Insurance From Top Brands</Points>
                </PointsDiv>
              </PointContainer>

              <DownloadButtonDiv>
                <DownloadHeading>DOWNLOAD NOW</DownloadHeading>
              </DownloadButtonDiv>
            </div>
          </StoreContentDiv>
        </DownloadStoreContainer>
        <MajorReviewContainer>
          <HeadingCont>
            <div className=' flex items-end justify-between'>
              <div className='dark:text-white'>
                <p className='text-[16px] mb-[-12px] font-bold'>Major City</p>
                <h2 className='text-[40px]  font-black'>Reviews</h2>
              </div>
              <div className='mb-4'>
                <div className=' relative bg-white dark:bg-darkBgCon h-[5px] w-[55px] rounded-[10px]'>
                  <motion.div
                    initial={{ width: "0px" }}
                    animate={{
                      width: `${55 / cityCount}px`,
                      translateX: `${cityPos * (55 / cityCount)}px`,
                    }}
                    className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
                  ></motion.div>
                </div>
              </div>
            </div>
          </HeadingCont>
          <CarouselGeneral
            setPillPos={setCityPos}
            minHeight='700px'
            data={[
              <MajorReviewContent>
                <ReviewDiv>
                  <ReviewCard reviewImg={ReviewImg1} locationValue={"Delhi"} />
                  <ReviewCard
                    reviewImg={ReviewImg2}
                    locationValue={"Banglore"}
                  />
                </ReviewDiv>
              </MajorReviewContent>,
              <MajorReviewContent>
                <ReviewDiv>
                  <ReviewCard reviewImg={ReviewImg1} locationValue={"Delhi"} />
                  <ReviewCard
                    reviewImg={ReviewImg2}
                    locationValue={"Banglore"}
                  />
                </ReviewDiv>
              </MajorReviewContent>,
              <MajorReviewContent>
                <ReviewDiv>
                  <ReviewCard reviewImg={ReviewImg1} locationValue={"Delhi"} />
                  <ReviewCard
                    reviewImg={ReviewImg2}
                    locationValue={"Banglore"}
                  />
                </ReviewDiv>
              </MajorReviewContent>,
            ]}
          />
        </MajorReviewContainer>
        <GetInsuranceContainer>
          <GetInsuranceContent>
            <HeadingCont>
              <div className=' pb-0 flex items-end justify-between'>
                <div className='dark:text-white'>
                  <p className='text-[16px] mb-[-12px] font-bold'>Get</p>
                  <h2 className='text-[40px]  font-black'>Insurance</h2>
                </div>
                <div className='mb-4'>
                  <div className=' relative bg-white dark:bg-darkBg h-[5px] w-[55px] rounded-[10px]'>
                    <motion.div
                      initial={{ width: "0px" }}
                      animate={{
                        width: `${55 / insuranceCount}px`,
                        translateX: `${insurancePos * (55 / insuranceCount)}px`,
                      }}
                      className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
                    ></motion.div>
                  </div>
                </div>
              </div>
            </HeadingCont>

            <CarouselHor
              minHeight='270px'
              left={320}
              setPillPos={setInsurancePos}
              data={[
                <GetInsuranceCardDiv>
                  <GetInsuranceCard />
                </GetInsuranceCardDiv>,
                <GetInsuranceCardDiv>
                  <GetInsuranceCard />
                </GetInsuranceCardDiv>,
                <GetInsuranceCardDiv>
                  <GetInsuranceCard />
                </GetInsuranceCardDiv>,
                <GetInsuranceCardDiv>
                  <GetInsuranceCard />
                </GetInsuranceCardDiv>,
              ]}
            />
          </GetInsuranceContent>
        </GetInsuranceContainer>
        <DonateNgoContainer>
          <DonateNgoContent>
            <HeadingCont>
              <div className=' flex items-end justify-between'>
                <div className='dark:text-white'>
                  <p className='text-[16px] mb-[-12px] font-bold'>Donate To</p>
                  <h2 className='text-[40px]  font-black'>NGO</h2>
                </div>
                <div className='mb-4'>
                  <div className=' relative bg-white dark:bg-darkBgCon h-[5px] w-[55px] rounded-[10px]'>
                    <motion.div
                      initial={{ width: "0px" }}
                      animate={{
                        width: `${55 / ngoCount}px`,
                        translateX: `${ngoPos * (55 / ngoCount)}px`,
                      }}
                      className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
                    ></motion.div>
                  </div>
                </div>
              </div>
            </HeadingCont>
            <CarouselGeneral
              setPillPos={setNgoPos}
              minHeight='355px'
              data={[
                <DonateCardDiv>
                  <DonateNgoCard
                    volunteerImg={VolunteersHoldingBoxes}
                    foundationName={"Bharati Foundation"}
                  />
                  <DonateNgoCard
                    volunteerImg={VolunteerSmiling}
                    foundationName={"Ipas Development Foundation"}
                    style={{ width: "94px" }}
                  />
                </DonateCardDiv>,
                <DonateCardDiv>
                  <DonateNgoCard
                    volunteerImg={VolunteersHoldingBoxes}
                    foundationName={"Bharati Foundation"}
                  />
                  <DonateNgoCard
                    volunteerImg={VolunteerSmiling}
                    foundationName={"Ipas Development Foundation"}
                    style={{ width: "94px" }}
                  />
                </DonateCardDiv>,
                <DonateCardDiv>
                  <DonateNgoCard
                    volunteerImg={VolunteersHoldingBoxes}
                    foundationName={"Bharati Foundation"}
                  />
                  <DonateNgoCard
                    volunteerImg={VolunteerSmiling}
                    foundationName={"Ipas Development Foundation"}
                    style={{ width: "94px" }}
                  />
                </DonateCardDiv>,
              ]}
            />
          </DonateNgoContent>
        </DonateNgoContainer>
        <FooterNavigation darkMode={props.darkMode} />
        <BottomNav />
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
