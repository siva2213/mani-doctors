import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { globalStateContext } from "../../../../App";

const SummaryCardContainer = styled.div`
  background: ${(props) => props.theme.bg};
  box-shadow: ${(props) => props.theme.stackShadow};
  border-radius: 20px;

  height: 227px;
`;
const SummaryHeadDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px 10px 0px;
`;
const Heading = styled.h1`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 24px;
  margin: 0;
  color: #ffffff;
`;
const SliderBarDiv = styled.div``;
const SliderBar = styled.div``;
const SummaryCardContent = styled.p`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 113%;
  color: #ffffff;
  margin-bottom: 0;
  max-height: 160px;
  overflow-y: scroll;
  padding: 5px 2px;
`;
const SummaryContent = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 13px;
  padding-bottom: 13px;
`;

const SummaryCard = (props) => {
  const { darkMode } = useContext(globalStateContext);
  return (
    <div>
      <SummaryCardContainer>
        <SummaryContent>
          <SummaryHeadDiv>
            <Heading>{props.title}</Heading>
            <SliderBarDiv>
              <div>
                <div
                  className={` relative  dark:bg-darkBg h-[5px] w-[55px] rounded-[10px] ${
                    !darkMode && "stack-indicator"
                  }`}
                >
                  <motion.div
                    animate={{
                      width: `${props.indicatorWidth}px`,
                      translateX: `${props.x}px`,
                    }}
                    className=' absolute h-[5px]  rounded-[10px] bg-[#fff] '
                  ></motion.div>
                </div>
              </div>
            </SliderBarDiv>
          </SummaryHeadDiv>
          <SummaryCardContent>{props.content}</SummaryCardContent>
        </SummaryContent>
      </SummaryCardContainer>
    </div>
  );
};

export default SummaryCard;
