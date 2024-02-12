import React, { useContext } from "react";
import styled from "styled-components";
import SliderImg1 from "../../assets/sliderimg1.png";
import SliderImg2 from "../../assets/sliderimg2.png";
import { ReactComponent as HomeSmile } from "../../assets/home-smile.svg";
import { ReactComponent as Video } from "../../assets/video.svg";
import { CarouselHor } from "../../../DoctorDetails/components/Carousel";
import { globalStateContext } from "../../../../App";

const ProductCarousal = styled.div`
  position: relative;
  overflow: hidden;
  padding: 26px;
`;
const ProductContainer = styled.div`
  display: flex;
  padding: 0 10px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: 20px;
  height: 250px;
`;
const CarousalCard = styled.div`
  min-width: 238px;
  max-width: 238px;
  width: 100%;
  height: 224px;
  /* background: #ECC0D9; */
  box-shadow: ${(props) => props.theme.pinkShadow};
  border-radius: 40px;

  margin: 20px 20px;
  margin-right: 10px;

  overflow: visible;
  @media only screen and (max-width: 360px) {
    min-width: 210px;
  }
`;
const CarousalImgOne = styled.img`
  width: 100%;
  height: 183px;
  border-radius: 40px 40px 0px 0px;
`;
const CarousalContent = styled.div`
  position: relative;
`;
const CallButton = styled.button`
  width: 218px;
  height: 64px;
  position: absolute;
  left: 10px;
  top: -38px;
  border: none;
  background: ${(props) => props.theme.invoiceTotalBg};
  box-shadow: ${(props) => props.theme.otherOptionShadow};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;
  @media only screen and (max-width: 360px) {
    width: 190px;
  }
`;
const HomeSmileImg = styled.div`
  width: 30px;
  height: 30px;
`;

const CallHeading = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
  @media only screen and (max-width: 360px) {
    font-size: 21px;
  }
`;
const Slider = () => {
  const { darkMode } = useContext(globalStateContext);
  return (
    <CarouselHor
      left={270}
      minHeight='280px'
      data={[
        <CarousalCard>
          <CarousalImgOne src={SliderImg1} alt='SliderImg1' />
          <CarousalContent>
            <CallButton>
              <HomeSmileImg>
                <HomeSmile />
              </HomeSmileImg>
              <CallHeading>Call Home</CallHeading>
            </CallButton>
          </CarousalContent>
        </CarousalCard>,
        <CarousalCard>
          <CarousalImgOne src={SliderImg1} alt='SliderImg1' />
          <CarousalContent>
            <CallButton>
              <HomeSmileImg>
                <HomeSmile />
              </HomeSmileImg>
              <CallHeading>Call Home</CallHeading>
            </CallButton>
          </CarousalContent>
        </CarousalCard>,
      ]}
    />
  );
};

export default Slider;
