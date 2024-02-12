import React from "react";
import styled from "styled-components";
import BgCircleNormal from "../../assets/serviceCircle.png";
import BgCircleBig from "../../assets/servicesCircleBig.png";
import BgCircleSmall from "../../assets/servicesCircleSmall.png";
import ring from "../../assets/Ellipses1.svg";
import ring2 from "../../assets/Ellipses2.svg";
import ring3 from "../../assets/Ellipses3.svg";
import ring4 from "../../assets/Ellipses4.svg";

const MainContainer = styled.div`
  background: ${(props) => props.theme.servicesBg};
  box-shadow: ${(props) => props.theme.servicesShadow};
  border-radius: 40px;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 25px;
  height: ${(props) => (props.containerheight ? 243 : 201)}px;
  margin-top: ${(props) => (props.topMargin ? -43 : 0)}px;
  @media only screen and (max-width: 360px) {
    margin-top: 0;
  }
`;
const Heading = styled.h1`
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
  margin: 0;
  margin-left: 15px;
`;
const ImageDiv = styled.div`
  // display: flex;
  // justify-content: end;
  position: absolute;
  bottom: -11px;
  right: 0;
  max-width: ${(props) => (props.containerheight ? 140 : 108)}px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;
const ServicesCard = (props) => {
  return (
    <div>
      <MainContainer containerheight={props.heightt} topMargin={props.marginn}>
        {props.item == 1 && (
          <img src={ring} alt='' className=' absolute top-0' />
        )}
        {props.item == 2 && (
          <img src={ring} alt='' className=' absolute bottom-5' />
        )}
        {props.item == 2 && (
          <img src={ring2} alt='' className=' absolute top-0 right-0' />
        )}
        {props.item == 3 && (
          <img src={ring3} alt='' className=' absolute bottom-0' />
        )}
        {props.item == 4 && (
          <img src={ring4} alt='' className=' absolute bottom-2' />
        )}

        {/*<BgCircle src={} alt="bgCircle"/>*/}
        <Heading>{props.Serviceheading}</Heading>
        <ImageDiv containerheight={props.heightt}>
          <Image src={props.cardImg} />
        </ImageDiv>
      </MainContainer>
    </div>
  );
};

export default ServicesCard;
