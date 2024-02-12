import React from "react";
import styled from "styled-components";
import BgCircle from "../../assets/insuranceBgCircle.png";
import FamilySitting from "../../assets/happy-family-sitting.png";
import { ReactComponent as HdfcLifeLogo } from "../../assets/HDFC_Life.svg";

const CardMainContainer = styled.div`
  background: ${(props) => props.theme.servicesBg};
  box-shadow: ${(props) => props.theme.insurenceShadow};
  border-radius: 40px;
  position: relative;
  padding-top: 25px;
  max-width: 18rem;
  width: 100%;
  height: 12.4rem;
  overflow: hidden;
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
  margin: 0px 24px 7px 15px;
`;

const BGCircle = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;
const ContentDiv = styled.div`
  display: flex;
`;
const FamilyImg = styled.img`
  width: 73%;
`;

const HdfcLogo = styled.div`
  margin-top: 10px;
`;

const GetInsurance = () => {
  return (
    <div>
      <CardMainContainer>
        <BGCircle src={BgCircle} alt='bgCircle' />
        <Heading>HDFC Life Insurance Company Ltd.</Heading>
        <ContentDiv>
          <FamilyImg src={FamilySitting} alt='family-stting' />
          <HdfcLogo>
            <HdfcLifeLogo />
          </HdfcLogo>
        </ContentDiv>
      </CardMainContainer>
    </div>
  );
};

export default GetInsurance;
