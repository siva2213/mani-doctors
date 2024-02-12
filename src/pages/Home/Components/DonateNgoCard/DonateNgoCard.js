import React from "react";
import styled from "styled-components";
import DonateNgoBg from "../../assets/donateNgodottedBG.png";

const CardMainContainer = styled.div`
  background: ${(props) => props.theme.ratingGradient};
  box-shadow: ${(props) => props.theme.ratingShadow};
  border-radius: 30px;
  display: flex;
  gap: 1.2rem;
  overflow: hidden;
  height: 130px;
  padding: 10px 10px;
`;
const HeadingDiv = styled.div`
  margin-top: 4px;
  margin-left: 20px;
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
  @media only screen and (max-width: 360px) {
    font-size: 20px;
  }
`;
const PhotosDiv = styled.div`
  position: relative;
  margin-right: 1.4rem;
  max-width: 152px;
  width: 100%;
`;
const DottedbgDiv = styled.div`
  max-width: 130px;
  width: 100%;
`;

const DottedBg = styled.img`
  max-width: 130px;
  width: 100%;
`;
const PhotoDiv = styled.div`
  position: absolute;
  bottom: -17px;
  @media only screen and (max-width: 375px) {
    bottom: 0;
  }
`;
const Photo = styled.img`
  width: 100%;
`;

const DonateNgoCard = (props) => {
  return (
    <div>
      <CardMainContainer>
        <HeadingDiv>
          <Heading>{props.foundationName}</Heading>
        </HeadingDiv>
        <PhotosDiv>
          <DottedBg src={DonateNgoBg} alt='dottedbg' />
          <PhotoDiv>
            <Photo src={props.volunteerImg} alt='' />
          </PhotoDiv>
        </PhotosDiv>
      </CardMainContainer>
    </div>
  );
};

export default DonateNgoCard;
