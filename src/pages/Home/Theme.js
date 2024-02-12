import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  body: "#F3EDF4",
  text: "#252525",
  invoiceTotalBg: "#D73992",
  accordionOneBody: "#ECC0D9",
  AccordionLineBorderColor: "#F2CAE1",
  buttonTextColor: "#fff",
  bg: "linear-gradient(to right, #ad37e0 0%, #ee2b3b 100%)",
  appStoreBg: "#fff",
  shadowMd: "-10px -10px 15px #faf6fb, 10px 10px 20px #dfd3e1",
  shadowSm: "-5px -5px 10px #faf6fb, 5px 5px 10px #dfd3e1",
  shadowXs: "0px 4px 4px #00000025, -4px -4px 4px #ffffff5",
  ratingShadow: "-10px -10px 20px #FAF6FB,10px 10px 20px #DFD3E1",
  ratingGradient:
    "linear-gradient(90deg, #ffdcfe 0%, rgba(255, 220, 254, 0) 74.6%)",
  servicesBg: "#ECC0D9",
  servicesShadow: "-10px -10px 20px #F0C9DF  ,10px 10px 20px #CFA1BB",
  insurenceShadow: "-10px -10px 20px #F0C9DF,10px 10px 20px #CFA1BB",
  innerShadowMd: "inset -5px -5px 10px #faf6fb, inset 5px 5px 10px #e1d9e2",
  footerText: "#93607D",
  pinkShadow: "-10px -10px 20px #f0c9df, 10px 10px 20px #dcafc9",
  copyBg: "#CF9BB9",
  invoiceInBoxShadow: "-4px -4px 8px #E54EA3, 4px 4px 8px #B92E7C",
  otherOptionShadow: "-10px -10px 20px #fff,10px 10px 20px #CFA1BB",
  transShadow: " -10px -10px 20px #FFFFFF25, 10px 10px 20px #00000020",
  stackShadow:
    "-5px -5px 10px rgba(255, 255, 255, 0.15),5px 5px 10px rgba(0, 0, 0, 0.1)",
};
export const darkTheme = {
  body: "#252525",
  text: "#f1f1f1",
  bg: "#303030",
  invoiceTotalBg: "#252525",
  accordionOneBody: "#303030",
  AccordionLineBorderColor: "#252525",
  buttonTextColor: "linear-gradient(to right, #b136d6 0%, #e82c4a 99.6%)",
  appStoreBg: "#1E1E1E",
  shadowMd: "-10px -10px 15px #2b2b2b, 10px 10px 20px #1e1e1e",
  shadowSm: "-5px -5px 10px #2b2b2b, 5px 5px 10px #1e1e1e",
  shadowXs: "0px 4px 4px #00000025,-4px -4px 4px #ffffff05",
  ratingShadow: "-10px -10px 20px #2B2B2B,10px 10px 20px #1E1E1E",
  ratingGradient: "linear-gradient(90deg, #303030 0%, #30303000 74.6%)",
  servicesBg: "#303030",
  servicesShadow: "-10px -10px 20px #363636,10px 10px 20px #252525",
  insurenceShadow: "-10px -10px 20px #363636,10px 10px 20px #252525",
  innerShadowMd: "inset -5px -5px 10px #3D3D3D, inset 5px 5px 10px #1F1F1F",
  footerText: "#fff",
  pinkShadow: "-10px -10px 20px #363636, 10px 10px 20px #252525",
  copyBg: "#252525",
  invoiceInBoxShadow: "-3px -3px 6px #363636, 3px 3px 6px #161616",
  otherOptionShadow: "-10px -10px 20px #65656525,10px 10px 20px #10101081",
  transShadow: " -10px -10px 20px #FFFFFF06, 10px 10px 20px #00000024",
  stackShadow: "-5px -5px 10px #43434350,5px 5px 10px #00000020",
};
