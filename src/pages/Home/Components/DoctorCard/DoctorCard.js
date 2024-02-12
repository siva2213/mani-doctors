import React from "react";
import styled from "styled-components";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Star } from "../../assets/Star.svg";

import { ReactComponent as StarDark } from "../../assets/StarWhite.svg";
import { ReactComponent as BillIcon } from "../../assets/bill-line.svg";

const CardContainer = styled.div`
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.shadowMd};
  border-radius: 30px;
  padding: 20px;
  color: ${(props) => props.theme.text};
`;
const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  // gap: 1.2rem;
  height: 100%;
`;
const LeftDiv = styled.div`
  width: 34%;
`;
const RightDiv = styled.div`
  width: 59%;
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const DoctorsImg = styled.img`
  max-width: 113px;
  width: 100%;
`;
const MeetTimeDiv = styled.span`
  display: flex;
  align-items: center;
  width: calc(100% + 30px);
`;
const ClockIcon = styled.div``;
const Time = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 12px;
  @media only screen and (max-width: 360px) {
    font-size: 10px;
  }
`;
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const DoctorName = styled.div`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  background: linear-gradient(90deg, #ad37e0 0%, #ee2b3b 101.91%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
const SpecialityDiv = styled.div``;
const Qualification = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 11px;
  margin: 0;
  margin-top: 6px;
`;
const SpecialityRating = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Speciality = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 11px;
  margin: 0;
  margin-top: 6px;
`;
const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const RatingDiv = styled.span`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.servicesBg};
  border-radius: 20px;
`;
const RatingIcon = styled.div`
  padding-left: 3px;
  width: 16px;
  margin-right: 5px;
  height: 16px;
`;
const Rating = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
`;
const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.innerShadowMd};
  border-radius: 30px;
  padding: 17px 16px 12px 16px;
  @media only screen and (max-width: 360px) {
    padding: 13px 10px 10px 10px;
  }
`;
const BillIconDiv = styled.div`
  width: 24px;
  height: 24px;
  @media only screen and (max-width: 360px) {
    width: 22px;
    height: 22px;
  }
`;
const Price = styled.h1`
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
  @media only screen and (max-width: 360px) {
    font-size: 20px;
  }
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-left: 20px;
`;

const FirstBlock = styled.div``;
const DoctorCard = (props) => {
  return (
    <div>
      <CardContainer>
        <CardContent>
          <LeftDiv>
            <LeftContent>
              <DoctorsImg src={props.doctorImage} alt='doctorImage' />
              <MeetTimeDiv>
                <ClockIcon>
                  <Clock />
                </ClockIcon>
                &nbsp;
                <Time>10:00am-4:00pm</Time>
              </MeetTimeDiv>
            </LeftContent>
          </LeftDiv>
          <RightDiv>
            <RightContent>
              <FirstBlock>
                <DoctorName>{props.doctorName}</DoctorName>
                <SpecialityDiv>
                  <Qualification>BDS, MDS</Qualification>
                  <SpecialityRating>
                    <Speciality>Dental Specialist</Speciality>
                    <RatingContainer>
                      <RatingDiv>
                        <RatingIcon>
                          {props.darkMode ? <StarDark /> : <Star />}
                        </RatingIcon>
                        &nbsp;
                        <Rating>4.5</Rating>&nbsp;&nbsp;&nbsp;
                      </RatingDiv>
                    </RatingContainer>
                  </SpecialityRating>
                </SpecialityDiv>
              </FirstBlock>
              <PriceContainer>
                <PriceDiv>
                  <BillIconDiv>
                    <BillIcon style={{ width: "100%" }} />
                  </BillIconDiv>
                  <Price>₹ 1000</Price>
                </PriceDiv>
              </PriceContainer>
            </RightContent>
          </RightDiv>
        </CardContent>
      </CardContainer>
    </div>
  );
};

export default DoctorCard;
