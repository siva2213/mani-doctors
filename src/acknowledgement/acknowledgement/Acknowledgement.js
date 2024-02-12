import React from "react";
import "./Acknowledgement.css";
import iconFirst from "../../assets/ack_Vector.png";
import iconSecond from "../../assets/ack_Vector1.png";
import iconThird from "../../assets/ack_Vector2.png";
const Acknowledgement = () => {
  return (
    <div className='ack_container'>
      <img className='ack_img1' src={iconFirst} alt='' />
      <div className='act_text'>Application Submitted Successfully</div>
      <div className='act_para'>
        We will inform you about the next information, please sit tight.
      </div>
      <div style={{ position: "relative" }}>
        <img className='ack_img2' src={iconThird} alt='' />
        <img className='ack_img3' src={iconSecond} alt='' />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button className='ack_btn1'>Ok</button>
        <button className='ack_btn2'>Go to home</button>
      </div>
    </div>
  );
};
export default Acknowledgement;
