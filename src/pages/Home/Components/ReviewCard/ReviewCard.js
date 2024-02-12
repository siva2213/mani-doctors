import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.shadowMd};
  border-radius: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${(props) => props.theme.text};
`;
const ReviewImage = styled.img`
  width: 100%;
  margin-bottom: 15px;
  background: ${(props) => props.theme.body};
  border-radius: 30px;
`;
const ContentDiv = styled.div`
  margin: 0 20px;
  position: relative;
`;
const ReviewPara = styled.p`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 113%;
  margin: 0 10px;
  text-align: start;
`;
const Location = styled.span`
  background: #f3edf4;
  box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.2),
    10px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  padding: 7px 33px;
  position: absolute;
  left: 15px;
  bottom: 108px;
  @media only screen and (max-width: 360px) {
    bottom: 124px;
  }
`;
const LocName = styled.h1`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  background: linear-gradient(91.15deg, #b136d6 0%, #e82c4a 99.6%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const ReviewCard = (props) => {
  return (
    <div>
      <MainContainer>
        <ContentDiv>
          <ReviewImage src={props.reviewImg} alt='reviewImg' />
          <Location>
            <LocName>{props.locationValue}</LocName>
          </Location>
          <ReviewPara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit.
          </ReviewPara>
        </ContentDiv>
      </MainContainer>
    </div>
  );
};

export default ReviewCard;
