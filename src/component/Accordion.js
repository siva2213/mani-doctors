import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import { DentalCrown, NotAvailable, Tooth, Whatsapp } from "./Svgs";
import Block from "../pages/Home/assets/NaN.svg";
import BlockDark from "../pages/Home/assets/NaNdark.svg";
import Tooth from "../pages/Home/assets/tooth.svg";
import DentalCrown from "../pages/Home/assets/dentalCrown.svg";
import Extraction from "../pages/Home/assets/Extraction.svg";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 2,
    header: "Where does it come from?",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header: "Why do we use it?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    header: "Where can I get some?",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
];
const Container = styled.div`
  overflow: visible;
  border-bottom: 1px solid ${(props) => props.theme.AccordionLineBorderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  padding-top: ${(props) => (props.default ? "0px" : "15px")};
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  height: 35px;
  min-width: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;
const Text = styled.p`
  font-size: 14px;
  margin-left: 10px;
  line-height: 1;
  font-weight: 600;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.button`
  background-color: ${(props) => props.theme.body};
  padding: 5px 10px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    background: linear-gradient(to right, #b136d6 0%, #e82c4a 99.6%);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 10px;
    font-weight: 900;
  }
`;
const Btn = styled.button`
  box-shadow: ${(props) => props.theme.shadowXs};
  background: ${(props) => props.theme.bg};
  padding: 6px 15px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 10px;
  transform-style: preserve-3d;
  &::before {
    content: "";
    width: 80%;
    position: absolute;
    background: linear-gradient(122.62deg, #ad37e0 0%, #ee2b3b 100%);
    left: 50%;
    transform: translateX(-50%);
    bottom: -10%;
    height: 25%;
    filter: blur(10px);
    display: ${(props) =>
      props.theme.buttonTextColor === "#fff" ? "block" : "none"};
  }
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    background: linear-gradient(122.62deg, #ad37e0 0%, #ee2b3b 100%);

    bottom: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: -0;
    filter: blur(5px);
    border-radius: 30px;
    transform: translateZ(-1px);
    display: ${(props) =>
      props.theme.buttonTextColor !== "#fff" && props.selected
        ? "block"
        : "none"};
  }

  span {
    font-size: 10px;

    font-weight: 900;
    text-transform: uppercase;
    background: ${(props) =>
      props.theme.buttonTextColor === "#fff"
        ? "none"
        : props.theme.buttonTextColor};
    -webkit-background-clip: text;
    background-clip: text;
    color: ${(props) =>
      props.theme.buttonTextColor !== "#fff"
        ? "transparent"
        : props.theme.buttonTextColor};
  }
`;
const AccordionBodyOptions = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <Container default={!!props.default}>
      <LeftContainer>
        <Icon>
          <img src={props.icon} alt='' />
        </Icon>
        <Text default={props.default}>{props.text}</Text>
      </LeftContainer>
      <RightContainer>
        {props.price && (
          <Price>
            <p>Rs. {props.price}</p>
          </Price>
        )}
        <Btn onClick={() => setSelected(!selected)} selected={selected}>
          <span
            style={{
              fontSize: `${selected ? "8px" : "10px"}`,
            }}
          >
            {selected ? "Selected" : "Select"}
          </span>
        </Btn>
      </RightContainer>
    </Container>
  );
};

const AccordionCard = styled.div`
  border-radius: 5px;
`;
const AccordionHeader = styled.div`
  box-shadow: ${(props) => props.theme.body};
  box-shadow: ${(props) => props.theme.shadowMd};
  border-radius: 30px;
  border: none;
  outline: none;
  padding-left: 25px;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-right: 25px;
`;
const AccordionToggle = styled.div`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  justify-content: space-between;
  transition: 0.3s;
`;
const AccordionTittle = styled.h5`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #636363;
`;

const AccordionIcon = styled(motion.i)`
  position: relative;
  top: 2px;
  color: #475f7b;
  transition: 0.35s;
  font-size: 12px;
  color: black;
`;
const AccordionBody = styled.div`
  height: 352px;
  width: 100%;
  margin-top: 5px;
  background-color: ${(props) => props.theme.accordionOneBody};
  border-radius: 30px;
  padding: 20px 10px;
  overflow: hidden;
  font-weight: 600;
  margin-bottom: 10px;

  .scroll-test {
    height: 100%;
    overflow-y: scroll;
    padding: 0px 10px;
    padding-right: 10px;
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.body};
    }
  }
`;
const Accordion = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  const variants = {
    open: {
      height: 0,
    },
    close: {
      height: "362px",
    },
  };
  return (
    <AccordionCard className='rc-accordion-card'>
      <AccordionHeader className='rc-accordion-header'>
        <AccordionToggle
          className={`rc-accordion-toggle ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <AccordionTittle className='rc-accordion-title'>
            {header}
          </AccordionTittle>
          <AccordionIcon
            initial={{
              rotate: "0deg",
            }}
            animate={active === id ? { rotate: "180deg" } : { rotate: "0deg" }}
            className='fa fa-chevron-down dark:text-white '
          ></AccordionIcon>
        </AccordionToggle>
      </AccordionHeader>
      <motion.div
        ref={contentEl}
        style={{
          overflow: "hidden",
        }}
        variants={variants}
        animate={active === id ? "close" : "open"}
      >
        <AccordionBody>
          <div className='scroll-test'>
            <AccordionBodyOptions
              text={
                <span style={{ fontSize: "10px", lineHeight: "0.1" }}>
                  No service, Don't know the problem name, Tell at clinic
                </span>
              }
              default={true}
              icon={props.darkMode ? BlockDark : Block}
            />
            <AccordionBodyOptions
              text={"Dental Braces"}
              price={"2000"}
              icon={Tooth}
            />
            <AccordionBodyOptions
              text={"Dental Braces"}
              price={"2000"}
              icon={Extraction}
            />
            <AccordionBodyOptions
              text={"Dental Braces"}
              price={"2000"}
              icon={Extraction}
            />
            <AccordionBodyOptions
              text={"Dental Braces"}
              price={"2000"}
              icon={DentalCrown}
            />
            <AccordionBodyOptions
              text={"Dental Braces"}
              price={"2000"}
              icon={DentalCrown}
            />
          </div>
        </AccordionBody>
      </motion.div>
    </AccordionCard>
  );
};
export default Accordion;
