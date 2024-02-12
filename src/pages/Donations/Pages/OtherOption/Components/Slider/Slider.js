import React from 'react';
import "./Slider.css";
import SliderImg1 from "./assets/sliderimg1.png";
import SliderImg2 from "./assets/sliderimg2.png";
import { ReactComponent as HomeSmileIcon } from "./assets/bx_home-smile.svg";
import { ReactComponent as TablerVideoIcon } from "./assets/tabler_video.svg";


const Slider = () => {
  const btnClickprev = (e) => {
    e.preventDefault();
    let width = document.querySelector(".product-container").clientWidth;
    document.querySelector(".product-container").scrollLeft -= width; 
    console.log(width)
  }
  const btnClicknext = (e) => {
    e.preventDefault();
    let width = document.querySelector(".product-container").clientWidth;
    document.querySelector(".product-container").scrollLeft += width; 
    console.log(width)
  }
  return (
    <div className='product-carousal'>
      <button className='pre-btn' onClick={btnClickprev}><span>&lt;</span></button>
      <button className='next-btn' onClick={btnClicknext}><span>&gt;</span></button>
      <div className='product-container'>
        <div className='carousal-card'>
          
          <img src={SliderImg1}/>
          <div style={{position: "relative"}}>
          <button className='call-button'>
            <HomeSmileIcon />
            <h1>Call Home</h1>
          </button>
          </div>
        </div>
        <div className='carousal-card'>
        <img src={SliderImg2}/>
        <div style={{position: "relative"}}>
          <button className='call-button'>
              <TablerVideoIcon />
              <h1>Video Call</h1>
            </button>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Slider;