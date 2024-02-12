import React from "react";

const GradientText = (props) => {
  return (
    <p
      className={` text-transparent bg-clip-text bg-gradient-to-r  from-gradientPurple to-gradientRed ${props.styles}`}
    >
      {props.children}
    </p>
  );
};

export default GradientText;
