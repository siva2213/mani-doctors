import React from "react";
import styled from "styled-components";
import RatingDottedBg from "../../assets/ratingDottedbg.png";

const RatingContainer = styled.div`
  background: ${(props) => props.theme.ratingGradient};
  box-shadow: ${(props) => props.theme.ratingShadow};
  border-radius: 30px;
  padding-top: 20px;
  padding-bottom: 25px;
  position: relative;
`;
const RatingContent = styled.div`
  display: flex;
  gap: 23px;
`;
const LeftRatingDiv = styled.div`
  margin-left: 20px;
  width: 60%;
`;
const RightRatingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  width: 40%;
`;
const LeftHead = styled.img`
  margin-bottom: 10px;
`;
const LeftPara = styled.p`
  margin: 0;
  font-family: "Metropolis";
  font-size: 13px;
  font-weight: 700;
  line-height: 126%;
  color: #636363;
`;
const RatingValue = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 64px;
  background: linear-gradient(122.62deg, #ad37e0 0%, #ee2b3b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin: 0;
`;
const RatingOutOf = styled.div`
  font-weight: 800;
  font-size: 15px;
  font-family: "Metropolis";
`;
const OutOfValue = styled.span``;
const ProgressBarDiv = styled.div`
  margin: 0 37px;
  height: 19px;
  background: #ffffff;
  border-radius: 20px;
  margin-top: 26px;
`;
const ProgressBar = styled.div`
  background: linear-gradient(90deg, #ad37e0 0%, #ee2b3b 101.91%);
  border-radius: 20px;
  width: 88%;
  height: 100%;
`;
const DottedBG = styled.img`
  max-width: 169px;
  width: 100%;
  position: absolute;
  right: 75px;
  top: 0;
`;

const Rating = (props) => {
  return (
    <div>
      <RatingContainer>
        <RatingContent>
          <DottedBG src={RatingDottedBg} alt='dottedBg' />
          <LeftRatingDiv>
            <LeftHead src={props.ratingLogo} />
            <LeftPara>Ratings On RealSelf By Our 5768 Patients.</LeftPara>
          </LeftRatingDiv>
          <RightRatingDiv>
            <RatingValue>{props.rating}</RatingValue>
            <RatingOutOf>
              of <OutOfValue>{props.ratingOutOf}</OutOfValue>
            </RatingOutOf>
          </RightRatingDiv>
        </RatingContent>
        <ProgressBarDiv>
          <ProgressBar></ProgressBar>
        </ProgressBarDiv>
      </RatingContainer>
    </div>
  );
};

export default Rating;
