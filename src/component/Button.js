import React from "react";
import styled from "styled-components";

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
const Btn2 = styled.button`
  box-shadow: ${(props) => !props.selected && props.theme.shadowMd};
  background: ${(props) =>
    props.selected ? props.theme.bg : props.theme.body};

  padding: 6px 25px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  transform-style: preserve-3d;
  color: ${(props) => (props.selected ? props.theme.body : props.theme.text)};
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
      props.theme.buttonTextColor === "#fff" && props.selected
        ? "block"
        : "none"};
  }
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    background: linear-gradient(122.62deg, #ad37e0 0%, #ee2b3b 100%);

    bottom: -1px;
    top: -1px;
    left: -1px;
    right: -1px;
    z-index: -0;
    filter: blur(4px);
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
const Btn3 = styled.button`
  box-shadow: ${(props) => props.theme.shadowXs};
  background: ${(props) => props.theme.body};
  padding: 6px 15px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 10px;
  transform-style: preserve-3d;

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
export const ButtonGradient = (props) => {
  return (
    <button
      className={`${props.styles} relative shadow-2xl text-white px-10  h-[60px] font-black text-[20px]  rounded-full uppercase bg-gradient-to-br from-gradientPurple via-gradientRed to-gradientRed before:w-[80%] before:h-2 before:bg-gradient-to-br before:from-gradientPurple before:via-gradientRed before:to-gradientRed before:absolute before:rounded-[100%]   before:blur-md before:bottom-[-5px] before:left-[50%] before:translate-x-[-50%]`}
    >
      {props.children}
    </button>
  );
};

export const ButtonGradientSmall = (props) => {
  return (
    <button
      {...props}
      className={`${props.styles} relative shadow-2xl text-white  font-black  rounded-[30px] uppercase bg-gradient-to-br from-gradientPurple  to-gradientRed before:w-[80%] before:h-2 before:bg-gradient-to-br before:from-gradientPurple before:via-gradientRed before:to-gradientRed before:absolute before:rounded-[100%]   before:blur-md before:bottom-[-5px] before:left-[50%] before:translate-x-[-50%]`}
    >
      {props.children}
    </button>
  );
};

export const ButtonToggle = (props) => {
  return (
    <Btn {...props} selected={props.selected} className={` ${props.styles}`}>
      {props.children}
    </Btn>
  );
};
export const PayBtn = (props) => {
  return (
    <Btn2 {...props} selected={props.selected} className={` ${props.styles}`}>
      {props.children}
    </Btn2>
  );
};
export const ButtonProceed = (props) => {
  return (
    <Btn3 {...props} selected={props.selected} className={` ${props.styles}`}>
      {props.children}
    </Btn3>
  );
};
