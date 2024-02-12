import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as CopyrightIcon } from "../../assets/Copyright.svg";
import { ReactComponent as CopyrightIconWhite } from "../../assets/CopyrightWhite.svg";
import { darkTheme, lightTheme, GlobalStyles } from "../../Theme";

const MainContainer = styled.div``;
const NavigationOneDiv = styled.div`
  background: ${(props) => props.theme.servicesBg};
  color: ${(props) => props.theme.footerText};
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding-top: 1.9rem;
  padding-bottom: 2.5rem;
`;
const HeadingsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;
const NavOneHeading = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  margin: 0;
`;
const NavigationIconsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;
const IconDiv = styled.div`
  background: ${(props) => props.theme.servicesBg};
  box-shadow: ${(props) => props.theme.pinkShadow};
  border-radius: 40px;
  padding: 1rem;
`;
const NavigationTwoDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.copyBg};
  color: ${(props) => props.theme.footerText};
  gap: 2.5rem;
  padding-top: 1.2rem;
`;
const CopyrightDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const CopyrightHead = styled.h1`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
`;
const NavigationTwwHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  padding-bottom: 1.8rem;
`;
const NavTwoHead = styled.h1`
  margin: 0;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
`;

const BottomNav = (props) => {
  return (
    <MainContainer>
      <NavigationOneDiv>
        <HeadingsDiv>
          <NavOneHeading>HOME</NavOneHeading>
          <NavOneHeading>BOOKING</NavOneHeading>
          <NavOneHeading>TOP DOCTORS</NavOneHeading>
          <NavOneHeading>OUR SERVICES</NavOneHeading>
          <NavOneHeading>REVIEWS</NavOneHeading>
          <NavOneHeading>INSURANCE</NavOneHeading>
        </HeadingsDiv>
        <NavigationIconsDiv>
          <IconDiv>
            <Instagram />
          </IconDiv>
          <IconDiv>
            <Twitter />
          </IconDiv>
          <IconDiv>
            <Facebook />
          </IconDiv>
        </NavigationIconsDiv>
      </NavigationOneDiv>
      <NavigationTwoDiv>
        <CopyrightDiv>
          {props.darkMode ? <CopyrightIconWhite /> : <CopyrightIcon />}
          &nbsp;&nbsp;
          <CopyrightHead>2022. All rights reserved.</CopyrightHead>
        </CopyrightDiv>
        <NavigationTwwHead>
          <NavTwoHead>About</NavTwoHead>
          <NavTwoHead>Privacy Policy</NavTwoHead>
          <NavTwoHead>Terms & Condition</NavTwoHead>
        </NavigationTwwHead>
      </NavigationTwoDiv>
    </MainContainer>
  );
};

export default BottomNav;
